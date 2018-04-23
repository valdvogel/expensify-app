
import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpenseDashBoardPage from '../components/AddExpenseDashBoardPage';
import EditExpenseDashBoardPage from '../components/EditExpenseDashBoardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/dashboard" component={ExpenseDashBoardPage} />
                <Route path="/create" component={AddExpenseDashBoardPage} />
                <Route path="/edit/:id" component={EditExpenseDashBoardPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;