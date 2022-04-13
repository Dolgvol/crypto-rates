import * as React from 'react';
import { useAppSelector } from '../../app/hooks';

import OrderGrid from './OrderGrid';
import { selectOrders } from './ordersSlice';
import { Order as DomainOrder } from './domain.model';
import { Order as UIOrder } from './ui.model';



function mapDomainOrdersToUIOrders(orders: DomainOrder[]): UIOrder[] {
    return orders.map((order:DomainOrder) => ({
        id: order.id,
        type: order.type,
        side: order.side,
        status: order._status,
        price: order.price,
        amount: order.amount,
        createdAt: order.createdAt
    }))
}


const OrderGridContainer = (): React.ReactElement => {

    const orders = mapDomainOrdersToUIOrders( useAppSelector(selectOrders) );

    return (
        <OrderGrid rows={orders} loading={false} />
    )
}

export default OrderGridContainer