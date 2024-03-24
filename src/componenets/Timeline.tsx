
function Timeline({ data }: any) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-semibold mb-8 text-center">Timeline</h2>
      <div className="relative">
        <div className="absolute h-full w-2 bg-gray-300 left-3"></div>
        {data.timeline.map((item: any) => (
          <div key={item._id} className="relative mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-semibold">
                {item.sequence}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white">{item.company_name}</h3>
                <p className="text-white/80">{item.jobTitle}</p>
                <p className="text-white/70">{item.jobLocation}</p>
              </div>
            </div>
            <div className="ml-12">
              <p className="text-white/60 mb-4">{item.summary}</p>
              <ul className="list-disc list-inside">
                {item.bulletPoints.map((point: string, index: number) => (
                  <li key={index} className="text-white/60">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
