import market from "../market.png";
import calc from "../calc.png";

const Portfolio = (): JSX.Element => {
  return (
    <>
      <div className="w-full h-screen bghalf">
        <div className="pt-8 pl-20 text-5xl">Portfolio</div>
        <div className="flex items-center justify-evenly h-[90%] overflow-hidden pb-20">
          <div className="w-[35%] h-[40%] mb-4">
            <div className="text-3xl text-center font-bold pb-4">
              이미지 클릭시 프로젝트 사이트로 이동
            </div>
            <img
              className="w-full h-full border cursor-pointer"
              src={market}
              alt="market"
              onClick={() => {
                window.open("https://www.dpclfk.com/market/");
              }}
            />
            <div className="text-3xl text-center font-bold pt-4">
              미션가이드에 따라 택배사가 <br />
              직거래 하는 사이트 제작
            </div>
          </div>
          <div className="w-[35%] h-[40%] mb-4">
            <div className="text-3xl text-center font-bold pb-4">
              이미지 클릭시 프로젝트 사이트로 이동
            </div>
            <img
              className="w-full h-full border cursor-pointer"
              src={calc}
              alt="calc"
              onClick={() => {
                window.open("https://lostarkcalc.dpclfk.com/");
              }}
            />
            <div className="text-3xl text-center font-bold pt-4">
              게임 아이템 제작시 이득 및 손해를 <br />
              확인할수있는 사이트 제작
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
