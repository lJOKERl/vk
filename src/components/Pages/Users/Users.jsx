import React from 'react';
import Button from '@material-ui/core/Button';

const Users = (props) => {

  return (
    <React.Fragment>

      {
        props.users.map((user, index) => {
          return (

            <div key={index}>
              {user.fullNname}
              {/*{user.followed ?*/}
              {/*  <button onClick={() => {*/}
              {/*  props.follow(user.id)*/}
              {/*}}>Подписан</button> : <button onClick={ () => {props.unfollow(user.id)}}>Не подписан</button>}*/}
              {user.followed ?
                <Button color="primary" size="small"  onClick={() => {
                  props.follow(user.id)
                }}>Добавить в друзья</Button> : <Button color="secondary" size="small"  onClick={() => {
                  props.unfollow(user.id)
                }}>Удалить из друзей</Button>}
            </div>
          )
        })
      }


    </React.Fragment>
  );
};

export default Users;