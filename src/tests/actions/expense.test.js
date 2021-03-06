
import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test('Should setup remove expense action object', () => {
    const action = removeExpense( {id : '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', { notes: 'testing' })
    
    expect(action).toEqual({
      type: "EDIT_EXPENSE",
      id: '123abc',
        updates: {
          notes:'testing'
      },
    });
})

test('Should setup add expense action object with provided values', () => {
    
    const expenseData = {
      description: "new desciprion",
      note: "new note",
      amount: 100,
      createdAt: 1000,
    };
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should setup add expensa action object with default values', () => {
    const action = addExpense();
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description : "",
            note : "",
            amount : 0,
            createdAt : 0,           

        }
    })
})



