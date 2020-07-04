const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            fullNname: "Белоконь Евгений",
            status: "друзья",
            location: {city: "Москва", country: "Россия"}
        },
        {
            id: 2,
            followed: false,
            fullNname: "Анна Кременная",
            status: "друзья",
            location: {city: "Симферополь", country: "Россия"}
        },
        {
            id: 3,
            followed: true,
            fullNname: "Дмитрий Козырев",
            status: "друзья",
            location: {city: "Казань", country: "Россия"}
        },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }

                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }

                    return user;
                })
            }
      case SET_USERS:
        return {
          ...state,
          users: [...state.users, ...action.users]
        }
        default:
            return state;
    }
};

// Создаем action creator для dispatch 
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;
