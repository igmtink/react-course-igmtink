// export default interface Todo {
//   id: number;
//   text: string;
// }

export default class Todo {
  id: number;
  text: string;

  constructor(todo: string) {
    this.text = todo;
    this.id = Math.random();
  }
}
