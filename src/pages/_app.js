import "../styles/globals.css";
import "../components/header/header.css";
import "../components/main/about-header/about-header.css";
import "../components/main/mainpage.css";
import "../components/main/directors-grid/directors-grid.css";
import "../components/main/body-content/body-content.css";
import "../components/footer/footer.css";
import ReactGA from "react-ga";

function MyApp({ Component, pageProps }) {
  const TRACKING_ID = "UA-210405723-1"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  ReactGA.event({
    category: "CustomEvent",
    action: "Custom Event fired",
  });

  return <Component {...pageProps} />;
}

export default MyApp;
