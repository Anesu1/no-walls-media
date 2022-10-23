import React from "react";
import styled from "styled-components";
import Paragraph from "../styled/Paragraph";

const Wrapper = styled.section`
    padding:10% 5%;
    @media(min-width:992px){
        display:flex;
        justify-content:space-between;
    }
    .inner{
        @media(min-width:992px){
            width:45%;
            max-width:500px;
        }
        h2{
        font-family:${props => props.theme.fam.bold};
        font-size:30px;
        line-height:1.3;
        margin-bottom:30px;
        color:${props => props.theme.color.orange};

        br{
            display:none;
            @media(min-width:992px){
                display:block;
            }
        }
        @media(min-width:992px){
            font-size:38px;
           
        }
        @media(min-width:1200px){
            font-size:45px;
           
        }
}
p{
    margin-bottom:20px;
    span{
        font-family:${props => props.theme.fam.bold};
    }
}
    }
    img{
        width:100%;
    }
    .right{
        background:url("./images/logoabout.png");
        background-size:contain;
        background-repeat:no-repeat;
        background-position:center center;
        background-size:70%;
        @media(min-width:768px){
            max-width:500px;
            margin:0 auto;
        }
        @media(min-width:992px){
            width:45%;
            margin-right:0;
        }
    }
`;

function About() {
  return (
    <Wrapper>
      <div className="inner">
        <h2>Think outside the box? <br /> We reject the whole <br /> notion of boxes!</h2>
        <Paragraph>
          We’re working on being the best ad agency in the entire universe…
        </Paragraph>
        <Paragraph>
          For now, we’ll have to settle for being the best on earth!
        </Paragraph>
        <Paragraph>
          {" "}
          <span>It’s cliche time:</span> <br />
          Teamwork, makes the dream work! <br />
          (Because it does. Seriously)
        </Paragraph>
      </div>
      <div className="right">
        <img src="./images/dinaso.png" alt="about no walls" />
      </div>
    </Wrapper>
  );
}

export default About;
