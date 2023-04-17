import React, { useState } from 'react';
import Layout from './components/Layout';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        const user = await axios.post('/api/customer/register', {
          email,
          password,
        });
        if (user.data.id) {
          router.push('/login');
        }
      } else {
        toast.error('Not match Pasword and Confirm Password!.');
      }
    } else {
      toast.error('All Fileds Required!.');
    }
  };
  return (
    <Layout>
      <div className="container h-[60vh] m-auto flex justify-center items-center mt-16 p-5 md:p-0">
        <div className="w-full md:w-[30%] min-h[50vh]">
          <div className="flex justify-center">
            <p className="text-2xl md:text-4xl font-bold">Signup</p>
          </div>
          <label htmlFor="" className="mt-5">
            Email
          </label>
          <br />
          <input
            type="email"
            className="border p-3 w-full mt-2 rounded-2xl"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="mt-5">
            <label htmlFor="">Password</label>
            <br />
            <input
              type="password"
              className="border p-3 w-full mt-2 rounded-2xl"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              placeholder="Enter Password"
            />
          </div>
          <button
            className="w-full bg-black rounded-full text-white mt-5 p-3"
            onClick={() => handleSubmit()}
          >
            Continue
          </button>

          <div className="flex w-full justify-center mt-5">
            <span>Already</span>&nbsp;
            <span>have</span>&nbsp;
            <span>an</span>&nbsp;
            <span>account?</span> &nbsp; &nbsp;{' '}
            <div
              className="flex cursor-pointer"
              onClick={() => {
                router.push('/login');
              }}
            >
              <span className="text-green-500">Sign</span>&nbsp;
              <span className="text-green-500">In</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
