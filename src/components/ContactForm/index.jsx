import { ErrorMessage, Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { CONTACTS_VALIDATION_SCHEMA } from '../utils/validationsSchemas';
import { createContact } from '../../store/slices/contactsSlice/contsctsSlice';
import classNames from 'classnames';
import styles from './ContactsForm.module.css';

const ContactsForm = ({ create }) => {
  const initialValues = {
    fullName: '',
    phoneNumber: '',
  };

  const submitHandler = (values, { resetForm }) => {
    create(values);
    resetForm();
  };

  return (
    <section className={styles.inputContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={CONTACTS_VALIDATION_SCHEMA}
      >
        {({ touched, errors }) => {
          const fullNameClassName = classNames(styles.input, {
            [styles.valid]: touched.fullName && !errors.fullName,
            [styles.invalid]: touched.fullName && errors.fullName,
          });

          const phoneClassName = classNames(styles.input, {
            [styles.valid]: touched.phoneNumber && !errors.phoneNumber,
            [styles.invalid]: touched.phoneNumber && errors.phoneNumber,
          });

          return (
            <Form className={styles.form}>
              <h2>Contacts Form</h2>
              <label className={styles.label}>
                <span className={styles.caption}>Full name:</span>
                <Field
                  type='text'
                  name='fullName'
                  placeholder='Test Testovych'
                  className={fullNameClassName}
                  autoFocus
                />
                <ErrorMessage
                  name='fullName'
                  component='span'
                  className={styles.error}
                />
              </label>
              <label className={styles.label}>
                <span className={styles.caption}>Phone number:</span>
                <Field
                  type='tel'
                  name='phoneNumber'
                  placeholder='+380XXXXXXXXX'
                  className={phoneClassName}
                />
                <ErrorMessage
                  name='phoneNumber'
                  component='span'
                  className={styles.error}
                />
              </label>
              <button type='submit' className={styles.button}>
                Add
              </button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  create: values => dispatch(createContact(values)),
});

export default connect(null, mapDispatchToProps)(ContactsForm);
