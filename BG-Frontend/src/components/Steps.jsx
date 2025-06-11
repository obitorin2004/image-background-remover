import { assets } from '../assets';

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 bg-custom-blue">
      <h1 className="text-center text-2xl md:text-3xl pb-1 lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Steps to remove background <br /> image in seconds
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 md:space-x-5 xl:mt-24 justify-center">
      
        <div className="flex items-start gap-4 bg-gray-800 border border-gray-700 p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-500 w-full lg:w-1/3 min-h-[250px]">
          <img 
            className="w-9 h-9" 
            src={assets['upload-icon']} 
            alt="upload icon"
          />
          <div>
            <p className="text-xl font-medium text-white">Upload Image</p>
            <p className="text-sm text-gray-300 mt-1 line-clamp-3">
              Select the image you want to edit. Our tool supports various formats, including JPG, PNG, and more, ensuring a seamless experience.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-gray-800 border border-gray-700 p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-500 w-full lg:w-1/3 min-h-[250px]">
          <img 
            className="w-9 h-9" 
            src={assets['remove-icon']} 
            alt="remove icon"
          />
          <div>
            <p className="text-xl font-medium text-white">Remove Image</p>
            <p className="text-sm text-gray-300 mt-1 line-clamp-3">
              With a single click, remove the background from your image. Our AI-powered tool ensures precise and clean results, making your images look professional.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-gray-800 border border-gray-700 p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-500 w-full lg:w-1/3 min-h-[250px]">
          <img 
            className="w-9 h-9" 
            src={assets['download-icon']} 
            alt="download icon"
          />
          <div>
            <p className="text-xl font-medium text-white">Download Image</p>
            <p className="text-sm text-gray-300 mt-1 line-clamp-3">
              Once you are satisfied with the edits, download your image in JPEG format. Your processed image will be ready to use in your projects!
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className='text-lg text-white'>Experience the fastest and most accurate background removal tool-simplifying your workflow and saving you time!</p>

      </div>
    </div>
  );
};

export default Steps;
