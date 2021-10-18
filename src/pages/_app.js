import "../styles/globals.css";
import "../components/header/header.css";
import "../components/main/about-header/about-header.css";
import "../components/main/mainpage.css";
import "../components/main/directors-grid/directors-grid.css";
import "../components/main/body-content/body-content.css";
import "../components/footer/footer.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
