import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    updateUser: (state, action) => {
      state.users = state.users.map(e => e.id === action.payload.id ? action.payload : e);
    },
  },
});

export const { setUsers, updateUser } = accountSlice.actions;

export default accountSlice.reducer;

export const fetchUsers = () => dispatch => {
  try {
    // Объем пользователей 1 миллион
    const users = Array.from({ length: 1000000 }, (_, i) => ({
      id: i,
      name: `Пользователь ${i+1}`,
      department: "IT",
      company: "",
      jobTitle: ""
    }));

    dispatch(setUsers(users));
  }
  catch (e) {
    console.log(e);
  }
}