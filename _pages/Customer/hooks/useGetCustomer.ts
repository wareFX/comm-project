import { useEffect, useState } from 'react';
import { Customer } from '../../../pages/api/types/Customer';


export const useGetCustomer = () => {
  /** Always use types, nothing should ever be untyped */
  const [customer, setCustomer] = useState<Customer | undefined>();
  const [loading, setLoading] = useState<Boolean>(false);

  const fetchCustomer = async () => {
    try {
      /** NEVER USE then() ALWAYS ASYNC/AWAIT */
      const rawData = await fetch('/api/customer');
      const data = await rawData.json();
      setCustomer(data);
      setLoading(false);
    } catch (e) {
      console.log('Failed to fetch Data', e);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchCustomer();
  }, []);

  return { refetch: fetchCustomer, customer, loading };
};
