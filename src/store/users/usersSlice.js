import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: [
    {
      firstname: "Forster",
      lastname: "Udemezue",
      email: "forstermichael112@gmail.com",
      phone: "08113778736",
      password: "1111",
    },
  ],
  loggedInUser: {},
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,

  reducers: {
    addUser(state, action) {
      const newUser = action.payload;
      const existingUser = state.allUsers.find(
        (item) => item.email === newUser.email
      );

      if (!existingUser) {
        state.allUsers.push(newUser);
        state.loggedInUser = newUser
        state.isLoggedIn = true;
      }
    },

    deleteUser(state, action) {
      const useremail = action.payload;
      const existingUser =
        state.allUsers.findIndex(
          (item) => item.email === useremail
        );

      if (existingUser) {
        state.allUsers.splice(existingUser, 1);
        state.loggedInUser = {}
        state.isLoggedIn = false;
      }
    },

    loginUser(state, action) {
      const user = action.payload;
      const existingUser = state.allUsers.find(
        (item) =>
          item.email === user.email &&
          item.password === user.password
      );

      if (existingUser) {
        state.isLoggedIn = true;
        state.loggedInUser = existingUser
          user.password;
      }
    },

    logoutUser(state, action) {
      const userEmail = action.payload;
      const loggedInUser =
        state.loggedInUser.email === userEmail;

      if (loggedInUser) {
        state.isLoggedIn = false;
        state.loggedInUser = {}
      }
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
