import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

import axios from 'axios';
import { ImSpinner9 } from 'react-icons/im';
import Layout from '@/pages/components/vendor/Layout';
import { getError } from '@/pages/utils/error';
import ImageModal from '@/pages/components/vendor/modal/Image-modal';

export default function AddProjectScreen() {
  const router = useRouter();
  const { id } = router.query;
  const { data: session, status } = useSession();
  const [name, setName] = useState('');
  const [vendorId, setVendorId] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState('');
  // form data state
  const [productName, setProductName] = useState('');
  const [catchyDescription, setCatchyDescription] = useState('');
  const [totalStock, setTotalStock] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [price, setPrice] = useState('');
  const [sizeList, setSizeList] = useState([]);
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState('');

  useEffect(() => {
    if (session?.user) {
      loadProduct();
    } else {
      if (status != 'loading') {
        router.push('/vendor/login');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, router, status]);
  function handleKeyDown(e) {
    // If user did not press enter key, return
    if (e.key !== 'Enter') return;
    // Get the value of the input
    const value = e.target.value;
    // If the value is empty, return
    if (!value.trim()) return;
    // Add the value to the tags array
    setTags([...tags, value]);
    // Clear the input
    e.target.value = '';
  }

  function handleSizeKeyDown(e) {
    // If user did not press enter key, return
    if (e.key !== 'Enter') return;
    // Get the value of the input
    const value = e.target.value;
    // If the value is empty, return
    if (!value.trim()) return;
    // Add the value to the tags array
    setSizeList([...sizeList, value]);
    // Clear the input
    e.target.value = '';
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
  }

  function removeSize(index) {
    setSizeList(sizeList.filter((el, i) => i !== index));
  }
  const loadProduct = async () => {
    try {
      const res = await axios.get(`/api/vendor/product-details/${id}}`);
      if (res.error) {
        toast.error(res.error);
      } else {
        var { data } = res;

        if (data.product) {
          setProductId(data.product.id);
          setProductName(data.product.productName);
          setProductDetails(data.product.productDetails);
          setCatchyDescription(data.product.catchyTitle);
          setDescription(data.product.description);
          setSizeList(data.product.size);
          setTags(data.product.tags);
          setTotalStock(data.product.totalStock);
          setColor(data.product.color);
          setPrice(data.product.price);
          setImage(data.product.image);
          setVendorId(data.product.vendorId);
        }

        setName(data.user.firstName);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const handleSubmit = async () => {
    try {
      if (image) {
        setLoading(true);
        const res = await axios.put(
          '/api/vendor/product-details/edit-product',
          {
            id: productId,
            vendorId: vendorId,
            productName,
            catchyDescription,
            description,
            productDetails,
            price,
            sizes: sizeList,
            tags,
            totalStock,
            color,
            image,
          }
        );
        if (res.error) {
          toast.error(res.error);
          setLoading(false);
        } else {
          if (res.status === 201) {
            setLoading(false);
            toast.success('Successfully Updated Product');
            router.push('/vendor/products');
          }
        }
      } else {
        toast.error(
          'Not uploaded Image Wait until notification time completed then try!'
        );
        setLoading(false);
      }
    } catch (err) {
      toast.error(getError(err));
      setLoading(false);
    }
  };

  const handleImage = async (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', 'p9fs3b8z');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dikpoctfq/image/upload',
        formData
      );
      setImage(response.data.secure_url);
      toast.success('Image Uploaded');
    } catch (error) {
      toast.error(getError(error));
    }
  };
  return (
    <Layout name={name}>
      <h1>Edit Product</h1>

      <hr className="mt-5" />

      <>
        <div className="w-full min-h-[70vh] mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="m-0 p-0">
            <label htmlFor="">Product Name</label> <br />
            <input
              type="text"
              className="mt-2 p-3 rounded-xl border w-full"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="m-0 p-0">
            <label htmlFor="">Catchy Title</label> <br />
            <input
              type="text"
              className="mt-2 p-3 rounded-xl border w-full"
              value={catchyDescription}
              onChange={(e) => setCatchyDescription(e.target.value)}
            />
          </div>
          <div className="m-0 p-0">
            <label htmlFor="">Description</label> <br />
            <input
              type="text"
              className="mt-2 p-3 rounded-xl border w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="m-0 p-0">
            <label htmlFor="">Product Details</label> <br />
            <input
              type="text"
              className="mt-2 p-3 rounded-xl border w-full"
              value={productDetails}
              onChange={(e) => setProductDetails(e.target.value)}
            />
          </div>
          <div className="m-0 p-0">
            <label htmlFor="">Total Stock</label> <br />
            <input
              type="text"
              className="mt-2 p-3 rounded-xl border w-full"
              value={totalStock}
              onChange={(e) => setTotalStock(e.target.value)}
            />
          </div>
          <div className="m-0 p-0">
            <label htmlFor="">Color</label> <br />
            <input
              type="text"
              className="mt-2 p-3 rounded-xl border w-full"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="m-0 p-0">
            <label htmlFor="">Sizes</label> <br />
            <div className="tags-input-container border rounded-xl mt-2">
              {sizeList.map((size, index) => (
                <div className="tag-item" key={index}>
                  <span className="text">{size}</span>
                  <span className="close" onClick={() => removeSize(index)}>
                    &times;
                  </span>
                </div>
              ))}
              <input
                onKeyDown={handleSizeKeyDown}
                type="text"
                className="tags-input"
                placeholder="Type size and enter"
              />
            </div>
          </div>
          <div className="m-0 p-0">
            <label htmlFor="">Price</label> <br />
            <input
              type="text"
              className="mt-2 p-3 rounded-xl border w-full"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="m-0 p-0">
            <label htmlFor="">Tags</label> <br />
            <div className="tags-input-container border rounded-xl mt-2">
              {tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                  <span className="text">{tag}</span>
                  <span className="close" onClick={() => removeTag(index)}>
                    &times;
                  </span>
                </div>
              ))}
              <input
                onKeyDown={handleKeyDown}
                type="text"
                className="tags-input"
                placeholder="Type Tags and Enter"
              />
            </div>
            <span className="text-sm text-red-400 font-bold">
              It will help your get rank on Search
            </span>
          </div>
          <div>
            <label htmlFor="">Image</label> <br />
            <input
              type="file"
              className="p-3 border w-full rounded-xl
          "
              accept="image/*"
              onChange={(e) => handleImage(e)}
            />
            <button
              className="bg-pink-500 float-right mt-5 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Image Preview
            </button>
            {/* <button
            className="p-1 text-white rounded-xl float-right mt-3 border bg-blue-500"
            onClick={() => setShowModal(true)}
          >
            Image Preview
          </button> */}
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <button
            className="text-center p-3 hover:bg-black hover:text-white border rounded-2xl justify-center flex"
            onClick={() => handleSubmit()}
          >
            {loading ? (
              <ImSpinner9 className="animate-spin" />
            ) : (
              'Update Product'
            )}
          </button>
        </div>
        <ImageModal
          showModal={showModal}
          setShowModal={setShowModal}
          image={image}
          productName={productName}
        />
      </>
    </Layout>
  );
}
