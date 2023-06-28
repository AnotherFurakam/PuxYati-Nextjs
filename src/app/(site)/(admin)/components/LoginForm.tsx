"use client"
import { ILogin } from '@/interfaces/login.interface';
import loginValidator from '@/validation/login.validation';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { signIn } from 'next-auth/react';
import { useState, type FC } from 'react';

interface LoginFormProps { }

const LoginForm: FC<LoginFormProps> = ({ }) => {

  const [loginError, setLoginError] = useState<string | null>(null)

  const initialValues: ILogin = {
    email: '',
    password: ''
  }

  const onSubmit = (values: ILogin, helpers: FormikHelpers<ILogin>) => {
    signIn("credentials", {
      ...values,
      redirect: false
    }).then((callback) => {
      if (callback?.error) setLoginError(callback.error)
    }).catch((error) => {
      setLoginError(error.message)
    }).finally(() => helpers.setSubmitting(false))
  }

  return (
    <div className='m-auto d-flex gap-4 flex-column shadow-lg p-4 rounded-3'>
      <h1 className='display-6'>Login Administrador</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={loginValidator}
      >
        {
          ({ isSubmitting }) => (
            <Form className='d-flex flex-column gap-3'>
              <div>
                <label className='form-label'>Email:<span className='text-danger'>*</span></label>
                <Field name="email" type="email" disabled={isSubmitting} className="form-control" />
                <ErrorMessage component="p" name="email" className="text-danger" />
              </div>
              <div>
                <label className='form-label'>Password:<span className='text-danger'>*</span></label>
                <Field name="password" type="password" disabled={isSubmitting} className="form-control" />
                <ErrorMessage component="p" className="text-danger" name="password" />
              </div>
              <button className={`btn btn-primary mt-2 ${isSubmitting && "disable"}`} disabled={isSubmitting}>
                {
                  isSubmitting ? 'Enviando...' : 'Ingresar'
                }
              </button>
              <p className='text-danger m-0 text-center'>{loginError}</p>
            </Form>
          )
        }
      </Formik>
    </div>
  );
}
export default LoginForm;