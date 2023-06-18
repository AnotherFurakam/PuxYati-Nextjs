import * as Yup from "yup"


const loginValidator = Yup.object().shape({
  email: Yup.string().email('Ingrese un email válido').required('Campo requerido'),
  password: Yup.string().required('Campo requerido')
}) 

export default loginValidator