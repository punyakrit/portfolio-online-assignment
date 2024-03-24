
function Project({ data }: any) {
  console.log(data.projects);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl flex justify-center font-semibold  mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects.map((project: any) => (
          <div key={project._id} className="bg-violet-800 rounded-3xl shadow-xl overflow-hidden">
            <img src={project.image.url} alt={project.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-white mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string) => (
                  <span key={tech} className="bg-gray-800 rounded-full px-3 py-2 text-sm text-white/70">{tech}</span>
                ))}
              </div>
              <div className="mt-4">
                {project.liveurl && (
                  <a href={project.liveurl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4">Live Demo</a>
                )}
                {project.githuburl && (
                  <a href={project.githuburl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
