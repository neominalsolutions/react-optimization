import React from 'react';
import { User } from './UseCallbackSample';

export type UseItemProps = {
	item: User;
	onDelete: (id: number) => void; // action func props
};

function UserItem({ item, onDelete }: UseItemProps) {
	console.log('...rendering child');
	return (
		<div key={item.id}>
			{item.name}
			<button
				onClick={() => {
					console.log('userId', item.id);
					onDelete(item.id);
				}}
			>
				Sil
			</button>
		</div>
	);
}

export default React.memo(UserItem);

// Action , Function propslar ile çalışırken React.memo kullanımı yapsak dahi component action propslardan dolayı gereksiz render alır. Bu sebeple, action propslar parent componentten useCallback ile çağrılmalıdır.
