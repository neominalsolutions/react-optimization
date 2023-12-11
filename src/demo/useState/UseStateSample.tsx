// /useState
import { FC, useState } from 'react';

import React from 'react';

function UseStateSample() {
	// getter random güncel state değerini okur
	const [random, setRandom] = useState<number>();
	const [title, setTitle] = useState<string>('');
	// setRandom state set etmek için kullanılır.

	return (
		<div>
			{/* this.state.random  */}
			<p> {random}</p>
			<button
				onClick={() => {
					const randomNumber = Math.round(Math.random() * 100);
					setRandom(randomNumber);
				}}
			>
				Generate Random
			</button>
		</div>
	);
}

export default UseStateSample;

// export function UseStateSample({ items }: Props2) {
// 	return <></>;
// }

// 2.yöntem Function component arrow function yazım şekli
// export type Props2 = {
// 	items: [];
// };

// const useStateSample02: FC<Props2> = ({ items }: Props2) => {
// 	return <></>;
// };
