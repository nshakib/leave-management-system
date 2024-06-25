const initialState = {
    leaves: []
  };
  
  export const leaveReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_LEAVES':
        return { ...state, leaves: action.payload };
      case 'CREATE_LEAVE':
        return { ...state, leaves: [...state.leaves, action.payload] };
      case 'UPDATE_LEAVE':
        return {
          ...state,
          leaves: state.leaves.map(leave =>
            leave.id === action.payload.id ? action.payload : leave
          )
        };
      default:
        return state;
    }
  };
  