import React from "react";
import "./firstScreen.css";
import "./secondScreen.css";
import Card from "../Card/Card";
import { AssetImages, SidesImages } from "../Assets/AssetsImage";
import ButtonContainer from "../Button/Button";
import { Alarm, Home } from "@mui/icons-material";
const SecondScreen = () => {
  return (
    <div>
      <div className="topper">
        <span className="funFox">
          <AssetImages name="FunFox" />
        </span>
      </div>
      <div className="leftSide">
        <SidesImages name="Pencil" />
        <SidesImages name="Bag" />
        <SidesImages name="Reading" />
      </div>
      <div className="rightSide">
        <SidesImages name="Scale" />
        <SidesImages name="Question" />
        <SidesImages name="Graduation" />
      </div>
      <Card>
        <div className="content1">
          <p className="paragraph1">
            Can you figure out the definition of setting from the following
            examples?
          </p>
          <p className="paragraph2">(take a minute to think about this)</p>
        </div>
        <div className="imageContent">
          <span className="beach">
            <AssetImages name="Beach" />
          </span>
          <span className="haunted">
            <AssetImages name="Haunted" />
          </span>
        </div>
        <div className="paragraphContent">
          <p className="paragraph3">Sunny day at a beach</p>
          <p className="paragraph4">
            A cold rainy night in a <br />
            haunted house in October
          </p>
        </div>
        <div className="rectangleContainer1">
          <p className="rectangleContainer1Text">
            So, what do you think the definition of setting is?
          </p>

          <form>
            <p className="rectangleContainer1Text">
              Any guesses?
              <input type="text" />
              Hint:
              <span className="clock">
                <Alarm />
              </span>
              <span className="home">
                <Home />
              </span>
            </p>
          </form>
        </div>
        <div className="rectangleContainer2">
          <p className="rectangleContainer2Text">
            Setting is the time
            <span className="clock">
              <Alarm />
            </span>
            and place
            <span className="home">
              <Home />
            </span>
            of a story. It often answers the questions: when? and where?
          </p>
        </div>
        <div className="rectangleContainer3">
          <p>
            The time of the story could be in the past, future, day, night,
            summer or winter. A story may take place in a school, a mall, a
            desert, an airplane or in a variety of other places.
          </p>
        </div>
      </Card>
      <ButtonContainer />
    </div>
  );
};

export default SecondScreen;
