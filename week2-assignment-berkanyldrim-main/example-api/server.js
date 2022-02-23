
const express =require("express"); // express'i import ettik
const postController = require("./src/controllers/post.controller"); //  post controller import ettik
const usersController=require("./src/controllers/users.controller"); // user controller import ettik
const todosController=require("./src/controllers/todos.controller"); // todos controller import ettik

const app = express(); // uygulamamızı oluşturduk

// postları get yapacağımız fonksiyon
app.get("/posts",(req,res)=>{

    //postları alarak post değişkenine atadık.
    var posts = postController.getAllPosts();

    //postları yazdırdık
    res.send(posts);

});


// end point ile postları get yapacağımız fonksiyon
app.get("/posts/:postId",(req,res)=>{

    var post=postController.getPostById(req.params.postId);
    res.send(post);
});

// userları get yapacağımız fonksiyon
app.get("/users",(req,res)=>{

    var users= usersController.getAllUsers();
    res.send(users);
});

// end point ile userları get yapacağımız fonksiyon
app.get("/users/:userId",(req,res)=>{
    var user=usersController.getUserById(req.params.userId);
    res.send(user);
});


// todosları get yapacağımız fonksiyon
app.get("/todos" , (req,res)=>{

    var todos;

    // eğer query sorgusu var ise dönecek todo
    if(req.query.userId){
        todos=todosController.getTodosByUserId(req.query.userId);
    }

    // eğer query yok ise tüm todoları döndür
    else{
        todos=todosController.getAllTodos();

    }
     
    res.send(todos);
});


// end pointe göre todos get yapacağımız fonksiyon
app.get("/todos/:todosId",(req,res)=>{

    var todo=todosController.getTodoById(req.params.todosId);
    res.send(todo);
});

const PORT=5000; // kullanacağımız port

app.listen(PORT); // portumuzu dinliyoruz.
