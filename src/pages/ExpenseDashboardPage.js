import React from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseListFilter from "../components/ExpenseLIstFilter";

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage;