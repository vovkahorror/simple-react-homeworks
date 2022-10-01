import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
    name: string;
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
    addUser: () => void;
    error: string;
    totalUsers: number;
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}, // деструктуризация пропсов
) => {
    const inputClass = (error) ? s.input_error : (name) ? s.input_correctly : s.input_default;
    const onDownEnter = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addUser();

    return (
        <div className={s.greeting}>
            <div className={s.input__wrapper}>
                <input value={name} onChange={setNameCallback} onKeyDown={onDownEnter}
                       className={`${s.input} ${inputClass}`} placeholder={'Enter your name'}/>
                <span className={s.error}>{error}</span>
            </div>
            <button onClick={addUser} className={s.button}>add</button>
            <span className={s.users}>{totalUsers}</span>
        </div>
    );
};

export default Greeting;
