import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const { image, resultImage, isLoading } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!image) {
      navigate('/');
    }
  }, [image, navigate]);

  if (!image) return null;

  return (
    <div className="mx-4 my-3 lg:mx-44 min-h-[75vh]">
      <div className="bg-gray-800 rounded-lg px-8 py-6 drop-shadow-sm">
        <div className="flex flex-col sm:grid grid-cols-2 gap-8">
          <div>
            <p className="font-semibold text-white mb-2">Original</p>
            <img 
              className="rounded-md border border-gray-700 w-full h-auto" 
              src={image ? URL.createObjectURL(image) : ''} 
              alt="Original" 
            />    
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-white mb-2">Background Removed</p>
            <div className="rounded-md border border-gray-700 h-full relative bg-gray-900 overflow-hidden">
              {resultImage && (
                <img 
                  src={resultImage} 
                  alt="Result" 
                  className="w-full h-auto"
                />
              )}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                  <div className="border-4 border-blue-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {resultImage && (
        <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
          <a 
            href={resultImage} 
            download="removed-background.png"
            className="px-8 py-2.5 text-white text-sm bg-gradient-to-r from-blue-600 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700"
          >
            Download Image
          </a>
        </div>
      )}
    </div>
  );
};

export default Result;