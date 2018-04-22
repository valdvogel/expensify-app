import React from 'react';
import { connect } from 'react-redux';
import { editExpense, startRemoveExpense } from '../actions/expenses';
import ReactDOM from 'react-dom';
import ExpenseForm from './ExpenseForm';

const EditExpenseDashBoardPage = (props) => {
    console.log(props);

    return (
        <div>
            This is my edit component with id {props.match.params.id}
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(
                        props.expense.id,
                        expense
                    ));
                    props.history.push('/');

                }}
            />
            <button onClick={() => {
                props.dispatch(startRemoveExpense({ id: props.expense.id }));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );

};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
};

export default connect(mapStateToProps)(EditExpenseDashBoardPage);