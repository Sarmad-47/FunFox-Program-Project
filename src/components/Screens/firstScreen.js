import React from "react";
import "./firstScreen.css";
import Card from "../Card/Card";
import { AssetImages, CloudImages, SidesImages } from "../Assets/AssetsImage";
import ButtonContainer from "../Button/Button";
const FirstScreen = () => {
  return (
    <div>
      <div className="topper">
        <span className="funFox">
          <AssetImages name="FunFox" />
        </span>
        <span className="Week1">
          <AssetImages name="Week1" />
        </span>
      </div>
      <div className="leftSide">
        <SidesImages name="Pencil" />
        <SidesImages name="Bag" />
        <SidesImages name="Reading" />
      </div>
      <div className="rightSide">
        <SidesImages name="Scale" />
        <SidesImages name="Book" />
        <SidesImages name="Graduation" />
      </div>
      <Card>
        <div className="heading">
          <h2 className="headingText">Elements of Story Writing</h2>
        </div>
        <p className="welcomeMessage">
          Welcome to the term 2 of Writers Club. Are you excited for this
          amazing journey? Over the next week, we will be practicing the
          different elements of story writing. Our aim is to make stories more
          interesting and exciting.
        </p>
        <div className="rectangle1">
          <p className="rectangle1Text">
            There are <b>five</b> elements which make the foundation
            for story writing. An element is an essential part of something and
            every fiction story has the same key elements:
          </p>
          <span className="childRead">
            <SidesImages name="Child" />
          </span>
        </div>
        <div className="word-list">
          <span>
            <CloudImages name="Setting" />
          </span>
          <span>
            <CloudImages name="Characters" />
          </span>
          <span>
            <CloudImages name="Plot" />
          </span>
          <span>
            <CloudImages name="Problem&Conflict" />
          </span>
          <span>
            <CloudImages name="Resolution" />
          </span>
        </div>
        <p className="knowledge">
          You must be familiar with some of these. If not, do not worry! we will
          cover all these elements as we go along.
        </p>
        <div className="rectangle2">
          <div className="wrapper">
          <AssetImages name="Paper" />
            <p className="rectangle2Text">
              For today's lesson, we will try to understand and practice writing
              the setting for our stories.
              <br />
              The setting is an important element of every fiction story.
            </p>
          </div>
        </div>
      </Card>
      <ButtonContainer/>
    </div>
  );
};

export default FirstScreen;
