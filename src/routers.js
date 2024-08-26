
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/theme/masterLayout";

const renderUserRouter = () => {
    const userRouter =[
        {
            path: ROUTERS.PAGE.HOME,
            component: <Homepage/>,
        },
    ];
    return (
        <MasterLayout>
        <Routes>
            {
                userRouter.map((item, key:number) => (
                    <Route key={key}  path={item.path} element={item.component}/>
               ))}
             </Routes> 
      </MasterLayout>
    );
};

const RouterCustom = () => {
return renderUserRouter();
};

export default RouterCustom;