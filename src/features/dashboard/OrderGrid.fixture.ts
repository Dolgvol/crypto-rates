import { Order } from './domain.model'

const initOrders:Order[] = [
    {
        id: '1',
        type: 'market',
        side: 'buy',
        _status: 'closed',
        price: 159,
        amount: 6.0,
        createdAt: '2021-04-13T15:13:13.754Z',
        updatedAt: '2021-04-13T15:13:13.754Z'
    },
    {
        id: '2',
        type: 'market',
        side: 'sell',
        _status: 'closed',
        price: 200,
        amount: 7.0,
        createdAt: '2021-04-13T15:13:13.754Z',
        updatedAt: '2021-04-13T15:13:13.754Z'
    },
    {
        id: '3',
        type: 'limit',
        side: 'buy',
        _status: 'open',
        price: 303,
        amount: 12.0,
        createdAt: '2021-04-13T15:13:13.754Z',
        updatedAt: '2021-04-13T15:13:13.754Z'
    },    
    {
        id: '4',
        type: 'market',
        side: 'sell',
        _status: 'closed',
        price: 50,
        amount: 2.0,
        createdAt: '2021-04-13T15:13:13.754Z',
        updatedAt: '2021-04-13T15:13:13.754Z'
    },
    {
        id: '5',
        type: 'limit',
        side: 'buy',
        _status: 'canceled',
        price: 228,
        amount: 9.0,
        createdAt: '2021-04-13T15:13:13.754Z',
        updatedAt: '2021-04-13T15:13:13.754Z'
    }
];

export default initOrders