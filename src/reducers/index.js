const initialState = {
  angular: 0,
  react: 0,
  vue: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "VOTE_ANGULAR":
      console.log(`Angular Vote`);
      return Object.assign({}, state, {
        angular: state.angular + 1
      });
    case "VOTE_REACT":
      console.log(`React Vote`);
      return Object.assign({}, state, {
        react: state.react + 1
      });
    case "VOTE_VUE":
      console.log(`Angular Vote`);
      return Object.assign({}, state, {
        vue: state.vue + 1
      });
    default:
      return state
  }
};