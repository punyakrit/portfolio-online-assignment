
function Testimonials({ data }: any) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.testimonials.map((testimonial: any) => (
          <div key={testimonial._id} className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex items-center justify-center bg-gray-200 h-32">
              <img src={testimonial.image.url} alt={testimonial.name} className="h-20 rounded-full" />
            </div>
            <div className="py-6 px-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{testimonial.name}</h2>
              <p className="text-gray-600 mb-4">{testimonial.review}</p>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
