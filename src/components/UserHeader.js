import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../action';


 class UserHeader extends Component {
     componentDidMount() {
         this.props.fetchUsers(this.props.userId)
     }
    render() {
            const user = this.props.users.find((user) => 
                user.id === this.props.userId
            )

        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return  { users: state.users }
}

export default connect(null, {
    fetchUsers
})
 (UserHeader);