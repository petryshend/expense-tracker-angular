import {Component} from '@angular/core';
import {Expense} from './expense';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newExpense: Expense = new Expense(3, 'type', 'new', 0, new Date(Date.now()));
}
