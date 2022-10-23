import React from 'react';
import styled from 'styled-components';
import {FaEnvelope} from 'react-icons/fa';
import {HiPhone} from 'react-icons/hi';

const Wrapper = styled.section`
    padding:10% 0%;

    @media(min-width:992px){
        padding:5% 0;
    }
    .img{
        background:url("./images/logoabout.png");
        background-size:contain;
        background-repeat:no-repeat;
        background-position:center center;
        background-size:90%;
        &:hover{
            img{
                @media(min-width:768px){
                    transform:scale(1.1);
                }
            }
        }
        @media(min-width:768px){
            max-width:500px;
            margin:0 auto;
        }
        @media(min-width:992px){
            width:45%;
            margin-right:0;
        }
        img{
            width:100%;
            margin:0 auto;
            transition:all 300ms ease;
            
        }
    }
    .inner{
        background: #F5F5F5;
        padding:5%;
        max-width:500px;
        margin:0 auto;
        overflow:hidden;
        border-radius:10px;
        padding-bottom:0;
        @media(min-width:992px){
            display:flex;
            justify-content:space-between;
            width:85%;
            max-width:1500px;
        }
        .team-div{
            @media(min-width:992px){
                width:45%;
                margin:auto 0;
            }
        }
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
    h4{
        font-family:${props => props.theme.fam.bold};
        font-size:25px;
        margin-bottom:20px;
    }
    p{
        margin-bottom:20px;
        span{
            font-family:${props => props.theme.fam.bold};
        }
    }
    .bottom{
        @media(min-width:768px){
            display:flex;
        }
        p{
            display:flex;
            align-items:center;
            @media(min-width:768px){
                margin-right:30px;
            }
            span{
                font-family:${props => props.theme.fam.bold};
                font-size:18px;
            }
            svg{
                height:20px;
                width:20px;
                margin-right:10px;
            }
        }
    }
    }
`

function TeamDiv({teamImage, title, role, email, number, children}) {
  return (
    <Wrapper>
        <div className="inner">
            <div className="team-div">
                <h2>{title}</h2>
                <h4>{role}</h4>
                <div className="text">
                    {children}
                </div>
                <div className="bottom">
                    <p>
                        <FaEnvelope /> <span>{email}@nowalls.co.zw</span>
                    </p>
                    <p>
                        <HiPhone /> <span>{number}</span>
                    </p>
                </div>
            </div>
            <div className="img">
                <img src={`./images/team${teamImage}`} alt={title} />
            </div>
        </div>
    </Wrapper>
  )
}

export default TeamDiv