import React, { Component } from 'react';
import {connect} from 'react-redux';

class Post extends Component {


 
    render(){
        
        const post = this.state.post ? (
            
                    <div>

                    <div>
                        <span><h3>{post.title} </h3></span>
                        <span>{post.body}</span>
                    </div>

                    </div>
                
            
        ) 
        :
         (<div>loading post</div>)
        return(
            <div className="container">
                <h4 className="center">Home</h4>
                <p>
                    {post}
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
   
        let id= ownProps.match.params.post_id;
        return {
            post:state.posts.find(post => post.id === id)
        }
    
}
export default connect(mapStateToProps)(Post);