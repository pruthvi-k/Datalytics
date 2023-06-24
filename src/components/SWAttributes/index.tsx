import axios from "axios";
import Chart from "../../common/components/charts";
import { atom, useAtom } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';
import { getApiRoot } from "../../common/utils/apiRoot";

const idAtom = atom("people")

const [characterDataAtom] = atomsWithQuery((get) => ({
  queryKey: ['characterData', get(idAtom)],
  queryFn: async ({ queryKey: [, type] }) => {
    const response = await axios.get(`${getApiRoot()}/${type}/`);
    return response.data.results;
  },
}))

function SWAttributes() {
  const [characterData] = useAtom(characterDataAtom);
  console.log("characterData",characterData )

  const categories = characterData?.map((character: any) => character.name) ?? [];
  const heights = characterData?.map((character: any) => parseInt(character.height)) ?? [];
  console.log("SWAttributes", characterData);

  if (heights.length === 0) {
    return <div>Loading...</div>;
  }
  const chartData =  { 
    type: "column",
    title: "start war legends",
    categories: categories,
    yTitle: 'Height (cm)',
    series:  
    [{
      name: "",
      type: "spline",
      data: heights
    }]
   
}
  return (
      <Chart data={chartData}/>
  );
}

export default SWAttributes
