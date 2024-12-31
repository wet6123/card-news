import CardNewsError from "./components/common/CardNewsError";
import MainLayout from "./components/layouts/MainLayout";
import MainIndex from "./pages/main/Index";
import CreateIndex from "./pages/create/Index";
import DownloadIndex from "./pages/download/Index";
import PrivateRoute from "./components/common/PrivateRoute";

const AccessType = Object.freeze({
  PUBLIC: "PUBLIC", // Everyone can access (Default)
  PRIVATE: "PRIVATE", // Authorized user can access only
});

const cardNewsRoutes = [
  {
    path: "",
    accessType: AccessType.PUBLIC,
    element: <MainLayout />,
    children: [
      {
        path: "",
        accessType: AccessType.PUBLIC,
        element: <MainIndex />,
      },
      {
        path: "create",
        accessType: AccessType.PUBLIC,
        element: <CreateIndex />,
      },
      {
        path: "download",
        accessType: AccessType.PUBLIC,
        element: <DownloadIndex />,
      },
    ],
  },
];

const injectProtectedRoute = (routes) => {
  const injectProtectedComp = (route) => {
    if (route.accessType === AccessType.PRIVATE) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }

    return route;
  };

  return routes.map((route) => {
    route = injectProtectedComp(route);

    if (route?.children) {
      route.children = route.children.map((route) =>
        injectProtectedComp(route)
      );
    }

    route.errorElement = <CardNewsError />;

    return route;
  });
};

export const routes = injectProtectedRoute(cardNewsRoutes);
