function About({ data }: any) {
  // Check if data.about exists before accessing its properties


  return (
    <div className="w-screen mt-8 px-10">
      <div className="flex">
        <div className="text-white/60 flex flex-col justify-center w-2/3">
          <span className="text-8xl">
            Hi, I am <span className="text-white">{data.about.name}</span>, an{" "}
            <span className="text-white">{data.about.title}</span>
          </span>
          <span className="text-lg my-16 font-mono">{data.about.description}</span>
        </div>
        <div className="flex justify-end w-1/3">
          <img
            src={data.about.avatar.url}
            alt="Avatar"
            className="rounded-t-full h-[600px]"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
