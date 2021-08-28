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

            <h1>Let's get started!</h1>
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}>
            </ExpenseItem>
        </div>
    )
}

export default Expenses;