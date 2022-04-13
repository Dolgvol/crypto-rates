import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import OrderGrid, { OrderGridProps } from './OrderGrid';
import initOrders from './OrderGrid.fixture';

export default {
  title: 'Example/OrderGrid',
  component: OrderGrid,
  argTypes: {
  },
} as ComponentMeta<typeof OrderGrid>;

const Template: ComponentStory<typeof OrderGrid> = (args) => <OrderGrid {...args} />;

export const LoadingData = Template.bind({});
LoadingData.args = {
    // loading: true,
    rows: []
};

export const EmptyData = Template.bind({});
EmptyData.args = {
    // loading: false,
    rows: []
};

export const ResolvedData = Template.bind({});
ResolvedData.args = {
    // loading: false,
    rows: []
};

// export const RejectedData = Template.bind({});
// RejectedData.args = {
// };

