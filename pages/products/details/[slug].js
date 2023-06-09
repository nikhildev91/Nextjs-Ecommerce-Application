/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { use, useContext } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/pages/components/Layout';
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { Store } from '@/pages/utils/store';
import { Apiurl } from '@/pages/utils/url';

function ProductDetails({ product }) {
  const router = useRouter();

  const { state, dispatch } = useContext(Store);

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quatity = existItem ? existItem.quatity + 1 : 1;

    if (product.totalStock < quatity) {
      alert('Sorry. Product out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quatity } });

    router.push('/cart');
  };
  return (
    <Layout>
      {/* <pre>{JSON.stringify(product, null, 4)}</pre> */}
      <div className="container m-auto p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
          <img src={product.image} alt="" className="w-full" />
          {/* <div className="w-full h-[400px] md:h-[65vh] bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png')] rounded-3xl shadow-md"></div> */}
          <div className="w-full min-h-[400px] md:ml-10">
            <p className="text-2xl font-bold md:text-3xl">
              {product.productName}
            </p>
            <p className="text-md md:text-xl md:mt-5 text-gray-400">
              {product.catchyTitle}
            </p>
            <div className="flex justify-between items-center mt-5 lg:w-[50%]">
              <div className="border-green-600 p-1 rounded-lg border-2 text-green-600 font-bold">
                ₹ {product.price}
              </div>
              <div className="left-1/2 -ml-0.5 w-0.5 h-[20px] bg-gray-400"></div>
              <div>
                <div className="flex text-gray-400 text-md items-center justify-center">
                  <AiFillStar className="text-lg text-yellow-500" /> &nbsp;{' '}
                  {product.star} &nbsp; ({product.reviewsCount} reviews)
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="font-bold md:text-lg text-md">
                Remaining Stock :{' '}
                <span className="font-normal">
                  {product.totalStock - product.purchaseCount}
                </span>
              </p>
              <p className="font-bold text-md md:text-lg">
                Color : <span className="font-normal">{product.color}</span>
              </p>
              <p className="font-bold text-md md:text-lg">
                Size : <span className="font-normal">XS</span>
              </p>

              <div className="flex justify-center items-center w-full h-12 shadow-md removeHScroll overflow-x-auto  mt-5 rounded-full">
                {product.size.map((size, index) => {
                  return (
                    <div
                      className="px-4 md:px-10 md:ml-0 ml-10 border hover:bg-gray-400 h-12 flex items-center justify-center rounded-full mb-0"
                      key={index}
                    >
                      {size}
                    </div>
                  );
                })}
                {/* <div className="px-4 md:px-10 border hover:bg-gray-400 h-12 flex items-center justify-center rounded-full mb-0">
                  S
                </div>
                <div className="px-4 md:px-10 border hover:bg-gray-400 h-12 flex items-center justify-center rounded-full mb-0">
                  M
                </div>
                <div className="px-4 md:px-10 border hover:bg-gray-400 h-12 flex items-center justify-center rounded-full mb-0">
                  L
                </div>
                <div className="px-4 md:px-10 border hover:bg-gray-400 h-12 flex items-center justify-center rounded-full mb-0">
                  XL
                </div>
                <div className="px-4 md:px-10 border hover:bg-gray-400 h-12 flex items-center justify-center rounded-full mb-0">
                  XXL
                </div>
                <div className="px-4 md:px-10 border hover:bg-gray-400 h-12 flex items-center justify-center rounded-full mb-0">
                  XXXL
                </div> */}
              </div>
              <p className="font-bold text-md md:text-lg mt-5">
                Quantity : <span className="font-normal">2</span>
              </p>
              <div className="mt-5 flex justify-between items-center">
                <div className="w-[40%] bg-gray-300 mx-3 flex justify-between rounded-full p-2.5">
                  <button
                    className="text-xl font-bold p-2 bg-black rounded-full w-[30%] text-white
                  "
                  >
                    -
                  </button>
                  <span className="border p-3 w-[30%] flex justify-center items-center font-bold ">
                    1
                  </span>{' '}
                  <button
                    className="text-xl font-bold p-2 bg-black rounded-full w-[30%] text-white
                  "
                  >
                    +
                  </button>
                </div>
                <button
                  className="w-[60%] bg-black rounded-full text-white flex justify-center items-center p-5 md:text- cursor-pointer"
                  onClick={addToCartHandler}
                >
                  <AiOutlineShoppingCart /> &nbsp; &nbsp; Add to Cart
                </button>
              </div>

              <div className="w-full mt-5">
                <div className="h-12 border-4 bg-gray-300 flex items-center font-bold">
                  <p>Description</p>
                </div>
                <div className="w-full mt-2">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-0 w-full">
          <u>
            <p className="text-xl md:text-3xl font-bold">Product Details</p>
          </u>

          <p className="mt-5">{product.productDetails}</p>
        </div>
        <hr className="w-full mt-5" />

        <div className="mt-10">
          <u>
            {' '}
            <p className="flex font-bold items-center text-xl md:text-3xl">
              <AiFillStar className="text-xl md:text-3xl text-yellow-500" />{' '}
              &nbsp; 4.5 (123 reviews)
            </p>
          </u>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* comment contents  */}
            <div className="w-full min-h-24 p-3 hover:shadow-md">
              <div className="flex justify-between">
                <div className="flex">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                    alt=""
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-sm md:text-md">
                      Customer Name
                    </p>
                    <p className="text-sm text-gray-400">Aug 12 2023</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                </div>
              </div>
              <p className="mt-3 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="w-full min-h-24 p-3 hover:shadow-md">
              <div className="flex justify-between">
                <div className="flex">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                    alt=""
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-sm md:text-md">
                      Customer Name
                    </p>
                    <p className="text-sm text-gray-400">Aug 12 2023</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                </div>
              </div>
              <p className="mt-3 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="w-full min-h-24 p-3 hover:shadow-md">
              <div className="flex justify-between">
                <div className="flex">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                    alt=""
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-sm md:text-md">
                      Customer Name
                    </p>
                    <p className="text-sm text-gray-400">Aug 12 2023</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                </div>
              </div>
              <p className="mt-3 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="w-full min-h-24 p-3 hover:shadow-md">
              <div className="flex justify-between">
                <div className="flex">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                    alt=""
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-sm md:text-md">
                      Customer Name
                    </p>
                    <p className="text-sm text-gray-400">Aug 12 2023</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                </div>
              </div>
              <p className="mt-3 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="w-full min-h-24 p-3 hover:shadow-md">
              <div className="flex justify-between">
                <div className="flex">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                    alt=""
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-sm md:text-md">
                      Customer Name
                    </p>
                    <p className="text-sm text-gray-400">Aug 12 2023</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                </div>
              </div>
              <p className="mt-3 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="w-full min-h-24 p-3 hover:shadow-md">
              <div className="flex justify-between">
                <div className="flex">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                    alt=""
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-sm md:text-md">
                      Customer Name
                    </p>
                    <p className="text-sm text-gray-400">Aug 12 2023</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                  <AiFillStar className="text-lg md:text-2xl text-yellow-500" />
                </div>
              </div>
              <p className="mt-3 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>

          <div className=" text-sm md:text-lg  mt-5 md:h-12 md:w-[20%] font-bold hover:bg-black hover:text-white text-black rounded-full p-5 flex items-center justify-center border border-gray-500">
            Show all 123 reviews
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/customer/products`);

  const products = await res.json();

  const paths = products.map((product) => {
    return {
      params: {
        slug: `${product.slug}`,
      },
    };
  });
  return {
    paths,
    // paths: [
    //   {
    //     params: { slug: '1' },
    //   },
    //   {
    //     params: { slug: '2' },
    //   },
    //   {
    //     params: { slug: '3' },
    //   },
    // ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `${Apiurl}/api/customer/product-details/${params.slug}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
}

export default ProductDetails;
