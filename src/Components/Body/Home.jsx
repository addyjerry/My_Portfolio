import React from "react";
import "./Home.css";
import Mypic from "../../assets/student.png";
import bees from "../../assets/45beesweb.png";
import kess from "../../assets/kessben.png";
import opem from "../../assets/opemsuo.png";
import boylove from "../../assets/boylove.png";
import eyeflower from "../../assets/eyeflower.png";
import burning from "../../assets/burning.png";
import gametournament from "../../assets/gametournament.png";
import imagemerge from "../../assets/imagemerge.png";
import logo from "../../assets/logo.png";
import birthday from "../../assets/birthday.png";

const Home = () => {
  return (
    <div id="body">
      <div id="first__group">
        <div id="first__text">
          <p>
            Hi, I'm Bishop, a web developer. I am a Software Engineer who
            develops web sites. I create responsive,interactive and beautiful
            websites that sync with my client's brand, business and ideas.{" "}
          </p>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHmbDmKLJxbKqwSbkKHlvZxcHJwTsDCKnnmrZdKDhjtgjKKfHtLfZbVQQKFZSJKpKVjFL">
            <h5>HIRE ME</h5>
          </a>
        </div>
        <div id="mypic">
          <img src={Mypic} alt="Bishop" />
        </div>
      </div>
      <div id="second__group">
        <h3>Projects</h3>
        <ul>
          <li>
            <img src={bees} alt="bees" />
            <p>45bees</p>
          </li>
          <li>
            <img src={opem} alt="opem" />
            <p>Opemsuo</p>
          </li>
          <li>
            <img src={kess} alt="kess" />
            <p>Kessben</p>
          </li>
        </ul>
      </div>
      <div id="collaboration">
        <p>
          Say Hi on all my social media handles and let's collaborate to put
          your business or project on the web. <br />
          Let the world access your ideas
        </p>
      </div>
      <div id="graphic__design">
        <div id="graphic__text">
          <p>Check out my graphic design skills in my Gallery if interested</p>
        </div>
        <div id="graphic__images">
          <img src={boylove} alt="" />
          <img src={eyeflower} alt="" />
          <img src={burning} alt="" />
          <img src={birthday} alt="" />
          <img src={gametournament} alt="" />
          <img src={logo} alt="" />
          <img src={imagemerge} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
