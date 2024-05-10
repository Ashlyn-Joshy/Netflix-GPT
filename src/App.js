import Body from "./components/Body";
import store from "./redux/AppStore";
import { Provider } from "react-redux";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
