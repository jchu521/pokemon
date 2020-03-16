//https://stackoverflow.com/questions/57296549/hooks-combine-multiple-reducers-when-using-usereducer
//https://gist.github.com/thchia/dd1bc8200fd8cff89cfa6c928983e5c4

export default reducerDict => {
  const _initialState = getInitialState(reducerDict);

  return (state = _initialState, action) => {
    console.log("PRVIOUS STATE: ", state);

    const newState = Object.keys(reducerDict).reduce((acc, curr) => {
      let slice = reducerDict[curr](state[curr], action);
      return { ...acc, [curr]: slice };
    }, state);
    console.log("CURRENT STATE: ", newState);

    return newState;
  };
};

// Helpers
const getInitialState = reducerDict => {
  return Object.keys(reducerDict).reduce((acc, curr) => {
    const slice = reducerDict[curr](undefined, { type: undefined });

    return { ...acc, [curr]: slice };
  }, {});
};
