const ServiceStep = () => {
  return (
    <div className="h-208 flex justify-center items-center">
      <div className="h-max flex flex-col justify-center items-center">
        <p className="relative">
          <img
            src="/highlight.png"
            alt="highlight"
            className="w-40 h-17 absolute -top-5 -left-7"
          />
          <span className="text-3xl font-aggro font-bold">4 STEP</span>
          <span className="text-3xl font-aggro font-light">으로 끝내는</span>
        </p>
        <p className="text-3xl font-aggro font-light">초간단 카드뉴스 제작!</p>
      </div>
      <div className="h-max ps-28">
        <img src="/steps.svg" alt="cardnews-1" className="h-max" />
      </div>
      <div className="h-max ps-10">
        <section className="pt-1 pb-14">
          <p className="text-3xl font-bold">문서 입력하기</p>
          <p className="text-base">카드뉴스로 만들 내용을 입력해주세요</p>
        </section>
        <section className="pt-1 pb-14">
          <p className="text-3xl font-bold">카드뉴스 생성하기</p>
          <p className="text-base">AI를 이용해서 카드뉴스를 생성하세요</p>
        </section>
        <section className="pt-1 pb-14">
          <p className="text-3xl font-bold">카드뉴스 수정하기</p>
          <p className="text-base">만들어진 카드뉴스를 원하는대로 수정하세요</p>
        </section>
        <section>
          <p className="text-3xl font-bold">결과물 다운로드하기</p>
          <p className="text-base">완성된 카드뉴스를 다운로드 하세요</p>
        </section>
      </div>
    </div>
  );
};

export default ServiceStep;
