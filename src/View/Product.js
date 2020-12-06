import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Product = () => {
	const { id } = useParams();
	const url = `https://5fccf355603c0c00164873c8.mockapi.io/products/${id}`;
	const [product, setProduct] = useState(null);

	useEffect(() => {
		const fetchProduct = async () => {
			const response = await axios.get(url);
			setProduct(response.data);
		};

		fetchProduct();
	}, [url]);

	const content = product ? (
		<div>
			<h1 className='text-2xl font-bold mb-3'>{product.name}</h1>
			<div>
				<img src={product.images[0].imageUrl} alt={product.name} />
			</div>
			<div className='font-bold text-xl mb-3'>${product.price}</div>
			<div>{product.description}</div>
		</div>
	) : (
		<></>
	);

	return content;
};

export default Product;
