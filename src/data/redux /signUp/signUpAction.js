export const setFirstName = firstName => ({
    type: signUpActionTypes.SET_FIRST_NAME,
    firstName
})

export const setLastName = lastName => ({
    type: signUpActionTypes.SET_LAST_NAME,
    lastName
})

export const setEmail = email => ({
    type: signUpActionTypes.SET_EMAIL,
    email
})

export const setPassword = password => ({
    type: signUpActionTypes.SET_PASSWORD,
    password
})

export const setRepeatPass = repeatPass => ({
    type: signUpActionTypes.SET_REPEAT_PASSWORD,
    repeatPass
})

export const signUpActionTypes = {
    SET_EMAIL: 'SET_EMAIL',
    SET_FIRST_NAME: 'SET_FIRST_NAME',
    SET_LAST_NAME: 'SET_LAST_NAME',
    SET_PASSWORD: 'SET_PASSWORD',
    SET_REPEAT_PASSWORD: 'SET_REPEAT_PASSWORD'
}