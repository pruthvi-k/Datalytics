const formatChartData = (type: any, data: any) => {
  const categories: string[] = [];

  if (data.status === 'success' && data.data.results) {
    console.log(type);
    switch (type) {
      case 'people':
        {
          let films = []; let starships = []; let vehicles = [];

          for (let key in data.data.results) {
            categories.push(data.data.results[key].name);
            const record = data.data.results[key];
            films.push(record.films.length);
            starships.push(record.starships.length);
            vehicles.push(record.vehicles.length);
          }

          return {
            categories, chartData: [{ data: films, name: "films" },
            { data: starships, name: "starships" },
            { data: vehicles, name: "vehicles" }]
          }
        
        }
      case 'films':
        let characters = []; let starships = []; let planets = []; let vehicles = []; let spieces = [];

        for (let key in data.data.results) {
          categories.push(data.data.results[key].title);
          const record = data.data.results[key];
          characters.push(record.characters.length);
          starships.push(record.starships.length);
          vehicles.push(record.vehicles.length);
          planets.push(record.starships.length);
          spieces.push(record.vehicles.length);
        }

        return {
          categories, chartData: [{ data: characters, name: "Characters" },
          { data: starships, name: "Starships" },
          { data: vehicles, name: "Vehicles" },
          { data: planets, name: "Planets" },
          { data: spieces, name: "Spieces" }]
        }
    }
  }
  return { categories, chartData: [] }
}

export default formatChartData;