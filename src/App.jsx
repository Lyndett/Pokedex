import { PokemonProvider } from './context/PokemonProvider';
import { AppRouter } from "./AppRouter";

function App() {
  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  )
}
export default App;