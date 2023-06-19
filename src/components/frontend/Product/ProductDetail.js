import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
// import useDelayCallback from "../helpers/useDelayCallback";
import { useDispatch, useSelector } from "react-redux";
import Subtitle from "../../UI/Subtitle";
import {
  getSingleProduct,
  getSingleProductStatus,
} from "../../../features/productSlice";
import { getProductSingle } from "../../../redux/services";
import { STATUS } from "../../../utils/status";
import Loader from "../../Loader";
import { addToCartApi } from "../../../service/serviceApi";
import axios from "axios";
import swal from "sweetalert";
import {
  addToCart,
  getCartMessageStatus,
  setCartMessageOff,
  setCartMessageOn,
} from "../../../features/cartSlice";
import CartMessage from "../Cart/CartMessage";
import { GoGitCompare } from "react-icons/go";
import { BsFillSuitHeartFill } from "react-icons/bs";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const product = useSelector(getSingleProduct);
  const productSingleStatus = useSelector(getSingleProductStatus);
  const cartMessageStatus = useSelector(getCartMessageStatus);

  useEffect(() => {
    dispatch(getProductSingle(id));

    if (cartMessageStatus) {
      setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
    }
  }, [cartMessageStatus]);

  if (productSingleStatus === STATUS.LOADING) {
    return <Loader />;
  }

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > product?.quantity) tempQty = product?.quantity;
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  const addToCartHandler = (product) => {
    let totalPrice = quantity * product?.price;

    dispatch(addToCart({ ...product, quantity: quantity, totalPrice }));
    dispatch(setCartMessageOn(true));
  };

  return (
    <div>
      {product && (
        <>
          <div className="container px-32">
            <Subtitle>Ürün</Subtitle>
          </div>
          <div className="container grid grid-cols-2 gap-16 rounded-lg">
            <div>
              <img
                src={product.image}
                alt={product?.name}
                className="w-full h-[500px] rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-xl font-medium uppercase mb-2">
                {product?.name}
              </h2>
              <p className="mt-4 text-gray-600">{product?.description}</p>
              <div className="flex items-baseline mb-1 space-x-6 mt-4">
                <p className="text-3xl text-primary font-semibold">
                  ${product?.price}
                </p>
                <p className="text-2xl text-gray-400 line-through">
                  ${product?.special_price}
                </p>
                {product.in_stock ? (
                  <span className="text-green-600 font-medium text-xl">
                    Stokta
                  </span>
                ) : (
                  <span className="text-red-600 font-medium text-xl">
                    Tükendi
                  </span>
                )}
              </div>
              <div className="space-y-2 mt-4">
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">
                    {product?.type ? "Ürünü Satan:" : "Ürünü Arayan:"}{" "}
                  </span>
                  <Link
                    to={`/users/${product?.["user"]?.id}`}
                    className="text-indigo-600 underline text-lg font-semibold hover:text-indigo-400"
                  >
                    {product?.["user"]?.name}
                  </Link>
                </p>
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">Marka: </span>
                  <span className="text-gray-600">
                    {product?.["brand"]?.name}
                  </span>
                </p>
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">
                    Kategory:{" "}
                  </span>
                  <span className="text-gray-600">
                    {product?.["categories"]?.name}
                  </span>
                </p>
              </div>

              {cartMessageStatus && <CartMessage />}

              <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                {product?.type ? (
                  <>
                    <div className="h-10 w-32 flex border-1 focus:outline-none rounded">
                      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent">
                        <button
                          onClick={() => decreaseQty()}
                          className=" bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-l rounded-r cursor-pointer outline-none"
                        >
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          className="focus:outline-none text-center w-full bg-gray-50 font-semibold text-md hover:text-black focus:text-black flex items-center text-gray-700  outline-none"
                          name="custom-input-number"
                          value={quantity}
                        />
                        <button
                          onClick={() => increaseQty()}
                          className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-l rounded-r cursor-pointer"
                        >
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>

                    <Link href="#">
                      <button
                        onClick={() => {
                          addToCartHandler(product);
                        }}
                        className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                      >
                        Sepete Ekle
                      </button>
                    </Link>
                  </>
                ) : (
                  <div>
                    <Link href="#">
                      <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <GoGitCompare className="w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                )}

                <Link href="#">
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <BsFillSuitHeartFill className="w-5 h-5" />
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
      )}
    </div>
  );
};

export default ProductDetail;
