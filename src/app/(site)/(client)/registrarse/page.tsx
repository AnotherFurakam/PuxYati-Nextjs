"use client"
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ICreateUser } from '@/interfaces/user.interface';
import './registrarse.css'
import { Field, Form, Formik, FormikHelpers, ErrorMessage } from "formik";
import { useEffect, useState } from 'react';
import { Card, Plan, User, UserPlan } from '@prisma/client';
import axios, { AxiosError } from "axios";
import registerValidation from '@/validation/register.validation';
import Swal from 'sweetalert2';
import { ICreateCard } from '@/interfaces/card.interface';
import { ICreateUserPlan } from '@/interfaces/user-plan.interface';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Registrarse() {

  const session = useSession()

  const { push } = useRouter()

  const [planId, setPlanId] = useState<string | null>(null)

  const [plans, setPlans] = useState<Plan[] | null>(null)

  const [acceptTerms, setAcceptTerms] = useState<boolean>(false)

  const setPlan = (plan_id: string) => setPlanId(plan_id)

  interface Initialvalues extends ICreateUser {
    titular_name: string
    titular_lastname: string
    number: string
    due_date: string
    cvv: string
  }

  const initialValues: Initialvalues = {
    name: '',
    lastname: '',
    email: '',
    hashedPassword: '',
    titular_name: '',
    titular_lastname: '',
    number: '',
    due_date: '',
    cvv: ''
  }

  const onSubmit = async (values: Initialvalues, helpers: FormikHelpers<Initialvalues>) => {
    try {
      if (!acceptTerms) {
        Swal.fire({
          icon: 'warning',
          text: 'Debe aceptar los terminos y condiciones'
        }).then(res => helpers.setSubmitting(false))
      } else {
        //* Registrando usuario
        const { data: user }: { data: User } = await axios.post('/api/user', {
          name: values.name,
          lastname: values.lastname,
          email: values.email,
          hashedPassword: values.hashedPassword,
        } as ICreateUser)

        //* Registrando credit card
        await axios.post('/api/card', {
          name: values.titular_name,
          lastname: values.titular_lastname,
          number: values.number,
          cvv: values.cvv,
          due_date: values.due_date,
          user_id: user.id
        } as ICreateCard)

        //* Register user-plan
        const currentDate = new Date()
        const currentPlan = plans?.find(plan => plan.id === planId)
        await axios.post('/api/user-plan', {
          user_id: user.id,
          plan_id: planId,
          expired_date: new Date(currentDate.getTime() + ((currentPlan?.month_duration || 1) * 30 * 24 * 60 * 60 * 1000))

        } as ICreateUserPlan)

        //* Navigate to Login page
        push('/login')
      }
    } catch (error: any) {
      let message
      if (error instanceof AxiosError) {
        message = error.response?.data.message
      }
      Swal.fire({
        icon: 'error',
        text: message || error.message
      })
    }
  }

  useEffect(() => {
    axios.get('/api/plan')
      .then(res => {
        setPlans(res.data)
        setPlanId(res.data[0].id)
      })
    if (session.status === 'authenticated') push('/')
  }, [session.status, push])

  if (session.status === 'unauthenticated') {
    return (
      <main className="main shadow d-flex justify-content-center align-items-center">
        <div className="registro-container py-5 px-3">
          <div className="bg-dark shadow rounded-1 px-0 p-md-5 ">
            <div className="row flex-column px-2 mx-0 px-md-5 mx-md-5">
              <div className="col-md d-flex justify-content-between flex-column-reverse flex-md-row">
                <div className="d-flex align-items-center justify-content-center mb-5 mb-md-0">
                  <h1 className="fs-1 text-uppercase text-light text-center fw-light">Registrarse</h1>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="/img/registro/Logo.png" className="img-fluid img-logo" />
                </div>
              </div>
              <div className="col-md d-flex flex-column">
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={registerValidation}
                >
                  {
                    (({ isSubmitting }) => (
                      <Form className='d-flex flex-column gap-4 mx-3'>
                        <div className="w-100 px-sm-4 pt-3">
                          <label className="form-label text-uppercase label-username text-light">Nombre</label>
                          <Field name="name" type="text" className="form-control" maxLength={40} />
                          <ErrorMessage component='p' name="name" className='text-danger' />
                        </div>
                        <div className="w-100 px-sm-4">
                          <label className="form-label text-uppercase label-username text-light">Apellido</label>
                          <Field name="lastname" type="text" className="form-control" maxLength={40} />
                          <ErrorMessage component='p' name="lastname" className='text-danger' />
                        </div>
                        <div className="w-100 px-sm-4">
                          <label className="form-label text-uppercase label-username text-light">Correo electrónico</label>
                          <Field name="email" type="email" className="form-control" />
                          <ErrorMessage component='p' name="email" className='text-danger' />
                        </div>
                        <div className="w-100 px-sm-4">
                          <label className="form-label text-uppercase text-light">contraseña</label>
                          <Field name="hashedPassword" type="password" className="form-control" />
                          <ErrorMessage component='p' name="hashedPassword" className='text-danger' />
                        </div>

                        <div className='d-flex flex-column gap-4 my-4'>
                          <h2 className='text-white text-uppercase fw-lighter'>Selecciona tu plan</h2>
                          <div className='w-100 px-sm-4 d-flex flex-column flex-lg-row justify-content-center gap-3 mt-3'>
                            {
                              plans && plans.map((plan) => (
                                <div key={plan.id} className={`plan rounded-3 p-2 w-100 bg-black text-white ${planId === plan.id ? 'active' : ''}`} onClick={() => setPlan(plan.id)}>
                                  <h3 className='text-white fs-3 text-center my-3 text-decoration-underline'>{plan.name}</h3>
                                  <ul>
                                    <li>{plan.month_duration} Meses.</li>
                                    <li>{plan.games > 0 ? `${plan.games} juegos.` : 'Todos los juegos'}</li>
                                    <li>{plan.additional_info}</li>
                                  </ul>
                                  <h2 className='price text-end fs-2'>S/.{plan.price}0</h2>
                                </div>
                              ))
                            }
                          </div>
                        </div>

                        <div className='my-5 d-flex flex-column gap-4'>
                          <h2 className='text-white text-uppercase fw-lighter'>Información de la tarjeta</h2>
                          <div className="w-100 px-sm-4 d-flex flex-column flex-md-row gap-4">
                            <div className="w-100">
                              <label className="form-label text-uppercase text-light">Nombre titular</label>
                              <Field name="titular_name" type="text" className="form-control" />
                              <ErrorMessage component='p' name="titular_name" className='text-danger' maxLength={40} />
                            </div>
                            <div className="w-100">
                              <label className="form-label text-uppercase text-light">Apellido titular</label>
                              <Field name="titular_lastname" type="text" className="form-control" maxLength={40} />
                              <ErrorMessage component='p' name="titular_lastname" className='text-danger' />
                            </div>
                          </div>
                          <div className="w-100 px-sm-4 d-flex flex-column flex-md-row gap-4">
                            <div className="w-100 w-md-50">
                              <label className="form-label text-uppercase text-light">Número</label>
                              <Field name="number" type="text" className="form-control" maxLength={16} />
                              <ErrorMessage component='p' name="number" className='text-danger' />
                            </div>
                            <div className='d-flex gap-4 w-100 w-50'>
                              <div className="w-50">
                                <label className="form-label text-uppercase text-light">Fecha</label>
                                <Field name="due_date" type="text" className="form-control" maxLength={5} />
                                <ErrorMessage component='p' name="due_date" className='text-danger' />
                              </div>
                              <div className="w-50">
                                <label className="form-label text-uppercase text-light">CVV</label>
                                <Field name="cvv" type="text" className="form-control" maxLength={4} />
                                <ErrorMessage component='p' name="cvv" className='text-danger' />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="w-100 px-sm-4 d-flex justify-content-center gap-1 mt-3" onClick={() => setAcceptTerms(!acceptTerms)}>
                          <input className="form-check-input" checked={acceptTerms} readOnly type="checkbox" style={{ minWidth: 15 }} />
                          <label className="form-check-label text-light" role="button">
                            Acepto los términos y condiciones de <a href="" className="auth-link text-light">Acuerdo de suscriptor</a> y la <a href="" className="auth-link text-light">Política de privacidad de PukYati</a>.
                          </label>
                        </div>
                        <button type='submit' id='sumitButton' disabled={isSubmitting} className="d-flex justify-content-center mx-auto mt-3 mb-4 mb-md-0 text-uppercase button fs-4 fw-light">
                          Siguiente
                        </button>
                      </Form>
                    ))
                  }
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  } else {
    return (<main className='main'></main>)
  }
};
