import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouteObject, useRoutes } from 'react-router-dom';
import UseStateSample from './demo/useState/UseStateSample';
import useEffectSample from './demo/useEffect/useEffectSample';

function App() {
	// 2. yöntem useRoute hook ile routing işlemlerini yönetimi
	const routes: RouteObject[] = [
		{
			path: '/',
			element: <>Ana sayfa</>,
		},
		{
			path: '/about',
			element: <>Hakkımızda</>,
		},
		{
			path: 'demo', // /demo/useState // nested route yapısı
			children: [
				{
					path: 'useState',
					Component: UseStateSample,
				},
				{
					path: 'useEffect',
					Component: useEffectSample,
				},
			],
		},
	];

	return useRoutes(routes);
}

export default App;
