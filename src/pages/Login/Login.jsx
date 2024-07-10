import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { servicioLoginUsuario } from '../../services/UsuariosServices'
import { useAutenticacionContext } from '../../hooks/useUsuario'
import logo from '../../assets/vite.svg'
import '../../styles/form.css'

const Login = () => {
  const { login } = useAutenticacionContext()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = async (datos) => {
    try {
      const response = await servicioLoginUsuario(datos)
      if (response.status === 200) {
        // Guardamos el token en el localStorage del navegador
        // Este dato permance aún si el navegador se cierra y vuelve a abrir.
        // localStorage.setItem('token', response.datos.token)
        login(response.datos.token)
        navigate('/listaproductos')
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img
          className='mb-4'
          src={logo}
          alt=''
          width={72}
          height={57}
        />
        <h1 className='h3 mb-3 fw-normal'>Registrese, Por favor</h1>
        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            placeholder='name@example.com'
            {...register('email', { required: true })}
          />
          {errors.email && <span>Este campo es Requerido</span>}
          <label htmlFor='floatingInput'>Correo Electronico</label>
        </div>
        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
            {...register('password', { required: true })}
          />
          {errors.password && <span>Este campo es requerido</span>}
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <button className='btn btn-primary w-100 py-2' type='submit'>
          ENVIAR
        </button>
        <p className='mt-5 mb-3 text-body-secondary'>© 2017–2024</p>
      </form>
    </main>

  )
}

export default Login
