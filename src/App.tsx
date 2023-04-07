import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import CompRoutes from "./routes";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <CompRoutes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
