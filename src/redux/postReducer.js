let ava = "https://sun9-27.userapi.com/c638320/v638320687/17afd/6RttIh95FCo.jpg?ava=1";

const ADD_POST = "ADD_POST";

let initialState = {
  posts: [
    {id: 1, avatar: ava, text: "Никто не сделает первый шаг, потому что каждый думает, что это не взаимно."},
    {id: 2, avatar: ava, text: "Тут нужно говорить глаз на глаз… чтоб душа читалась на лице, чтоб сердце сказывалось в звуках слова. Одно слово, сказанное с убеждением, с полной искренностью и без колебаний, лицом к лицу, гораздо более значит, нежели десятки листов исписанной бумаги."}
  ]
}



const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        avatar: ava,
        text: action.newText,
      };
      state.posts.push(newPost);
      return state;

    default:
      return state;
  }
};

// Создаем action creator для dispatch 
export const sendPostActionCreator = (text) => ({type: ADD_POST, newText: text})

export default postReducer;
