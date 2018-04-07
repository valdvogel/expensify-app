import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

const AddExpenseDashBoardPage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={(expense)=>{
                props.dispatch(addExpense({
                    description : expense.description,
                    notes: expense.notes,
                    amount: expense.amount,
                    createdAt: expense.createdAt
                    }
                ));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpenseDashBoardPage); 