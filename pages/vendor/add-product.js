import React, { useEffect, useState } from 'react';
import Layout from '../components/vendor/Layout';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { getError } from '../utils/error';
import axios from 'axios';

export default function AddProjectScreen() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [name, setName] = useState('');

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

  useEffect(() => {
    if (session?.user) {
      loadVendorDetails();
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
  const loadVendorDetails = async () => {
    try {
      const res = await axios.get(`/api/vendor/${session.user.email}`);
      if (res.error) {
        toast.error(res.error);
      } else {
        setName(res.data.firstName);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <Layout name={name}>
      <h1>Add Product</h1>

      <hr className="mt-5" />

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

      <div className="flex justify-between mt-5">
        <button className="text-center p-3 hover:bg-black hover:text-white border rounded-2xl">
          Add Product
        </button>
      </div>
    </Layout>
  );
}
