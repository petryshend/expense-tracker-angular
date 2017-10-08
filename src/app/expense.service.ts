import {Injectable} from '@angular/core';
import {Expense} from './expense';
import {EXPENSES} from './mock-expenses';

@Injectable()
export class ExpenseService {
    getExpenses(): Promise<Expense[]> {
        return Promise.resolve(EXPENSES);
    }
    getExpensesSlowly(): Promise<Expense[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getExpenses()), 2000);
        });
    }
}
