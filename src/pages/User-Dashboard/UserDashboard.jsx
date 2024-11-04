import React, { useEffect } from 'react'
import styles from "./UserDashboard.module.scss"
import { useDispatch, useSelector} from 'react-redux'
import { addUsers, getAllMasterPriority, getAllMasterStatus, getAllOaFailureTypeList, getUserList, getUsersDataList} from '../../redux/slices/DashboardSlices';
import Divider from '../../component/Divider/Divider';
import { useForm } from 'react-hook-form';
import { BRANCH, COMMENT, DEPARTMENT, DOC_NO, FLOW_EMAIL_BODY, NAME, OA_FAILURE_TYPE, ORDER_NUMBER, PRIORITY, STATUS, SUB_DEPARTMENT, SUBJECT, TO_USER } from '../../constant/form-key';
import { userFormValidators } from '../../form-validators/userFormValidators';
import Button from '../../component/Button/Button';
import { useNavigate} from 'react-router-dom';
import Select from 'react-select';


const UserDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { masterPriorityList, masterStatusList, userDataList, OaFailureTypeList } = useSelector((state) => state.userDetail);
  // console.log("masterPriorityList?????????", masterPriorityList);
  // console.log("masterStatusList?????", masterStatusList);
  // console.log("userDataList??????", userDataList);
  // console.log('OaFailureTypeList????????', OaFailureTypeList);

  useEffect(() => { 
    // get-api-allUsers
    dispatch(getUserList());
    // form-api-selectField
    // dispatch(getAllMasterPriority());
    // dispatch(getAllMasterStatus());
    // dispatch(getUsersDataList());
    // dispatch(getAllOaFailureTypeList());
  }, [dispatch])
  
  const PriorityData = [
    { id: 1, name: "High", value:"HIGH" },
    { id: 2, name: "Low" , value:"LOW"},
    { id: 3, name: "Average",value:"AVERAGE" },
    
  ]
  
  const countryData = [
    { id: 1, name: "India", value: "India" },
    { id: 2, name: "USA", value: "USA" },
    { id: 3, name: "Canada", value: "Canada" },
    { id: 4, name: "Dubai", value: "Dubai" }
  ]
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
     dispatch(addUsers({
      id: Math.random(),
      fromUser: data.fromUser,
      orderNumber: data.orderNumber,
      documentNo:data.documentNo,
       priority: data.priority,
       branch: data.branch,
       department: data.department,
       subDepartment: data.subDepartment,
       toUserId: data.toUserId,
       status: data.status,
       subject: data.subject,
       flowEmailBody: data.flowEmailBody,
       oaFailureType: data.oaFailureType,
      comment: data.comment
    }));
    reset();
    navigate("/user-list")
  }

  const handleReset = () => {
    // reset({
    // PRIORITY: { label: "", value: "" },
    // BRANCH: { label: "", value: "" },
    // DEPARTMENT: { label: "", value: "" },
    // SUB_DEPARTMENT: { label: "", value: "" },
    // STATUS: { label: "", value: "" },
    // TO_USER: { label: "", value: "" },
    //   OA_FAILURE_TYPE: { label: "", value: "" },
    //   NAME: '',
    //   DOC_NO: '',
    //   ORDER_NUMBER: '',
    //   SUBJECT: '',
    //   FLOW_EMAIL_BODY:'',
    
    // });
    setValue(SUB_DEPARTMENT, { label: "", value: "" });
    reset();
  };
  return (
    <>
      
      <div className={styles.mainContainer}>
          <p className={styles.TitleStyle}>
                Webmyne System
        </p>
       
      <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
          <div className={styles.titleContainer}>
            <p className={styles.titleStyle}>
          Flow
            </p>
            <div className={styles.formButtonContainer}>
             <Button
          buttonName="User List"
          type="button"
          handleClick={()=>navigate("/user-list")}
          customClass={styles.buttonStyle}
            />
           <Button
                buttonName="Logout"
                type="button"
                 handleClick={()=>{}}
          customClass={styles.buttonStyle}
              />
              </div>
          </div>
        <Divider customClass={styles.dividerStyle} />
       <div className={styles.formContainer}>
           {/* name field */}
            <div className={styles.formFieldContainer}>
          
            <label htmlFor={NAME} className={styles.labelStyle}>
              Name
            </label>
         
          <div className={styles.inputFieldContainer}>
            <input
              type="text"
              placeholder="Enter your name"
              className={styles.inputFieldStyle}
              {...register(NAME, userFormValidators[NAME])}
            />
           
          </div>
            </div>

            {/* ORDER_NUMBER field */}
            <div className={styles.formFieldContainer}>
          
            <label htmlFor={ORDER_NUMBER} className={styles.labelStyle}>
              Order No.
            </label>
          
          <div className={styles.inputFieldContainer}>
            <input
              type="text"
              placeholder="Enter order number"
              className={styles.inputFieldStyle}
              {...register(ORDER_NUMBER, userFormValidators[ORDER_NUMBER])}
            />
           
              </div>
               <p className={styles.errorText}>
              {errors.orderNumber && (
                <span className="error">{errors.orderNumber.message}</span>
              )}
            </p>
            </div>

            {/* DOC_NO field */}
            <div className={styles.formFieldContainer}>
         
            <label htmlFor={DOC_NO} className={styles.labelStyle}>
              Doc No.
            </label>
         
          <div className={styles.inputFieldContainer}>
            <input
              type="text"
              placeholder="Enter document number"
              className={styles.inputFieldStyle}
              {...register(DOC_NO, userFormValidators[DOC_NO])}
            />
           
              </div>
                <p className={styles.errorText}>
              {errors.documentNo && (
                <span className="error">{errors.documentNo.message}</span>
              )}
            </p>
            </div>

            {/* priority */}
            <div className={styles.formFieldContainer}>
  
            <label htmlFor={PRIORITY} className={styles.labelStyle}>
              Priority <span className={styles.asterick}>*</span>
            </label>
          
          <div>
          {/* <select
          id="priority"
                {...register(PRIORITY, userFormValidators[PRIORITY])}
                className={styles.selectInputField}
        >
          <option value="">Select Priority</option>
          {PriorityData?.map((priority) => (
            <option key={priority?.id} value={priority?.value}>
              {priority?.name}
            </option>
          ))}
     
        </select> */}
                  <Select
              className={styles.selectInputField}
                          placeholder="Select Priority"
                          closeMenuOnSelect={true}
                          {...register(
                            PRIORITY,
                            userFormValidators[
                              PRIORITY
                            ]
                          )}
                          isSearchable={true}
                          options={PriorityData?.map((item) => ({
                            label: item?.name,
                            value: item?.value,
                          }))}
                          onChange={(e) => {
                            setValue(PRIORITY, e.value);
                            trigger(PRIORITY);
                  }}
                  styles={{
    control: (base) => ({
      ...base,
      height:"45px",
      borderRadius: "10px", 
      cursor: "pointer", 
     
    }),
  }}
              maxMenuHeight={200}
            />
            <p className={styles.errorText}>
              {errors.priority && (
                <span className="error">{errors.priority.message}</span>
              )}
            </p>
          </div>
            </div> 
          
            
            {/* branch */}
           <div className={styles.formFieldContainer}>
            <label htmlFor={BRANCH} className={styles.labelStyle}>
              Branch<span className={styles.asterick}>*</span>
            </label>
          
          <div>
          {/* <select
          id="branch"
                {...register(BRANCH, userFormValidators[BRANCH])}
                className={styles.selectInputField}
        >
          <option value="">Select branch</option>
          {countryData?.map((country) => (
            <option key={country?.id} value={country?.name}>
              {country?.name}
            </option>
          ))}
     
        </select> */}
                  <Select
              className={styles.selectInputField}
                          placeholder="Select Branch"
                          closeMenuOnSelect={true}
                          {...register(
                            BRANCH,
                            userFormValidators[
                              BRANCH
                            ]
                          )}
                          isSearchable={true}
                          options={countryData?.map((item) => ({
                            label: item?.name,
                            value: item?.value,
                          }))}
                          onChange={(e) => {
                            setValue(BRANCH, e.value);
                            trigger(BRANCH);
                  }}
                  styles={{
    control: (base) => ({
      ...base,
      height:"45px",
      borderRadius: "10px", 
      cursor: "pointer", 
     
    }),
  }}
              maxMenuHeight={200}
            />
            <p className={styles.errorText}>
              {errors.branch && (
                <span className="error">{errors.branch.message}</span>
              )}
            </p>
          </div>
            </div>
            
             {/* department */}
           <div className={styles.formFieldContainer}>
          
            <label htmlFor={DEPARTMENT} className={styles.labelStyle}>
              Department<span className={styles.asterick}>*</span>
            </label>
        
          <div>
          {/* <select
          id="department"
                {...register(DEPARTMENT, userFormValidators[DEPARTMENT])}
                className={styles.selectInputField}
        >
          <option value="">Select department</option>
          {countryData?.map((country) => (
            <option key={country?.id} value={country?.name}>
              {country?.name}
            </option>
          ))}
     
        </select> */}
                  <Select
              className={styles.selectInputField}
                          placeholder="Select Department"
                          closeMenuOnSelect={true}
                          {...register(
                            DEPARTMENT,
                            userFormValidators[
                              DEPARTMENT
                            ]
                          )}
                          isSearchable={true}
                          options={countryData?.map((item) => ({
                            label: item?.name,
                            value: item?.value,
                          }))}
                          onChange={(e) => {
                            setValue(DEPARTMENT, e.value);
                            trigger(DEPARTMENT);
                  }}
                  styles={{
    control: (base) => ({
      ...base,
      height:"45px",
      borderRadius: "10px", 
      cursor: "pointer", 
     
    }),
  }}
              maxMenuHeight={200}
            />
            <p className={styles.errorText}>
              {errors.department && (
                <span className="error">{errors.department.message}</span>
              )}
            </p>
          </div>
            </div>

        {/* sub-department */}
           <div className={styles.formFieldContainer}>
          
            <label htmlFor={SUB_DEPARTMENT} className={styles.labelStyle}>
              Sub Department<span className={styles.asterick}>*</span>
            </label>
          
          <div>
          {/* <select
          id="department"
                {...register(SUB_DEPARTMENT, userFormValidators[SUB_DEPARTMENT])}
                className={styles.selectInputField}
        >
          <option value="">Select sub department</option>
          {countryData?.map((country) => (
            <option key={country?.id} value={country?.name}>
              {country?.name}
            </option>
          ))}
     
        </select> */}
                 <Select
              className={styles.selectInputField}
                          placeholder="Select Sub Department"
                          closeMenuOnSelect={true}
                          {...register(
                            SUB_DEPARTMENT,
                            userFormValidators[
                              SUB_DEPARTMENT
                            ]
                          )}
                          isSearchable={true}
                          options={countryData?.map((item) => ({
                            label: item?.name,
                            value: item?.value,
                          }))}
                          onChange={(e) => {
                            setValue(SUB_DEPARTMENT, e.value);
                            trigger(SUB_DEPARTMENT);
                  }}
                  styles={{
    control: (base) => ({
      ...base,
      height:"45px",
      borderRadius: "10px", 
      cursor: "pointer", 
     
    }),
  }}
              maxMenuHeight={200}
            />
            <p className={styles.errorText}>
              {errors.subDepartment && (
                <span className="error">{errors.subDepartment.message}</span>
              )}
            </p>
          </div>
            </div>

            {/* toUser */}
           <div className={styles.formFieldContainer}>
         
            <label htmlFor={TO_USER} className={styles.labelStyle}>
              To User<span className={styles.asterick}>*</span>
            </label>
         
          <div>
          {/* <select
          id="toUserId"
                {...register(TO_USER, userFormValidators[TO_USER])}
                className={styles.selectInputField}
        >
           <option value="">Select User</option>
  {UserIDData?.map((usertype) => (
    <option key={usertype?.id} value={usertype?.value}>
      {usertype?.name}
    </option>
          ))}
     
        </select> */}
                 <Select
              className={styles.selectInputField}
                          placeholder="Select User"
                          closeMenuOnSelect={true}
                          {...register(
                            TO_USER,
                            userFormValidators[
                              TO_USER
                            ]
                          )}
                          isSearchable={true}
                          options={countryData?.map((item) => ({
                            label: item?.name,
                            value: item?.value,
                          }))}
                          onChange={(e) => {
                            setValue(TO_USER, e.value);
                            trigger(TO_USER);
                  }}
                  styles={{
    control: (base) => ({
      ...base,
      height:"45px",
      borderRadius: "10px", 
      cursor: "pointer", 
     
    }),
  }}
              maxMenuHeight={200}
            />
            <p className={styles.errorText}>
              {errors.toUserId && (
                <span className="error">{errors.toUserId.message}</span>
              )}
            </p>
          </div>
            </div>


               {/* status */}
           <div className={styles.formFieldContainer}>
         
            <label htmlFor={STATUS} className={styles.labelStyle}>
              Status<span className={styles.asterick}>*</span>
            </label>
          
          <div>
          {/* <select
          id="status"
                {...register(STATUS, userFormValidators[STATUS])}
                className={styles.selectInputField}
        >
          <option value="">Select Status</option>
          {countryData?.map((country) => (
            <option key={country?.id} value={country?.name}>
              {country?.name}
            </option>
          ))}
     
        </select> */}
                
                 <Select
              className={styles.selectInputField}
                          placeholder="Select Status"
                          closeMenuOnSelect={true}
                          {...register(
                            STATUS,
                            userFormValidators[
                              STATUS
                            ]
                          )}
                          isSearchable={true}
                          options={countryData?.map((item) => ({
                            label: item?.name,
                            value: item?.value,
                          }))}
                          onChange={(e) => {
                            setValue(STATUS, e.value);
                            trigger(STATUS);
                  }}
                  styles={{
    control: (base) => ({
      ...base,
      height:"45px",
      borderRadius: "10px", 
      cursor: "pointer", 
     
    }),
  }}
              maxMenuHeight={200}
            />
            <p className={styles.errorText}>
              {errors.status && (
                <span className="error">{errors.status.message}</span>
              )}
            </p>
          </div>
            </div>

             {/* subject*/}
            <div className={styles.formFieldContainer}>
         
            <label htmlFor={SUBJECT} className={styles.labelStyle}>
              Subject<span className={styles.asterick}>*</span>
            </label>
         
          <div className={styles.inputFieldContainer}>
            <input
              type="text"
              placeholder="Enter subject"
              className={styles.inputFieldStyle}
              {...register(SUBJECT, userFormValidators[SUBJECT])}
            />
            <p className={styles.errorText}>
              {errors.subject && (
                <span className="error">{errors.subject.message}</span>
              )}
            </p>
          </div>
            </div>

             {/* flowEmailBody*/}
            <div className={styles.formFieldContainer}>
          
            <label htmlFor={FLOW_EMAIL_BODY} className={styles.labelStyle}>
              Flow Email Body
            </label>
          
          <div className={styles.inputFieldContainer}>
            <input
              type="text"
              placeholder="Enter your name"
              className={styles.inputFieldStyle}
              {...register(FLOW_EMAIL_BODY, userFormValidators[FLOW_EMAIL_BODY])}
            />
          
          </div>
            </div>

                {/* oaFailureType */}
           <div className={styles.formFieldContainer}>
        
            <label htmlFor={OA_FAILURE_TYPE} className={styles.labelStyle}>
              OAFailure Type
            </label>
         
          <div>
          {/* <select
          id="oaFailureType"
                {...register(OA_FAILURE_TYPE, userFormValidators[OA_FAILURE_TYPE])}
                className={styles.selectInputField}
        >
          <option value="">Select Type</option>
          {countryData?.map((country) => (
            <option key={country?.id} value={country?.name}>
              {country?.name}
            </option>
          ))}
     
        </select> */}
                
                 <Select
              className={styles.selectInputField}
                          placeholder="Select Type"
                          closeMenuOnSelect={true}
                          {...register(
                            OA_FAILURE_TYPE,
                            userFormValidators[
                              OA_FAILURE_TYPE
                            ]
                          )}
                          isSearchable={true}
                          options={countryData?.map((item) => ({
                            label: item?.name,
                            value: item?.value,
                          }))}
                          onChange={(e) => {
                            setValue(OA_FAILURE_TYPE, e.value);
                            trigger(OA_FAILURE_TYPE);
                  }}
                  styles={{
    control: (base) => ({
      ...base,
      height:"45px",
      borderRadius: "10px", 
      cursor: "pointer", 
     
    }),
  }}
              maxMenuHeight={200}
            />
           
          </div>
            </div>


             {/* comment*/}
            <div className={styles.formFieldContainer}>
          <span className={styles.iconLabelStyle}>
            <label htmlFor={COMMENT} className={styles.labelStyle}>
              Comment
            </label>
          </span>
          <div className={styles.inputFieldContainer}>
            <textarea
              type="text"
              className={styles.textAreaFieldStyle}
              {...register(COMMENT)}
            />
          </div>
            </div>

            <div className={styles.buttonContainer}>
            <Button
          buttonName="Add"
          type="submit"
          customClass={styles.submitButtonStyle}
            />

          <Button
          buttonName="Cancel"
          type="button"
          handleClick={handleReset}
          customClass={styles.cancelButtonStyle}
            />
            </div>
            
          </div>
           
      </form>
    
      </div>
    </>
  )
}

export default UserDashboard
