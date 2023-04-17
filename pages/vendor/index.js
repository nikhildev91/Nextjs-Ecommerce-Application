/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Layout from '../components/vendor/Layout';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { getError } from '../utils/error';
import axios from 'axios';

export default function Dashboard() {
  const router = useRouter();

  const [name, setName] = useState('');
  const { status, data: session } = useSession();
  useEffect(() => {
    if (session?.user) {
      loadVendorDetails();
    } else {
      if (status != 'loading') {
        router.push('/vendor/login');
      }
    }
  }, [router, session]);

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
      <div>Vendor Dashboard</div>
    </Layout>
  );
}
