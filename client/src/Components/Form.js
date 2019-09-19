import React from 'react';

export const Form = ({
    value,
    handleChange,
    onSubmit
}) => {

    return (
        <form
            className={`form`}
            onSubmit={onSubmit}
        >
            <label className={`label`} htmlFor="first_name">First Name: </label>
            <input
                className={`form-input`}
                id="first_name"
                type="text"
                name="first_name"
                onChange={handleChange}
                value={value.first_name}
            />
            <label className={`label`} htmlFor="last_name">Last Name: </label>
            <input
                className={`form-input`}
                id="last_name"
                type="text"
                name="last_name"
                onChange={handleChange}
                value={value.last_name}
            />
            <label className={`label`} htmlFor="email">Email: </label>
            <input
                className={`form-input`}
                id="email"
                type="text"
                name="email"
                onChange={handleChange}
                value={value.email}
            />
            <label className={`label`} htmlFor="gender">Gender: </label>
            <input
                className={`form-input`}
                id="gender"
                type="text"
                name="gender"
                onChange={handleChange}
                value={value.gender}
            />
            <button className={`submit-btn`} type="submit">Submit</button>
        </form>
    )
}