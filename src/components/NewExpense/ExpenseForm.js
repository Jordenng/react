import './ExpenseForm.css'

const ExpenseForm = () =>{
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>
                    Title
                </label>
                <input type="text"/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01"/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Submit</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;