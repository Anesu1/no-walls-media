import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Team from './pages/Team';
import ScrollToTop from './ScrollToTop';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost/arete/graphql/',
  cache: new InMemoryCache(),
});

// const client = ...

const MY_QUERY = gql`
  query MyQuery {
  pages {
    edges {
      node {
        blocks {
          ... on CoreParagraphBlock {
            attributes {
              ... on CoreParagraphBlockAttributes {
                content
              }
            }
          }
          ... on CoreImageBlock {
            attributes {
              ... on CoreImageBlockAttributes {
                url
              }
            }
          }
          ... on CoreHeadingBlock {
            attributes {
              ... on CoreHeadingBlockAttributes {
                content
              }
            }
          }
        }
        
      }
    }
  }
}


`

client
  .query({
    query: gql`
      ${MY_QUERY}
    `,
  })
  .then((result) => console.log(result));

function App() {

  const { loading, error, data } = useQuery(MY_QUERY);

  if (loading) return <p>Hey I am Trying to load</p>;
  if (error) return <p>Error :(</p>;



  const body = document.body;
  let lastScroll = 0;
  
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove("scroll-up");
      return;
    }
  
    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains("scroll-down")
    ) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  });
  return (
    
    <Router>
       <ScrollToTop>
       <Header />
       <p>{data.pages.edges[4].node.blocks[0].attributes.content}</p>
       <h1>{data.pages.edges[4].node.blocks[1].attributes.content}</h1>
       <img src={data.pages.edges[4].node.blocks[3].attributes.url} alt="" />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/team" component={Team}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
      <Footer />
      </ScrollToTop>
    </Router>
    
  );
}

export default App;
