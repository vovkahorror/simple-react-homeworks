import React, {ChangeEvent, useState} from 'react';
import Greeting from './Greeting';
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>;
    addUserCallback: (name: string) => void;
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.trim().length) {
            setName(e.currentTarget.value);
            setError('');
        }
    };

    const addUser = () => {
        const trimmedName = name.trim();

        if (trimmedName) {
            alert(`Hello  ${trimmedName}!`);
            addUserCallback(trimmedName);
            setName('');
            setError('');
        } else {
            setError('name is require');
        }
    };

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
};

export default GreetingContainer;
