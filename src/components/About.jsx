const About = () => {
  return (
    <div
      id="about"
      className="mt-24 flex flex-col md:flex-row w-full h-screen bg-amber-800"
    >
      <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
        <img
          src="https://cdn.hihello.me/v/5bd5c5df-9e37-4af1-b3e2-00f5daf1018a.png-large-preserve-ratio"
          alt="About Us"
          className="w-full h-auto object-cover rounded-tr-full rounded-bl-ful"
        />
      </div>

      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-800 mb-4">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Our hair stylists have years of experience and a passion for
            creating beautiful hairstyles.
            <br />
            <br />
            We stay up to date with the latest trends and techniques to ensure
            you receive the best service. Visit us today and experience the
            difference!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
