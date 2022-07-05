import React from 'react';

import { ChartsHeader, AreaChart } from '../../components';

const Area = () => (
  <div className="m-4 md:m-8 mt-24 p-8 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Area" title="Inflation Rate in Percentage" />
    <div className="w-full ">
      <AreaChart />
    </div>
  </div>
);

export default Area;