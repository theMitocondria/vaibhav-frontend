
const ProductCard = ({image, title, desc}) => {
 console.log(image)
  return (
    <div className="mx-4 flex justify-center flex-col">
        <div className={`w-[500px] h-[500px] bg-${image} flex justify-center items-center bg-cover bg:place-content-center  hover:bg-none text-transparent  hover:transition-all hover:duration-700 transition-all duration-800  hover:text-black z-4`}>
            <p >{desc}</p>
        </div>
        <p className="text-center">{title}</p>
        <button>Enquire Now</button>
      {/* <div
        className="hover-image relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src="https://picsum.photos/200/200" alt="Image" />
        <p
          className={`${
            visible ? 'hidden' : 'block'
          } absolute inset-0 flex items-center justify-center text-2xl text-gray-900 bg-opacity-75 bg-gray-100`}
        >
          This is the text that will appear when you hover over the image.
        </p>
      </div> */}
    </div>
  );
};

export default ProductCard;
