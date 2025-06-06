import video from '../assets/bgremove_video.mp4';

const Header = () => {
  return (
    <div className="flex items-center justify-between flex-row max-md:flex-col gap-y-10 px-4 mb-14 mt-10 lg:px-44 sm:mt-20">
      {/* left side */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl xl:text-5xl font-bold text-white leading-tight">
          Remove the
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-600 to-fuchsia-300 bg-clip-text text-transparent">
            {' '}
            background
          </span>{' '}
          from
          <br className="hidden md:block" /> images for free
        </h1>
        <p className="my-6 text-[15px] text-white w-[90%]">
          Transform your photos effortlessly with our AI-powered background
          removal tool.
          <br className="max-sm:hidden" /> Whether for social media, marketing,
          or personal projects, our tool is designed to make your images stand
          out.
        </p>
        <div>
          <input type="file" id="upload" accept="image/*" hidden />
          <label
            className="inline-flex gap-3 px-8 py-3.5 md:px-6 md:py-2.5 rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-400 text-white"
            htmlFor="upload"
          >
            <span>upload image</span>
          </label>
        </div>
      </div>

      {/* right side */}
      <div className="w-full md:w-1/3 flex justify-end">
        <div className="w-full max-w-lg">
          <video
            className="rounded-3xl bg-transparent w-full h-auto"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Header;
