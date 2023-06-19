import React, { useState } from "react";
import swal from "sweetalert";
import Switch from "./elements/Switch";
import useDelayCallBack from "../../helpers/useDelayCallback";
import {
  productSaveApi,
  productDetailsApi,
  productUpdateApi,
} from "../../../service/serviceApi";
import Select from "react-select";
import Loader from "../../Loader";

const AddProduct = (props) => {
  const initialData = {
    category: null,
    brand: null,
    name: "",
    description: "",
    price: "",
    special_price: "",
    quantity: "",
    in_stock: true,
    status: true,
    featured: false,
    type: false,
    oldImage: null,
    error_list: [],
  };

  const DEFAULT_CATEGORY = { label: "Select Category", value: "" };
  const [productInput, setProductInput] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [loader, setLoader] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);
  const [picture, setPicture] = useState([]);

  useDelayCallBack(() => {
    if (props.productId !== 0) {
      loadData();
    } else {
      setLoader(false);
    }
  });

  const loadData = () => {
    productDetailsApi({ id: props.productId })
      .then((res) => {
        if (res.data.success) {
          if (res.data.status === "success") {
            const tempData = {
              name: res.data.data.name,
              price: res.data.data.price,
              special_price: res.data.data.special_price,
              description: res.data.data.description,
              quantity: res.data.data.quantity,
              status: res.data.data.status === 1,
              in_stock: res.data.data.in_stock === 1,
              featured: res.data.data.featured === 1,
              type: res.data.data.type === 1,
              oldImage: res.data.data.image,
            };
            setProductInput({ ...productInput, ...tempData });
            let i = 0;
            while (i < props.categoryList.length) {
              if (props.categoryList[i].value === res.data.data.category_id) {
                setSelectedCategory(props.categoryList[i]);
              }
              i++;
            }
          }
        }
        setLoader(false);
      })
      .catch((error) => {
        console.log("something is wrong" + error);
      });
  };

  const handleImage = (e) => {
    setPicture({ image: e.target.files[0] });
  };

  const handleInput = (e) => {
    e.persist();
    setProductInput({ ...productInput, [e.target.name]: e.target.value });
  };

  const handleCreate = (formData) => {
    productSaveApi(formData).then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          swal({
            title: "Success",
            text: res.data.message,
            icon: "success",
            timer: 2000,
            buttons: false,
          });
          props.onClose("success");
        }
      } else {
        if (res.data.status === "validation-error") {
          setProductInput({ ...productInput, error_list: res.data.errors });
        } else {
          swal({
            title: "Hata",
            text: res.data.message,
            icon: "error",
            timer: 2000,
            buttons: false,
          });
        }
      }
      setIsLoading(false);
    });
  };

  const handleUpdate = (formData) => {
    productUpdateApi(props.productId, formData).then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          swal({
            title: "Success",
            text: res.data.message,
            icon: "success",
            timer: 2000,
            buttons: false,
          });
          props.onClose("success");
        }
      } else {
        if (res.data.status === "validation-error") {
          setProductInput({ ...productInput, error_list: res.data.errors });
        } else {
          swal({
            title: "Error",
            text: res.data.message,
            icon: "error",
            timer: 2000,
            buttons: false,
          });
        }
      }
      setIsLoading(false);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setProductInput({ ...productInput, error_list: [] });

    const formData = new FormData();
    formData.append("image", picture.image);
    formData.append("category", selectedCategory.value);
    formData.append("brand", selectedCategory.value);
    formData.append("name", productInput.name);
    formData.append("description", productInput.description);
    formData.append("price", productInput.price);
    formData.append("special_price", productInput.special_price);
    formData.append("quantity", productInput.quantity);
    formData.append("in_stock", productInput.in_stock === true ? 1 : 0);
    formData.append("featured", productInput.featured === true ? 1 : 0);
    formData.append("status", productInput.status === true ? 1 : 0);
    formData.append("type", productInput.type === true ? 1 : 0);

    if (props.productId !== 0) {
      handleUpdate(formData);
    } else {
      handleCreate(formData);
    }
  };

  return (
    <div className="col-span-10 bg-white shadow">
      <div className="w-full mx-auto">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            {loader === true ? (
              <Loader />
            ) : (
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                {isLoading && <div>Loading...</div>}
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-blueGray-400 font-semibold text-sm mt-3 mb-6 uppercase">
                  ÜRÜN BİLGİSİ
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="text-sm text-gray-900">
                        Kategori Adı
                      </label>
                      <div className="w-full inline-flex border">
                        <Select
                          options={props.categoryList}
                          onChange={setSelectedCategory}
                          value={selectedCategory}
                        />
                        <span className="text-danger">
                          {productInput.error_list.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="text-sm text-gray-900">Marka Adı</label>
                      <div className="w-full inline-flex border">
                        {/* <Select
                        options={props.categoryList}
                        onChange={setSelectedCategory}
                        value={selectedCategory}
                      /> */}
                        <span className="text-danger">
                          {productInput.error_list.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="text-sm text-gray-900">Ürün Adı</label>
                      <div className="w-full inline-flex border">
                        <input
                          type="text"
                          name="name"
                          onChange={handleInput}
                          value={productInput.name}
                          className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        />
                        <span className="text-danger">
                          {productInput.error_list.name}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="text-sm text-gray-900">
                        Ürün Tanımı
                      </label>
                      <div className="w-full inline-flex border">
                        <textarea
                          className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                          id="comment"
                          placeholder="Enter your comment"
                          onChange={handleInput}
                          value={productInput.description}
                          name="description"
                          rows="5"
                          cols="40"
                        ></textarea>
                        <span className="text-danger">
                          {productInput.error_list.description}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="text-sm text-gray-900">
                        Ürün Fiyatı
                      </label>
                      <div className="w-full inline-flex border">
                        <input
                          type="number"
                          name="price"
                          value={productInput.price}
                          onChange={handleInput}
                          className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        />
                        <span className="text-danger">
                          {productInput.error_list.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="text-sm text-gray-900">
                        Ürün İndirimli Fiyatı
                      </label>
                      <div className="w-full inline-flex border">
                        <input
                          type="number"
                          name="special_price"
                          value={productInput.special_price}
                          onChange={handleInput}
                          className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        />
                        <span className="text-danger">
                          {productInput.error_list.special_price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="text-sm text-gray-900">
                        Ürün Adeti
                      </label>
                      <div className="w-full inline-flex border">
                        <input
                          type="number"
                          name="quantity"
                          value={productInput.quantity}
                          onChange={handleInput}
                          className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        />
                        <span className="text-danger">
                          {productInput.error_list.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 font-semibold text-sm mt-3 mb-6 uppercase">
                  ÜRÜN RESİM
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="text-sm text-gray-900">
                        Ürün Resmi
                      </label>
                      <div className="w-full inline-flex border">
                        <input
                          type="file"
                          name="image"
                          onChange={handleImage}
                          accept="image/png, image/jpg, image/jpeg"
                          className="form-control w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        />
                        <span className="text-danger">
                          {productInput.error_list.image}
                        </span>
                      </div>
                    </div>
                    {productInput.oldImage !== null && picture.length === 0 && (
                      <div>
                        <img
                          style={{ maxWidth: "40px" }}
                          src={`${process.env.REACT_APP_BACKEND_ROOT_URL}${productInput.oldImage}`}
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-blueGray-400 font-semibold text-sm mt-3 mb-6 uppercase">
                  ÜRÜN ÖZELLİĞİ
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/4 px-4">
                    <div className="relative w-full mb-3">
                      <label className="text-sm text-gray-900">
                        Ürün Stokta Mı ?
                      </label>
                      <div className="flex items-center mt-4 mb-4">
                        <Switch
                          isOn={productInput.in_stock}
                          handleToggle={() =>
                            setProductInput({
                              ...productInput,
                              in_stock: !productInput.in_stock,
                            })
                          }
                          index="1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 px-4">
                    <div className="relative w-full mb-3">
                      <label className="text-sm text-gray-900">
                        Ürünü Öne Çıkar
                      </label>
                      <div className="flex items-center mt-4 mb-4">
                        <Switch
                          isOn={productInput.featured}
                          handleToggle={() =>
                            setProductInput({
                              ...productInput,
                              featured: !productInput.featured,
                            })
                          }
                          index="2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 px-4">
                    <div className="relative w-full mb-3">
                      <label className="text-sm text-gray-900">
                        Ürünü Gizle
                      </label>
                      <div className="flex items-center mt-4 mb-4">
                        <Switch
                          isOn={productInput.status}
                          handleToggle={() =>
                            setProductInput({
                              ...productInput,
                              status: !productInput.status,
                            })
                          }
                          index="3"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 px-4">
                    <div className="relative w-full mb-3">
                      <label className="text-sm text-gray-900">
                        Aranan Ürün İlanı Mı ?
                      </label>
                      <div className="flex items-center mt-4 mb-4">
                        <Switch
                          isOn={productInput.type}
                          handleToggle={() =>
                            setProductInput({
                              ...productInput,
                              type: !productInput.type,
                            })
                          }
                          index="4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary px-4 mb-4 float-end"
                >
                  {props.productId !== 0 ? "Ürünü Güncelle" : "Ürünü Kaydet"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
