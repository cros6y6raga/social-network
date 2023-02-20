import React from 'react';
import {AppStateType} from "./redux-store";
import {UsersLocation} from "./store";


export type UserType = {
    id: number
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: UsersLocation
}


const initialState: InitialStateType = {
    users: []
}


export type InitialStateType = {
    users: Array<UserType>
}

export const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}


export const followAC = (userID: number) => ({type: 'FOLLOW', userID} as const)
export const unfollowAC = (userID: number) => ({type: 'UNFOLLOW', userID} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', users} as const)