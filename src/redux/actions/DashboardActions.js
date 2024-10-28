import axios from "axios"
import {GET_USERS, LOGIN_USER, MASTER_PRIORITY, MASTER_STATUS, OAFAILURETYPE, USERS } from "../../config/config"

// login user
export const userLogin = (data) => {
    return axios.post(LOGIN_USER, data, {
    headers: {
            'Content-Type': 'application/json',
        
    }
});
}
// getAllUser
export const getAllUsers = () => {
    return axios.get(GET_USERS, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYXNoYSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJyZWZyZXNoRHVyYXRpb24iOiIxMC8zMC8yMDI0IDEzOjIyOjEyIiwiZXhwIjoxNzMwMTg4MzMyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAifQ'
        }
    })
}
// getMasterPriority
export const getMasterPriority = () => {
    return axios.get(MASTER_PRIORITY, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
// getMasterStatus
export const getMasterStatus = () => {
    return axios.get(MASTER_STATUS, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
// getOAFAILURETYPE
export const getOaFailureTypeList = () => {
    return axios.get(OAFAILURETYPE, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
// getUsers
export const getUsers = () => {
    return axios.get(USERS, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYXNoYSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJyZWZyZXNoRHVyYXRpb24iOiIxMC8zMC8yMDI0IDEzOjIyOjEyIiwiZXhwIjoxNzMwMTg4MzMyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAifQ'
        }
    })
}