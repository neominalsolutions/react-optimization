export interface CouponItem {
	quantity: number; // adet
	price: number; // fiyat
}

export type CouponAction = {
	type: string;
	payload: CouponItem;
};

// coupon işlemlerini yöneteceğim function
// state güncel local state,
// action da yapılacak olan işlem
// reducer üzerinde tip bazlı state güncellemesi yaptık
export function CouponReducer(state: CouponItem, action: CouponAction) {
	if (action.type === 'QuantityChange') {
		state.quantity = action.payload.quantity;
	} else if (action.type === 'PriceChange') {
		state.price = action.payload.price;
	}

	return { ...state }; // referans type çalıştığımız için referansı koparılmış bir state döndürdü
}
