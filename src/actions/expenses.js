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

        //debugger;

        // const ref = database.ref('expenses').push(expense).then(()=>
        //     {console.log('foi')}
        // ).catch((e)=> console.log(e));
        //console.log(ref);

    };
};

//REMOVE REDUCER
export const removeExpenseById = ({ id } = {}
) => ({
    type: 'DEL_EXPENSE',
    id
});


//EDIT REDUCER
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates

});

