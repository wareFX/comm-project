import React from 'react';
import { useCustomerContext } from '../../_pages/Customer/context';

export const Card = ({ firstName, lastName, email }: { firstName: string, lastName: string, email: string }) => {
  const { refetch } = useCustomerContext();

  return (
    <>
      <div className='bg-green-600 text-center text-purple-800'>
        <div>{firstName}</div>
        <div>{lastName}</div>
        <div>{email}</div>
      </div>


      <button onClick={refetch}>Update</button>
    </>
  );
};
