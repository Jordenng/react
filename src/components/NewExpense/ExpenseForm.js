import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = () => {
    const [enteredDate, setEnteredDate] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredTitle, setEnteredTitle] = useState('')

    useState('')

    const titleChangedHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangedHandler = (event) => {
        setEnteredAmount(event.t)
    }

    const dateChangedHandler = (event) => {
        setEnteredDate(event.t)
    }
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>
                    Title
                </label>
                <input type="text" onChange={titleChangedHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" onChange={amountChangedHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" onChange={dateChangedHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Submit</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;