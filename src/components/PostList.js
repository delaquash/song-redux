 import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts  } from '../action';
import UserHeader from './UserHeader';




 class PostList extends React.Component {
     componentDidMount(){
        this.props.fetchPosts();
     }

     renderList() {
         return this.props.posts.map(post => {
             return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                            <UserHeader UserHeader={post.id} />
                    </div>
                </div>
             );
         });
     }
     render() {
         console.log(this.props);
            return (
                    <div>
                        <h1>{this.renderList()}</h1>
                    </div>
                    )          
     }     
}

const mapStateToProps =(state)=> {
   return { posts: state.posts } ;
}

export default connect (mapStateToProps, {
    fetchPosts
})(PostList)