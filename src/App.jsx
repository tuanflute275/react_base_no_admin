import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import { publicRoutes } from "./routes/Routes";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {publicRoutes.map((route, index) => {
        return (
          <Route exact key={index} path={route.path} element={route.element} />
        );
      })}
    </Routes>
  );
}

export default App;
