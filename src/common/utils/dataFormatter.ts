const formatChartData = (data: any) => {
  const categories: string[] = [];
  if (data.status === 'success' && data.data.results) {
    let films = []; let starships = []; let vehicles = [];
    for (let key in data.data.results) {
      categories.push(data.data.results[key].name);
      const record = data.data.results[key];
      films.push(record.films.length);
      starships.push(record.starships.length);
      vehicles.push(record.vehicles.length);
    }
    return { categories, chartData: [{ data: films, name: "films" }, { data: starships, name: "starships" }, { data: vehicles, name: "vehicles" }] }
  }
  return {categories, chartData:[]}
}

export default formatChartData;