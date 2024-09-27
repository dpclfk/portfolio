import info from "../info.jpg";

const Info = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-infocolor min-w-[80rem] text-center">
      <div className="w-[40%] flex justify-center items-center">
        <img className="w-[52vh] h-[70vh] border min-w-[52vh]" src={info} alt="내 사진" />
      </div>
      <div className="w-[60%] flex justify-center items-center">
        <div className="text-6xl font-bold">
          <div>
            백엔드 개발자를 목표로삼은
            <br />
            <br />
            주니어 개발자 이승배입니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
