import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouteObject, useRoutes } from 'react-router-dom';
import UseStateSample from './demo/useState/UseStateSample';
import useEffectSample from './demo/useEffect/useEffectSample';
import ReactMemoSample from './demo/reactMemo/ReactMemoSample';
import UseRefSample from './demo/useRef/UseRefSample';
import UseMemoSample from './demo/useMemo/UseMemoSample';

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
				{
					path: 'reactMemo',
					Component: ReactMemoSample,
				},
				{
					path: 'useRef',
					Component: UseRefSample,
				},
				{
					path:'useMemo',
					Component:UseMemoSample
				}
			],
		},
	];

	return useRoutes(routes);
}

export default App;
