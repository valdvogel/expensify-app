import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD REDUCER
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = ''
            , notes = ''
            , amount = 0
            , createdAt = 0

        } = expenseData;
        const expense = { description, notes, amount, createdAt };

        //console.log(expenseData);
        //console.log(expense);
        database.ref('expenses')
            .push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            });
    };
};

//REMOVE REDUCER
export const removeExpenseById = ({ id } = {}
) => ({
    type: 'DEL_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {

        return database.ref('expenses/' + id.toString())
            .remove()
            .then(() => {
                dispatch(removeExpenseById({ id }));
            });
    };

};


//EDIT REDUCER
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates

});

export const startEditExpense = (id, updates) => {
    return (dispatch) => {

        console.log(updates);
        return database.ref(`expenses/${id}`).update(updates)
            .then(() => {
                dispatch(editExpense(id, updates));
            });

    };

};

//SET EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses

});

export const startSetExpense = () => {

    return (dispatch) => {
        return database.ref('expenses')
            .once('value')
            .then((snapshot) => {

                const expenses = [];

                snapshot.forEach((child) => {
                    expenses.push({
                        id: child.key,
                        ...child.val()
                    });
                });

                console.log(expenses);

                dispatch(setExpenses(expenses));
            }).catch((e) => {
                console.log(e);
            });
    };
};

