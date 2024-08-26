import Homepage from "./pages/users/homepage";
import MasterLayout from "./pages/users/theme/masterLayout";
import { ROUTERS } from "./utils/rounter";
import { Routes ,Route } from "react-router-dom"

const renderUserRouter = () => {
    const userRouters = [
        {
            path : ROUTERS.USER.HOME,
            component: <Homepage/>
        }
    ]
    return(
        <MasterLayout>
    <Routes>
        {
            userRouters.map((item,key) => (
            <Route key={key} path={item.path} element ={item.component} />
                
            ))}
    </Routes>
    </MasterLayout>
    );
};

    const RouterCustom = () => {
    return renderUserRouter();
};
export default RouterCustom;