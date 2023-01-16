import HomePage from "../containers/HomePage";
import PeoplePage from "../containers/PeoplePage";
import NotFoundPage from "../containers/NotFoudPage";

const routesConfig = [
    {
        path: '/',
        element: HomePage
    },
    {
        path: '/people',
        element: PeoplePage
    },
    {
        path: '*',
        element: NotFoundPage
    }
];

export default routesConfig;