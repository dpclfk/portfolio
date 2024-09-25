import info from "../info.jpg";

const Info = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-infocolor">
      <div className="w-[50%] flex justify-center items-center">
        <img className="w-[60%] h-[70%] border" src={info} alt="내 사진" />
      </div>
      <div className="w-[50%] flex items-center">
        <div className="text-7xl">
          항상 정진하는 개발자 <br />
          <br />
          이승배입니다.
        </div>
      </div>
    </div>
  );
};

export default Info;
