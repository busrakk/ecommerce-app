import { useState} from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import useDelayCallback from "../helpers/useDelayCallback";
import { productFindApi } from "../../service/serviceApi"

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  //const [isLoading, setIsLoading] = useState(true);
   let { id } = useParams(); // gelen parametreler

  useDelayCallback(() => {
    getProduct();
  }, []);

  const getProduct = () =>{
    productFindApi(id).then(res => {
      if(res.data.success){
        if(res.data.status === 'success'){
          //setIsLoading(false)
          setProduct(res.data.data)
        }
      }
      else{
        setProduct([]);
      }
      
    });
  }
  console.log(product.user_id)

  // const getProductg = () => {
  //   axios
  //     .get(`http://127.0.0.1:8000/api/product/${id}`)
  //     //.then((res) => res.json())
  //     .then((res) => {
  //       setProduct(res.data.data);
  //       console.log(res.data.data);
  //     })
  //     .catch((e) => console.log(e))
  //     .finally(() => setIsLoading(false));
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    //   {isLoading && <h4>Loading...</h4>}
    //   <ul>
    //     {!isLoading && <li> Name: {JSON.stringify(product.name)}</li>}
    //   </ul>

    <>
      {/* {isLoading && <h4>Loading...</h4>} */}
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <AiOutlineHome />
        </a>
        <span className="text-sm text-gray-400">
          <AiOutlineRight />
        </span>
        <p className="text-gray-600 font-medium">Product</p>
      </div>
      <div className="container grid grid-cols-2 gap-16 rounded-lg">
        <div>
          {/* <ImageGallery items={images} /> */}
          <img
            src="https://picsum.photos/id/1/300/280"
            alt="product"
            className="w-full h-[450px] rounded-lg"
          />
          <div className="grid grid-cols-5 gap-4 mt-4">
            <img
              src="https://picsum.photos/id/2/200/200"
              alt="product2"
              className="w-full cursor-pointer border border-primary rounded-md"
            />
            <img
              src="https://picsum.photos/id/3/200/200"
              alt="product2"
              className="w-full cursor-pointer border rounded-md"
            />
            <img
              src="https://picsum.photos/id/4/200/200"
              alt="product2"
              className="w-full cursor-pointer border rounded-md"
            />
            <img
              src="https://picsum.photos/id/5/200/200"
              alt="product2"
              className="w-full cursor-pointer border rounded-md"
            />
            <img
              src="https://picsum.photos/id/6/200/200"
              alt="product2"
              className="w-full cursor-pointer border rounded-md"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            {product.name}
          </h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius
            eum reprehenderit dolore vel mollitia optio consequatur hic
            asperiores inventore suscipit,
          </p>
          <div className="flex items-baseline mb-1 space-x-6 mt-4">
            <p className="text-3xl text-primary font-semibold">
              ${product.price}
            </p>
            <p className="text-2xl text-gray-400 line-through">
              ${product.special_price}
            </p>
            <span className="text-green-600 font-medium">In Stock</span>
          </div>
          <div className="pt-4">
            <h3 className="text-lg text-gray-800 mb-3 font-medium">Color</h3>
            <div className="flex items-center gap-2">
              <button className="border-2 border-gray-300 rounded-full w-8 h-8 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-8 h-8 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-8 h-8 focus:outline-none"></button>
            </div>
          </div>

          <div className="space-y-2 mt-4">
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600">Apex</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              <span className="text-gray-600">Sofa</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU: </span>
              <span className="text-gray-600">BE45VGRT</span>
            </p>
          </div>

          <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
            <Link href="#">
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </Link>
            <Link href="#">
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </Link>
          </div>

          <div className="flex gap-3 mt-4">
            <Link
              to="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <BsFacebook />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <BsTwitter />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <BsInstagram />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
