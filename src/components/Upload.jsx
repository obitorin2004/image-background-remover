const Upload = () => {
  return (
    <div className="pb-10 md:py-20 mx-4 lg:mx-44 text-center">
      <h1 className="text-center text-2xl md:text-3xl pb-1 lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        See the Magic, Try Now!
      </h1>

      <div className="mt-10 flex justify-center">
        <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:scale-105 transition-all duration-500 ">
          <input type="file" id="upload" accept="image/*" hidden />
          <label
            className="inline-flex gap-3 px-8 py-3.5 md:px-6 md:py-2.5 rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-fuchsia-500 hover:scale-105 transition-all duration-400 text-white font-medium"
            htmlFor="upload"
          >
            <span>Upload Image</span>
          </label>
          <p className="text-gray-300 mt-4 text-sm">
            Upload your image and watch the background disappear instantly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upload;
