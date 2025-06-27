import { createContext, useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Cookies from 'js-cookie';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

// const backendUrl = process.env.REACT_APP_API_URL;
const backendUrl = "https://image-background-remover-2.onrender.com";



  const removeBg = async (image) => {
    try {
      setIsLoading(true);
      setImage(image);
      setResultImage(null);
      navigate('/result');

      const formData = new FormData();
      if (!image) {
        throw new Error('Please select an image');
      }
      formData.append('image', image);

      // Check if backend is reachable
      const { data } = await axios.post(`${backendUrl}/api/images/remove-bg`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        timeout: 30000,
        validateStatus: function (status) {
          return status >= 200 && status < 500;
        }
      });

      if (data.success && data.resultImage) {
        setResultImage(data.resultImage);
        toast.success('Background removed successfully!');
      } else {
        throw new Error(data.message || 'Failed to process image');
      }
    } catch (error) {
      let errorMessage = 'Failed to process image';
      
      if (error.code === 'ECONNREFUSED') {
        errorMessage = 'Cannot connect to server. Please check if backend is running.';
      } else if (error.response) {
        errorMessage = error.response.data.message || errorMessage;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast.error(errorMessage);
      console.error('Remove BG Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    backendUrl,
    removeBg,
    image,
    setImage,
    resultImage,
    setResultImage,
    isLoading
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
// console.log("Backend URL:", backendUrl);


export default AppContextProvider;