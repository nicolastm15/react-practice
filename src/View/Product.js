import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';

const Product = () => {
	const { id } = useParams();
	const url = `https://5fccf355603c0c00164873c8.mockapi.io/products/${id}`;
	const [product, setProduct] = useState({
		loading: true,
		data: null,
		error: false,
	});

	useEffect(() => {
		const fetchProduct = async () => {
			setProduct((prevState) => {
				return { ...prevState, loading: true };
			});
			try {
				const response = await axios.get(url);
				setProduct({ loading: false, data: response.data, error: false });
			} catch (error) {
				setProduct({ loading: false, data: null, error: true });
			}
		};

		fetchProduct();
	}, [url]);

	const loadContent = () => {
		if (product.loading) return <Loader />;
		else {
			return product.error ? (
				<p>Error while fetching data. Please refresh or try again later.</p>
			) : (
				<div>
					<h1 className='text-2xl font-bold mb-3'>{product.data.name}</h1>
					<div>
						<img src={product.data.images[0].imageUrl} alt={product.data.name} />
					</div>
					<div className='font-bold text-xl mb-3'>${product.data.price}</div>
					<div>{product.data.description}</div>
				</div>
			);
		}
	};

	return loadContent();
};

export default Product;
