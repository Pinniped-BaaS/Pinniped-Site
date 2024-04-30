import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import styled from "styled-components";
import GlobalStyles from "./assets/styles/global.js";

import Header from "./components/Header.jsx";
import Home from "./components/pages/Home.jsx";
import CaseStudy from "./components/pages/CaseStudy.jsx";
import Team from "./components/pages/Team.jsx";
import Footer from "./components/Footer.jsx";

import { link, Outlet, useLocation } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/case-study",
        element: <CaseStudy />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/*",
        element: (
          <div>
            There is no content located at this page. Please return to the home
            page via the logo in the header above.
          </div>
        ),
      },
    ],
  },
]);

function App() {
  // const [pathname] = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <>
      <ErrorBoundary>
        <Wrapper>
          <Header />
          <ContentWrapper>
            <RouterProvider router={router} />
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
