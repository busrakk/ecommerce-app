import React, { useState } from "react";
import swal from "sweetalert";
import {
  productUserListApi,
  categoryDropdownApi,
  brandDropdownApi,
  productDeleteApi,
} from "../../../service/serviceApi";
import useDelayCallback from "../../helpers/useDelayCallback";
import Modal from "./elements/Modal";
import AddProduct from "./AddProduct";
import { FaEdit } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin7Fill } from "react-icons/ri";
import Loader from "../../Loader";

const UserProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [show, setShow] = useState(false); //show of hide modal
  const [productId, setProductId] = useState(0);
  const DEFAULT_CATEGORY = { label: "Select Category", value: "" };
  const [categoryList, setCategoryList] = useState([DEFAULT_CATEGORY]);
  const DEFAULT_BRAND = { label: "Select Brand", value: "" };
  const [brandList, setBrandList] = useState([DEFAULT_BRAND]);

  useDelayCallback(() => {
    getProductList();
    getCategoryDropdown();
    getBrandDropdown();
  }, []);

  const getProductList = () => {
    productUserListApi().then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          setIsLoading(false);
          setProductList(res.data.data);
        }
      } else {
        setProductList([]);
      }
    });
  };

  const removeProduct = (removeId) => {
    const newProduct = productList.filter((product) => product.id !== removeId);
    setProductList(newProduct);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    swal({
      title: "Emin misin?",
      text: "Bu bilgileri bir kez sildikten sonra kurtaramazsınız!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        productDeleteApi(id).then((res) => {
          if (res.data.success) {
            if (res.data.status === "success") {
              swal({
                title: "Success",
                text: res.data.message,
                icon: "success",
                timer: 2000,
                buttons: false,
              });
              removeProduct(id);
            }
          } else {
            swal({
              title: "Error",
              text: res.data.message,
              icon: "error",
              timer: 2000,
              buttons: false,
            });
          }
        });
      }
    });
  };

  const onClose = (status = "close") => {
    if (status === "success") {
      getProductList();
    }
    setShow(false);
  };

  const handleModal = (isShow = false, newProductId = 0) => {
    setProductId(newProductId);
    setShow(isShow);
  };

  const renderTableData = () => {
    let view = [];
    productList.map((item) => {
      view.push(
        <div key={item.id}>
          <div className="group group-hover:bg-opacity-10 transition duration-500 relative transform  hover:scale-105 shadow-md bg-gray-50 sm:p-25 py-28 px-10 flex justify-center items-center">
            <img
              className="group-hover:opacity-60 w-[250px] h-[180px] transition duration-500"
              src={item.image}
              alt={item.name}
            />
            <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
              <div>
                <p className="group-hover:opacity-60 pt-10 transition duration-500 text-lg leading-5 text-gray-600">
                  {item.name} - {item.user.name}
                </p>
              </div>
              <div>
                <p className="group-hover:opacity-60 transition duration-500 text-md font-semibold leading-5 text-gray-800">
                  $ {item.price}
                </p>
              </div>
            </div>
            <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
              <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
              <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
            </div>
            <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
              {/* <Link to={`/product/${item?.id}`}>
                <AiFillEye size={20} />
              </Link> */}
              <button onClick={() => handleModal(true, item.id)}>
                <FaEdit size={20} />
              </button>
              <button onClick={(e) => handleDelete(e, item.id)}>
                <RiDeleteBin7Fill size={20} />
              </button>
            </div>
            <div className="absolute top-4 right-6">
              {item.type ? (
                <div className="inline-block relative py-1 text-lg">
                  <div className="absolute inset-0 text-green-200 flex">
                    <svg height="100%" viewBox="0 0 50 100">
                      <path
                        d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="flex-grow h-full -ml-px bg-green-200 rounded-md rounded-l-none"></div>
                  </div>
                  <span className="relative text-green-500 uppercase font-semibold pr-px">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Satılık
                    <span>&nbsp;</span>
                  </span>
                </div>
              ) : (
                <div className="inline-block relative py-1 text-lg">
                  <div className="absolute inset-0 text-red-200 flex">
                    <svg height="100%" viewBox="0 0 50 100">
                      <path
                        d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="flex-grow h-full -ml-px bg-red-200 rounded-md rounded-l-none"></div>
                  </div>
                  <span className="relative text-red-500 uppercase font-semibold pr-px">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Aranıyor
                    <span>&nbsp;</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      );
      return view;
    });
    if (view.length === 0) {
      return (
        <div className="flex justify-center">
          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <p className="text-base font-medium m-2 text-gray-800">
                Kayıtlı ürün bulunmamaktadır.
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return view;
    }
  };

  const getCategoryDropdown = () => {
    categoryDropdownApi()
      .then((res) => {
        if (res.data.success) {
          if (res.data.status === "success") {
            let allOptions = [];
            if (res.data.data.length > 0) {
              allOptions = res.data.data.map((item) => {
                return {
                  value: item.id,
                  label: item.name,
                };
              });
              setCategoryList([DEFAULT_CATEGORY, ...allOptions]);
            }
          }
        }
      })
      .catch((error) => {
        console.log("something is wrong" + error);
      });
  };

  const getBrandDropdown = () => {
    brandDropdownApi()
      .then((res) => {
        if (res.data.success) {
          if (res.data.status === "success") {
            let allOptions = [];
            if (res.data.data.length > 0) {
              allOptions = res.data.data.map((item) => {
                return {
                  value: item.id,
                  label: item.name,
                };
              });
              setBrandList([DEFAULT_BRAND, ...allOptions]);
            }
          }
        }
      })
      .catch((error) => {
        console.log("something is wrong" + error);
      });
  };

  return (
    <div className="col-span-10 pb-4">
      <div className="rounded-t rounded-md bg-white mb-0 px-6 pt-10">
        <div className="text-center pb-6 flex justify-between px-2 items-center">
          <h6 className="text-blueGray-700 text-xl uppercase font-bold">
            Ürünlerİm
          </h6>
          <div className="flex justify-end pb-4">
            <button
              onClick={() => handleModal(true, 0)}
              className="group relative inline-flex items-center overflow-hidden rounded bg-gray-50 px-8 py-3 border text-gray-800 focus:outline-none focus:ring"
            >
              <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                <AiOutlinePlus size={20} />
              </span>

              <span className="text-sm font-medium transition-all group-hover:mr-4">
                Yeni Ürün Ekle
              </span>
            </button>
          </div>
        </div>
      </div>
      {isLoading && <Loader />}
      <div className="flex flex-col pb-10 bg-white">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 gap-x-8 gap-y-8 items-center px-6">
          {!isLoading && renderTableData()}
        </div>
      </div>

      <Modal
        title={
          productId !== 0 ? (
            <div className="rounded-t mb-0 px-6 pt-16">
              <div className="text-center flex justify-between px-4 items-center">
                <h6 className="text-blueGray-700 text-xl uppercase font-bold">
                  Ürünü Güncelle
                </h6>
              </div>
            </div>
          ) : (
            <div className="rounded-t mb-0 px-6 pt-16">
              <div className="text-center flex justify-between px-4 items-center">
                <h6 className="text-blueGray-700 text-xl uppercase font-bold">
                  Yeni Ürün Ekle
                </h6>
              </div>
            </div>
          )
        }
        onClose={onClose}
        show={show}
      >
        <AddProduct
          onClose={onClose}
          categoryList={categoryList}
          brandList={brandList}
          productId={productId}
        />
      </Modal>
    </div>
  );
};

export default UserProductList;
