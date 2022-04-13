
export interface Order{
    id: string;
    type: string;
    side: string;
    _status: string;
    price: number;
    amount: number;
    createdAt: string;
    updatedAt: string;
}