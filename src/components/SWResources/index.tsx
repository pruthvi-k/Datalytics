import { useAtom } from 'jotai';
import { Chip, Stack } from "@mui/material";
import { queryResourceAtom, resourcesDataAtom, selectedResourceAtom } from "../../store";
import ChartPlot from '../ChartPlot';

function SWResources() {
  // Fetching the resources data and handling selected resource state using Jotai atoms
  const [resourcesData] = useAtom(resourcesDataAtom);
  const [, setSelectedResource] = useAtom(selectedResourceAtom);
  const [data] = useAtom(queryResourceAtom);

  // Event handler for when a resource chip is clicked
  const handleClick = (key: any) => {
    setSelectedResource(key); // Updating the selectedResourceAtom with the clicked key

    // Additional logic can be added here based on the requirements
  }

  return (
    <>
      <Stack direction="row" spacing={1} data-testid="sw-resources" sx={{ mt: 6, mb: 3 }}>
        {
          resourcesData && Object.keys(resourcesData).map((key: string) => (
            <Chip key={key} label={key} variant="outlined" onClick={() => handleClick(key)} />
          ))
        }
      </Stack>
      {/* <Suspense fallback={"loading..."}> */}
        <ChartPlot data={data}/>
      {/* </Suspense> */}
    </>
  );
}

export default SWResources;
