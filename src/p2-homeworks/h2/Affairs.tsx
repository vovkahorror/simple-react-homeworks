import React from 'react';
import Affair from './Affair';
import {AffairType, filterAffairs, FilterType} from './HW2';
import styles from './Affairs.module.css';

type AffairsPropsType = {
  data: Array<AffairType>;
  setFilter: (filter: FilterType) => void;
  deleteAffairCallback: (_id: number) => void;
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair// should work
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))

  const setAll = () => props.setFilter('all');
  const setHigh = () => props.setFilter('high');
  const setMiddle = () => props.setFilter('middle');
  const setLow = () => props.setFilter('low');

  return (
    <div className={styles.affairs}>

      {mappedAffairs}

      <div className={styles.buttons}>
        <button onClick={setAll}>All</button>
        <button className={styles.high} onClick={setHigh}>High</button>
        <button className={styles.middle} onClick={setMiddle}>Middle</button>
        <button className={styles.low} onClick={setLow}>Low</button>
      </div>
    </div>
  )
}

export default Affairs
