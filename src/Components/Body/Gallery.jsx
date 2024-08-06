import React, { useState } from "react";
import "./Gallery.css";
import { IoMdClose } from "react-icons/io";
import birthday from "../../assets/birthday.png";
import Events from "../../assets/gametournament1.jpg";
import Personal from "../../assets/Untitled-2.jpg";
import Logo from "../../assets/VoiceChat2.png";
import Poster from "../../assets/eye1.png";
import Card from "../../assets/VoiceChat1.jpg";
const Gallery = () => {
  const [box, setBox] = useState([
    {
      id: 1,
      img: birthday,
      description: "Birthday",
    },
    {
      id: 2,
      img: Events,
      description: "Events",
    },
    {
      id: 3,
      img: Personal,
      description: "Personal Project",
    },
    {
      id: 4,
      img: Logo,
      description: "Logo",
    },
    {
      id: 5,
      img: Poster,
      description: "Poster",
    },
    {
      id: 6,
      img: Card,
      description: "Business Card",
    },
  ]);
  const showBox = true;

  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu);
  };
  return (
    <div id="Gallery">
      <div className="boxes">
        {box.map((box) => {
          return (
            <div id="box" onClick={showMenu} key={box.id}>
              <img src={box.img} alt="birthday" />
              <div id="description">
                {" "}
                <h4>{box.description}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
