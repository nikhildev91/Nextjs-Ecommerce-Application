import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { toast, ToastContainer } from 'react-toastify';
import { getError } from '../utils/error';
import { ImSpinner9 } from 'react-icons/im';
import axios from 'axios';
import Head from 'next/head';

export default function Signup() {
  const router = useRouter();
  const { redirect } = router.query;
  const { status, data: session } = useSession();
  //   useEffect(() => {
  //     if (session?.user) {
  //       router.push(redirect || '/');
  //     }
  //   }, [router, session, redirect]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSubmit = async () => {
    if (password === confirmPassword) {
      try {
        const result = await axios.post('/api/vendor/register', {
          firstName,
          lastName,
          phoneNumber,
          gender,
          password,
          email,
        });
        if (result.status === 201) {
          router.push('/vendor/login');
        }
      } catch (err) {
        toast.error(getError(err));
      }
    } else {
      toast.error('Password and Confirm Password must be match!..');
    }
  };

  return (
    <div className="container h-[60vh] m-auto flex justify-center items-center mt-16 p-5 md:p-0">
      <Head>
        <title>Flicart Vendor</title>
      </Head>
      <ToastContainer position="top-center" />
      <div className="w-full md:w-[30%] min-h[50vh]">
        <div className="flex justify-center mt-44">
          <p className="text-2xl md:text-4xl font-bold">Vendor Sign up</p>
        </div>
        <div className="mt-5 md:flex">
          <div>
            <label htmlFor="" className="mt-5">
              First Name
            </label>
            <br />
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="border p-3 w-full mt-2 rounded-2xl"
            />
          </div>
          <div className="mt-5 md:mt-0">
            <label htmlFor="" className="mt-5">
              Last Name
            </label>
            <br />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="border p-3 w-full mt-2 rounded-2xl"
            />
          </div>
        </div>
        <div className="mt-5">
          <label htmlFor="">Email</label>
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="border p-3 w-full mt-2 rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="">Phone Number</label>
          <br />
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            className="border p-3 w-full mt-2 rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="">Gender</label>
          <br />
          <select
            name=""
            id=""
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-3 rounded-2xl mt-2 bg-white border"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Custom">Custom</option>
          </select>
        </div>
        <div className="mt-5">
          <label htmlFor="">Password</label>
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="border p-3 w-full mt-2 rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="">Confirm Password</label>
          <br />
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            className="border p-3 w-full mt-2 rounded-2xl"
          />
        </div>
        <button
          className="w-full bg-black rounded-full text-white mt-5 p-3"
          onClick={() => handleSubmit()}
        >
          {status === 'loading' ? <ImSpinner9 /> : 'Continue'}
        </button>

        <div className="flex w-full justify-center mt-5">
          <span>Have</span>&nbsp;<span>An</span>&nbsp;<span>Vendor</span> &nbsp;
          <span>Account?</span> &nbsp; &nbsp;{' '}
          <div
            className="flex cursor-pointer"
            onClick={() => router.push('/vendor/login')}
          >
            <span className="text-green-500">Login</span>&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}
