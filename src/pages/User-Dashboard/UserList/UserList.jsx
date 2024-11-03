import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userHeaderData } from '../../../constant/data';
import { deleteUser } from '../../../redux/slices/DashboardSlices';
import styles from "./UserList.module.scss";
import Button from '../../../component/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const usersListData = useSelector((state) => state.userDetail?.userInfo);
    const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };
  const handleBackButton = () => {
    navigate('/user-dashboard')
  }
  
const [filteredUsers, setFilteredUsers] = useState(usersListData);
   const {
    register,
    handleSubmit,
    watch,
  } = useForm();

const searchValue = watch('search');

  const onSubmit = (data) => {
    const searchValue = data.search.toLowerCase();

    if (searchValue.trim() === "") {
      setFilteredUsers(usersListData);
    } else {
      const filtered = usersListData?.filter((user) =>
        user.fromUser.toLowerCase().includes(searchValue)
      );
      setFilteredUsers(filtered);
    }
  };

  useEffect(() => {
    if (!searchValue) {
      setFilteredUsers(usersListData);
    }
  }, [searchValue, usersListData]);
  
  return (
    <>
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
              customClass={styles.backButtonStyle}
            
            />
            </form>
           
          <div className={styles.titleText}>User List</div>
          <Button
          buttonName="Back"
          type="button"
          handleClick={()=>handleBackButton()}
          customClass={styles.backButtonStyle}
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
              <td>{users.branch}</td>
              <td>{users.department}</td>
              <td>{users.toUserId}</td>
                  <td>
                    <Button buttonName="delete" type="button"
                    customClass={styles.deleteButtonStyle}
                    handleClick={() => handleDelete(users?.id)} /></td>
            </tr>
          ))}
        </tbody>
              </table>
              </div>
    </>
  )
}

export default UserList
