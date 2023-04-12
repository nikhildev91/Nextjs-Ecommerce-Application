import React from 'react';
import Layout from './components/Layout';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  return (
    <Layout>
      <div className="container h-[60vh] m-auto flex justify-center items-center mt-16 p-5 md:p-0">
        <div className="w-full md:w-[30%] min-h[50vh]">
          <div className="flex justify-center">
            <p className="text-2xl md:text-4xl font-bold">Login</p>
          </div>
          <label htmlFor="" className="mt-5">
            Email
          </label>
          <br />
          <input
            type="email"
            className="border p-3 w-full mt-2 rounded-2xl"
            placeholder="Email Address"
          />
          <div className="mt-5">
            <label htmlFor="">Password</label>
            <br />
            <input
              type="password"
              className="border p-3 w-full mt-2 rounded-2xl"
              placeholder="Enter Password"
            />
          </div>
          <button className="w-full bg-black rounded-full text-white mt-5 p-3">
            Continue
          </button>

          <div className="flex w-full justify-center mt-5">
            <span>New</span>&nbsp;
            <span>User?</span> &nbsp; &nbsp;{' '}
            <div
              className="flex cursor-pointer"
              onClick={() => router.push('/signup')}
            >
              <span className="text-green-500">Create</span>&nbsp;
              <span className="text-green-500">an</span>&nbsp;
              <span className="text-green-500">account</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
