import uuid from 'uuid';

//ADD REDUCER
export const addExpense = ({
    description = ''
    , notes = ''
    , amount = 0
    , createdAt = 0
} = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        notes,
        amount,
        createdAt
    }
});

//REMOVE REDUCER
export const removeExpenseById = ({id} = {}
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

