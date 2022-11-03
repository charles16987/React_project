import { useGlobalContext } from "./components/context";
import "./App.css";
import Search from "./components/Search";

function App() {
  const context = useGlobalContext();


  return (
  <div>
    <Search/>

  </div>
  );
}

export default App;
