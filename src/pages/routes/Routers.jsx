import { Routes, Route } from "react-router-dom";
import Home from "../Home";

function Routers() {
    return (
      <Routes>
        <Route index element={<Home />} />
        </Routes>
  );
}

export default Routers;
