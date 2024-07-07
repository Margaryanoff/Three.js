import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} alt="/" className="w-4 h-4 object-contain" />
        </Link>
    </div>
);

const renderContent = {
    1: (
        <h1 className="sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I'm <span className="font-semibold">Fred</span> 👋
            <br />A Junior Developer from Yerevan
        </h1>
    ),
    2: (
        <InfoBox
            text={"Worked on many projects, very passionate about Development"}
            link={"/about"}
            btnText={"Learn More"}
        />
    ),
    3: (
        <InfoBox
            text={"Creative projects showcasing innovation an tachnical skills"}
            link={"/projects"}
            btnText={"Explore"}
        />
    ),
    4: (
        <InfoBox
            text={"Get in touch for out of box development solutions "}
            link={"/contact"}
            btnText={"Hire Me"}
        />
    ),
};

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
};

export default HomeInfo;
