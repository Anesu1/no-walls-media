import React,{useEffect, useRef} from 'react';
import styled from 'styled-components';
import hoverEffect from "hover-effect";
import fluid from '../image/diss.png'

const Wrapper = styled.section`
     background-color:${props => props.theme.color.blue};
    height:100vh;
    width:100%;
    background-image:url('./images/bg.png');
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center center;
    display:flex;
    align-items:center;
    position:relative;
    justify-content:center;
    @media(min-width:768px){
        height:720px;
    }
    @media(min-width:1200px){
        height:100vh;
    }
    .banner-inner{
        text-align:center;
        @media(min-width:992px){
            transform: translateY(-100%);
        }
        h1{
            font-family:${props => props.theme.fam.bold};
            color:#ffffff;
            font-size:40px;
            margin-bottom:20px;
            @media(min-width:768px){
                font-size:80px;
            }
            span{
                color:${props => props.theme.color.orange};
            }
        }
        p{
            color:#ffffff;
            font-family:${props => props.theme.fam.medium};
            font-size:18px;

        }
    }
    
    img{
        filter: sepia(95%) hue-rotate(150deg) saturate(200%);
        position:absolute;
        transition:all 0.7s ease;
        bottom:0;
        left:0;
        width:20%;
        &:hover{
            filter:unset;
        }
    }
       .image{
        display:none;
        @media(min-width:992px){
            display:block;
            img{
                &:first-child{
            left:0;
         }
                &:nth-child(2){
            left:14%;
         }
                &:nth-child(3){
            left:25%;
         }
                &:nth-child(4){
            left:40%;
            z-index:4;
         }
                &:nth-child(5){
            left:55%;
            z-index:3;
         }
                &:nth-child(6){
            left:67%;
            z-index:2;
         }
                &:nth-child(7){
            left:80%;
            z-index:1;
         }
            }
        }
        
       }

    
`


  

 
    
        
       

function BannerTeam() {
    
  return (
    <Wrapper>
      <div className="banner-inner">
          <h1>The <span>NoWalls</span> Team</h1>
          <p>The Brains Behind The Brands</p>
      </div> 
      <div className="image">
        <img src="./images/team1.png" alt="" />
        <img src="./images/team2.png" alt="" />
        <img src="./images/team3.png" alt="" />
        <img src="./images/team5.png" alt="" />
        <img src="./images/team6.png" alt="" />
        <img src="./images/team7.png" alt="" />
        <img src="./images/team8.png" alt="" />
      </div>
    </Wrapper>
  )
}

export default BannerTeam
