import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { toast, ToastContainer } from 'react-toastify';
import { getError } from '../utils/error';
import { ImSpinner9 } from 'react-icons/im';
import Head from 'next/head';

export default function Login() {
  const router = useRouter();
  const { redirect } = router.query;
  const { status, data: session } = useSession();
  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/vendor');
    }
  }, [router, session, redirect]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async () => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
        user: 'vendor',
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <div className="container h-[60vh] m-auto flex justify-center items-center mt-16 p-5 md:p-0">
      <Head>
        <title>Flicart Vendor</title>
      </Head>
      <ToastContainer position="top-center" />
      <div className="w-full md:w-[30%] min-h[50vh]">
        <div className="flex justify-center">
          <p className="text-2xl md:text-4xl font-bold">Login</p>
        </div>
        <label htmlFor="" className="mt-5">
          Email
        </label>
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="border p-3 w-full mt-2 rounded-2xl"
          placeholder="Email Address"
        />
        <div className="mt-5">
          <label htmlFor="">Password</label>
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="border p-3 w-full mt-2 rounded-2xl"
            placeholder="Enter Password"
          />
        </div>
        <button
          className="w-full bg-black rounded-full text-white mt-5 p-3"
          onClick={() => handleSubmit()}
        >
          {status === 'loading' ? <ImSpinner9 /> : 'Continue'}
        </button>

        <div className="flex w-full justify-center mt-5">
          <span>New</span>&nbsp;
          <span>Vendor?</span> &nbsp; &nbsp;{' '}
          <div
            className="flex cursor-pointer"
            onClick={() => router.push('/vendor/signup')}
          >
            <span className="text-green-500">Create</span>&nbsp;
            <span className="text-green-500">an</span>&nbsp;
            <span className="text-green-500">account</span>
          </div>
        </div>
      </div>
    </div>
  );
}
