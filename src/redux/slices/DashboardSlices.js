import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getAllUsers, getBranchFlow, getCreateUsers, getMasterPriority, getMasterStatus, getOaFailureTypeList, getUsers, userLogin } from "../actions/DashboardActions";

export const userLoginDetail = createAsyncThunk(
    'userDetails/userLoginDetail',
    async (payload, {rejectWithValue}) => {
        try {
            const res = await userLogin(payload);
          if (res.status === 200) {
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

export const getBranchFlowList = createAsyncThunk(
    'userDetails/getBranchFlowList',
    async (payload, {rejectWithValue}) => {
        try {
            const res = await getBranchFlow();
            if (res.status === 200) {
                return res.data;
            }
        }
        catch (error) {
            rejectWithValue(error)
        }
        }
)

export const getAddUsers = createAsyncThunk(
    'userDetails/getAddUsers',
    async (payload, {rejectWithValue}) => {
        try {
            const res = await getCreateUsers();
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
    userInfo: [],
    branchFlowList: [],
    addUserList:[]
  }, 
  
  reducers: {
      addUsers: (state, action) => {
            state.userInfo?.push(action?.payload);
    },
    userLogout: (state) => {
            localStorage.removeItem("accessToken");
            state.isAuthenticated = false;
            state.userDetails = {};
state.usersList = [];
state.masterPriorityList = [];
state.masterStatusList = [];
state.userDataList = [];
state.OaFailureTypeList = [];
      state.userInfo = [];
      state.branchFlowList = [];
      state.addUserList = [];
    },
  },
  
 extraReducers: (builder) => {
   builder
      // login
      .addCase(userLoginDetail.pending, (state) => {
        state.isLoading = true;
         state.isAuthenticated = false;
      })
      .addCase(userLoginDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userDetails = action.payload;
        state.isAuthenticated = true;
        localStorage.setItem("accessToken", state.userDetails?.data?.accessToken);
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
        state.usersList = action.payload?.data?.items;
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
        state.masterPriorityList = action.payload?.data;
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
        state.masterStatusList = action.payload?.data;
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
        state.OaFailureTypeList = action.payload?.data;
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
        state.userDataList = action.payload?.data;
      })
      .addCase(getUsersDataList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      //getBranchFlowList
    .addCase(getBranchFlowList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBranchFlowList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.branchFlowList = action.payload?.data;
      })
      .addCase(getBranchFlowList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
   //  getAddUsers
   .addCase(getAddUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAddUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addUserList = action.payload;
      })
      .addCase(getAddUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  },
});
export const { addUsers,userLogout} = userDetailSlice.actions;
export default userDetailSlice.reducer;