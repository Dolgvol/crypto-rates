import React from 'react';
import OrderGridContainer from './OrderGridContainer';
import DashboardDataProvider from './DashboardDataProvider';


const DashboardPage = ():React.ReactElement => (
    <DashboardDataProvider>
        <OrderGridContainer />
    </DashboardDataProvider>
)

export default DashboardPage