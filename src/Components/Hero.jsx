import img from "/src/assets/Jordan.png";

const Hero = () => {
  return (
    <div className="grid grid-rows-2 bg-slate-950 text-white font-bold px-10 h-screen">
      <div className="grid grid-cols-3 gap-5">
        {/* First Col */}
        <div className="flex flex-col my-50">
          <h1 className="text-5xl lg:text-7xl font-bold ">AIR JORDAN</h1>
          <p className="my-5  font-regular text-sm tracking-wide leading-7 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic
            quia doloribus adipisci ullam vitae aliquid maiores natus, iure enim
            harum quos aspernatur minima nisi illum fugit. Obcaecati, recusandae
            consectetur.
          </p>
          <div className="flex gap-5 w-[75%]">
            <button className="bg-orange-400/90 rounded-4xl py-2 md:py-3 w-full lg:py-4 hover:bg-orange-800 duration-300 ">
              BUY NOW
            </button>
            <button className="bg-amber-400/90 rounded-4xl py-2 md:py-3 lg:py-4 w-full hover:bg-orange-800 duration-300">
              ADD TO CART
            </button>
          </div>
        </div>
        {/* Second Col */}
        <div className="grid grid-cols-4 gap-5 z-1">
          <div className=" bg-orange-400/90 h-[calc(100vh-20rem)]"></div>
          <div className=" bg-orange-400/90 h-[calc(100vh-20rem)]"></div>
          <div className=" bg-orange-400/90 h-[calc(100vh-20rem)]"></div>
          <div className=" bg-orange-400/90 h-[calc(100vh-20rem)]"></div>
        </div>
        {/* Third COl */}
        <div className="flex flex-row-reverse my-20">
          <div className="grid grid-rows-3">
            <div className="w-25 h-25 rounded-full border-3 border-white">
              <img src={img} className="object-cover" alt="Air Jordan" />
            </div>
            <div className="w-25 h-25 rounded-full border-3 border-white">
              <img src={img} alt="Air Jordan" />
            </div>
            <div className="w-25 h-25 rounded-full border-3 border-white">
              <img src={img} alt="Air Jordan" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="bg-gradient-to-t from-gray-500 via-gray-900 to-gray-950 bg-clip-text text-transparent text-[15rem] text-center -z-10">
          AIR JORDAN
        </h1>
      </div>
    </div>
  );
};

export default Hero;
