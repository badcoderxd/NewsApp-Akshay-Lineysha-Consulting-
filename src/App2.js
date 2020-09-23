import React, { Component } from 'react';
import axios from 'axios';

class App2 extends Component {

     state = {
         postser:[]
     }

    componentDidMount(){
             
             axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=dd752b83820b43df9cb4ebe05fc47ee6') /* dd752b83820b43df9cb4ebe05fc47ee6 https://jsonplaceholder.typicode.com/posts*/
             .then(res => {
                 console.log(res)
                 this.setState({
                     postser: res.data.articles.slice(0,10)

                     
                 })
             })
    }
    render(){

        const {postser} = this.state;
        const postList = postser.length ? (
            postser.map(post => {
                return(
                    <div key={post.title}>

<div className="row" >
    <div className="col s12 m7" style={{width: '100%',
        
        borderRadius:'30px',
        }}>
      <div className="card" >
        <div className="card-image">
          <img src={post.urlToImage}/>
          <span className="card-title"></span>
        </div>
        <div className="card-content">
          <p><strong><h6>{post.title}</h6></strong></p>
        </div>
        <div className="card-action">
          <a href={post.url}>Read More...</a>
        </div>
      </div>
    </div>
  </div> 

                    </div>

                     

                )
            })
        ) 
        :
         (<div>No Post Man</div>)
        return(
            <div className="container">
                <h4 className="center">Trending News</h4>
                <p>
                    {postList}
                </p>
            </div>

            
        )
    }
}
export default App2;