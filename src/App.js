import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DirectionPage from "./pages/DirectionPage";
import Villages from "./pages/Villages";
import Exhibitors from "./pages/ExhibitorPage";
import VillageDetails from "./pages/VillageDetails";
import ExhibitorDetails from "./pages/ExhibitorDetailPage";
import { I18nProvider } from "./config/i18n";
import DirectoryPage from "./pages/DirectoryPage";
import { useAuth0 } from "@auth0/auth0-react";
import { login } from "./actions/AuthActions";
import QRcode from "./pages/QRcode";
import ThingsToDo from "./pages/ThingsToDo";
import QuizPage from "./pages/QuizPage";
import SurveyPage from "./pages/SurveyPage";
import TreasureHuntPage from "./pages/TreasureHuntPage";
import IGContest from "./pages/IGContest";
import CrackTheCode from "./pages/CrackTheCode";
import PhotoBooth from "./pages/PhotoBooth";
import BusinessAndLuckyDraw from "./pages/BusinessAndLuckyDraw";
import SocialMedia from "./pages/SocialMedia";
import MediaDetails from "./pages/MediaDetails.jsx";
import QuizDetailsPage from "./pages/QuizDetailsPage";
import SurveyDetailsPage from "./pages/SurveyDetailsPage";
import Gallery from "./pages/Gallery";
import GalleryDetails from "./pages/GalleryDetails";
import LeaderBoard from "./pages/LeaderBoard";
import NFT from "./pages/NFT";
import FeedbackAndComplaint from "./pages/FeedbackAndComplaint";
import Voting from "./pages/Voting"
import Rewards from "./pages/Rewards";
import VotingDetailsPage from "./pages/VotingDetails";
import Merchandize from "./pages/Merchandize";
import MerchandizeDetails from "./pages/MerchandizeDetails";

function App({ login, auth }) {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (!auth.isLogin) {
      getAccessTokenSilently().then((response) => {
        const token = JSON.stringify(response);
        login(token.replaceAll('"', ""));
      });
    }
  }, []);

  return (
    <div className="App">
      <I18nProvider>
        <Routes>
          <Route path="/">
            <Route exact index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="direction" element={<DirectionPage />} />
            <Route path="villages" element={<Villages />} />
            <Route path="village/:id" element={<VillageDetails />} />
            <Route path="exhibitors" element={<Exhibitors />} />
            <Route path="exhibitor/:id" element={<ExhibitorDetails />} />
            <Route path="directory" element={<DirectoryPage />} />
            <Route path="QRcode" element={<QRcode />} />
            <Route path="thingstodo" element={<ThingsToDo />} />
            <Route path="quiz" element={<QuizPage />} />
            <Route path="quiz/:id" element={<QuizDetailsPage />} />
            <Route path="survey" element={<SurveyPage />} />
            <Route path="survey/:id" element={<SurveyDetailsPage />} />
            <Route path="voting" element={<Voting />} />
            <Route path="voting/:id" element={<VotingDetailsPage />} />
            <Route path="treasurehunt" element={<TreasureHuntPage />} />
            <Route path="IGcontest" element={<IGContest />} />
            <Route path="crackthecode" element={<CrackTheCode />} />
            <Route path="photobooth" element={<PhotoBooth />} />
            <Route path="socialmedia" element={<SocialMedia />} />
            <Route path="socialmedia/:id" element={<MediaDetails />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="gallery/:id" element={<GalleryDetails />} />
            <Route path="leaderboard" element={<LeaderBoard />} />
            <Route path="NFT" element={<NFT />} />
            <Route path="merchandize" element={<Merchandize />} />
            <Route path="merchandize/:id" element={<MerchandizeDetails />} />
            <Route path="reward" element={<Rewards />} />
            <Route path="feedback" element={<FeedbackAndComplaint />} />
            <Route
              path="businesscardandluckydraw"
              element={<BusinessAndLuckyDraw />}
            />
          </Route>
        </Routes>
      </I18nProvider>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    locale: state.locale,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { login })(App);
