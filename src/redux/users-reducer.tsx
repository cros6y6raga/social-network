import React from 'react';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Voronezh', country: 'Russia'}
        },
        {
            id: 1,
            followed: false,
            fullName: 'Artem',
            status: 'I am a boss two',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 1,
            followed: true,
            fullName: 'Vladimir',
            status: 'I am a boss tree',
            location: {city: 'Perm', country: 'Russia'}
        },
        {
            id: 1,
            followed: true,
            fullName: 'Alexandr',
            status: 'I am a boss four',
            location: {city: 'Ostrogozhsk', country: 'Russia'}
        },
    ]
}


const usersReducer = (state = initialState, action: { type: any; }) => {
    switch (action.type) {
        case FOLLOW:
        case UNFOLLOW:
        default:
            return state
    }
}


export const followAC = (userId: any) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: any) => ({type: UNFOLLOW, userId})