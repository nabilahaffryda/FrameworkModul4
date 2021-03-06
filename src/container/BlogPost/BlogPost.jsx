import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component{
    state = {           // komponen state dari React untuk stateful component
        listArticle: [] // variabel array digunakan untuk menyimpan data API
    }
    componentDidMount(){ //komponen untuk cek ketika component telah dimounting , maka panggil API
        fetch('https://jsonplaceholder.typicode.com/posts') // alamat URL API yg ingin kt ambil datanya
        .then(response => response.json()) //
        .then(jsonHasilAmbilDariAPI=>{
            this.setState({
                listArticle: jsonHasilAmbilDariAPI
            })
        })
    } 
    render(){
        return(
            <div className="post-article">
                <h2>List of Article</h2>
                {
                    this.state.listArticle.map(article => { //looping dan masukkan untuk setiap data yang ada di listartikel ke variabel artikel
                        return <Post key={article.id} title={article.title} content={article.body}/> // mapping data json dari API sesuai dg kategori

                    })
                }
            </div>
        )
    }
}
export default BlogPost;