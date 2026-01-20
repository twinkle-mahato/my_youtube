import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Error from "./components/Error";
import SearchResults from "./components/SearchResults";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />,

      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "results",
          element: <SearchResults />,
        },
        {
          path: "watch/:videoId",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div>
        {/* RouterProvider provides the routing context to the app */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
