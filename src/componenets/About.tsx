function About({ data }: any) {
  // Check if data.about exists before accessing its properties


  return (
    <div className="w-screen my-12 md:px-10 px-4">
      <div className="md:flex">
        <div className="text-white/60 flex flex-col justify-center xl:w-2/3 md:w-3/5">
          <span className="xl:text-8xl lg:text-6xl text-4xl">
            Hi, I am <span className="text-white">{data.about.name}</span>, an{" "}
            <span className="text-white">{data.about.title}</span>
          </span>
          <span className="lg:text-lg text-sm xl:my-16 md:my-12 my-8 font-mono">{data.about.description}</span>
        </div>
        <div className="flex justify-center md:justify-end xl:w-1/3 md:w-2/5">
          <img
            src={data.about.avatar.url}
            alt="Avatar"
            className="rounded-t-full lg:h-[600px] md:h-[500px] h-[450px]"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
