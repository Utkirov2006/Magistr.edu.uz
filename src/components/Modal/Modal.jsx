import React from 'react'
import ChangePassword from './ChangePassword'
import Registration from './Registration'
import Login from "./Login"
import Success from './Success'
import AddEducation from './AddEducation'

export default function Modal() {
    return (
        <>
            <Registration />
            <Login /> 
            <ChangePassword />
            <Success />
            <AddEducation/>
        </>
    )
}
