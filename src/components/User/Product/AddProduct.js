import React from "react";

const AddProduct = () => {
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
            <form>
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
                      <select
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        name="categories"
                      >
                        <option value="">Select an option</option>
                        <option value="dog">Dog</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="text-sm text-gray-400">Marka Adı</label>
                    <div className="w-full inline-flex border">
                      <select
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        name="brand"
                      >
                        <option value="">Select an option</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                      </select>
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
                        className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      />
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
                        name="description"
                        rows="5"
                        cols="40"
                      ></textarea>
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
                        className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      />
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
                        className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      />
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
                        className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      />
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
                        className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      />
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
                      <div class="flex items-center mt-4 mb-4">
                        <input
                        checked
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="stok"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="default-radio-1"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Evet
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="stok"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="default-radio-2"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Hayır
                        </label>
                      </div>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="text-sm text-gray-400">Öne Çıkar</label>
                      <div class="flex items-center mt-4 mb-4">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="default-radio-1"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Evet
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          checked
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="default-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="default-radio-2"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Hayır
                        </label>
                      </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
