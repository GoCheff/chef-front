import { RouteObject } from "react-router-dom";

type parseRoutesDTO = {
  routes: RouteObject[];
};

function parseRoutes({ routes }: parseRoutesDTO): RouteObject[] {
  return routes;
}

export { parseRoutes };
