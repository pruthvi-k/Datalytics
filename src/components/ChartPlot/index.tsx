import Chart from "../../common/components/charts";
import formatChartData from "../../common/utils/dataFormatter";

function ChatPlot({ data }: any) {
  const {categories, chartData} = formatChartData(data);
  const chartDataConfig = {
    type: "",
    title: "Start War Legends",
    categories: categories,
    yTitle: 'Assets',
    series: chartData
  }

  return (
    <Chart data={chartDataConfig} />
  );
}

export default ChatPlot
