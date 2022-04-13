import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

import { Order } from './domain.model'
import initOrders from './OrderGrid.fixture';


export interface OrdersState {
    ordersList: Order[];
    status: 'idle' | 'loading' | 'failed';
  }
  
  const initialState: OrdersState = {
    ordersList: initOrders,
    status: 'idle',
  };



  export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
    },
  }); 




export const selectOrders = (state: RootState) => state.orders.ordersList;


export default ordersSlice.reducer;
