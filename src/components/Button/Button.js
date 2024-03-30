import React,{useState,useEffect} from "react";
import './Button.css'
import {
  ArrowDropDown,
  Info,
  RecordVoiceOverRounded,
} from "@mui/icons-material";
import Icon from "@mdi/react";
import { mdiTriangle } from "@mdi/js";
import { useNavigate,useLocation } from 'react-router-dom';
const ButtonContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Get the current path and update currentPage accordingly
    const path = location.pathname;
    if (path === "/first") {
      setCurrentPage(1);
    } else if (path === "/second") {
      setCurrentPage(2);
    }
  }, [location.pathname]);

  const navigateBack = () => {
    if (currentPage > 1) {
      navigate("/first");
    }
  };

  const navigateForward = () => {
    if (currentPage < 2) {
      navigate("/second");
    }
  };
  return (
    <div className="buttonContainer">
      <button className="voiceButton">
        <RecordVoiceOverRounded className="voiceIcon" />
      </button>
      <button className="leftArrow" onClick={navigateBack}>
        <Icon path={mdiTriangle} size={1.5} />
      </button>
      <button className="currentPageContainer">
        <span className="page">{currentPage}</span>
        <ArrowDropDown className="drop" />
      </button>
      <button className="RightArrow" onClick={navigateForward}>
        <Icon path={mdiTriangle} size={1.5} />
      </button>
      <button className="infoButton">
        <Info className="infoIcon" />
      </button>
    </div>
  );
};

export default ButtonContainer;
