import { useEffect } from "react";

import styled from "styled-components";
import GlobalStyles from "./assets/styles/global.js";

import Header from "./components/Header.jsx";

import Home from "./components/pages/Home.jsx";
import CaseStudy from "./components/pages/CaseStudy.jsx";
import Team from "./components/pages/Team.jsx";
import Footer from "./components/Footer.jsx";

import { Router, Route, Switch, useLocation } from "wouter";

function App() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Wrapper>
        <Header />
        <ContentWrapper>
          <Router>
            <Switch>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/docs">
                <h1>Docs</h1>
              </Route>
              <Route path="/case-study">
                <CaseStudy />
              </Route>
              <Route path="/team">
                <Team />
              </Route>
            </Switch>
          </Router>
        </ContentWrapper>
        <Footer />
        <GlobalStyles />
      </Wrapper>
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
