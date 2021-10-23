// log the pageview with their URL
export const pageview = (url) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({ action, params }) => {
  if ("ga" in window) {
    let tracker = window.ga.getAll()[0];
    if (tracker) {
      tracker.send("event", action, params);
    }

    window.ga("send", {
      hitType: "event",
      eventCategory: "button_custom",
      eventAction: "click_custom",
      eventLabel: "contact form",
      hitCallback: function () {
        alert("custom Event received");
      },
    });
  }

  // window.ga("event", action, params);
};

// export const eventUsingGa = ({ category, action }) => {
//   window.ga("send", "event", category, action);
// };
