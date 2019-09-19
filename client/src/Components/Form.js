import React from 'react';

export const Form = ({
    value,
    handleChange,
    onSubmit
}) => {

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="first_name">First Name: </label>
            <input
                id="first_name"
                type="text"
                name="first_name"
                onChange={handleChange}
                value={value.first_name}
            />
            <label htmlFor="last_name">Last Name: </label>
            <input
                id="last_name"
                type="text"
                name="last_name"
                onChange={handleChange}
                value={value.last_name}
            />
            <label htmlFor="email">Email: </label>
            <input
                id="email"
                type="text"
                name="email"
                onChange={handleChange}
                value={value.email}
            />
            <label htmlFor="gender">Gender: </label>
            <input
                id="gender"
                type="text"
                name="gender"
                onChange={handleChange}
                value={value.gender}
            />
            <button type="submit">Submit</button>
        </form>
    )
}