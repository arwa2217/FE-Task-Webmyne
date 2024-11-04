import axios from "axios"
import {ADD_USERS, BRANCH_FLOW,GET_USERS, LOGIN_USER, MASTER_PRIORITY, MASTER_STATUS, OAFAILURETYPE, USERS } from "../../config/config"

// login user
export const userLogin = (data) => {
    return axios.post(LOGIN_USER, data, {
    headers: {
            'Content-Type': 'application/json',
        
    }
});
}
// headers
const getAuthHeaders = () => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
});

const getMultiHeaders = () => ({
    "Content-Type": "multipart/form-data",
    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
});

// getAllUser
export const getAllUsers = () => {
    return axios.get(GET_USERS, {
        headers: getAuthHeaders()   
    })
}
// getMasterPriority
export const getMasterPriority = () => {
    return axios.get(MASTER_PRIORITY, {
        headers: getAuthHeaders()   
    })
}
// getMasterStatus
export const getMasterStatus = () => {
    return axios.get(MASTER_STATUS, {
        headers: getAuthHeaders()   
    })
}
// getOAFAILURETYPE
export const getOaFailureTypeList = () => {
    return axios.get(OAFAILURETYPE, {
        headers: getAuthHeaders()   
    })
}
// getUsers
export const getUsers = () => {
    return axios.get(USERS,{
        headers: getAuthHeaders()   
    })
}
// getBranchFlow
export const getBranchFlow = () => {
    return axios.get(BRANCH_FLOW, {
        headers: getAuthHeaders()   
    })
}
// add users
export const getCreateUsers = (formData) => {
    return axios.post(ADD_USERS, formData,{
        headers: getMultiHeaders()   
    })
}