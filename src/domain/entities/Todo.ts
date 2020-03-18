export class Todo {
  id: number;
  text: string;
  completed: boolean;

  constructor(id: number, text: string, completed: boolean) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }
}

export class Status {
  text: string;

  constructor(text: string) {
    this.text = text;
  }
}
