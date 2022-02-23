const posts=require("../data/posts"); // import posts

//postsları geri döndüren fonksiyon
getAllPosts = () =>{
    return posts;
};

//end pointe göre post döndüren fonksiyon
getPostById =(postId)=>{
    return posts.filter(x=>x.id == postId);
};
module.exports = {getAllPosts,getPostById}; // diğer yerlerde kullanmamız için export yapıyoruz.
