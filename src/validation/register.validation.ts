import * as Yup from 'yup'


const registerValidation = Yup.object().shape({
  name: Yup.string().min(2,'Mínimo 2 caracteres').max(40, 'Máximo 40 caracteres').required('Campo requerido'),
  lastname: Yup.string().min(2,'Mínimo 2 caracteres').max(40,'Máximo 40 caracteres').required('Campo requerido'),
  email: Yup.string().email('Ingrese un email válido').required('Campo requerido'),
  hashedPassword: Yup.string().min(8, 'Mínimo 8 caracteres').max(20,'Máximo 20 caracteres').required('Campo requerido'),
  titular_name: Yup.string().min(2,'Mínimo 2 caracteres').max(40,'Máximo 40 caracteres').required('Campo requerido'),
  titular_lastname: Yup.string().min(2, 'Mínimo 2 caracteres').max(40,'Máximo 40 caracteres').required('Campo requerido'),
  number: Yup.string().matches(/^4[0-9]{12}(?:[0-9]{3})?$/,'Número de tarjeta no válida').required('Campo requerido'),
  due_date: Yup.string().matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/,'Fecha no válida').test('expirationDate','Tarjeta expirada',(value) => {
    if (!value) return false
    const today = new Date()
    const [month, year] = value.split('/');
    const duedate = new Date(parseInt('20'+year), parseInt(month) - 1, 1) 
    return duedate > today
  }).required('Campo requerido'),
  cvv: Yup.string().matches(/^[0-9]{3,4}$/,'CVV inválido').required('Campo requerido')
})

export default registerValidation