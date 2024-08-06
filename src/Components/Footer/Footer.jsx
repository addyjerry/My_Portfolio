import React from "react";
import "./Footer.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <p>Let's link up via my handles</p>
      <ul>
        <li>
          <a href="https://x.com/JayCodes27?t=k513f8YOjzAOnOifSdw3mA&s=09">
            <FaSquareXTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/magicfingers1/">
            <FiInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jerry-addy-193437249/">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHmbDmKLJxbKqwSbkKHlvZxcHJwTsDCKnnmrZdKDhjtgjKKfHtLfZbVQQKFZSJKpKVjFL">
            <FaMailchimp />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
