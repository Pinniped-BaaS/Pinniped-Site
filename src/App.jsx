import { useEffect } from "react";

import styled from "styled-components";
import GlobalStyles from "./assets/styles/global.js";

import Header from "./components/Header.jsx";

import Home from "./components/pages/Home.jsx";
import CaseStudy from "./components/pages/CaseStudy.jsx";
import Team from "./components/pages/Team.jsx";
import Footer from "./components/Footer.jsx";

// import { Router, Route, Switch, useLocation } from "wouter";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary.jsx";

function App() {
  const { pathname, hash } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <>
      <ErrorBoundary>
        <Wrapper>
          <Header />
          <ContentWrapper>
            <HashRouter>
              {/* <Routes> */}
              <Route path="/" element={<Home />} />
              <Route path="/case-study" element={<CaseStudy />} />
              <Route path="/team" element={<Team />} />
              <Route
                path="/*"
                element={
                  <div>
                    There is no content located at this page. Please return to
                    the home page via the logo in the header above.
                  </div>
                }
              />
              {/* </Routes> */}
            </HashRouter>
          </ContentWrapper>
          <Footer />
          <GlobalStyles />
        </Wrapper>
      </ErrorBoundary>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (max-width: 1300px) {
    padding: 0 50px;
  }
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
`;

export default App;
