import React from "react";
import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";
import { FaEnvelopeOpenText } from "react-icons/fa";

const Wrapper = styled.section`
  margin: 5% 0;
  @media(min-width:768px){
      margin:5% 2%;

  }
  .intouch {
    background: #000000;
    color: #ffffff;
    overflow:hidden;
    @media(min-width:768px){
        border-radius:10px;
        max-width:560px;
        margin:0 auto;
    }
    @media(min-width:992px){
        display:flex;
        max-width:1500px;
        justify-content:space-between;
    }
    .inner {
      padding: 5%;
      @media(min-width:992px){
          width:50%;
      }
      h2 {
        font-family: ${(props) => props.theme.fam.bold};
        font-size: 30px;
        line-height: 1.3;
        color: #ffffff;
        margin-bottom:30px;
        @media(min-width:992px){
            font-size:40px;
        }
        @media(min-width:1200px){
            font-size:45px;
        }
      }
      p{
          display:flex;
          align-items:center;
          margin-bottom:20px;

          svg{
              color:${props => props.theme.color.orange};
              height:30px;
              width:30px;
              margin-right:20px;
          }
          .span{
              
        line-height:1.3;
        font-family:${props => props.theme.fam.semibold};
        @media(min-width:768px){
            display:flex;
            justify-content:space-between;
        }
        .in{
            display:none;
            @media(min-width:768px){
                display:block;
                margin:0 5px;
            }
        }
        br{
            @media(min-width:768px){
                display:none;
            }
        }
          }
        
    }
    }
    img {
      width: 100%;
      @media(min-width:992px){
          
          width: 40%;
    object-fit: contain;
    margin-top: auto;
      }
    }
  }
`;

function GetInTouch() {
  return (
    <Wrapper>
      <div className="intouch">
        <div className="inner">
          <h2>Get In Touch With Us</h2>
          <p>
            <BsFillTelephoneFill />{" "}
            <span className="span">
              {" "}
              +263 8644 284 606 <br /><span className="in">|</span> +263 8644 297 792 <br /> <span className="in">|</span> +263 778 793 029
            </span>
          </p>
          <p>
            <BiBuildings />
            <span className="span">67 Samora Machel Ave, Harare</span>{" "}
          </p>
          <p>
            <FaEnvelopeOpenText />
            <span className="span">info@nowalls.co.zw</span>{" "}
          </p>
        </div>
        <img src="./images/getintouch.png" alt="Bike No Walls" />
      </div>
    </Wrapper>
  );
}

export default GetInTouch;
