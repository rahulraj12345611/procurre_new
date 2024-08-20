import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const ProductDefaultPage = () => {
    return (
        <>
        <div className="font-sans">
          <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
              <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">

                  <div className="w-full lg:sticky top-0 sm:flex gap-2">
                      <div className="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                          <img src="https://d1jasgl02bodhl.cloudfront.net/1-rnr-products/S17_2.png" alt="Product1" className="w-full cursor-pointer rounded-md outline" />
                          <img src="https://d1jasgl02bodhl.cloudfront.net/1-rnr-products/S17_1707807262405.png" alt="Product2" className="w-full cursor-pointer rounded-md" />
                          <img src="https://d1jasgl02bodhl.cloudfront.net/1-rnr-products/S17_1707807262405.png" alt="Product3" className="w-full cursor-pointer rounded-md" />
                          <img src="https://d1jasgl02bodhl.cloudfront.net/1-rnr-products/S17_2.png" alt="Product4" className="w-full cursor-pointer rounded-md" />
                      </div>
                      <img src="https://d1jasgl02bodhl.cloudfront.net/1-rnr-products/S17_2.png" alt="Product" className="w-4/5 rounded-md object-cover" />
                  </div>

                  <div>
                      <h2 className="text-2xl font-bold text-gray-800">Swiggy Tapes | L : 55 m | W : 1 Inch | T : 42 micron | 12 Rolls</h2>
                      <div className="flex flex-wrap gap-4 mt-4">
                          <p className="text-gray-800 text-xl font-bold">₹ 12</p>
                          <p className="text-gray-400 text-xl">
                            {/* <strike>$16</strike>  */}
                            <span className="text-sm ml-1.5">Tax included</span></p>
                      </div>

                      <div className="flex space-x-2 mt-4">
                          <svg className="w-5 fill-yellow-400" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg className="w-5 fill-yellow-400" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg className="w-5 fill-yellow-400" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg className="w-5 fill-yellow-400" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                      </div>

                      <div className="mt-8">
                          <h3 className="text-xl font-bold text-gray-800">Sizes</h3>
                          <div className="flex flex-wrap gap-4 mt-4">
                              <button type="button" className="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">55 </button>
                              <button type="button" className="w-10 h-10 border-2 hover:border-blue-600 border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">1</button>
                              <button type="button" className="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">42</button>
                              <button type="button" className="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">12</button>
                          </div>
                      </div>

                      <div className="flex space-x-2 py-3">
                      <button type="button" className="w-1/3 mt-8 px-6 py-3 bg-red-500 hover:bg-red-700 text-white text-sm font-semibold rounded-md">ADD TO CART</button>
                      <button type="button" className="w-1/3 mt-8 px-6 py-3 bg-green-500 hover:bg-green-700 text-white text-sm font-semibold rounded-md">BUY NOW</button>
                      </div>
                      {/* <div className="flex space-x-2 py-3">
        <Link
          
          className="w-full flex-1 rounded-md bg-red-500 p-2 text-center font-medium text-white flex items-center justify-center space-x-2 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <FaShoppingCart className="text-base" size={10} />
          <span style={{ fontSize: '0.6rem' }}>ADD TO CART</span>
        </Link>
        <Link
          
          className="w-1/3 flex-1 rounded-md bg-green-500 p-2 text-center font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <span style={{ fontSize: '0.6rem' }}>BUY NOW</span>
        </Link>
        </div> */}
                      <div className="mt-8">
                          <h3 className="text-xl font-bold text-gray-800">About the item</h3>
                          <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                              <li>Embracing sustainability, we proudly use eco-friendly paper bags for packaging Swiggy Products, reflecting our commitment to a greener planet in every delicious delivery.</li>
                              <li>Embracing sustainability, we proudly use eco-friendly paper bags for packaging Swiggy Products, reflecting our commitment to a greener planet in every delicious delivery.</li>
                              <li>Embracing sustainability, we proudly use eco-friendly paper bags for packaging Swiggy Products, reflecting our commitment to a greener planet in every delicious delivery.</li>
                              <li>Embracing sustainability, we proudly use eco-friendly paper bags for packaging Swiggy Products, reflecting our commitment to a greener planet in every delicious delivery.</li>
                          </ul>
                      </div>

                      <div className="mt-8">
                          <h3 className="text-xl font-bold text-gray-800">Reviews(10)</h3>
                          <div className="space-y-3 mt-4">
                              <div className="flex items-center">
                                  <p className="text-sm text-gray-800 font-bold">5.0</p>
                                  <svg className="w-5 fill-yellow-400 ml-1.5" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                  </svg>
                                  <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                                      <div className="w-2/3 h-full rounded-md bg-green-600"></div>
                                  </div>
                                  <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                              </div>

                              <div className="flex items-center">
                                  <p className="text-sm text-gray-800 font-bold">4.0</p>
                                  <svg className="w-5 fill-yellow-400 ml-1.5" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                  </svg>
                                  <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                                      <div className="w-1/3 h-full rounded-md bg-yellow-600"></div>
                                  </div>
                                  <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                              </div>

                              <div className="flex items-center">
                                  <p className="text-sm text-gray-800 font-bold">3.0</p>
                                  <svg className="w-5 fill-yellow-400 ml-1.5" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                  </svg>
                                  <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                                      <div className="w-1/6 h-full rounded-md bg-orange-400"></div>
                                  </div>
                                  <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
                              </div>

                              <div className="flex items-center">
                                  <p className="text-sm text-gray-800 font-bold">2.0</p>
                                  <svg className="w-5 fill-yellow-400 ml-1.5" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                  </svg>
                                  <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                                      <div className="w-1/12 h-full rounded-md bg-red-600"></div>
                                  </div>
                                  <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
                              </div>

                              <div className="flex items-center">
                                  <p className="text-sm text-gray-800 font-bold">1.0</p>
                                  <svg className="w-5 fill-yellow-400 ml-1.5" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                  </svg>
                                  <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                                      <div className="w-[6%] h-full rounded-md bg-blue-600"></div>
                                  </div>
                                  <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
                              </div>
                          </div>

                          <button type="button" className="w-full mt-8 px-6 py-2.5 border border-blue-600 bg-transparent text-gray-800 text-sm font-semibold rounded-md">Read all reviews</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        
        </>
    )
}

export default ProductDefaultPage;