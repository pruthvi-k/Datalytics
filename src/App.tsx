import { Provider } from 'jotai';
import './App.css';
import { Container, Typography } from '@mui/material';
import SWResources from './components/SWResources';

function App() {
  // const [data1, data2] = useQueries({
  //   queries: [
  //     { queryKey: ['type', 'people'], queryFn: async () => await fetch(), staleTime: Infinity },
  //     { queryKey: ['type', 'film'], queryFn: async () => await fetch(), staleTime: Infinity }
  //   ]
  // })
  return (
    <Provider>
      <Container sx={{ paddingTop: '2rem', width: "100vw", maxWidth: "100%" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Datalytics
        </Typography>
        <SWResources />
        
        {/* TODO: Create common component which take selected resource and show graph */}
      </Container>
    </Provider>
  );
}

export default App;
