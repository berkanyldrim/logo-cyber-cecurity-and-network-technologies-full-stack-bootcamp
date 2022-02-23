const todos= require("../data/todos"); //todosları import ettik

//todosları geri döndüren fonksiyon
getAllTodos = () =>{

    return todos;
};


// query selectora göre geri döndüren fonksiyon
getTodosByUserId=(userId) =>{
    return todos.filter(todo=>todo.userId==userId);

};


//end pointe göre todoları geri döndüren fonksyion
getTodoById = (todoId) =>{
    return todos.filter(x=>x.id==todoId);
};

module.exports = {getAllTodos, getTodoById,getTodosByUserId}; // dışarıdan kullanılması için export ediyoruz.