 
import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../action'


 class PostList extends React.Component {
     componentDidMount(){
         this.this.props.fetchPosts();
     }
     render() {
            return (
                    <div>
                        
                    </div>
                    )
                
     }
        
    
}

export default connect (null, {
    fetchPosts
})(PostList)