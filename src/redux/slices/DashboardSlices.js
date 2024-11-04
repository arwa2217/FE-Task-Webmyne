import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getAllUsers, getMasterPriority, getMasterStatus, getOaFailureTypeList, getUsers, userLogin } from "../actions/DashboardActions";

export const userLoginDetail = createAsyncThunk(
    'userDetails/userLoginDetail',
    async (payload, {rejectWithValue}) => {
        try {
            const res = await userLogin(payload);
          if (res.status === 200) {
              localStorage.setItem("accessToken", res.data.accessToken);
              localStorage.setItem("refreshToken", res.data.refreshToken);
              return res.data;
                
            }
        }
        catch (error) {
          console.log("error")
            rejectWithValue(error)
        }
        }
)


export const getUserList = createAsyncThunk(
    'userDetails/getUserList',
    async (payload, {rejectWithValue}) => {
        try {
            const res = await getAllUsers();
            if (res.status === 200) {
                return res.data;
            }
        }
        catch (error) {
            rejectWithValue(error)
        }
        }
)

export const getAllMasterPriority = createAsyncThunk(
    'userDetails/getAllMasterPriority',
    async (payload, {rejectWithValue}) => {
        try {
            const res = await getMasterPriority();
            if (res.status === 200) {
                return res.data;
            }
        }
        catch (error) {
            rejectWithValue(error)
        }
        }
)

export const getAllMasterStatus = createAsyncThunk(
    'userDetails/getAllMasterStatus',
    async (payload, {rejectWithValue}) => {
        try {
            const res = await getMasterStatus();
            if (res.status === 200) {
                return res.data;
            }
        }
        catch (error) {
            rejectWithValue(error)
        }
        }
)

export const getAllOaFailureTypeList = createAsyncThunk(
    'userDetails/getAllOaFailureTypeList',
    async (payload, {rejectWithValue}) => {
        try {
            const res = await getOaFailureTypeList();
            if (res.status === 200) {
                return res.data;
            }
        }
        catch (error) {
            rejectWithValue(error)
        }
        }
)

export const getUsersDataList = createAsyncThunk(
    'userDetails/getUsersDataList',
    async (payload, {rejectWithValue}) => {
        try {
            const res = await getUsers();
            if (res.status === 200) {
                return res.data;
            }
        }
        catch (error) {
            rejectWithValue(error)
        }
        }
)

export const userDetailSlice = createSlice({
  name: "userDetailSlice",
  initialState: {
    isLoading: false,
    error: null,
    isAuthenticated: false,
    userDetails:{},
    usersList: [],
    masterPriorityList: [],
    masterStatusList: [],
    userDataList: [],
    OaFailureTypeList: [],
    userInfo:[],
  }, 
  
  reducers: {
      addUsers: (state, action) => {
            state.userInfo?.push(action?.payload);
    },
    deleteUser: (state, action) => {
            state.userInfo = state.userInfo?.filter(
            (user) => user?.id !== action.payload);
    },
    userLogout: (state) => {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            state.isAuthenticated = false;
            state.userDetails = {};
state.usersList = [];
state.masterPriorityList = [];
state.masterStatusList = [];
state.userDataList = [];
state.OaFailureTypeList = [];
state.userInfo = [];
    },
  },
  
 extraReducers: (builder) => {
   builder
      // login
      .addCase(userLoginDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLoginDetail.fulfilled, (state, action) => {
        state.isLoading = false;
         state.isAuthenticated = true;
        state.userDetails = action.payload;
      })
      .addCase(userLoginDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
         state.isAuthenticated = false;
      })
  //  all-users
   .addCase(getUserList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.usersList = action.payload;
      })
      .addCase(getUserList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  //  getAllMasterPriority
    .addCase(getAllMasterPriority.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllMasterPriority.fulfilled, (state, action) => {
        state.isLoading = false;
        state.masterPriorityList = action.payload;
      })
      .addCase(getAllMasterPriority.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
   
  //  getAllMasterStatus
    .addCase(getAllMasterStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllMasterStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.masterStatusList = action.payload;
      })
      .addCase(getAllMasterStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
   
  //  getAllOaFailureTypeList
    .addCase(getAllOaFailureTypeList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOaFailureTypeList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.OaFailureTypeList = action.payload;
      })
      .addCase(getAllOaFailureTypeList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
   
   //getUsersDataList
    .addCase(getUsersDataList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsersDataList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userDataList = action.payload;
      })
      .addCase(getUsersDataList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  },
});
export const { addUsers,deleteUser,userLogout} = userDetailSlice.actions;
export default userDetailSlice.reducer;