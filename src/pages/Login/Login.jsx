import React from 'react'
import { useForm } from 'react-hook-form'
import {PASSWORD, USERNAME } from '../../constant/form-key'
import { loginValidators } from '../../form-validators/loginValidators'
import styles from "./Login.module.scss"
import Button from '../../component/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLoginDetail } from '../../redux/slices/DashboardSlices'
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
   
  const onSubmit = (data) => {
    let userData = {
      userName: data.userName,
      password: data.password,
    }
    dispatch(userLoginDetail(userData));
    navigate("/user-list")
    }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <h2 style={{color:"#FFFFFF", textAlign:"center", marginTop:"30px"}}>Login</h2>
          </div>

          {/* username field */}
         <input type="text"
          name="userName"
            placeholder='Enter your username'
          className={styles.inputFieldContainer}
        {...register(USERNAME, loginValidators[USERNAME])}
          />
              {errors.userName && (
                <span className={styles.errorText}>{errors.userName.message}</span>
              )}
               {/* password field */}
          <input type="password" name="password" placeholder='Enter your password'
           className={styles.inputFieldContainer}
            {...register(PASSWORD, loginValidators[PASSWORD])} /> 
          {errors.password && (
                <span className={styles.errorText}>{errors.password.message}</span>
          )}      
          <Button type="submit" buttonName="Login" customClass={styles.customButton}/>    
        </div> 
       
    </form>
    </>
  )
}

export default Login
