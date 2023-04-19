/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Layout from '../components/vendor/Layout';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import axios from 'axios';
import { getError } from '../utils/error';
import Itemcards from '../components/Itemcards';
import Image from 'next/image';
import { AiTwotoneStar } from 'react-icons/ai';
import ProductPreview from '../components/vendor/modal/productPreview';

const Products = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [vendor, setVendor] = useState('');
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState({});
  const loadVendorDetails = async () => {
    try {
      const res = await axios.get(
        `/api/vendor/product-list/${session.user.email}`
      );
      if (res.error) {
        toast.error(res.error);
      } else {
        setVendor(res.data.user);
        setProducts(res.data.products);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  //   const loadVendorProducts = async (id) => {
  //     try {
  //       const res = await axios.get(`/api/vendor/product-list/${id}`);
  //       if (res.error) {
  //         toast.error(res.error);
  //       } else {
  //         if (res.status === 201) {
  //           console.log({ products: res.data });
  //         }
  //       }
  //     } catch (err) {
  //       toast.error(getError(err));
  //     }
  //   };
  useEffect(() => {
    if (session?.user) {
      loadVendorDetails();
    } else {
      if (status != 'loading') {
        router.push('/vendor/login');
      }
    }
  }, [session, router]);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `/api/vendor/product-details/delete/${id}`
      );
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success('Successfully Deleted');
        router.push('/vendor/products');
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout name={vendor.firstName}>
      <h1>Product List</h1>
      {/* <pre>{JSON.stringify(products, null, 4)}</pre> */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {products &&
            products.map((product, index) => {
              return (
                <div
                  className="hover:w-full border rounded-xl hover:shadow-md"
                  key={index}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full rounded-xl"
                  />
                  <div className="p-3 mt-2">
                    <p className="font-bold text-xl">{product.productName}</p>
                    <div className="flex justify-between">
                      <p className="font-bold mt-3">
                        Total Stock : &nbsp;{' '}
                        <span className="font-normal">
                          {product.totalStock}
                        </span>
                      </p>
                      <p className="font-bold mt-3">
                        Sell Count : &nbsp;{' '}
                        <span className="font-normal">
                          {product.purchaseCount}
                        </span>
                      </p>
                    </div>
                    <p className="font-bold mt-3 flex items-center">
                      {`${product.star}`}{' '}
                      <AiTwotoneStar className="ml-2 text-yellow-600" /> &nbsp;{' '}
                      {`${product.reviewsCount} reviews`}
                    </p>

                    <div className="flex justify-between mt-10">
                      <button
                        className="text-white bg-gray-400 shadow-md rounded-xl p-4 w-full"
                        onClick={() =>
                          router.push(`/vendor/edit-product/${product.id}`)
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="text-white bg-blue-400 shadow-md rounded-xl p-4 w-full ml-3"
                        onClick={() => {
                          setProduct(product);
                          setShowModal(true);
                        }}
                      >
                        Preview
                      </button>
                    </div>
                    <button
                      className="mt-5 text-white bg-red-500 w-full p-4 rounded-xl font-bold"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div className="flex justify-center h-[80vh] items-center">
          <div>
            <p className="font-bold text-lg">No Products Publihed</p>
            <button
              className="bg-blue-500 text-white font-bold p-4 mt-10"
              onClick={() => router.push('/vendor/add-product')}
            >
              Create new Product
            </button>
          </div>
        </div>
      )}
      <div className="mt-20">
        <ProductPreview
          showModal={showModal}
          setShowModal={setShowModal}
          product={product}
        />
      </div>
    </Layout>
  );
};

export default Products;
