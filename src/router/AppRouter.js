import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

// components
import Header from "../components/Header";

// pages
import ExpenseDashBoadPage from "../components/pages/ExpenseDashboardPage";
import AddExpensePage from "../components/pages/AddExpensePage";
// import EditExpensePage from "../components/pages/EditExpensePage";
import HelpPage from "../components/pages/HelpPage";
import NotFoundPage from "../components/pages/NotFoundPage";



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ ExpenseDashBoadPage } exact />
                <Route path="/create" component={ AddExpensePage } />
                <Route path="/help" component={ HelpPage } />
                <Route component={ NotFoundPage } />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;