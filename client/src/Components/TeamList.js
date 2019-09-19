import React, { useState, useEffect } from 'react';
import { list } from '../teamData';
import { Members } from './Members';
import { Form } from './Form';

export const TeamList = () => {

    // useState for new team
    const [team, setTeam] = useState(list)

    // useState for new value obj
    const initialValue = {
        "first_name": "",
        "last_name": "",
        "email": "",
        "gender": ""
    }

    const [value, setValue] = useState(initialValue)

    // Console.log data for debugging
    useEffect(() => {
        // Log data of team members
        console.log(team);
    }, [team])

    // handleChange
    const handleChange = (e) => {

        // Prevent default behavior
        e.preventDefault();

        // Set new object value
        setValue({
            ...value,
            id: team.length + 1,
            [e.target.name]: e.target.value
        })

        // Log new value state
        console.log(value)
    }

    // onSubmit for form submission
    const onSubmit = (e) => {

        // Prevent default behavior
        e.preventDefault();

        // set new value for team
        setTeam([
            ...team,
            value
        ])

        // reset value
        setValue(initialValue)
    }

    return (
        <div>
            {/* Form for creating new member objects */}
            <Form
                value={value}
                onSubmit={onSubmit}
                handleChange={handleChange}
            />

            <h1>List of Team Members here: </h1>
            {team && team.map((member, key) => <Members key={key} members={member}/>)}
            {/* <Members members={team}/> */}
        </div>
    )
}