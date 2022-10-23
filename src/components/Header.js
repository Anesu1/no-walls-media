import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
// import {Link as AnotherLink} from 'react-scroll'
import styled from 'styled-components';

const Wrapper = styled.header`
    position:absolute;
    display:flex;
    align-items:center;
    width:100%;
    z-index:999;
    transition:all 300ms ease;
    justify-content:space-between;
    @media(min-width:768px){
        margin-top:20px;
    }
    img{
        width:150px;
        transition:all 300ms ease;
    }
    .hamburger{
      padding:20px 37px 20px 6px;
      outline:1px solid #fff;
      position: relative;
      margin-right:30px;
      transition:all 0.7s ease;
      z-index:3;
      @media(min-width:768px){
          display:none;
      }
      span{
        width:30px;
        height:1px;
        background:#fff;
        position:absolute;
        transition:all 0.7s ease;
        &:before{
          position: absolute;
          content:"";
          background: #fff;
          top:-5px;
          height:100%;
          width:100%;
          transition:all 0.7s ease;
        }
        &:after{
          position: absolute;
          content:"";
          background: #fff;
          top:5px;
          height:100%;
          width:100%;
          transition:all 0.7s ease;
        }
      }
    }
    .open{
        
        span{
            background:transparent;
            &:after{
                top:0;
                transform:rotate(-585deg);
                
            }
            &:before{
                top:0;
                transform:rotate(-495deg);
                
            }
        }
    }
    .menu{
        @media(min-width:768px){
               width:max-content;
            }
        ul{
            
            position:absolute;
            left:50%;
            transition:all 0.7s ease;
            top:70px;
            width:90%;
            background:#ffffff;
            height:max-content;
            transform:translate(-50%, 0);
            text-align:right;
            max-height:0;
            overflow:hidden;
            @media(min-width:768px){
                background:transparent;
                max-height:unset;
                border:unset;
                display:flex;
                width:max-content;
                position:unset;
                transform:unset;
                margin-right:30px;
            }
            li{
                @media(min-width:768px){
                    margin:0 10px;
                }
                a{
                    font-family:${props => props.theme.fam.semibold};
                    font-size:15px;
                    color:${props => props.theme.color.blue};
                    display:block;
                    transition:all 0.3s ease;
                    padding:20px;
                    cursor:pointer;
                    @media(min-width:768px){
                        color:#ffffff;
                        opacity:0.5;
                        padding:13px 25px;
            }
                    &:hover{
                        background:${props => props.theme.color.blue};
                        color:#ffffff;
                        @media(min-width:768px){
                            opacity:1;
                        }
                    }
                }
                .active{
                    @media(min-width:768px){
                        opacity:1;
            }
                }
                &:last-child{
                    
                    a{
                        @media(min-width:768px){
                            background:${props => props.theme.color.orange};
                            opacity:1;
                            padding:13px 25px;
                        }
                    }
                }
            }
        }
        .change{
            max-height:400px;
            border-top:3px solid ${props => props.theme.color.orange};
            @media(min-width:768px){
                
                border:unset;
            }
        }
    }
`

function Header() {
    const [click, setClick] = useState(false);
  return (
    <Wrapper>
        <Link to="/"><img src="./images/logo.png" alt="No Walls Logo" /></Link>
        <div className="menu">
            <div className={click ? "hamburger open" : "hamburger"} onClick={() => setClick(!click)}>
                <span></span>
            </div>
            <ul className={click ? "change" : ""}>
                <li>
                    <NavLink exact activeClassName='active' to="/" onClick={() => setClick(false)}>Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to="/team" onClick={() => setClick(false)}>The Team</NavLink>
                </li>
                <li>
                    <Link to="/contact" onClick={() => setClick(false)}>Contact Us</Link>
                </li>
            </ul>
        </div>
    </Wrapper>
  )
}

export default Header