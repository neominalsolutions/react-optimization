import React, { useEffect, useReducer } from 'react';
import { CouponReducer } from './reducers/CouponReducer';

function UseReducerSample() {
	// useState yerine useReducer kullandık.
	// dispatch ise setState arasında bir fark yok
	// couponState de useState deki getter'ı temsil eder. güncel state değerini okumamızı sağlar
	// useReducer ile useState ile yaptığımız işlemleri action type bazlı daha yönetilebilir olarak component içinde değil componentin dışında bir functionda state yönetimi sağlarız.
	const [couponState, dispatch] = useReducer(CouponReducer, {
		quantity: 1,
		price: 10,
	});

	useEffect(() => {
		console.log('couponState changed');
	}, [couponState]);

	// dispatch sevk et event driven programingde kullanılan bir asenkron event driven teknik.

	return (
		<div style={{ padding: '10px' }}>
			<label>Fiyat : {couponState.price}</label>

			<input
				type="text"
				onChange={(e) => {
					dispatch({
						type: 'PriceChange',
						payload: {
							price: Number(e.target.value),
							quantity: couponState.quantity,
						},
					});
				}}
			/>
			<hr></hr>

			<label>Adet : {couponState.quantity}</label>
			<input
				type="number"
				onChange={(e) => {
					dispatch({
						type: 'QuantityChange',
						payload: {
							price: couponState.price,
							quantity: Number(e.target.value),
						},
					});
				}}
			/>
		</div>
	);
}

export default UseReducerSample;
