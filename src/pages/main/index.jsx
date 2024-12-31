import { Button } from "antd";

const MainIndex = () => {
  return (
    <>
      <div className="h-832 flex flex-col justify-center items-center">
        <p className="text-2xl pb-4">{"<  Ai와  함께  만드는  카드뉴스  >"}</p>
        <div className="relative font-tenada text-120 leading-none text-shadow">
          <p>포스팅</p>
          <p>
            <span className="px-[15px]">3</span>초면
          </p>
          <p>충분해</p>
          <img
            src="/3D-rocket.png"
            alt="rocket"
            className="w-260 h-260 -rotate-12 absolute -right-44 -bottom-16 drop-shadow-default"
          />
        </div>
        <Button type="primary" className="mt-10 w-44 h-14 text-xl shadow-lg">
          시작하기
        </Button>
      </div>
    </>
  );
};

export default MainIndex;
