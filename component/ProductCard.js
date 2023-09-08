import Link from "next/link";

const ProductCard = ({image, title, desc}) => {
 console.log(image)
  return (
    <div className="mx-4 my-4  bg-white shadow-sm rounded-xl flex justify-center flex-col">
        <div className={`sm:w-[500px] rounded-t-xl sm:h-[500px] w-[300px] h-[300px] bg-${image} flex justify-center items-center bg-cover bg-center  hover:bg-none text-transparent  hover:transition-all hover:duration-700 transition-all duration-800  hover:text-black z-4`}>
            <p >{desc}</p>
        </div>
        <p className="text-center bg-white font-bold text-xl">{title}</p>
        <Link scroll={true} href="#contactus" className=" bg-black hover:scale-x-[1.1] hover:transition-all hover:duration-300  text-white w-fit m-auto px-4 my-4 py-1 rounded-full ">Enquire Now</Link>
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
