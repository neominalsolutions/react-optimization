import axios from 'axios';
import React, { useEffect, useState } from 'react';

function useEffectSample() {
	// componente asenkron veri çekme işlemlerinde yararlandığımız bir hook.
	const [posts, setPosts] = useState<any[]>(); // referance type state mekanizması
	const [selectedPost, SetSelectedPost] = useState<any>();

	const loadPosts = async () => {
		const data = (
			await axios.get<any[]>('https://jsonplaceholder.typicode.com/posts')
		).data;
		console.log('data', data);
		setPosts([...data]); // arayüzdeki posts referanslarını güncelle
	};

	const loadComments = async (id: number) => {
		const data = (
			await axios.get(
				'https://jsonplaceholder.typicode.com/comments?postId=' + id
			)
		).data;
		console.log('comments', data);
	};
	// component doma girerken bir network işlemi varsa en doğru load yeri bu hook.
	useEffect(() => {
		console.log('useEffect');
		loadPosts();
	}, []); // bu yazım şeklinde component doma girince sadece 1 kez tetiklenir. // componentwillmount

	useEffect(() => {
		console.log('selectedPost değişiminde tetiklenir');
		if (selectedPost !== undefined) {
			// load Commments Hangi posta ait olan commentleri çekeceğim.
			loadComments(selectedPost.id);
		}
	}, [selectedPost]); // state asenkron olması sebebi ile state güncellendiğinden emin olduğumuz yer useEffect hook'udur. componentdidupdate

	return (
		<div style={{ padding: '10px' }}>
			<p>Selected Post: {selectedPost?.title}</p>
			<select
				defaultValue={'-1'}
				onChange={(e: any) => {
					console.log('e.target', JSON.parse(e.target.value));
					SetSelectedPost(JSON.parse(e.target.value));
				}}
			>
				<option value={'-1'} disabled>
					Seçim Yapınız
				</option>
				{posts?.map((item: any, index: number) => {
					return (
						<option key={item.id} value={JSON.stringify(item)}>
							{item.title}
						</option>
					);
				})}
			</select>
		</div>
	);
}

export default useEffectSample;
