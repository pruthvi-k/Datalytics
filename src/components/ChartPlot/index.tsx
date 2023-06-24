import Chart from "../../common/components/charts";

function ChatPlot({ data }: any) {
  const categories: string[] = [];
  let chartData: object[] = [];
  if (data.status === 'success' && data.data.results) {
    let films = []; let starships = []; let vehicles = [];
    for (let key in data.data.results) {
      console.log(key, data.data.results[key].name);
      categories.push(data.data.results[key].name);
      const record = data.data.results[key];
      films.push(record.films.length);
      starships.push(record.starships.length);
      vehicles.push(record.vehicles.length);
    }
    chartData = [{ data: films, name: "films" }, { data: starships, name: "starships" }, { data: vehicles }]
  }
  const chartDataConfig = {
    type: "column",
    title: "start war legends",
    categories: categories,
    yTitle: 'Height (cm)',
    series: chartData
  }

  return (
    <Chart data={chartDataConfig} />
  );
}

export default ChatPlot
