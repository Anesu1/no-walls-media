import React from "react";
import { FormControl, Input, InputLabel } from "@mui/material";
import { BsCheckLg } from "react-icons/bs";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

const Wrapper = styled.section`
  background: ${(props) => props.theme.color.blue};
  padding: 20% 0% 10%;
  @media (min-width: 768px) {
    padding: 10% 0 5%;
  }
  .inner {
    background: ${(props) => props.theme.color.lightblue};
    padding: 5%;

    @media (min-width: 992px) {
      border-radius: 10px;
      margin: 0 5%;
      max-width: 1300px;
    }
    @media (min-width: 1500px) {
      margin: 0 auto;
    }
    h2 {
      font-family: ${(props) => props.theme.fam.bold};
      font-size: 30px;
      line-height: 1.3;
      margin-bottom: 30px;
      color: #ffffff;

      @media (min-width: 992px) {
        font-size: 38px;
      }
      @media (min-width: 1200px) {
        font-size: 45px;
      }
    }
    form {
      .top {
        @media (min-width: 768px) {
          display: flex;
          justify-content: space-between;
        }
        .MuiFormControl-root {
          width: 100%;
          margin-bottom: 20px;
          background: ${(props) => props.theme.color.blue};
          border-radius: 8px;
          @media (min-width: 768px) {
            width: 45%;
          }
          .MuiInputLabel-root {
            color: rgba(255, 255, 255, 0.65);
            font-family: ${(props) => props.theme.fam.medium};
          }
          [data-shrink="true"] {
            color: #ffffff;
            background: ${(props) => props.theme.color.lightblue};
            padding: 2px 10px;
          }
          .MuiInput-root {
            font-family: ${(props) => props.theme.fam.medium};
            color: #ffffff;
            font-size: 15px;
            padding: 0 10px 5px;
            &:before {
              border-bottom: 0;
              background: transparent;
            }
            &:after {
              border-bottom: 0;
              background: transparent;
            }
          }
        }
      }
      .inner-contact {
        margin-bottom: 30px;
        h4 {
          font-family: ${(props) => props.theme.fam.bold};
          color: #ffffff;
          font-size: 18px;
          margin-bottom: 20px;
        }
        label {
          font-family: ${(props) => props.theme.fam.medium};
          color: #ffffff;
          font-size: 17px;
          display: flex;
          align-items: center;
        }
        .input {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          input {
            display: none;
            &:checked ~ label .checkbox svg {
              color: ${(props) => props.theme.color.orange};
              height: 10px;
              width: 10px;
            }
          }
          .checkbox {
            height: 25px;
            width: 25px;
            min-width: 25px;
            margin-right: 10px;
            background: ${(props) => props.theme.color.blue};
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
              transition: all 0.3s ease;
              height: 0;
              width: 0;
            }
          }
        }
      }
      button {
        margin: 0 auto;
        border: none;
        background: transparent;
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover {
          .span {
            svg {
              height: 23px;
              width: 23px;
            }
          }
        }
        span {
          font-family: ${(props) => props.theme.fam.semibold};
          font-size: 25px;
          margin-right: 20px;
          color: #ffffff;
        }
        .span {
          height: 40px;
          width: 40px;
          border-radius: 50%;
          background: ${(props) => props.theme.color.orange};
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            color: #ffffff;
            height: 20px;
            width: 20px;
            transition: all 0.7s ease;
          }
        }
      }
    }
  }
  .outer {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
    .inner-contact {
      @media (min-width: 768px) {
        width: 45%;
      }
    }
  }
`;

function Contact() {
  return (
    <Wrapper>
      <div className="inner">
        <h2>Contact Us</h2>
        <form action="">
          <div className="top">
            <FormControl>
              <InputLabel>Your Name</InputLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <InputLabel>Your Email</InputLabel>
              <Input type="text" />
            </FormControl>
          </div>
          <div className="outer">
            <div className="inner-contact">
              <h4>
                I’m Reachin Out On Behalf Of A Company (CHECK ALL THAT APPLY)
              </h4>
              <div className="input">
                <input type="checkbox" id="checka" name="" value="Boat" />

                <label for="checka">
                  <div className="checkbox">
                    <BsCheckLg />
                  </div>
                  <span> I’m exploring new agency partners</span>
                </label>
              </div>
              <div className="input">
                <input type="checkbox" id="checkb" name="" value="Boat" />

                <label for="checkb">
                  <div className="checkbox">
                    <BsCheckLg />
                  </div>
                  <span>I’m looking for branding and signage services</span>
                </label>
              </div>
              <div className="input">
                <input type="checkbox" id="checkc" name="" value="Boat" />

                <label for="checkc">
                  <div className="checkbox">
                    <BsCheckLg />
                  </div>
                  <span>
                    {" "}
                    I’m looking for media production services (radio and TV ads,
                    online content)
                  </span>
                </label>
              </div>
              <div className="input">
                <input type="checkbox" id="checkd" name="" value="Boat" />

                <label for="checkd">
                  <div className="checkbox">
                    <BsCheckLg />
                  </div>
                  <span>
                    I’m looking for consultative services (strategy, digital
                    transformation, corporate training)
                  </span>
                </label>
              </div>
              <div className="input">
                <input type="checkbox" id="checke" name="" value="Boat" />

                <label for="checke">
                  <div className="checkbox">
                    <BsCheckLg />
                  </div>
                  <span>I’m looking for eCommerce support</span>
                </label>
              </div>
            </div>

            <div className="inner-contact">
              <h4>I’m an individual (CHECK ALL THAT APPLY)</h4>
              <div className="input">
                <input type="checkbox" id="checkaa" name="" value="Boat" />
                
                <label for="checkaa"><div className="checkbox">
                  <BsCheckLg />
                </div>
                  <span>I run a small business and would like to get training for
                  marketing and advertising</span>
                  
                </label>
              </div>
              <div className="input">
                <input type="checkbox" id="checkbb" name="" value="Boat" />
                
                <label for="checkbb"><div className="checkbox">
                  <BsCheckLg />
                </div>
                  <span> I’m looking for personal branding</span>
                 </label>
              </div>
              <div className="input">
                <input type="checkbox" id="checkcc" name="" value="Boat" />
               
                <label for="checkcc"> <div className="checkbox">
                  <BsCheckLg />
                </div><span> I’m an influencer and would like to work with you and your
                  clients</span>
                 
                </label>
              </div>
              <div className="input">
                <input type="checkbox" id="checkdd" name="" value="Boat" />
                
                <label for="checkdd"><div className="checkbox">
                  <BsCheckLg />
                </div><span>I’m a consultant looking to partner on projects I have in mind</span>
                  
                </label>
              </div>
            </div>
          </div>

          <button type="submit">
            <span>Submit</span>
            <div className="span">
              <BsArrowRight />
            </div>
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

export default Contact;
