import React, { Component } from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker  } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const now = moment();
console.log(now.format("MMM Do, YYYY"));

class ExpenseForm extends Component {

    state = {
        description: "",
        note: "",
        amount: "",
        createAt: moment(),
        focused: false
    }

    onDescriptonChange = e => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onNoteChange = e => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (amount.match(/^\d * (\.\d{ 0, 2}) ? $/)) {
            this.setState(() => ({ amount }))
        };
    };

    // onDateChange = (createdAt) => {
    //     this.setState(() => ({ createdAt }))
    // }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        autoFocus 
                        autoComplete="true"
                        value={ this.state.description }
                        onChange={ this.onDescriptonChange }
                    />
                    <input 
                        type="text" 
                        placeholder="Amount" 
                        value={ this.state.amount }
                        onChange={ this.onAmountChange }
                    />
                    <SingleDatePicker 
                        date={ this.state.createAt }
                        onDateChange={ date => this.setState({ date }) }
                        focused={ this.state.focused }
                        onFocusChange={ ({ focused }) => this.setState({ focused }) }
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        placeholder="Add a note for your expense"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;