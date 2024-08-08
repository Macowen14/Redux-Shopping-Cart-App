import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import store from "./components/redux/Store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import Icecream from "./components/Icecream";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <Icecream />
      </div>
    </Provider>
  );
}

export default App;
