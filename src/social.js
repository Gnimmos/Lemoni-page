import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faTwitch
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return (
      <div class="social-container">
        <h3>Social Follow</h3>
            <a href="https://www.youtube.com/channel/UCPARFXwIX7vNVZDmnJoMn6w"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/lemoniradio"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitch.tv/lemoniradio" className="twitter social">
            <FontAwesomeIcon icon={faTwitch} size="2x" />
            </a>
            <a href="https://www.instagram.com/lemoniradio/"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
      </div>
    );
  }