/* getValues  diye bir fonksiyonuz var ve içeriye callback adında bir methods alıyor

scope içerisindeki  işlem tamamlandığında callback yapısını çağırıyoruz
callback() => ilk parametresi error ikinci  parametresi success dir  BU BİR KURALDIR !!!!

*/

const getValues=(callback)=>{

    var durum=true;
    if(durum){
        callback(undefined,"Method Ok");

    }

    else{
        // EĞER HATA OLURSA 
        callback("veri getirilemedi",undefined);

    }
    


    

}


const callback=(err,data)=>{
    
    if(err){
        // hata mesajı
        console.log(err)
    }

    else{
        //Hatamız yok ise datayı yazdırıyoruz.
        console.log(data);
    }
}
getValues(callback);

