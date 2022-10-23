import React from 'react';
import styled from 'styled-components';
import ClientDiv from '../styled/ClientDiv';

const Wrapper = styled.section`
    padding:10% 5%;
    text-align:center;
    h2{
        font-family:${props => props.theme.fam.bold};
        color:${props => props.theme.color.orange};
        font-size:35px;
        margin-bottom:10px;
        @media(min-width:992px){
            font-size:40px;
        }
        @media(min-width:1200px){
            font-size:45px;
        }
    }
    p{
        font-size:18px;
        font-family:${props => props.theme.fam.medium};
        line-height:1.3;
        color:${props => props.theme.color.blue};
    }
    .inner{
        margin-top:30px;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        .client-div{
            &:nth-child(5){
                img{
                    width:unset;
                    height:100%;
                }
            }
            @media(min-width:1200px){
                &:nth-child(7),
                &:nth-child(8),
                &:nth-child(9),
                &:nth-child(10),
                &:nth-child(11){
                    display:none;
                }
            }
        }
    }
    .inner-logos{
        display:none;
        @media(min-width:1200px){
            width:100%;
            display:flex;
            margin:0 auto;
            margin-top:20px;
            justify-content:center;
        }
        .client-div{
            margin:0 10px;
             &:nth-child(5){
                img{
                    width:75%;
                    height:unset%;
                }
            }
        }
       
    }
`

function Clients() {
  return (
    <Wrapper>
        <h2>Our Clients</h2>
        <p>Brands we’ve worked with</p>
        <div className="inner">
            <ClientDiv image="1.png" alt="Empower Bank" />
            <ClientDiv image="2.png" alt="Hino" />
            <ClientDiv image="3.png" alt="ICZ" />
            <ClientDiv image="4.png" alt="OLD MUTUAL" />
            <ClientDiv image="5.png" alt="UNDP" />
            <ClientDiv image="6.png" alt="VARICHEM" />
            <ClientDiv image="8.png" alt="AFRICANDA" />
            <ClientDiv image="9.png" alt="Eight 2 Five" />
            <ClientDiv image="11.png" alt="impala car rental" />
            <ClientDiv image="12.png" alt="potraz" />
            <ClientDiv image="13.png" alt="british council" />
            <div className="inner-logos">
            <ClientDiv image="8.png" alt="AFRICANDA" />
            <ClientDiv image="9.png" alt="Eight 2 Five" />
            <ClientDiv image="11.png" alt="impala car rental" />
            <ClientDiv image="12.png" alt="potraz" />
            <ClientDiv image="13.png" alt="british council" />
            </div>
        </div>
    </Wrapper>
  )
}

export default Clients