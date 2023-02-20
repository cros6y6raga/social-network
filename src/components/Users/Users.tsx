import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './users.module.css'

export function Users(props: UsersPropsType) {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'https://www.skoltech.ru/app/data/uploads/sites/19/2017/04/dmitrykulish_avatar_1493023430.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Voronezh', country: 'Russia'}
            },
            {
                id: 1,
                photoURL: 'https://www.skoltech.ru/app/data/uploads/sites/19/2017/04/dmitrykulish_avatar_1493023430.jpg',
                followed: false,
                fullName: 'Artem',
                status: 'I am a boss two',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 1,
                photoURL: 'https://www.skoltech.ru/app/data/uploads/sites/19/2017/04/dmitrykulish_avatar_1493023430.jpg',
                followed: true,
                fullName: 'Vladimir',
                status: 'I am a boss tree',
                location: {city: 'Perm', country: 'Russia'}
            },
            {
                id: 1,
                photoURL: 'https://www.skoltech.ru/app/data/uploads/sites/19/2017/04/dmitrykulish_avatar_1493023430.jpg',
                followed: true,
                fullName: 'Alexandr',
                status: 'I am a boss four',
                location: {city: 'Ostrogozhsk', country: 'Russia'}
            },
        ])
    }
    return (
        <div>
            {props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}