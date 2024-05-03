
import React from 'react'
import styles from "./Button.module.css"

const Button = ({text , setFeedbackFlag}) => {
  return (
    <button
    onClick={() => setFeedbackFlag(true)}
     className={styles.Button}>{text}</button>
  )
}

export default Button
