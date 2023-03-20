import React from 'react';
import {UsersLocation} from "./store";


export type UserType = {
    photos: any;
    id: number
    photoURL: string
    followed: boolean
    name: string
    status: string
    location: UsersLocation
}


const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 10,
    currentPage:3
}


export type InitialStateType = {
    users: Array<UserType>
    pageSize:number,
    totalUsersCount:number,
    currentPage:number
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