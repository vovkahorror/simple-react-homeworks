import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affair.module.css';

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType;
  deleteAffairCallback: (_id: number) => void;
}

function Affair(props: AffairPropsType) {
  const deleteCallback = (affair: AffairType) => {
    props.deleteAffairCallback(affair._id);
  }

  return (
    <div className={styles[props.affair.priority]}>
      <div>{props.affair.name}</div>
      <div>{props.affair.priority}</div>
      <button onClick={() => deleteCallback(props.affair)}>✖</button>
    </div>
  )
}

export default Affair
