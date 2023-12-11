import React, { useEffect, useRef, useState } from 'react';

function UseRefSample() {
	// react tarafından bir değişken değerinin takibe alınması için ya useState ile tanımlanmış bir değişken yada useRef ile tanımlanmış değişken ifade olması lazım.
	const [inputColor, SetInputColor] = useState<string>('green');
	const colors = ['green', 'blue', 'purple', 'white', 'red'];
	const [inputValue, SetInputValue] = useState('');
	const renderCount = useRef<number>(0); // eğer render alındığı taktirde değişmesini istemediğimiz yada güncel değerinin korumamız gereken değişkenlerimiz varsa bu tarz değişkenler useRef hook ile memoisation yapmış oluruz.
	let _renderCount = 0;
	// render oldunduğunda render sayısını gözlemelemek için input değeri değişiminde renderCount değerini 1 arttırdık ki kaç kez render alındığını öğrenelim.
	// 2.yöntemde ise html elemenlerin domdaki referansların erişmek için kullanılır. Bu durumda dom üzerinden nesneye sanki document.getElementById() ile bağlanıyormuşuz gibi erişim sağlanabilir.
	const inputRef = useRef<HTMLInputElement>(null);
	// elementlere referansı üzerinden bağlanma yöntemiz.
	// gereksiz renderları input style değişiminde input value clear işleminde önüne geçmiş olduk.
	// gerçek dom üzerinden virtual doma tetiklemeden bir inpout değer değişimi yaptık.

	// useRef hook
	// burda işlemler gerçek dom üzerinde gerçekleşir.
	// const myInput = document.getElementById('myInput');
	// if (myInput?.style) {
	// 	myInput.style.fontSize = '8px';
	// }

	// UseRef Hook ile reacl dom üzerinden virtual dom tetiklenmeden işlem yapma fırsatımız olur.

	useEffect(() => {
		console.log('...rendering');
		_renderCount += 1;
		console.log('_renderCount', _renderCount);
		console.log('renderCount', renderCount);
		renderCount.current = renderCount.current + 1;

		const randomIndex = Math.round(Math.random() * colors.length - 1);
		SetInputColor(colors[randomIndex]);
	}, [inputValue]); // inputValue değişiminde burası tetiklenecek
	return (
		<div style={{ padding: '5px' }}>
			Input Value: {inputValue}
			<p>Render Count: {renderCount.current}</p>
			<p>Render Count Variable: {_renderCount}</p>
			<hr></hr>
			<input
				// style={{ color: inputColor }}
				id="myInput"
				ref={inputRef}
				value={inputValue}
				onChange={(e: any) => {
					SetInputValue(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					SetInputValue('');
				}}
			>
				Clear Input Value With State
			</button>
			<hr></hr>
			<button
				onClick={() => {
					if (inputRef.current) {
						// null değilse
						const element = inputRef.current as HTMLInputElement;
						element.value = '';

						const randomIndex = Math.round(Math.random() * colors.length - 1);

						element.style.backgroundColor = 'yellow';
						element.style.color = colors[randomIndex];

						// burdaki işlemler gereksiz render alınmını engeller.
					}

					// if(typeof(inputRef.current) === HTMLInputElement ) {

					// }
				}}
			>
				Clear Input Value With Ref
			</button>
		</div>
	);
}

export default UseRefSample;
