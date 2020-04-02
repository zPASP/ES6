/*
class List {
    constructor () {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}
*/

// class TodoList extends List { utilizando extensão para adicionar 
class TodoList {
    constructor () {
        this.todos = []
    }

    addTodo () {
        this.todos.push ('novo todo')
        console.log (this.todos)
    }
}


const MyList = new TodoList();

document.getElementById('novotodo').onclick = function  () {
    MyList.addTodo ();
}