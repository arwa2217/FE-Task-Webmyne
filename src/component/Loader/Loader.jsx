import React from 'react'
import styles from "./Loader.module.scss"

const Loader = () => {
  return (
    <>
       <div className={styles.spinnerContainer}>
        <div className={styles.loadingSpinner}></div>
        </div>
    </>
  )
}

export default Loader
