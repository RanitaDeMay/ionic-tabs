export interface product {
    name: string;
    price: number;
    description?: string;
    type: string;
    photo: string;
}

export interface carrito {
    name: String;
    price: number;
    totalPrice: number;
    amount: number;
}

export interface compras {
    amount: number;
    total: number;
}