import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import classes from './profile.module.scss'
import Modal from '../modal/modal';
import * as Yup from 'yup';
import Media from './media/meida';

const Profile = () => {

    const [modalIsShown, setModalIsShown] = useState(false);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            nickName: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid Email adress')
                .required('Required'),
            nickName: Yup.string()
                .required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    const handleSaveButtonClick = () => {
        setModalIsShown(false);
        localStorage.setItem('firstName', formik.values.firstName);
        localStorage.setItem('lastName', formik.values.lastName);
        localStorage.setItem('email', formik.values.email);
        localStorage.setItem('nickName', formik.values.nickName);
    }

    return (
        <div>
            <Modal open={modalIsShown} >
                <div className={classes.form}>
                    <div className={classes.form__content}>
                        <h1 className={classes.form__header}>Profile</h1>
                        <form className={classes.form__form} onSubmit={formik.handleSubmit}>
                            <label className={classes.form__label} htmlFor="firstName">First Name</label><br />
                            <input className={classes.form__input} type="text" id='firstName' {...formik.getFieldProps('firstName')} /><br />
                            {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                            <label className={classes.form__label} htmlFor="lastName">Second Name</label><br />
                            <input className={classes.form__input} type="text" id='lastName' {...formik.getFieldProps('lastName')} /><br />
                            {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                            <label className={classes.form__label} htmlFor="email">Email</label><br />
                            <input className={classes.form__input} type="email" id="email" {...formik.getFieldProps('email')} /><br />
                            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                            <label className={classes.form__label} htmlFor="nickName">nickName</label><br />
                            <input className={classes.form__input} type="text" id='nickName' {...formik.getFieldProps('nickName')} /><br />
                            {formik.touched.nickName && formik.errors.nickName ? <div>{formik.errors.nickName}</div> : null}
                            <button className={classes.form__button} type='submit' onClick={handleSaveButtonClick} > save </button>
                        </form>
                    </div>
                </div>
            </Modal>

            <div className={classes.profileInfo}>
                <div className={classes.profileInfo__content}>
                    <div className={classes.profileInfo__firstName}>
                        <span className={classes.profileInfo__label}>First name: </span>
                        <span className={classes.profileInfo__infoItem}>{localStorage.firstName}</span>
                    </div>
                    <div className={classes.profileInfo__lastName}>
                        <span className={classes.profileInfo__label}>Last name: </span>
                        <span className={classes.profileInfo__infoItem}>{localStorage.lastName}</span>
                    </div>
                    <div className={classes.profileInfo__email}>
                        <span className={classes.profileInfo__label}>Email: </span>
                        <span className={classes.profileInfo__infoItem}>{localStorage.email}</span>
                    </div>
                    <div className={classes.profileInfo__nickname}>
                        <span className={classes.profileInfo__label}>Nickname: </span>
                        <span className={classes.profileInfo__infoItem}>{localStorage.nickName}</span>
                    </div>
                    <button className={classes.profileInfo__button} onClick={() => setModalIsShown(true)}>edit</button>
                </div>
            </div>
            <Media/>
        </div>
    )
}

export default Profile;