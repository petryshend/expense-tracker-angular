import {Component, OnInit} from '@angular/core';
import {ExpenseService} from './expense.service';
import {Expense} from './expense';

@Component({
    selector: 'expenses',
    templateUrl: 'expenses.component.html',
    providers: [ExpenseService]
})
export class ExpensesComponent implements OnInit {
    expenses: Expense[];
    constructor(private expenseService: ExpenseService) {}

    ngOnInit(): void {
        this.getExpenses();
    }
    getExpenses(): void {
        this.expenseService.getExpensesSlowly().then(expenses => this.expenses = expenses);
    }
    getTotalSpent(): number {
        let total = 0;
        this.expenses.forEach(function(expense) {
            total += expense.amount;
        });
        return total;
    }

}