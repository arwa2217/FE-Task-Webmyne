import React from "react";
import styles from "./Divider.module.scss"

const Divider = ({customClass}) => {
    return (
        <>
        <hr className={[styles.divider, customClass].join(" ")} />
        </>
    )
};

export default Divider;