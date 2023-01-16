import { NavLink, Route, Routes} from "react-router-dom";
import PeoplePage from "../PeoplePage";
import HomePage from "../HomePage";
import NotFoundPage from "../NotFoudPage";

import styles from './App.module.css';
import Layout from "../../components/Layout";
// import routesConfig from "../../routes/routesConfig";



const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<HomePage/>} />
              <Route path="people" element={<PeoplePage/>} />
              <Route path="*" element={<NotFoundPage/>} />
          </Route>
      </Routes>
  );
}

export default App;
