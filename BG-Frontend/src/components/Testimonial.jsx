const Testimonial = () => {
  const reviews = [
    {
      name: "John Doe",
      initial: "J",
      rating: 5,
      text: "This background removal tool is amazing! It saved me hours of work and the results are incredibly professional. The interface is intuitive and the processing speed is remarkable."
    },
    {
      name: "Sarah Smith",
      initial: "S",
      rating: 5,
      text: "The quality of the background removal is exceptional. I use it for my e-commerce products, and it has significantly improved my product presentations. Highly recommended!"
    }
  ];

  return (
    <div className="pb-10 md:py-20 mx-4 lg:mx-44">
      <h1 className="text-center text-2xl md:text-3xl pb-1 lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Customer Testmonials
      </h1>
      
      <div className="flex flex-col lg:flex-row gap-6 md:space-x-5 xl:mt-24 justify-center">
        {reviews.map((review, index) => (
          <div key={index} className="flex items-start gap-4 bg-gray-800 border border-gray-700 p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-500 w-full lg:w-1/2">
            {/* Round Avatar with Initial Above */}
            <div className="relative group">
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs text-white bg-blue-600 px-2 py-0.5 rounded-full">
                {review.initial}
              </span>
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold ring-2 ring-white/20">
                <span className={review.initial.length > 1 ? 'text-sm' : 'text-xl'}>
                  {review.initial.charAt(0)}
                </span>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2">
                <p className="text-xl font-medium text-white">{review.name}</p>
                <div className="flex text-yellow-400">
                  {'★'.repeat(review.rating)}
                </div>
              </div>
              <p className="text-sm text-gray-300 mt-3">
                "{review.text}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;