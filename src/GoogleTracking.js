import { useEffect } from "react";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-9EGHVP6W24"; // Replace with your Google Analytics ID
const GTM_ID = "GTM-T7GKQJ8F"; // Replace with your Google Tag Manager ID

const GoogleTracking = () => {
  useEffect(() => {
    // ✅ Initialize Google Analytics (GA4)
    if (!window.gaInitialized) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      window.gaInitialized = true;
    }

    // ✅ Initialize Google Tag Manager (GTM)
    if (!window.gtmScriptAdded) {
      const script = document.createElement("script");
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `;
      document.head.appendChild(script);
      window.gtmScriptAdded = true; // Prevent duplicate addition
    }
  }, []);

  return (
    <>
      {/* ✅ GTM NoScript Fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        ></iframe>
      </noscript>
    </>
  );
};

export default GoogleTracking;
