import React from 'react';

import { ChartsHeader, LineChart } from '../../components';

const Line = () => (
  <div className="m-4 md:m-8 mt-24 p-8 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Line" title="Inflation Rate" />
    <div className="w-full">
      <LineChart />
    </div>
  </div>
);

export default Line;