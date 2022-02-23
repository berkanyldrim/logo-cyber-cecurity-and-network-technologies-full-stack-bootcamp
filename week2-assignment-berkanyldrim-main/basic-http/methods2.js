/* callback fonksiyonumuzu Promise ile yapıyoruz
Promise yapısında olan bir method geriye mutlaka bir promise döndürür.
Promise classından yeni bir instance türeterek bu instancenin iki farklı parametre yapısı ile(RESOLVE, REJECT) içeride handler eder

Method düzgün bir şekilde işleyişini yerine getirirse geri döndürülecek veriler resolve ile  , düzgün bir şekilde 
işleyişini yerine getirmez ise reject ile  geriye döndürülür.

Resolve'yi then ile reject'i catch ile yakalıyoruz.


*/


const getValue = () => {

    return new Promise((resolve,reject) => {
        var durum=true;
        if(durum){
           resolve("Veriler Getirildi");
    
        }
    
        else{
            // EĞER HATA OLURSA 
            reject("verilerde hata var.");
    
        }
        
    })
};

getValue().then(x=>{
    console.log(x);
}).catch(err=>{
    console.log(err);
}).finally(fin=>{
    console.log("Her türlü çalışırım");
})