import React from 'react';

export const Members = ({ members }) => {

    return (
        <div className={`members__container`}>
        {/* 
            // * Render list of member's key/value pairs 
        */}
            <ul className={`members__list`}>
                <li>Member ID: {members.id}</li>
                <li>First name: {members.first_name}</li>
                <li>Last name: {members.last_name}</li>
                <li>Email: {members.email}</li>
                <li>Gender: {members.gender}</li>
            </ul>
        </div>
    )
}