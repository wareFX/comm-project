import { createContext, useContext } from 'react';

interface CustomerContextState {
  refetch: () => void;

}

export const CustomerContext = createContext<CustomerContextState>({} as CustomerContextState);
export const useCustomerContext = () => useContext(CustomerContext);
