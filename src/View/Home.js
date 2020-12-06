import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';

const Home = () => {
	const [products, setProducts] = useState({
		loading: true,
		data: [],
		error: false,
	});

	const url = `https://5fccf355603c0c00164873c8.mockapi.io/products/?page=1&limit=10`;

	useEffect(() => {
		const fetchProductList = async () => {
			setProducts((prevState) => {
				return { ...prevState, loading: true };
			});
			try {
				const response = await axios.get(url);
				setProducts({ loading: false, data: response.data, error: false });
			} catch (error) {
				setProducts({ loading: false, data: null, error: true });
			}
		};

		fetchProductList();
	}, [url]);

	const renderContent = () => {
		if (products.loading) return <Loader />;

		if (products.fetchError) return <p>Error while fetching data. Please refresh or try again later.</p>;
		else {
			return products.data.map((product) => <ProductCard product={product} />);
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
