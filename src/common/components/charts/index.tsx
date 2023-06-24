import { useRef } from 'react';
import Highcharts, { SeriesOptionsType } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getChartConfig } from './config';

interface ChartProps {
    type: string;
    title: string;
    categories: string[];
    series: SeriesOptionsType[] | any;
    yTitle: string;
}

function Chart(props: { data: ChartProps }) {
  const data = props.data;

  // Create a ref to hold the Highcharts chart instance
  const chartRef = useRef<Highcharts.Chart | null>(null);

  // Define the chart options based on the provided data
  const chartOptions = {
    ...getChartConfig(),
    xAxis: {
      categories: data.categories,
    },
    yAxis: {
      title: {
        text: data.yTitle,
      },
    },
    series: data.series,
    accessibility: {
      enabled: false, // TODO: Enable it for accessibility
    },
  };

  // Render the HighchartsReact component with the Highcharts library and chart options
  return <HighchartsReact highcharts={Highcharts} options={chartOptions} ref={chartRef} />;
}

export default Chart;
