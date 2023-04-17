/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { AiOutlineBgColors } from 'react-icons/ai';
import { RxSize } from 'react-icons/rx';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { getError } from '../utils/error';
import { ImSpinner9 } from 'react-icons/im';
import axios from 'axios';

export default function MyAccount() {
  const router = useRouter();
  const { status, data: session } = useSession();
  const { type } = router.query;
  const [showAccountInfoPage, setShowAccountInfoPage] = useState(false);
  const [showMyOrdersPage, setShowMyOrdersPage] = useState(false);
  const [showChangePassowordPage, setShowChangePasswordPage] = useState(false);
  const [loading, setLoading] = useState(false);

  // accountInfo form data state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');

  // change Password form data state

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (session?.user) {
      loadCustomerDetails(session.user);
    } else {
      if (status !== 'loading') {
        router.push('/login');
      }
    }
    if (type === 'account-info') {
      setShowChangePasswordPage(false);
      setShowMyOrdersPage(false);
      setShowAccountInfoPage(true);
    } else if (type === 'my-order') {
      setShowAccountInfoPage(false);
      setShowChangePasswordPage(false);
      setShowMyOrdersPage(true);
    } else if (type === 'change-password') {
      setShowAccountInfoPage(false);
      setShowMyOrdersPage(false);
      setShowChangePasswordPage(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, session]);

  const loadCustomerDetails = async () => {
    try {
      const result = await axios.get(`/api/customer/${session.user.email}`);
      if (result.error) {
        toast.error(getError(result.error));
      } else {
        const { data } = result;
        console.log(data);
        if (data) {
          setFirstName(data.firstName);
          setLastName(data.lastName);
          setAddress(data.Address);
          setEmail(data.email);
          setPhoneNumber(data.phoneNumber);
          setImage(data.image);
          setGender(data.gender);
        }
      }
    } catch (err) {
      toast.error(err);
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
    } catch (error) {
      console.error(error);
    }
  };

  const handleAccountUpdate = async () => {
    try {
      if (email) {
        setLoading(true);
        const result = await axios.put('/api/customer/account', {
          whereEmail: session?.user && session.user.email,
          firstName,
          lastName,
          email,
          address,
          image,
          gender,
          phoneNumber,
        });
        if (result.error) {
          toast.error(result.error);
          setLoading(false);
        } else {
          if (result.data) {
            setFirstName(result.data.firstName);
            setLastName(result.data.lastName);
            setEmail(result.data.email);
            setImage(result.data.image);
            setGender(result.data.gender);
            setPhoneNumber(result.data.phoneNumber);
            setLoading(false);
            toast.success('Successfully Updated');
          }
        }
      } else {
        toast.error('Email Required');
      }
    } catch (err) {
      toast.error(getError(err));
      setLoading(false);
    }
  };

  const handleChangePasswordSubmit = async () => {
    if (newPassword === confirmPassword) {
      try {
        setLoading(true);
        const res = await axios.put('/api/customer/changepassword', {
          email: session.user.email,
          currentPassword,
          newPassword,
        });

        if (res.status === 201) {
          setConfirmPassword('');
          setCurrentPassword('');
          setNewPassword('');
          setLoading(false);
          toast.success('Successfully Change Password');
        }
      } catch (err) {
        toast.error(getError(err));
        setLoading(false);
      }
    } else {
      toast.error('New Password and Confirm Password must be match!..');
    }
  };

  return (
    <Layout>
      {status === 'loading' ? (
        'loading'
      ) : (
        <div className="container m-auto mt-10">
          <u>
            <p className="text-2xl md:text-4xl font-bold">My Account</p>
          </u>

          <hr className="w-full mt-10" />

          <div className="flex justify-center">
            <div className="mt-10 flex justify-between p-2">
              <div
                className={
                  showAccountInfoPage
                    ? 'border-b-2 border-b-blue-500   pb-5 px-3  md:px-4 md:p-5 flex justify-center cursor-pointer text-sm'
                    : 'border-b-2 hover:border-b-blue-500   pb-5 px-3  md:px-4 md:p-5 flex justify-center cursor-pointer text-sm'
                }
                onClick={() => {
                  router.push('/account/account-info');
                }}
              >
                <span>Account</span> &nbsp;
                <span>Info</span>
              </div>
              <div
                className={
                  showMyOrdersPage
                    ? 'border-b-2 border-b-blue-500  pb-5 px-3  md:px-4 md:p-5 flex justify-center cursor-pointer text-sm'
                    : 'border-b-2 hover:border-b-blue-500  pb-5 px-3  md:px-4 md:p-5 flex justify-center cursor-pointer text-sm'
                }
                onClick={() => {
                  router.push('/account/my-order');
                }}
              >
                <span>My</span> &nbsp;
                <span>Order</span>
              </div>
              <div
                className={
                  showChangePassowordPage
                    ? 'border-b-2 border-b-blue-500  pb-5 px-3  md:px-4 md:p-5 flex justify-center cursor-pointer text-sm'
                    : 'border-b-2 hover:border-b-blue-500  pb-5 px-3  md:px-4 md:p-5 flex justify-center cursor-pointer text-sm'
                }
                onClick={() => {
                  router.push('/account/change-password');
                }}
              >
                <span>Change</span> &nbsp;
                <span>Password</span>
              </div>
            </div>
          </div>

          {showAccountInfoPage && (
            <div className="mt-10">
              <div className="flex justify-center">
                <p className="text-2xl font-bold">Account Information</p>
              </div>
              <div className="flex justify-center mt-10">
                <div className="w-[60%] min-h-[20vh]">
                  <div className="grid grid-cols-1 lg:flex lg:justify-between">
                    <div className="flex justify-center lg:flex-none lg:w-[30%] min-h-[5vh]">
                      <img
                        src={image}
                        className="w-[200px] h-[200px] rounded-full float-right absolute"
                        alt=""
                      />
                      <div className="bg-[url('https://res.cloudinary.com/dikpoctfq/image/upload/v1681280897/Upload_Image_jtb5cc.jpg')] bg-cover w-[200px] h-[200px] rounded-full">
                        <input
                          type="file"
                          className="opacity-0 w-[200px] h-[200px] rounded-full"
                          onChange={(e) => handleImage(e)}
                        />
                      </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:flex-none lg:w-[69%] min-h-[5vh] lg:pl-3">
                      <div className="flex justify-between w-[100%]">
                        <div>
                          <label htmlFor="" className="font-bold text-lg">
                            First Name
                          </label>{' '}
                          <br />
                          <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            className="border rounded-full p-3 w-[100%] mt-2"
                          />
                        </div>
                        <div>
                          <label htmlFor="" className="font-bold text-lg">
                            Last Name
                          </label>{' '}
                          <br />
                          <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            className="border rounded-full p-3 w-[100%] mt-2"
                          />
                        </div>
                      </div>
                      <div className="mt-5">
                        <label htmlFor="" className="font-bold text-lg">
                          Email Address
                        </label>{' '}
                        <br />
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="border rounded-full p-3 w-full mt-2"
                        />
                      </div>
                      <div className="mt-5">
                        <label htmlFor="" className="font-bold text-lg">
                          Address
                        </label>{' '}
                        <br />
                        <input
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          type="text"
                          className="border rounded-full p-3 w-full mt-2"
                        />
                      </div>
                      <div className="mt-5">
                        <label htmlFor="" className="font-bold text-lg">
                          Gender
                        </label>{' '}
                        <br />
                        <select
                          name=""
                          id=""
                          onChange={(e) => setGender(e.target.value)}
                          className="border rounded-full p-3 w-full mt-2 bg-white"
                        >
                          <option
                            value="Male"
                            selected={gender === 'Male' && 'selected'}
                          >
                            Male
                          </option>
                          <option
                            value="Female"
                            selected={gender === 'Female' && 'selected'}
                          >
                            Female
                          </option>
                          <option
                            value="Custom"
                            selected={gender === 'Custom' && 'selected'}
                          >
                            Custom
                          </option>{' '}
                        </select>
                      </div>
                      <div className="mt-5">
                        <label htmlFor="" className="font-bold text-lg">
                          Phone Number
                        </label>{' '}
                        <br />
                        <input
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          type="text"
                          className="border rounded-full p-3 w-full mt-2"
                        />
                      </div>
                      <div className="mt-10">
                        <button
                          className="bg-black p-3 rounded-full text-white text-sm md:text-lg md:w-[50%] flex justify-center items-center"
                          onClick={() => handleAccountUpdate()}
                        >
                          {loading ? (
                            <ImSpinner9 className="animate-spin" />
                          ) : (
                            'Update Account'
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {showMyOrdersPage && (
            <div className="mt-10">
              <div className="flex justify-center">
                <p className="text-2xl font-bold">Order History</p>
              </div>
              <div className="md:flex justify-center mt-10">
                <div className="md:w-[60%] min-h-[20vh]">
                  <div className="orderItems mt-5">
                    <div className="mt-5 border-2 rounded-xl min-h-[10vh] p-5 flex justify-between">
                      <div>
                        <p className="text-sm md:text-lg font-bold">Order Id</p>
                        <p className="text-sm md:text-lg">Aug 21 2023</p>
                      </div>
                      <div className="border-4 flex justify-center items-center md:p-3 rounded-xl text-sm min-w-[50px] h-[30px] p-3">
                        Status
                      </div>
                    </div>
                    <div className="border p-5">
                      <div className="items mt-5">
                        <div className="flex justify-between w-[100% ]">
                          <div className="w-[75%] flex">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                              alt=""
                              className="w-[60px] md:w-[150px]"
                            />
                            <div className="ml-1">
                              <p className="text-[12px] font-bold md:text-[16px]">
                                Product Name
                              </p>
                              <p className="flex items-center text-[12px]">
                                <AiOutlineBgColors /> &nbsp; Black &nbsp; &nbsp;
                                <span className="text-gray-400">|</span>&nbsp;
                                &nbsp; <RxSize /> &nbsp; XS
                              </p>

                              {/* <div className="mt-5 text-sm md:mt-[40px]">sfs</div> */}
                            </div>
                          </div>
                          <div className="w-[24%] flex justify-between p-1">
                            {/* <button className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                          -
                        </button>
                        <span className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                          1
                        </span>
                        <button className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                          +
                        </button> */}
                          </div>
                          <div className="w-[25%]">
                            <div className="border-green-600 p-1 text-sm flex items-center justify-center rounded-lg border-2 text-green-600 float-right font-bold min-w-[50%]">
                              <span> ₹ </span> &nbsp;
                              <span>300.00</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between mt-1 items-center text-sm lg:text-lg">
                          <p>Qty : 2</p>
                          <div className="text-[13px] text-blue-400 md:text-lg font-bold">
                            Leave Review
                          </div>
                        </div>
                        <hr className="w-full mt-5" />
                      </div>
                    </div>
                  </div>
                  <div className="orderItems mt-5">
                    <div className="mt-5 border-2 rounded-xl min-h-[10vh] p-5 flex justify-between">
                      <div>
                        <p className="text-lg font-bold">Order Id</p>
                        <p>Aug 21 2023</p>
                      </div>
                      <div className="border-4 flex justify-center items-center p-3 rounded-xl">
                        Status
                      </div>
                    </div>
                    <div className="border p-5">
                      <div className="items mt-5">
                        <div className="flex justify-between w-[100% ]">
                          <div className="w-[75%] flex">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                              alt=""
                              className="w-[60px] md:w-[150px]"
                            />
                            <div className="ml-1">
                              <p className="text-[12px] font-bold md:text-[16px]">
                                Product Name
                              </p>
                              <p className="flex items-center text-[12px]">
                                <AiOutlineBgColors /> &nbsp; Black &nbsp; &nbsp;
                                <span className="text-gray-400">|</span>&nbsp;
                                &nbsp; <RxSize /> &nbsp; XS
                              </p>

                              {/* <div className="mt-5 text-sm md:mt-[40px]">sfs</div> */}
                            </div>
                          </div>
                          <div className="w-[24%] flex justify-between p-1">
                            {/* <button className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                          -
                        </button>
                        <span className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                          1
                        </span>
                        <button className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                          +
                        </button> */}
                          </div>
                          <div className="w-[25%]">
                            <div className="border-green-600 p-1 text-sm flex items-center justify-center rounded-lg border-2 text-green-600 float-right font-bold md:w-[50%]">
                              ₹ 300.00
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-end mt-1 items-center">
                          <div className="text-[13px] text-blue-400 md:text-lg font-bold">
                            Leave Review
                          </div>
                        </div>
                        <hr className="w-full mt-5" />
                      </div>
                      <div className="items mt-5">
                        <div className="flex justify-between w-[100% ]">
                          <div className="w-[75%] flex">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                              alt=""
                              className="w-[60px] md:w-[150px]"
                            />
                            <div className="ml-1">
                              <p className="text-[12px] font-bold md:text-[16px]">
                                Product Name
                              </p>
                              <p className="flex items-center text-[12px]">
                                <AiOutlineBgColors /> &nbsp; Black &nbsp; &nbsp;
                                <span className="text-gray-400">|</span>&nbsp;
                                &nbsp; <RxSize /> &nbsp; XS
                              </p>

                              {/* <div className="mt-5 text-sm md:mt-[40px]">sfs</div> */}
                            </div>
                          </div>
                          <div className="w-[24%] flex justify-between p-1">
                            {/* <button className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                          -
                        </button>
                        <span className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                          1
                        </span>
                        <button className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                          +
                        </button> */}
                          </div>
                          <div className="w-[25%]">
                            <div className="border-green-600 p-1 text-sm flex items-center justify-center rounded-lg border-2 text-green-600 float-right font-bold md:w-[50%]">
                              ₹ 300.00
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-end mt-1 items-center">
                          <div className="text-[13px] text-blue-400 md:text-lg font-bold">
                            Leave Review
                          </div>
                        </div>
                        <hr className="w-full mt-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {showChangePassowordPage && (
            <div className="mt-10">
              <div className="flex justify-center">
                <p className="text-2xl font-bold">Update Your Password</p>
              </div>
              <div className="flex justify-center mt-10">
                <div className="lg:w-[60%] min-h-[20vh]">
                  <div className="mt-5">
                    <label htmlFor="" className="text-lg font-bold">
                      Current Password
                    </label>{' '}
                    <br />
                    <input
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      value={currentPassword}
                      type="password"
                      className="border-2 rounded-full p-3 md:w-[50%] mt-2"
                    />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="" className="text-lg font-bold">
                      New Password
                    </label>{' '}
                    <br />
                    <input
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      type="password"
                      className="border-2 rounded-full p-3 md:w-[50%] mt-2"
                    />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="" className="text-lg font-bold">
                      Confirm Password
                    </label>{' '}
                    <br />
                    <input
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      className="border-2 rounded-full p-3 md:w-[50%] mt-2"
                    />
                  </div>
                  <div className="mt-10">
                    <button
                      className="text-sm md:text-lg w-[30%] p-3 bg-black text-white rounded-full"
                      onClick={() => handleChangePasswordSubmit()}
                    >
                      {loading ? (
                        <ImSpinner9 className="animate-spin" />
                      ) : (
                        'Submit'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Layout>
  );
}
