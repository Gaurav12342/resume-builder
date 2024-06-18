import { Route, BrowserRouter, Routes } from "react-router-dom";
import { routeConstant } from './constant';
import Login from '../Pages/Auth/LoginIn';
import Registration from "../Pages/Auth/Regstration";
import ResumeList from "../Pages/Resume";
import ResumeFormatFirst from "../Pages/Resume/Template/ResumeFormatFirst";
import ResumeTemplateSecond from "../Pages/Resume/Template/ResumeTemplateSecond";
import FormUI from "../Pages/Resume/Form";
import Dashboard from "../Pages/Dashboard";
import TemplateCard from "../Pages/Resume/Template/TemplateCard";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routeConstant.signIn} element={<Login />}> </Route>
                <Route path={routeConstant.signUp} element={<Registration />}> </Route>
                <Route path={routeConstant.resume} element={<PrivateRoute><ResumeList /></PrivateRoute>}> </Route>
                <Route path={routeConstant.template} element={<PrivateRoute><TemplateCard /></PrivateRoute>}> </Route>
                <Route path={routeConstant.resumeTemplateFirst} element={<PrivateRoute><ResumeFormatFirst /></PrivateRoute>}> </Route>
                <Route path={`${routeConstant.resumeTemplateFirst}/:id`} element={<PrivateRoute><ResumeFormatFirst /></PrivateRoute>}> </Route>
                <Route path={routeConstant.resumeTemplateSecond} element={<PrivateRoute><ResumeTemplateSecond /></PrivateRoute>}> </Route>
                <Route path={`${routeConstant.resumeTemplateSecond}/:id`} element={<PrivateRoute><ResumeTemplateSecond /></PrivateRoute>}> </Route>
                <Route path={routeConstant.formUI} element={<PrivateRoute><FormUI /></PrivateRoute>}> </Route>
                <Route path={routeConstant.dashboard} element={<PrivateRoute><Dashboard /></PrivateRoute>}> </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;