import React from 'react';

// Temporary styles
// TODO: REMOVE AND ADD CLASS
const style = {
    listStyle: 'none'
}

export const Members = ({ members }) => {

    return (
        <div>
        {/* 
            // * Render list of member's key/value pairs 
        */}
            <ul style={style}>
                <li>Member ID: {members.id}</li>
                <li>First name: {members.first_name}</li>
                <li>Last name: {members.last_name}</li>
                <li>Email: {members.email}</li>
                <li>Gender: {members.gender}</li>
            </ul>
        </div>
    )
}