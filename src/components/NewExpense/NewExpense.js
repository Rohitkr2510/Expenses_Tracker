import React , {useState} from 'react'
import './NewExpense.css'
import ExpenseFrom from './ExpenseForm'

const NewExpense = (props) => {

    const [isEditing,setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id : Math.random().toString(),
            ...enteredExpenseData,
            
        };
       // console.log('NewExpense.js')
       // console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);

    };
      const startEditingHandler = () =>{
                setIsEditing(true);
      }

      const stopEditingHandler = () => {
        setIsEditing(false);
      }
    return <div className = 'new-expense'>
        {isEditing === false && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseFrom onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopEditingHandler}></ExpenseFrom>}
    </div>
};

export default NewExpense;