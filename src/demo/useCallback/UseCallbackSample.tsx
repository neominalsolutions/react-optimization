import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import UserItem from './UserItem';

export interface User {
	id: number;
	name: string;
	email: string;
}
function UseCallbackSample() {
	console.log('...rendering parent');
	const [users, setUsers] = useState<User[]>([]);
	const [bgColor, setBgColor] = useState<string>('yellow');
	const colors = [
		'yellow',
		'blue',
		'green',
		'red',
		'white',
		'orange',
		'purple',
	];
	const loadUsers = async () => {
		const data = (await axios.get('https://jsonplaceholder.typicode.com/users'))
			.data;
		setUsers([...data]);
	};

	// yüklemede ve her bir state değişiminde tetiklendi.
	// [] geçmediğimiz durumda component de böyle rendering sorunları olabilir.
	useEffect(() => {
		loadUsers();
		console.log('effect');
	}, []);

	useEffect(() => {
		clearInterval(interval);
	}, [bgColor]);

	const interval = setInterval(() => {
		const randomIndex = Math.round(Math.random() * (colors.length - 1));

		if (bgColor !== colors[randomIndex]) {
			setBgColor(colors[randomIndex]);
		}
	}, 3000); // 3sn de bir arka plan rengi değişsin

	// const onItemDelete = (id: number) => {
	// 	console.log('id', id);
	// };

	const variable = useMemo(() => {}, []);
	// useMemodan tek farkı atamasının function tipinde olması
	const onItemDelete = useCallback(
		(id: number) => {
			console.log('id', id);

			const result = window.confirm('Kaydı silmek istediğinize emin misiniz?');

			if (result) {
				// silinmeyecek olanlar
				const filteredUsers = users.filter((x) => x.id !== id);

				console.log('filteredUsers', filteredUsers);

				setUsers([...filteredUsers]);
			}
		},
		[users]
	);

	return (
		<div
			style={{
				width: '100wv',
				height: '100vh',
				backgroundColor: bgColor,
				padding: '10px',
			}}
		>
			{users?.map((user: User) => {
				return <UserItem item={user} onDelete={onItemDelete} />;
			})}
		</div>
	);
}

export default UseCallbackSample;
