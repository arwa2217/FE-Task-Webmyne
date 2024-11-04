import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userHeaderData } from '../../../constant/data';
import styles from "./UserList.module.scss";
import Button from '../../../component/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loader from "../../../component/Loader/Loader";
import { getUserList } from '../../../redux/slices/DashboardSlices';

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.userDetail);
  console.log("isLoading??????",isLoading)
  const usersListData = useSelector((state) => state.userDetail?.userInfo);
  const { usersList,addUserList} = useSelector((state) => state.userDetail);
  console.log("usersList??,??", usersList);
  console.log("addUserList??????",addUserList)
   
    useEffect(() => { 
    // get-api-allUsers
    dispatch(getUserList());
    }, [dispatch])
  
  const handleBackButton = () => {
    navigate('/user-dashboard')
  }
  
const [filteredUsers, setFilteredUsers] = useState(usersList);
   const {
    register,
    handleSubmit,
    watch,
  } = useForm();

const searchValue = watch('search');

  const onSubmit = (data) => {
    const searchValue = data.search.toLowerCase();

    if (searchValue.trim() === "") {
      setFilteredUsers(usersList);
    } else {
      const filtered = usersList?.filter((user) =>
        user.fromUser.toLowerCase().includes(searchValue)
      );
      setFilteredUsers(filtered);
    }
  };

  useEffect(() => {
    if (!searchValue) {
      setFilteredUsers(usersList);
    }
  }, [searchValue, usersList]);
  
  return (
    <>
      {isLoading ? <Loader/> : ""}
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          
          <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
           <input 
        type='text' 
        placeholder='Search' 
        {...register('search')} 
              className={styles.inputFieldStyle}
              disabled={filteredUsers?.length >0 ? false :true }
      />
             <Button
          buttonName="Search"
          type="submit"
              customClass={styles.searchButtonStyle}
            
            />
            </form>
           
          <div className={styles.titleText}>User List</div>
         
           <Button
          buttonName="Dashboard"
          type="button"
          handleClick={()=>navigate("/user-dashboard")}
          customClass={styles.dashboardButtonStyle}
            />
         
          
          </div>
      <table className={styles.table}>
        <thead>
          <tr>
           {userHeaderData?.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredUsers && filteredUsers?.map((users, index) => (
            <tr key={index}>
              <td>{users.fromUser}</td>
              <td>{users.orderNumber}</td>
              <td>{users.priority}</td>
              <td>{users.priorityName}</td>
              <td>{users.branch}</td>
              <td>{users.department}</td>
              <td>{users.subDepartment}</td>
             { users.oaNumber !== null ? <td>{users.oaNumber}</td> : <td>-</td>}
            </tr>
          ))}
        </tbody>
              </table>
              </div>
    </>
  )
}

export default UserList
