import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = (props) => {

    // const [userInput, setUserInput]=useState({
    //     enteredTitle:"",
    //     enteredAmount:"",
    //     enteredDate:""
    // })
    const [enteredDate, setEnteredDate] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredTitle, setEnteredTitle] = useState('')

    useState('')

    const titleChangedHandler = (event) => {
        // setUserInput((prevState) => {
        //     return {...prevState,enteredTitle:event.target.value}
        // })
        setEnteredTitle(event.target.value);
    };

    const amountChangedHandler = (event) => {
        setEnteredAmount(event.t)
    }

    const dateChangedHandler = (event) => {
        setEnteredDate(event.t)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData();
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input
                    type="text"
                    value={enteredTitle}
                    onChange={titleChangedHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input
                    type="number"
                    value={enteredAmount}
                    onChange={amountChangedHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input
                    type="date"
                    min="2019-01-01"
                    value={enteredDate}
                    onChange={dateChangedHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Submit</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;