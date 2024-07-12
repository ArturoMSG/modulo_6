import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { servicioRegistroUsuario } from '../../services/UsuariosServices'
import '../../styles/form.css'
import logo from '../../assets/react.svg'
import './Registro.css'

const Registro = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (datos) => {
    try {
      const { status } = await servicioRegistroUsuario(datos)
      if (status === 201) {
        navigate('/login')
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img className='mb-4' src={logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Registrese por favor</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            placeholder='John'
            {...register('first_name', { required: true })}
          />
          {errors.first_name && <span className='registro__span'>Este campo es necesario</span>}
          <label htmlFor='first_name'>Nombre</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            placeholder='Doe'
            {...register('last_name', { required: true })}
          />
          {errors.last_name && <span className='registro__span'>Este campo es necesario</span>}
          <label htmlFor='last_name'>Apellido</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            {...register('gender', { required: true })}
          >
            <option value=''>Elegir...</option>
            <option value='M'>Hombre</option>
            <option value='F'>Mujer</option>
          </select>
          {errors.gender && <span className='registro__span'>Este campo es necesario</span>}
          <label htmlFor='gender'>Genero</label>
        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='name@example.com'
            {...register('email', { required: true })}
          />
          {errors.email && <span className='registro__span'>Este campo es necesario</span>}
          <label htmlFor='email'>Correo electronico</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            placeholder='Password'
            {...register('password', { required: true })}
          />
          {errors.password && <span className='registro__span'>Este campo es necesario</span>}
          <label htmlFor='password'>Password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Enviar</button>
        <p className='mt-5 mb-3 text-muted' />
      </form>
    </main>
  )
}

export default Registro
