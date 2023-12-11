import React, { useMemo, useState } from 'react';
// expensive functions ile maliyet oluşturan hesaplama işlemleri varsa component içinde state değişiminde bu tarz değişkenler tekrar tekrar hesaplanır. Bu da rendering performansını ciddi anlamda etkiler.
// memory leak hatalarında müsait hale gelicektir.
function UseMemoSample() {
	const [number, setNumber] = useState<number>(0);
	const [counter, setCounter] = useState<number>(0);

	// amaç calculateFactoriel setCounter değişiminden etkilenmemeli son güncel number değerine göre function gereksiz yere tekrar render olmamalıdır.
	const calculateFactoriel = (num: number) => {
		console.log('...calculating');
		let result = 1;
		for (let index = 2; index <= num; index++) {
			console.log('for-item');
			result *= index;
		}
		return result;
	};

	const factoriel = useMemo(() => calculateFactoriel(number), [number]);
	// sadece number state değişiminde function tekrar çağır. number state değişimi yoksa function değerini yani factoriel variable değerini memoisation yap.
	return (
		<div style={{ padding: '10px' }}>
			<p>Faktoriel : {factoriel}</p>
			<p>Sayac: {counter}</p>
			<input
				onBlur={(e: any) => {
					setNumber(Number(e.target.value));
				}}
			/>
			<br></br>
			<button
				onClick={() => {
					setCounter(counter + 1);
				}}
			>
				Sayac
			</button>
		</div>
	);
}

export default UseMemoSample;
