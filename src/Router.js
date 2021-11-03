import { Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import LeadRegistration from "./pages/LeadRegistration"
import LeadsPanel from "./pages/LeadsPanel"

const Router = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Register} path="/register" exact />
            <Route component={LeadRegistration} path="/leads/new" exact />
            <Route component={LeadsPanel} path="/leads" exact />
        </BrowserRouter>
    )
}
export default Router