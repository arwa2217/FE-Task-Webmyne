import React from 'react'
import styles from './Button.module.scss'

const Button = ({type,buttonName,customClass,handleClick}) => {
  return (
    <>
        <button className={[styles.button, customClass].join(" ")} type={type} onClick={()=>handleClick && handleClick()}>{buttonName}</button>
    </>
  )
}

export default Button
