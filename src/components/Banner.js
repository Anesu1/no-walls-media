import React, { useState } from "react";
import styled from "styled-components";
import Paragraph from "../styled/Paragraph";

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.color.blue};
  height: 100vh;
  width: 100%;
  background-image: url("./images/bg.png");
  background-size: contain;
  position:relative;
  overflow:hidden;
  background-repeat: no-repeat;
  background-position: center center;
  @media(min-width:768px){
      height:720px;
  }
  @media(min-width:1200px){
      height:100vh;
  }
  img {
    width: 100%;
    transition:all 300ms ease;
  }
  
  .inner{
      
      .hover{
          .slide-inner{
              opacity:0;

          }
          .slide-inner {
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    width:80%;
    img{
        width:100%;
        display:block;
    }
  }
          
          
          .slide6
          
          {
              opacity:1;
              width:100%;
              @media(min-width:992px){
                  width:60%;
              }
          }
          
          .slide1{
              opacity:1;
              img{
                  width:100%;
                  max-width:350px;
                  margin:0 auto;
                  @media(min-width:768px){
                    max-width:450px;
                  }
              }
          }
          .slide2{
              opacity:1;
              bottom:unset;
              top:50%;
              transform:translate(-50%, -50%);
              img{
                  margin:0 auto;
                  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140%;
                  @media(min-width:568px){
                      width:50%;

                  }
              }
          }
          .slide3{
              opacity:1;
              img{
                  position:absolute;
                  bottom:0;
                  width:80%;
                  left:50%;
                  transform:translateX(-50%);
                  z-index:2;
                  max-width:250px;
                  @media(min-width:768px){
                      width:50%;
                  }
                  @media(min-width:992px){
                      width:40%;
                      max-width:400px;
                  }
                  &:nth-child(3){
                      z-index:1;
                      left:72%;
                  }
                  &:nth-child(1){
                      z-index:1;
                      left:20%;
                      @media(min-width:992px){
                      left:30%;
                  }
                  }
              }
          }
          .slide4{
              opacity:1;
              width:100%;
              bottom:unset;
              top:0;
              img{
                position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-57%, 34%);
    width: 150%;
    
              }
              @media(min-width:992px){
                  transform:translate(-50%,-20%);
                  img{
                    position:unset;
                    transform:translate(0, 0);
                    width:100%;
                  }
              }
          }
          .slide5{
            opacity:1;
            img{
                  position:absolute;
                  bottom:0;
                  width:100%;
                  left:50%;
                  transform:translate(-50%, -50%);
                  z-index:2;
                  max-width:350px;
                  @media(min-width:768px){
                      width:80%;
                      max-width:450px;
                  }
                  @media(min-width:992px){
                    transform:translate(-50%,0);
                      max-width:650px;
                  }
                   &:nth-child(2){
                      z-index:2;
                      left:72%;
                      transform:translate(-50%, -20%);
                      @media(min-width:992px){
                        transform:translate(-50%, 20%);
                      }
                  }/*
                  &:nth-child(1){
                      z-index:1;
                      left:20%;
                      @media(min-width:992px){
                      left:30%;
                  }
                  } */
              }
          }
          
      }
  }
 
  .text{
      
      position:absolute;
      z-index:5;
      right:0;
      text-align:right;
      top:50%;
      transform:translateY(-50%);
      @media(min-width:992px){
        transform:translateY(-40%);
      }
      h3{
        margin:20px;
        color:#ffffff;
        transition:all 300ms ease;
        font-family:${props => props.theme.fam.semibold};
        opacity:0.5;
        @media(min-width:992px){
            margin:12px 20px;
            font-size:25px;
            display:flex;
            align-items:flex-start;
        }
        span{
            color:${props => props.theme.color.orange};
            font-size:15px;
            /* transform:translateY(-40px); */
        }
        
        &:hover{
            opacity:1;
        }
      }
      .opac{
          opacity:1;
      }
  }
  p{
      font-size:20px;
      color:#ffffff;
      font-family:${props => props.theme.fam.medium};
      position:absolute;
      bottom:0;
      left:0;
      padding:10px;
      z-index:20;
      @media(min-width:992px){
          font-size:25px;
          padding:4%;;
      }
  }
`;

function Banner() {
  const [text, setText] = useState(true);
  const [text1, setText1] = useState(false);
  const [text2, setText2] = useState(false);
  const [text3, setText3] = useState(false);
  const [text4, setText4] = useState(false);
  const [text5, setText5] = useState(false);

  const [activeImage, setActiveImage] = useState("banner1.png");
  return (
    <Wrapper>
      <Paragraph>
        Hi there, we are NO WALLS <br /> We’re like every other ad agency,<br /> except for
        the:
      </Paragraph>

      <div className="inner">
        <div className="hover">
          <div className={text ? "slide-inner slide1" : "slide-inner"}>
            <img src="./images/banner1.png" alt="" />
          </div>
          <div className={text1 ? "slide-inner slide2" : "slide-inner"}>
            <img src="./images/banner2.png" alt="" />
          </div>
          <div className={text2 ? "slide-inner slide3" : "slide-inner"}>
            <img src="./images/banner3a.png" alt="" />
            <img src="./images/banner3b.png" alt="" />
            <img src="./images/banner3c.png" alt="" />
          </div>
          <div className={text3 ? "slide-inner slide4" : "slide-inner"}>
            <img src="./images/banner4.png" alt="" />
          </div>
          <div className={text4 ? "slide-inner slide5" : "slide-inner"}>
            <img src="./images/banner5.png" alt="" />
            <img src="./images/banner5a.png" alt="" />
          </div>
          <div className={text5 ? "slide-inner slide6" : "slide-inner"}>
            <img src="./images/banner6.png" alt="" />
          </div>
         
        </div>
        <div className="text">
            <h3 
                onMouseOver={() =>{
                    setText(true)
                    setText1(false)
                    setText2(false)
                    setText3(false)
                    setText4(false)
                    setText5(false)
                    
                }}
                className={text ? "opac" : ""}
            ><span>#1</span>/ Creativity</h3>
            <h3
             onMouseOver={() =>{
                setText(false)
                setText1(true)
                setText2(false)
                setText3(false)
                setText4(false)
                setText5(false)
            }}
            className={text1 ? "opac" : ""}
            ><span>#2</span>/ Perfect <br />
            Delivery</h3>
            <h3
             onMouseOver={() =>{
                setText(false)
                setText1(false)
                setText2(true)
                setText3(false)
                setText4(false)
                setText5(false)
            }}
            className={text2 ? "opac" : ""}
            ><span>#3</span>/ Good <br />
            Looking <br />
            Squad</h3>
            <h3
             onMouseOver={() =>{
                setText(false)
                setText1(false)
                setText2(false)
                setText3(true)
                setText4(false)
                setText5(false)
            }}
            className={text3 ? "opac" : ""}
            ><span>#4</span>/ Warmth <br />
            and <br />
            Welcome</h3>
            <h3
             onMouseOver={() =>{
                setText(false)
                setText1(false)
                setText2(false)
                setText3(false)
                setText4(true)
                setText5(false)
            }}
            className={text4 ? "opac" : ""}
            ><span>#5</span>/ Great <br />
            Results</h3>
            <h3
             onMouseOver={() =>{
                setText(false)
                setText1(false)
                setText2(false)
                setText3(false)
                setText4(false)
                setText5(true)
            }}
            className={text5 ? "opac" : ""}
            ><span>#7</span>/ Team <br />
            Spirit</h3>
           
        </div>
      </div>
    </Wrapper>
  );
}

export default Banner;
