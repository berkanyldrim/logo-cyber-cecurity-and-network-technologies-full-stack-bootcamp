const users = require("../data/users.json"); //user import ettik

//userları geri döndüren fonksiyon
getAllUsers=() => {
    return users;
};


//end pointe göre userları geri döndüren fonksyion
getUserById=(userId)=>{
    return users.filter(x=>x.id==userId);
};



module.exports ={getAllUsers,getUserById}; // dışarıdan kullanılması için export ediyoruz.