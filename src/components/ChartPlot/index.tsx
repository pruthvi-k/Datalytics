import { useAtom } from "jotai";
import Chart from "../../common/components/charts";
import formatChartData from "../../common/utils/dataFormatter";
import { selectedResourceAtom } from "../../store";

function ChatPlot({ data }: any) {
  const [type] = useAtom(selectedResourceAtom);
  const {categories, chartData} = formatChartData(type, data);
  const chartDataConfig = {
    type: "",
    categories: categories,
    yTitle: 'Assets',
    series: chartData
  }

  return (
    <Chart data={chartDataConfig} title={type}/>
  );
}

export default ChatPlot
