import React from 'react';

interface DashboardDataProviderProps {
    children: JSX.Element;
}

const DashboardDataProvider = ( {children}:DashboardDataProviderProps ):React.ReactElement => {


    
    return (
        <>
            {children}
        </>
    )
}

export default DashboardDataProvider