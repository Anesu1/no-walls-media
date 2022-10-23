/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import moment from "moment";
import {BsYoutube, BsFacebook, BsLinkedin} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'
import styled from "styled-components";
import {AiFillInstagram} from 'react-icons/ai';
import { Link } from "react-router-dom";

const Wrapper = styled.footer`
background:${props => props.theme.color.blue};
padding:10% 5%;
@media(min-width:768px){
    padding:5%;
}
h2{
        font-family:${props => props.theme.fam.bold};
        font-size:30px;
        line-height:1.3;
        color:#ffffff;
        @media(min-width:992px){
            font-size:40px;
        }
        @media(min-width:1200px){
            font-size:45px;
        }
}
img{
    width:150px;
    margin:20px 0;

    @media(min-width:768px){
        width:200px;
        margin:0;
    }
}
.bottom{
    @media(min-width:768px){
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    p{
        color:${props => props.theme.color.orange};
        line-height:1.3;
        font-family:${props => props.theme.fam.semibold};
        margin-bottom:20px;
    }
    .links{
        a{
            margin-right:10px;
            color:#ffffff;
            svg{
                height:20px;
                width:20px;
            }
        }
    }
}
.top{
    @media(min-width:768px){
        display:flex;
        justify-content:space-between;
        position:relative;
    }
    .right{
        @media(min-width:768px){
            width:45%;
            max-width:400px;
            margin-top:auto;
            padding-bottom:10px;
            position:relative;
            &:before{
                content:"";
                width:115%;
                height:2px;
                background:#ffffff;
                position:absolute;
                bottom:0;
                right:-12%;

            }
        }
        @media(min-width:1200px){
            &:before{
                right:-14%;
            }
        }
        h4{
            color:#ffffff;
            font-family:${props => props.theme.fam.bold};
            font-size:20px;
            margin-bottom:20px;
        }
        .inner{
            display:flex;
            flex-wrap:wrap;
            a{
                color:#ffffff;
                font-family:${props => props.theme.fam.medium};
                font-family:15px;
                width:45%;
                margin-bottom:10px;
                max-width:200px;
            }
        }
    }
}
`;

function Footer() {
  const year = moment().year();
  return (
    <Wrapper>
        <div className="top">
            <div className="left">
                <h2>Let’s create something <br /> great together!</h2>
                <img src="./images/logo.png" alt="" />
            </div>
            <div className="right">
                <h4>Quick Links</h4>
                <div className="inner">
                    <Link to="/">Home</Link>
                    <Link to="">Contact Us</Link>
                    <Link to="">About Us</Link>
                    <Link to="/team">The NoWalls Team</Link>
                </div>
            </div>
        </div>
      <div className="bottom">
        <p>Copyright © {year}</p>
        <div className="links">
          <a href="#"><BsYoutube /></a>
          <a href="#"><BsFacebook /></a>
          <a href="#"><FaTiktok /></a>
          <a href="#"><AiFillInstagram /></a>
          <a href="#"><BsLinkedin /></a>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
