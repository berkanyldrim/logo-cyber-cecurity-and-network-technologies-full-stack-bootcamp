const http= require("http"); 
const users =require("./data/users.json"); // userlerı import ettik
const posts=require("./data/post.json"); //postları import ettik

// oluşturduğumuz http üzerinden bir server oluşturduk. request ve reponse yakalayabileceğimiz parametlerini tanımladık
const server=http.createServer((request,response)=>{ 
    console.log(` Talep Geldi: ${request.url}`);
    

    if(request.url === "/users")
    {   
        // Usersları geri döndük
        response.setHeader("Content-Type","application/json");
        response.write(JSON.stringify(users));
        response.end();
    }
    else if(request.url === "/posts"){

        // Postları geri döndük
        response.setHeader("Content-Type","application/json");
        response.write(JSON.stringify(posts));
        response.end();

    }

    else
    {   // 404 geri döndük
        response.writeHead(404,"Content-Type","application/json");
        response.end(JSON.stringify({message: "Yönlendirme Hatalı"}));
    }


})

// PORT numarasını belirler
const PORT=5000; // 5000 portu üzerinde çalışacak


// serverımızı dinliyoruz.
server.listen(PORT, ()=> console.log(`server ${PORT} portu üzerinde çalışmaya başladı`)); 