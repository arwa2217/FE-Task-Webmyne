import { combineReducers } from "redux";
import userDetailReducer from '../slices/DashboardSlices'
export const rootReducer = combineReducers({
  userDetail: userDetailReducer,
});