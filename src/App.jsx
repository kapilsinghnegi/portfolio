import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [{}],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
