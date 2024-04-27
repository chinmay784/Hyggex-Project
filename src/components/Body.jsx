import React from "react";
import Home from "../images/home.svg";
import Arrow from "../images/arrow.svg";
import { Data } from "../Data";
import { Data1 } from "../Data";
import Bulb from "../images/Bulb.svg";
import Sound from "../images/Sound.svg";
import Icon from "../images/Icon.svg";
import { useState } from "react";
import LastLogo from "../images/LastLogo.svg";
import LastLogo1 from "../images/LastLogo1.svg";
import DownArrow from "../images/DownArrow.svg";
import LastOne from "../images/LastOne.svg";

const Body = () => {
  const [activeCard, setActiveCard] = useState(false);
  const [arrow1, setArrow1] = useState(true);
  const [arrow2, setArrow2] = useState(true);
  const [arrow3, setArrow3] = useState(true);

  const handleFlip = () => {
    setActiveCard(!activeCard);
  };

  const handleArrow1 = () => {
    setArrow1(!arrow1);
  };

  const handleArrow2 = () => {
    setArrow2(!arrow2);
  };

  const handleArrow3 = () => {
    setArrow3(!arrow3);
  };

  return (
    <>
      <div className=" mt-20 ml-5">
        <div className=" flex flex-row gap-2">
          <img src={Home} className=" w-4" />
          <img src={Arrow} className=" w-2" />
          <h3 className=" text-gray-500">Flashcard</h3>
          <img src={Arrow} className=" w-2" />
          <h3 className=" text-gray-500">Mathmatices</h3>
          <img src={Arrow} className=" w-2" />
          <h3 className=" text-blue-950 font-semibold">
            Relation and Function
          </h3>
        </div>

        <div className=" mt-14">
          <h1 className=" text-4xl  font-semibol text-blue-800">
            Relation and Functions <span>( Mathmatices )</span>{" "}
          </h1>
        </div>

        <div className="datas w-[530px]  text-xl  text-gray-400 mt-12 mx-auto flex  gap-[70px] flex-row">
          {Data.map((SingleData) => {
            return (
              <p
                key={SingleData.id}
                className={`${
                  SingleData.id == 1
                    ? " font-semibold text-blue-900 "
                    : " text-gray-400"
                }`}
              >
                {SingleData.name}
              </p>
            );
          })}
        </div>
        <div className="underline w-16 h-[2px] rounded-2xl bg-blue-900 relative left-[315px] mt-1 "></div>

        <div
          onClick={handleFlip}
          className={`relative card ${activeCard ? "cardFlip" : ""}`}
        >
          {/* front */}
          <div className="Box w-[712px]  mx-auto h-[393.19px] bg-gradient-to-l from-blue-900 to-blue-600 rounded-[42px] mt-10">
            <div className=" flex justify-between px-10  flex-row ">
              <img src={Bulb} className="w-5 -mb-36" alt="" />
              <img src={Sound} className="w-5 -mb-36" alt="" />
            </div>
            <div className="div flex justify-center align-middle mt-48">
              <h3 className="text-white text-center text-4xl">
                9 + 6 + 7x - 2x - 3
              </h3>
            </div>
          </div>

          {/* back */}
          <div className="absolute top-0 back">
            <div className="Box w-[712px] mr-[230px]  mx-auto h-[393.19px] bg-gradient-to-l from-blue-900 to bg-sky-700 rounded-[42px] -mt-0">
              <div className=" flex justify-between px-10  flex-row ">
                <img src={Bulb} className="w-5 -mb-36" alt="" />
                <img src={Sound} className="w-5 -mb-36" alt="" />
              </div>
              <div className="div flex justify-center align-middle mt-48">
                <h3 className="text-white text-center text-4xl">5x + 2</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="last flex justify-center mt-5">
          <img src={Icon} alt="" />
        </div>
        <div className="div1 flex mt-16 mx-auto px-[40px] justify-between">
          <img className="" src={LastLogo} alt="" />
          <img className="" src={LastLogo1} alt="" />
        </div>

        <div className=" mt-10">
          <img src={LastOne} alt="" />
        </div>

        <div className="show mt-14">
          {/* {Data1.map((element) => {
            return (
              <div
                key={element.id}
                className={` flex flex-col gap-8 mt-4`}
                onClick={handleArrow}
              >
                <div className=" w-8/12 p-2 border border-blue-800 rounded-xl flex flex-row justify-between">
                  <div>
                    <h1 className=" text-black">{element.question}</h1>
                    <p
                      className={` ${
                        arrow && element.id == 1 ? " hidden" : ""
                      } text-gray-500`}
                    >
                      {element.descripition}
                    </p>
                  </div>
                  <img src={DownArrow} alt="" className=" w-6" />
                </div>
              </div>
            );
          })} */}

          <div
            className={` flex flex-col gap-8 mt-4 transition-all duration-200 ease-in-out delay-100`}
            onClick={handleArrow1}
          >
            <div className=" w-8/12 p-4 border border-blue-800 rounded-xl flex flex-row justify-between">
              <div>
                <h1>Can Education flashcards be used for all age groups?</h1>
                <p className={` ${arrow1 ? " hidden" : ""} text-gray-500`}>
                  Yes , Education flashcards can be tailored to different age
                  groups and learning levels.There are flashcards designesd for
                  preschoolers, elementary school students,high school
                  students,and even for college-level and adult learners.
                </p>
              </div>
              <img src={DownArrow} alt="" className=" w-6" />
            </div>
          </div>

          <div
            className={` flex flex-col gap-8 mt-4 TRI`}
            onClick={handleArrow2}
          >
            <div className=" w-8/12 p-4 border border-blue-800 rounded-xl flex flex-row justify-between">
              <div>
                <h1>How do education flashcards work?</h1>
                <p
                  className={` ${
                    arrow2 ? " hidden transitions" : ""
                  } text-gray-500`}
                >
                  Education flashcards work by presenting a question or prompt
                  on one side and the corresponding answer or information on the
                  other.Users can be review the cards repeatedly,reinforcing
                  their memory and enhanceing learning through repetition.
                </p>
              </div>
              <img src={DownArrow} alt="" className=" w-6" />
            </div>
          </div>

          <div
            className={` flex flex-col gap-8 mt-4 mb-10 TRI`}
            onClick={handleArrow3}
          >
            <div className=" w-8/12 p-4 border border-blue-800 rounded-xl flex flex-row justify-between">
              <div>
                <h1>Can education flashcards be used for test preparation?</h1>
                <p className={` ${arrow3 ? " hidden" : ""} text-gray-500`}>
                  Absolutely.Flashcards are an excellent tool for test
                  preparation, allowing students to review key concepts,terms,
                  and facts.They provide a quick and focused way to reinforce
                  knowledge before exams.
                </p>
              </div>
              <img src={DownArrow} alt="" className=" w-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;