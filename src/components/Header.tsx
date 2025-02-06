import ParticleCanvas from "./ParticleCanvas";

const Header = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-96 ">
      <ParticleCanvas />
      <div className="">
        <div className="text-5xl font-thin leading-[1] text-center sm:text-6xl">
          Jeffrey Hernandez
        </div>
        <div className="relative m-auto my-4 w-fit h-fit">
          <div className="absolute bottom-0 -left-3 animate-wave z-[90]">
            <div className="relative z-[90] text-3xl h-fit w-fit">🖐️</div>
          </div>
          <img
            src={"/Me.jpg"}
            className="relative rounded-full  size-24 z-[89] m-auto border-2 border-secondary shadow-md"
          ></img>
        </div>

        <div className="mt-4 text-center z-[90] relative">
          Hi, my name is Jeff and I like to build software!
        </div>
      </div>
      <div className="absolute flex flex-col bottom-0 z-[20] w-full h-36 pointer-events-none">
        <div className="flex h-full bg-gradient-to-t from-background"></div>
        <div className="w-full h-5 bg-background" />
      </div>
    </div>
  );
};

export default Header;
