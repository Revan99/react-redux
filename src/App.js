import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreameContainer from "./components/IceCreameContainer";
import NewCakeContainer from "./components/NewCakeContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreameContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
