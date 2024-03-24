function AppBar() {
  return (
    <div className=" flex  justify-center font-poppins text-sm md:text-lg lg:text-xl py-5 w-screen fixed ">
      <div className="flex justify-center space-x-2 md:space-x-10 lg:space-x-16 bg-white/10 py-2 px-2 md:py-4 md:px-5 lg:py-7 lg:px-10 rounded-full w-max backdrop-blur-lg z-10">
        <div className="cursor-pointer">Home</div>
        <div className="cursor-pointer">Service</div>
        <div className="cursor-pointer">Skills</div>
        <div className="cursor-pointer">Projects</div>
        <div className="cursor-pointer">Timeline</div>
        <div className="cursor-pointer">Conatct Us</div>
      </div>
    </div>
  );
}

export default AppBar;
