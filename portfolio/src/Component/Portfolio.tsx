import market from "../market.png";
import calc from "../calc.png";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiNestjs, SiSequelize } from "react-icons/si";
import { RiNodejsLine, RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { FaGoogleDrive } from "react-icons/fa6";
import { useState } from "react";

const Portfolio = (): JSX.Element => {
  const [overmarket, setOvermarket] = useState<boolean>(false);
  const [lostarkcalc, setLostarkcalc] = useState<boolean>(false);

  return (
    <>
      <div className="w-full min-w-[80rem] min-h-screen bghalf flex flex-col justify-between">
        <div className="pt-8 pb-8 pl-20 text-5xl">Portfolio</div>
        <div className="flex items-center justify-evenly overflow-hidden pb-20 items-center min-w-[80rem]">
          <div className="text-center w-[35%] h-[40%] mb-4 min-w-[30rem] relative">
            <div className="text-3xl font-bold pb-4">이미지 클릭시 프로젝트 사이트로 이동</div>
            <div className="w-full h-full relative">
              {overmarket ? (
                <>
                  <div
                    className="absolute bg-black w-full h-[100%] opacity-50 cursor-pointer"
                    onMouseLeave={() => {
                      setOvermarket(false);
                    }}
                    onMouseEnter={() => {
                      setOvermarket(true);
                    }}
                    onClick={() => {
                      window.open("https://www.dpclfk.com/market/");
                    }}
                  ></div>
                  <div className="">
                    <div
                      className="absolute w-full cursor-pointer pt-8"
                      onMouseLeave={() => {
                        setOvermarket(false);
                      }}
                      onMouseEnter={() => {
                        setOvermarket(true);
                      }}
                      onClick={() => {
                        window.open("https://www.dpclfk.com/market/");
                      }}
                    >
                      <div className="text-xl font-bold text-white">Hamster Market</div>
                      <div className="flex justify-center">
                        <div className="rounded h-[3px] bg-white w-[40%] my-1"></div>
                      </div>
                      <div className="text-xl font-bold text-white">
                        NaverMap, OAuth, react, typescript <br /> 사용한 쇼핑몰 사이트
                      </div>
                      <div className="font-bold pt-4 text-white text-xl">
                        제작기간: 4주 / 제작인원: 4인
                      </div>
                      <div className="font-bold pt-4 flex items-center gap-4 justify-center text-white">
                        <BiLogoTypescript size={40} />
                        <FaReact size={40} />
                        <RiTailwindCssFill size={40} />
                        <SiSequelize size={40} />
                        <RiNodejsLine size={40} />
                        <GrMysql size={40} />
                        <BiLogoMongodb size={40} />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              <img
                className="w-full h-[20%]"
                src={market}
                alt="market"
                onMouseEnter={() => {
                  setOvermarket(true);
                }}
              />
            </div>
            {/* <div className="font-bold pt-4">
              미션가이드에 따라 택배사가 <br />
              직거래 하는 사이트 제작
            </div>
            <div className="font-bold pt-4">제작기간: 4주 / 제작인원: 4인</div>
            <div className="font-bold pt-4 flex items-center gap-4 justify-center">
              <div>Skill:</div>
              <BiLogoTypescript size={40} />
              <FaReact size={40} />
              <RiTailwindCssFill size={40} />
              <SiSequelize size={40} />
              <RiNodejsLine size={40} />
              <GrMysql size={40} />
              <BiLogoMongodb size={40} />
            </div> */}
            <div className="font-bold pt-4 flex items-center gap-4 justify-center text-3xl">
              <div>Document URL:</div>
              <FaGoogleDrive
                size={40}
                className="cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1yF5krXC3MG6jJQ8BB1w6SqyAyIUU7y94?usp=sharing"
                  )
                }
              />
            </div>
            <div className="font-bold pt-4 flex items-center gap-4 justify-center text-3xl">
              <div>Github URL:</div>
              <FaGithub
                className="cursor-pointer"
                size={40}
                onClick={() => window.open("https://github.com/dpclfk/TeamHamster")}
              />
            </div>
          </div>
          <div className="text-3xl text-center w-[35%] h-[40%] mb-4 min-w-[30rem]">
            <div className="font-bold pb-4">이미지 클릭시 프로젝트 사이트로 이동</div>
            <div className="w-full h-full relative">
              {lostarkcalc ? (
                <>
                  <div
                    className="absolute bg-black w-full h-[100%] opacity-50 cursor-pointer"
                    onMouseLeave={() => {
                      setLostarkcalc(false);
                    }}
                    onMouseEnter={() => {
                      setLostarkcalc(true);
                    }}
                    onClick={() => {
                      window.open("https://lostarkcalc.dpclfk.com/");
                    }}
                  ></div>
                  <div className="">
                    <div
                      className="absolute w-full cursor-pointer pt-8"
                      onMouseLeave={() => {
                        setLostarkcalc(false);
                      }}
                      onMouseEnter={() => {
                        setLostarkcalc(true);
                      }}
                      onClick={() => {
                        window.open("https://lostarkcalc.dpclfk.com/");
                      }}
                    >
                      <div className="text-xl font-bold text-white">Lostark Calc</div>
                      <div className="flex justify-center">
                        <div className="rounded h-[3px] bg-white w-[40%] my-1"></div>
                      </div>
                      <div className="text-xl font-bold text-white">
                        게임 아이템 제작시 이득 및 손해를 <br />
                        확인할수있는 사이트 제작
                      </div>
                      <div className="font-bold pt-4 text-white text-xl">
                        제작기간: 2주 / 제작인원: 1인
                      </div>
                      <div className="font-bold pt-4 flex items-center gap-4 justify-center text-white">
                        <BiLogoTypescript size={40} />
                        <FaReact size={40} />
                        <RiTailwindCssFill size={40} />
                        <SiNestjs size={40} />
                        <GrMysql size={40} />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              <img
                className="w-full h-[20%]"
                src={calc}
                alt="calc"
                onMouseEnter={() => {
                  setLostarkcalc(true);
                }}
              />
            </div>
            {/* <img
              className="w-full h-full border cursor-pointer"
              src={calc}
              alt="calc"
              onClick={() => {
                window.open("https://lostarkcalc.dpclfk.com/");
              }}
            />
            <div className="font-bold pt-4">
              게임 아이템 제작시 이득 및 손해를 <br />
              확인할수있는 사이트 제작
            </div>
            <div className="font-bold pt-4">제작기간 : 2주 / 제작인원 : 1인</div>
            <div className="font-bold pt-4 flex items-center gap-4 justify-center">
              <div>Skill:</div>
              <BiLogoTypescript size={40} />
              <FaReact size={40} />
              <RiTailwindCssFill size={40} />
              <SiNestjs size={40} />
              <GrMysql size={40} />
            </div> */}
            <div className="font-bold pt-4 flex items-center gap-4 justify-center">
              <div>Document URL:</div>
              <FaGoogleDrive
                className="cursor-pointer"
                size={40}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1xzu0fHAgBrmm2vm_pldz97ZEGT9GzPmf?usp=sharing"
                  )
                }
              />
            </div>
            <div className="font-bold pt-4 flex items-center gap-4 justify-center">
              <div>Github URL:</div>
              <FaGithub
                className="cursor-pointer"
                size={40}
                onClick={() => {
                  window.open("https://github.com/dpclfk/lostarkcalc");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
