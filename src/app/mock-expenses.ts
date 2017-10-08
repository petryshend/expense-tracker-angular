import {Expense} from './expense';

export const EXPENSES: Expense[] = [
    new Expense(1, 'food', 'First Expense', 4.56, new Date(Date.now())),
    new Expense(2, 'transport', 'Second Expense', 9.99, new Date(Date.now())),
    new Expense(3, 'food', 'Third Expense', 100.00, new Date(Date.now())),
];
