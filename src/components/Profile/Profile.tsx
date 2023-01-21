import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type PropsProfile = {
    store: any
}

export const Profile = (props: PropsProfile) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
};