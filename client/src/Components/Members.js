import React from 'react';

const style = {
    listStyle: 'none'
}

export const Members = ({ members }) => {

    console.log(members)
    return (
        <div>
            <ul style={style}>
                <li>
                    {members.id}
                </li>
                <li>
                    {members.first_name}
                </li>
                <li>
                    {members.last_name}
                </li>
                <li>
                    {members.email}
                </li>
                <li>
                    {members.gender}
                </li>

            </ul>
        </div>
    )
}