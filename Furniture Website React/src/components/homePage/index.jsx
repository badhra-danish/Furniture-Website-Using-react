import React from "react";
import HeroSection from './Hero'
import AuthenticSction from "./authentic";
import InspirationSection from "./inspiration";
import BrowseRangeSecton from "./browserangesection";
import HowItsWorkSection from "./howitswork";
import EmailListSection from "./emailistsection";
import UserFeedBackSection from "./UserFeedbackSection";
const Home = () => {
    return(
        <>

          <HeroSection/>
          <AuthenticSction/>
          <InspirationSection/>
          <BrowseRangeSecton/>
          <HowItsWorkSection/>
          <UserFeedBackSection/>
          <EmailListSection/>
        </>
    )
}
export default Home