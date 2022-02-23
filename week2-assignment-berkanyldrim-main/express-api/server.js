const express =require("express"); // express'i import ettik

const users=require("./data/users");
const posts=require("./data/post");

const app=express(); // bir uygulama oluşturduk.

//query'e göre usersları döndürüyoruz.
app.get("/users",(req,res)=>{ 

    if(req.query.id) //eğer query var ise istenilen değere göre usersı döndürüyoruz.
    {
        var item = users.filter(x=>x.id == req.query.id)
        res.send(item);

    }
    else{ // query yok ise sadece usersları döndürüyoruz.
        res.send(users);
    }
    
});

// endpoint' e göre post listeleme.
app.get("/posts/:postId",(req,res)=>{ 

    console.log(req.params.postId);
    var result=posts.filter(x=> x.id== req.params.postId) //Eğer end point sorgusu var ise istenilen değeri result'a atıyoruz

    res.send(result);
});

app.get("/posts",(req,res)=>{

    res.send(posts);
}); 


const PORT=5000; //çalışacak portu belirliyoruz.

app.listen(PORT);//uygulamamızı dinliyoruz.

