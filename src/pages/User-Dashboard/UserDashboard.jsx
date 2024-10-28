import React, { useEffect } from 'react'
import styles from "./UserDashboard.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { getUserList } from '../../redux/slices/DashboardSlices';
import Divider from '../../component/Divider/Divider';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UserDashboard = () => {
  const dispatch = useDispatch();
  const usersListData = useSelector((state) => state.userDetail)
  console.log("usersListData>>>>", usersListData)
  useEffect(() => {
    const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${"eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYXNoYSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJyZWZyZXNoRHVyYXRpb24iOiIxMC8zMC8yMDI0IDEzOjIyOjEyIiwiZXhwIjoxNzMwMTg4MzMyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAifQ"}`, // Use environment variable
};

axios.get('http://drivequote-api-dev.webmyneproduct.com/api/Users/getalls', { headers })
  .then(res => {
    const resdata = res.data;
    console.log(resdata);
  })
  .catch(error => {
    console.error('Error fetching data:', error); // Error handling
  });
    
    dispatch(getUserList());
    // dispatch(getUsersDataList());
  }, [dispatch])
  
  const {
    // register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      
      <div className={styles.mainContainer}>
          <p className={styles.TitleStyle}>
                Webmyne System
              </p>
        <Divider customClass={styles.dividerStyle} /> 
        
        
      <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
        
       
      </form>
    
      </div>
    </>
  )
}

export default UserDashboard
