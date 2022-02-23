// Kendi serverımızı oluşturmamız için gerekli kütüphane
const http= require("http"); 
const kisiler =require("./data.json");

// oluşturduğumuz http üzerinden bir server oluşturduk. request ve reponse yakalayabileceğimiz parametlerini tanımladık
const server=http.createServer((request,response)=>{ 
    console.log(request.url); // atılan requestin url'sini ekrana yazıyoruz.
    
    response.statusCode=200;  // OK kodu => status codelerinin detayları için (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

    response.setHeader("Content-Type","application/json"); // Geriye dönecek verinin tipini belirliyoruz.
    response.write(JSON.stringify(kisiler)); // Gönderilen verinin içeriği
    response.end(); // Yazım işlemini tamamladık.

})

// PORT numarasını belirler
const PORT=5000; // 5000 portu üzerinde çalışacak


// serverımızı dinliyoruz.
server.listen(PORT, ()=> console.log(`server ${PORT} portu üzerinde çalışmaya başladı`)); 

