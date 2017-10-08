export class Expense {
    id: number;
    type: string;
    title: string;
    amount: number;
    createdAt: Date;
    constructor(id: number, type: string, title: string, amount: number, createdAt: Date) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.amount = amount;
        this.createdAt = createdAt;
    }
}