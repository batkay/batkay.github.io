import React, { useEffect } from "react";
import "./Badge.css";

function Badge() {
  useEffect(() => {
    // Remove any existing script to avoid duplicates
    const existingScript = document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add the script
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Optionally, clean up on unmount
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="badge-container">
        <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="29aa998b-b0d2-428f-bb40-9271a8117ab3"
            data-share-badge-host="https://www.credly.com"
        ></div>
    </div>
  );
}

export default Badge;
