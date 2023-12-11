import React, { useEffect, useState } from 'react';
import Header from './Header';

// parent component
function ReactMemoSample() {
	const [counter, setCounter] = useState<number>(0);
	const [title, setTitle] = useState<string>();
    // Header component title değişirse render alınacak.

	return (
		<div style={{ padding: '10px' }}>
			{/* child component */}
			<p>Sayac: {counter}</p>
			<button
				onClick={() => {
					setCounter(counter + 1);
				}}
			>
				Set Counter
			</button>
			<button
				onClick={() => {
					const _title = window.prompt('Title Giriniz');
					setTitle(_title as string);
				}}
			>
				Set Title
			</button>
			<Header title={title} />
		</div>
	);
}

export default ReactMemoSample;
