import React, {Component} from 'react';
import classes from "../Users/Users.module.css";

class UsersC extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={classes.Users}>
                    <h3>Пользователи</h3>
                </div>
            </React.Fragment>
        );
    }
}

export default UsersC;