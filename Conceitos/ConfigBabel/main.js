class List {
    constructor () {
        this.data = [];
    }
    
    add (data) {
        this.data.push(data);
    }
}

class TodoList extends List{
    constructor () {
        this.todos = [];
    }

    addTodo () {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById ('novotodo').onclick = function () {
    MinhaLista.addTodo();
}