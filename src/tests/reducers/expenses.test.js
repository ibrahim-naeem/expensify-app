
import moment from 'moment';
import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test('should set default state', () => {
    
    const state = expenseReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };

    const state = expenseReducer(expenses, action)
    
    expect(state).toEqual([expenses[0], expenses[2]])
})

test("should not remove expense if id is not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: '32',
  };

  const state = expenseReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add an expense', () => {
    
    const expense = {
        id: "4",
        description: "some description",
        note: "some note",
        amount: 112233,
        createdAt: moment(0),
      }
    const action = {
      type: "ADD_EXPENSE",
      expense
    };

    const state = expenseReducer(expenses, action)

    expect(state).toEqual([...expenses, expense])
})

test('should edit expense with valid id', () => {
    const amount = 11223344
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[0].id,
        updates: {
            amount
        }
    };
    
    const state = expenseReducer(expenses, action)

    expect(state[0].amount).toBe(amount);
})


test("should not edit expense id id not found", () => {
  const amount = 11223344;
  const action = {
    type: "EDIT_EXPENSE",
    id: '-1',
    updates: {
      amount,
    },
  };

  const state = expenseReducer(expenses, action);

  expect(state).toEqual(expenses);
});

