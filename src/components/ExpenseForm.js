import React, { Component } from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker  } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const now = moment();
console.log(now.format("MMM Do, YYYY"));

class ExpenseForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ""
        }
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

        if (amount.match()) { // use regex here
            this.setState(() => ({ amount }))
        };
    };


    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }

    onSubmit = e => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: "Please provide description and amount" }))
        } else {
            this.setState(() => ({ error: "" }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseInt(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                { this.state.error && <p>{ this.state.error }</p>}
                <form onSubmit={ this.onSubmit }>
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
                        date={ this.state.createdAt }
                        onDateChange={ this.onDateChange }
                        focused={ this.state.calenderFocused }
                        onFocusChange={ ({ focused }) => this.setState({ calenderFocused: focused }) }
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    /><br />
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