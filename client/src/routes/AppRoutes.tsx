import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
}