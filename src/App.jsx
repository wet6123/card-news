import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import { ConfigProvider } from "antd";
import theme from "./theme/themeConfig";

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <ConfigProvider theme={theme}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
}

export default App;
