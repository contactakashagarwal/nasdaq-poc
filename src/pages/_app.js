import "../styles/globals.css";
import "../components/header/header.css";
import "../components/main/about-header/about-header.css";
import "../components/main/mainpage.css";
import "../components/main/directors-grid/directors-grid.css";
import "../components/main/body-content/body-content.css";
import "../components/footer/footer.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
