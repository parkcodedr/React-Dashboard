import React from 'react'
import { SparklineComponent,Inject,SparklineTooltip } from '@syncfusion/ej2-react-charts'
const SparkLine = ({id,height,width,color, data,type,currentColor}) => {
  return (
     <SparklineComponent
id={id}
height={height}
width={width}
lineWidth={1}
valueType="Numeric"
fill={color}
border={{ color: currentColor, width: 2 }}
tooltipSettings={{
  visible: true,
  // eslint-disable-next-line no-template-curly-in-string
  format: '${x} : data ${yval}',
  trackLineSettings: {
    visible: true,
  },
}}
markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
dataSource={data}
xName="x"
yName="yval"
type={type}
>
<Inject services={[SparklineTooltip]} />
</SparklineComponent>
  )
}

// import React from 'react';
// import {
//   Chart,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';


// Chart.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );
// const source = [800,1000,500,200,600,300,900]

// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// const data = {
//   labels,
//   datasets: [
//     {
//       fill: true,
//       label: 'Dataset 2',
//       data: source,
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };


// const SparkLine = ()=>{
//   return(
//     <Line options={options} data={data} />
//   )
// }
export default SparkLine