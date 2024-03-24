
function Service({ data }: any) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-semibold  mb-8 flex justify-center">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.services.map((service: any) => (
          <div key={service._id} className="bg-violet-200 rounded-xl shadow-md overflow-hidden hover:bg-violet-400 transition-colors duration-400 ease-in-out cursor-pointer">
            <img src={service.image.url} alt={service.name} className=" bg-white h-64 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-2 font-semibold">Charge: {service.charge}</p>
              <p className="text-gray-600 mb-4">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
