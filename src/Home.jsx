import React, { Component } from 'react';
import {connect} from 'react-redux';


class Home extends Component {


 
    render(){
        console.log(this.props)
        const {posts} = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="center" key={post.id}>

                    <div>
                        <span><h3>{post.title} </h3></span> 
                        <span>{post.body}</span>
                    </div>

                    </div>
                )
            })
        ) 
        :
         (<div>No Post Man</div>)
        return(
            <div className="container">
                <h4 className="center">Home</h4>
                <p>
                    {postList}
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        posts : state.posts
    }
}
export default connect(mapStateToProps)(Home);