import React from 'react';
import { useFormik } from 'formik';
import classes from './profile.module.css'

interface IValues {
    firstName: string,
    lastName: string,
    email: string,
    nickName: string
}

interface IErrors {
    firstName?: string,
    lastName?: string,
    email?: string,
    nickName?: string
}


const validate = (values: IValues) => {
    const errors: IErrors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less'
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.nickName) {
        errors.nickName = 'Required';
    }

    return errors;
}


const Profile = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            nickName: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <div className={classes.form}>
            <div className={classes.form_content}>
                <h1 className={classes.form_header}>Profile</h1>
                <form className={classes.formForm} onSubmit={formik.handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id='firstName' name='firstName' onChange={formik.handleChange} value={formik.values.firstName} />
                    {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                    <label htmlFor="lastName">Second Name</label>
                    <input type="text" id='lastName' name='lastName' onChange={formik.handleChange} value={formik.values.lastName} />
                    {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    <label htmlFor="nickName">nickName</label>
                    <input type="text" id='nickName' name='nickName' onChange={formik.handleChange} value={formik.values.nickName} />
                    {formik.errors.nickName ? <div>{formik.errors.nickName}</div> : null}
                    <button type='submit'> save </button>
                </form>
            </div>
        </div>

    )
}

export default Profile;