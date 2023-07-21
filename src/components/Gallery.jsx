/* eslint-disable jsx-a11y/alt-text */
function Gallery() {
  const images = ["https://ailenhairstylistweb.s3.amazonaws.com/african-american-1180847_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/woman-3288365_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/barbershop-6964558_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/hair-1744959_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/estetica-2901113_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/haircut-834280_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/hairdresser-3572052_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/beauty-2537562_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/beauty-354565_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/blonde-4751991_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/woman-3699875_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/expocosmetics-1312188_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/females-1450050_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/beauty-2309516_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/woman-3054812_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/beauty-salon-2521943_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/hair-5160176_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/girl-1335663_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/girl-2099363_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/girl-487053_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/girl-746522_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/girl-788813_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/girl-864107_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/hair-6597025_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/haircut-2664087_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/haircut-2664088_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/hairdresser-1516214_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/hairdresser-1555599_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/makeup-1442912_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/makeup-7014565_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/model-429733_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/model-4713906_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/people-2559662_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/portrait-4773351_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/the-girl-is-lying-on-the-floor-1386195_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/wedding-6539887_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/woman-1326709_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/portrait-4713877_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/woman-1853939_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/woman-1869208_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/woman-2593366_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/woman-3116587_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/woman-3136667_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/woman-3190852_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/woman-5667299_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/woman-7014559_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/young-girl-510441_1280.jpg",
  "https://ailenhairstylistweb.s3.amazonaws.com/young-man-1281282_1280.jpg"];
    return (
      <div className="container mt-24 mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="text-xl mb-5 font-semibold">Ailen Gallery </div>
          {images.map((image, index) => (
            <div key={index} className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
              <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md" src={image} 
              />
            </div>
          ))}
        </div>
      </div>
    );
}

export default Gallery;
