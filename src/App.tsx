import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { Provider } from "react-redux";
import { Store } from "./global/Store";

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <RouterProvider router={MainRouter} />
      </Provider>
    </>
  );
};

export default App;
