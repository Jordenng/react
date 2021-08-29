import {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear)
    }

    return (
        <div className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}/>
            {props.expenses.map(expense =>
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}/>)}

        </div>
    )
}

export default Expenses;