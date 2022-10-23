import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import { Tabs, TabList, Tab, TabPanel } from "@zendeskgarden/react-tabs";
import Paragraph from "../styled/Paragraph";

const Wrapper = styled.section`
  padding: 10% 0;
  @media (min-width: 768px) {
    padding: 3%;
  }

  .tabs {
    background: #fcfcfc;
    padding: 5%;
    margin: 0 auto;
    max-width: 500px;
    @media (min-width: 768px) {
      border-radius: 10px;
      padding:20px;
    }
    @media (min-width: 992px) {
      display: flex;
      max-width:1500px;
      justify-content: space-between;
    }
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      @media (min-width: 768px) {
        border: none;
      }
      .tab-header {
        display: flex;
        justify-content: flex-start;
        width: 90%;
        text-align: left;
        margin-bottom: 20px;
        font-family:${props => props.theme.fam.bold};
        @media(min-width:992px){
        font-size:20px;
        margin-bottom:10px;
    }
        &:hover {
          color: ${(props) => props.theme.color.blue};
          border-bottom: none;
        }
        img {
          object-fit: contain;
          width: 30px;
          margin-right: 20px;
        }
      }
      [aria-selected="true"] {
        color: ${(props) => props.theme.color.blue};
        border-bottom: none;
      }
    }
    .panel {
        @media(min-width:992px){
        width:45%;
        margin:auto 0;
    }
      .panel-inner {
        p {
          margin-bottom: 20px;
          @media(min-width:992px){
        font-size:18px;
    }
        }
      }
    }
  }
`;

function Info() {
  const [selectedTab, setSelectedTab] = useState("tab-1");
  return (
    <Wrapper>
      <ThemeProvider className="outer-tab">
        <Tabs
          className="tabs"
          selectedItem={selectedTab}
          onChange={setSelectedTab}
        >
          <TabList className="header">
            <Tab item="tab-1" className="tab-header">
              <img src="./images/tab1.png" alt="tab1" />
              <h3>
                Integrated Campaigns & <br /> Communications Strategy
              </h3>
            </Tab>
            <Tab item="tab-2" className="tab-header">
              <img src="./images/tab2.png" alt="tab2" />
              <h3>Brand Expression</h3>
            </Tab>
            <Tab item="tab-3" className="tab-header">
              <img src="./images/tab3.png" alt="tab3" />
              <h3>Traditional Advertising</h3>
            </Tab>
            <Tab item="tab-4" className="tab-header">
              <img src="./images/tab4.png" alt="tab4" />
              <h3>Strategy</h3>
            </Tab>
            <Tab item="tab-5" className="tab-header">
              <img src="./images/tab5.png" alt="tab5" />
              <h3>
                Broadcast, video and motion <br /> graphics
              </h3>
            </Tab>
          </TabList>
          <div className="panel">
            <TabPanel className="panel-inner" item="tab-1">
              <Paragraph>
                Everything starts with you. Once your vision is communicated,
                the magic begins! We will craft a highly creative and effective
                campaign to get you the desired results. The talent is present
                and so are the resources and processes! Let’s make some magic!
              </Paragraph>
              <Paragraph>
                We’re also here to serve as your mouthpiece to the world and to
                present you exactly how you want to be seen.
              </Paragraph>
            </TabPanel>
            <TabPanel className="panel-inner" item="tab-2">
              <Paragraph>
                Much like your fingerprint, your brand is one of a kind. Past
                being seen or heard, it should be felt and experienced. Get your
                customers to experience your brand in its uniqueness at all
                interaction points.
              </Paragraph>
            </TabPanel>
            <TabPanel className="panel-inner" item="tab-3">
              <Paragraph>
                Words and images are great, impressions are even better. Every
                touch point of the customer journey should be maximised and
                every brand requires a different approach.
                <Paragraph>
                  We create and design stuff that lingers long in the customer's
                  consciousness.
                </Paragraph>
                <Paragraph>
                  Maya Angelou says it best: “People will forget what you said,
                  people will forget what you did, but people will never forget
                  how you made them feel.”
                </Paragraph>
              </Paragraph>
            </TabPanel>
            <TabPanel className="panel-inner" item="tab-4">
              <Paragraph>
                Your brand needs to be placed in the best possible outlet. We
                purchase media space and run your ads at the best place, at the
                best time, for the best price. We’ll also monitor the media to
                ensure that ads are flighted according to schedule.
              </Paragraph>
            </TabPanel>
            <TabPanel className="panel-inner" item="tab-5">
              <Paragraph>
                It’s a known fact that screen interaction time is at an all-time
                high. What are you gonna do about it? The correct answer is to
                work with us of course!
              </Paragraph>
              <Paragraph>Why?</Paragraph>
              <Paragraph>
                We’ll make them stop scrolling and pay attention to your brand.
                We’ll make them look twice and they won’t skip your ads if we do
                them for you.
              </Paragraph>
              <Paragraph>
                Eye-catching, riveting and enthralling. That’s what we promise.
                And that’s what you’ll get!
              </Paragraph>
            </TabPanel>
          </div>
        </Tabs>
      </ThemeProvider>
    </Wrapper>
  );
}

export default Info;
