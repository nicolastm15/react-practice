import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';

const Home = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [fetchError, setFetchError] = useState(false);

    
	useEffect(() => {
        const url = `https://5fccf355603c0c00164873c8.mockapi.io/products/?page=1&limit=10`;
		const fetchProductList = async () => {
			setLoading(true);
			try {
				const response = await axios.get(url);
				setLoading(false);
				setProducts(response.data);
				setFetchError(false);
			} catch (error) {
				setLoading(false);
				setProducts(null);
				setFetchError(true);
			}
		};

		fetchProductList();
	}, []);

	const renderContent = () => {
		if (loading) return <Loader />;

		if (fetchError) return <p>Error while fetching data. Please refresh or try again later.</p>;
		else {
			return products.map((product) => <ProductCard product={product}/>);
		}
	};

	const content = renderContent();

	return (
		<div>
			<h1 className='font-bold text-2xl'>Product List</h1>
			{content}
		</div>
	);
};

export default Home;
