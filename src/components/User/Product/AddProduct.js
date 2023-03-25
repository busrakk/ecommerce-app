import React, { useState } from "react";
import swal from "sweetalert";
import { productSaveApi } from "../../../service/serviceApi";
import Select from "react-select";

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
    popular: false,
    error_list: [],
  };

  const DEFAULT_CATEGORY = { label: "Select Category", value: "" };
  const [productInput, setProductInput] = useState(initialData);
  // const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);
  const [picture, setPicture] = useState([]);

  const handleImage = (e) => {
    setPicture({ image1: e.target.files[0] });
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
            title: "Error",
            text: res.data.message,
            icon: "error",
            timer: 2000,
            buttons: false,
          });
        }
      }
     // setIsLoading(false);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setIsLoading(true);
    setProductInput({ ...productInput, error_list: [] });

    const formData = new FormData();
    formData.append("image1", picture.image1);
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
    formData.append("popular", productInput.popular === true ? 1 : 0);

    handleCreate(formData);
  };

  return (
    <div className="col-span-9">
      <div className="w-full px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between px-4 items-center">
              <h6 className="text-blueGray-700 text-xl uppercase font-bold">
                Yeni Ürün Ekle
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="text-blueGray-400 font-semibold text-sm mt-3 mb-6 uppercase">
                ÜRÜN BİLGİSİ
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="text-sm text-gray-400">
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
                      {/* <select
                        className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        name="categories"
                      >
                        <option value="">Select an option</option>
                        <option value="dog">Dog</option>
                      </select> */}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="text-sm text-gray-400">Marka Adı</label>
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
                    <label className="text-sm text-gray-400">Ürün Adı</label>
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
                    <label className="text-sm text-gray-400">Ürün Tanımı</label>
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
                    <label className="text-sm text-gray-400">Ürün Fiyatı</label>
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
                    <label className="text-sm text-gray-400">
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
                    <label className="text-sm text-gray-400">Ürün Adeti</label>
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
                    <label className="text-sm text-gray-400">
                      Ürün Resmi 1
                    </label>
                    <div className="w-full inline-flex border">
                      <input
                        type="file"
                        name="image1"
                        onChange={handleImage}
                    accept="image/png, image/jpg, image/jpeg"
                        className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      />
                      <span className="text-danger">
                    {productInput.error_list.image1}
                  </span>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="text-sm text-gray-400">
                      Ürün Resmi 2
                    </label>
                    <div className="w-full inline-flex border">
                      <input
                        type="file"
                        name="image2"
                        className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="text-sm text-gray-400">
                      Ürün Resmi 3
                    </label>
                    <div className="w-full inline-flex border">
                      <input
                        type="file"
                        name="image3"
                        className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="text-blueGray-400 font-semibold text-sm mt-3 mb-6 uppercase">
                ÜRÜN ÖZELLİĞİ
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="text-sm text-gray-400">Stok</label>
                      <div className="flex items-center mt-4 mb-4">
                        <input
                        defaultChecked
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="stok"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Evet
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="stok"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Hayır
                        </label>
                      </div>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="text-sm text-gray-400">Öne Çıkar</label>
                      <div className="flex items-center mt-4 mb-4">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Evet
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          defaultChecked
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Hayır
                        </label>
                      </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary px-4 mb-4 float-end">
          "Submit"
        </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
