"use client"
import { useState, type FC, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { ILogin } from '@/interfaces/login.interface';
import loginValidator from '@/validation/login.validation';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import styles from './login.module.css'

interface pageProps { }

const Page: FC<pageProps> = ({ }) => {

  const { push } = useRouter()

  const session = useSession()

  const [loginError, setLoginError] = useState<string | null>(null)

  const initialValues: ILogin = {
    email: '',
    password: ''
  }

  const handleSubmit = async (values: ILogin, helper: FormikHelpers<ILogin>) => {
    console.log(values)
    signIn("credentials", {
      ...values,
      redirect: false
    }).then((callback) => {
      if (callback?.error) setLoginError(callback.error)
    }).catch((error) => {
      setLoginError(error.message)
    }).finally(() => helper.setSubmitting(false))
  }

  useEffect(() => {
    if (session.status === 'authenticated') push('/', { shallow: true })
  }, [session.status, push])

  if (session.status === 'unauthenticated') {
    return (
      <main className={`${styles.main} shadow d-flex justify-content-center align-items-center`}>
        <div className={`${styles['login-container']} py-5`}>
          <h1 className="text-uppercase text-light fs-2 fw-light mb-4 text-center text-sm-start">iniciar sesion</h1>
          <div className="bg-dark shadow rounded-1">
            <Formik
              initialValues={initialValues}
              validationSchema={loginValidator}
              onSubmit={handleSubmit}
            >
              {
                (({ isSubmitting }) => (
                  <Form className="p-4 d-flex flex-column gap-3 align-items-center">
                    <div className="w-100 px-sm-4 pt-3">
                      <label className={`form-label text-uppercase ${styles['label-username']}`}>nombre de usuario</label>
                      <Field type="email" name="email" placeholder="youremail@email.com" className="form-control" />
                      <ErrorMessage component="p" className="text-danger" name="email" />
                    </div>
                    <div className="w-100 px-sm-4">
                      <label className="form-label text-uppercase text-light">contraseña</label>
                      <Field type="password" name="password" className="form-control" />
                      <ErrorMessage component="p" className="text-danger" name="password" />
                    </div>
                    <p className='text-danger fs-5 text-center w-100'>{loginError}</p>
                    <button className={`d-flex justify-content-center mb-4 mb-md-0 ${styles['button-login']} fs-4 fw-light text-uppercase`} disabled={isSubmitting}>
                      Ingresar
                    </button>
                    <div className="w-100 d-flex justify-content-center pb-2">
                      <a href="/" className={`${styles['forget-link']} text-secondary`}>No recuerdo mi contraseña</a>
                    </div>
                  </Form>
                ))
              }
            </Formik>
          </div>
        </div>
      </main>
    );
  } else {
    return (<main className='main'></main>)
  }
}
export default Page;