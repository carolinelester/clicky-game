import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Footer(props) {
  return (
    <footer className="footer fixed-bottom">
      <div class="container text-right">
        <span><a href="https://github.com/carolinelester/clicky-game">Github</a> </span>
      </div>
    </footer>
  )}
export default Footer;