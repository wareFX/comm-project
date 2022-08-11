import React from 'react';
import { Card } from '../../components/Card/Card';
import { CustomerContext } from './context';
import { useGetCustomer } from './hooks/useGetCustomer';

export const CustomerPage = () => {
	/** @TODO pass in specific ID */
	const { customer, loading, refetch } = useGetCustomer();

	if (loading) {
		return (<div>LOADING...</div>);
	}

	if (!customer) {
		return (<div>Error, customer not found</div>);
	}

	return (
		<CustomerContext.Provider value={{ refetch: refetch }}>
			<Card email={customer.email} firstName={customer.name.first} lastName={customer.name.last} />
		</CustomerContext.Provider>);
};
