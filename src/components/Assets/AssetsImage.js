
import React from "react";

const AssetImages = ({ name }) => {
  const imagePath = require(`../../assets/${name}.png`);
  return <img src={imagePath} alt={name} />;
};

const CloudImages = ({ name }) => {
    const imagePath = require(`../../assets/Clouds/${name}.png`);
    return <img src={imagePath} alt={name} />;
  };

const SidesImages = ({ name }) => {
    const imagePath = require(`../../assets/SidesPics/${name}.png`);
    return <img src={imagePath} alt={name} />;
  };



export  {AssetImages,CloudImages,SidesImages};
