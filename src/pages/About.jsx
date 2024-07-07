import React from "react";
import { skills, experiences } from "../constants";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { react } from "../assets/icons/index";
const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                Hello I'm{" "}
                <span className="blue-gradient_text font-semibold drop-shadow ">
                    Fred
                </span>
            </h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    As a motivated Junior Web Developer, I specialize in HTML, CSS,
                    JavaScript, React, and TypeScript. Currently honing my skills through
                    programming classes alongside my management studies, I am passionate
                    about developing interactive and user-friendly web applications. I am
                    excited to contribute to cutting-edge projects and grow within the
                    tech industry.
                </p>
            </div>
            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">My Skills</h3>
                <div className="mt-16 flex flex-wrap gap-12 justify-center">
                    {skills.map((skill) => (
                        <div className="block-container w-20 h-20">
                            <div className="btn-back rounded-xxl" />
                            <div className="btn-front rounded-xl flex justify-center items-center flex-col p-1 gap-2">
                                <img
                                    src={skill.imageURL}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-16">
                <h3 className="subhead-text">Experience</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        I've worked with a lot of companies / individuals always trying to
                        level up my skills
                    </p>
                </div>
                <div className="mt-12 flex">
                    <VerticalTimeline>
                        {experiences.map((experience) => {
                            return (
                                <VerticalTimelineElement
                                    key={experience.company_name}
                                    date={experience.date}
                                    icon={
                                        <div className="flex justify-center items-center w-full h-full">
                                            <img
                                                src={react}
                                                alt={experience.company_name}
                                                className="w-[60%] h-60% object-contain"
                                            />
                                        </div>
                                    }
                                    iconStyle={{ background: experience.inconBg }}
                                    contentStyle={{
                                        borderBottom: "8px",
                                        borderStyle: "solid",
                                        boxShadow: "none",
                                    }}
                                >
                                    <div className="text-black text-xl font-poppins font-semibold">
                                        <h3>{experience.title}</h3>
                                        <p
                                            className="text-black font-medium font-base"
                                            style={{ margin: 0 }}
                                        >
                                            {experience.company}
                                        </p>
                                    </div>
                                    <ul className="my-5 list-disc ml-5 space-y-2">
                                        {experience.points.map((point, index) => {
                                            return (
                                                <li
                                                    className="text-black-500/100 font-normal pl-1 text-small"
                                                    key={`experience-point-${index}`}
                                                >
                                                    {point}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </VerticalTimelineElement>
                            );
                        })}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
};

export default About;
