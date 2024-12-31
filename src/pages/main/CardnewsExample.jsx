const CardnewsExample = () => {
  return (
    <div className="h-300 bg-blue-gradient flex justify-center items-center">
      <div className="h-max flex flex-col justify-center items-center">
        <p className="text-3xl pb-10">번거로운 카드뉴스 제작은</p>
        <p className="text-6xl font-aggro font-bold pb-10">이제 그만!</p>
        <p className="text-3xl">Ai로 쉽고 빠르게</p>
        <p className="text-3xl">카드뉴스를 만들어보세요</p>
      </div>
      <div className="group h-max relative pl-44">
        <img
          src="/cardnews-1.png"
          alt="cardnews-1"
          className="
            w-95 h-95 -rotate-2 border-4 scale-105 
            relative right-0 z-10 
            group-hover:-rotate-3 group-hover:right-2 group-hover:scale-100
            transition-all duration-300
            border-white drop-shadow-default"
        />
        <img
          src="/cardnews-2.png"
          alt="cardnews-2"
          className="
            w-95 h-95 rotate-2 border-4 
            absolute top-20 left-72 z-0 
            group-hover:rotate-3 group-hover:top-24 group-hover:left-72 group-hover:z-20 group-hover:scale-105 
            transition-all duration-300
            border-white drop-shadow-default"
        />
      </div>
    </div>
  );
};

export default CardnewsExample;
