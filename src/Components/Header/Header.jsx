import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import "./Header.css";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu);
  };

  const [nav, setNav] = useState(false);
  const showNav = () => {
    setNav(!nav);
  };
  return (
    <div id="Header">
      <MdMenu id="menu__btn" onClick={showNav} />
      {nav ? (
        <div id="navbar" onClick={showNav}>
          <ul>
            <li onClick={showNav}>
              <Link to="/">HOME</Link>
            </li>
            <div id="line"></div>
            <li onClick={showNav}>
              <Link to="/Gallery">GALLERY </Link>
            </li>
            <div id="line"></div>
            <li onClick={showNav}>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHmbDmKLJxbKqwSbkKHlvZxcHJwTsDCKnnmrZdKDhjtgjKKfHtLfZbVQQKFZSJKpKVjFL">
                HIRE ME
              </a>
            </li>
            <div id="line"></div>
          </ul>
          <div id="under">
            <ul>
              <li>
                <a href="https://x.com/JayCodes27?t=k513f8YOjzAOnOifSdw3mA&s=09">
                  <FaSquareXTwitter id="twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/magicfingers1/">
                  <FiInstagram id="instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jerry-addy-193437249/">
                  <FaLinkedin id="linkedin" />
                </a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHmbDmKLJxbKqwSbkKHlvZxcHJwTsDCKnnmrZdKDhjtgjKKfHtLfZbVQQKFZSJKpKVjFL">
                  <FaMailchimp id="mailmonkey" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li onClick={showMenu} id="contact">
            Contacts
            {menu ? (
              <div id="menu">
                <ul>
                  <li>
                    <a href="https://x.com/JayCodes27?t=k513f8YOjzAOnOifSdw3mA&s=09">
                      <FaSquareXTwitter id="twi" /> X
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/jerry-addy-193437249/">
                      <FaLinkedin id="Link" />
                      linkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHmbDmKLJxbKqwSbkKHlvZxcHJwTsDCKnnmrZdKDhjtgjKKfHtLfZbVQQKFZSJKpKVjFL">
                      <FaMailchimp id="Mail" />
                      Mail
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/magicfingers1/">
                      <FiInstagram id="Inst" />
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
