import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { servicioNuevoProducto } from '../../services/ProductoServices'
import '../../styles/form.css'
import logo from '../../assets/react.svg'

const AgregarArticulo = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const { status } = await servicioNuevoProducto(data, token)
      if (status === 201) {
        navigate(`/articulo/${data.id}`)
        console.log(data.id)
      }
    } catch (error) {
      console.error(error)
      console.log(data.id)
    }
  }

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img className='mb-4' src={logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Nuevo Producto</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='product_name'
            name='product_name'
            placeholder='John'
            {...register('product_name', { required: true })}
          />
          {errors.product_name && <span className='registro__span'>Este campo es necesario</span>}
          <label htmlFor='product_name'>Nombre del Producto</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='description'
            name='description'
            placeholder='Doe'
            {...register('description', { required: true })}
          />
          {errors.description && <span className='registro__span'>Este campo es necesario</span>}
          <label htmlFor='description'>Descripcion</label>
        </div>

        <div className='form-floating'>
          <input
            type='number'
            className='form-control'
            id='price'
            name='price'
            placeholder='Doe'
            {...register('price', { required: true })}
          />
          {errors.price && <span className='registro__span'>Este campo es necesario</span>}
          <label htmlFor='price'>Precio:</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='category'
            name='category'
            placeholder='Doe'
            {...register('category', { required: true })}
          />
          {errors.category && <span className='registro__span'>Este campo es necesario</span>}
          <label htmlFor='category'>Categoria:</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='Brand'
            name='Brand'
            placeholder='Doe'
            {...register('Brand', { required: true })}
          />
          {errors.Brand && <span className='registro__span'>Este campo es necesario</span>}
          <label htmlFor='Brand'>Marca:</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='sku'
            name='sku'
            placeholder='Doe'
            {...register('sku', { required: true })}
          />
          {errors.sku && <span className='registro__span'>Este campo es necesario</span>}
          <label htmlFor='sku'>Referencia:</label>
        </div>

        <div className='form-floating'>
          <input
            type='date'
            className='form-control'
            id='createdAt'
            name='createdAt'
            placeholder='Doe'
            {...register('createdAt', { required: true })}
          />
          {errors.createdAt && <span className='registro__span'>Este campo es necesario</span>}
          <label htmlFor='createdAt'>Fecha de creacion:</label>
        </div>

        <div className='form-floating'>
          <input
            type='date'
            className='form-control'
            id='updatedAt'
            name='updatedAt'
            placeholder='Doe'
            {...register('updatedAt', { required: true })}
          />
          {errors.updatedAt && <span className='registro__span'>Este campo es necesario</span>}
          <label htmlFor='updatedAt'>fecha de subida:</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='__v'
            name='__v'
            placeholder='Doe'
            {...register('__v', { required: true })}
          />
          {errors.__v && <span className='registro__span'>Este campo es necesario</span>}
          <label htmlFor='__v'>__v:</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='isActive'
            name='isActive'
            {...register('isActive', { required: true })}
          >

            <option value='true'>Activo</option>
            <option value='False'>Inactivo</option>
          </select>
          {errors.isActive && <span className='registro__span'>Este campo es necesario</span>}
          <label htmlFor='isActive'>activo o incactivo</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='id'
            name='id'
            placeholder='name@example.com'
            {...register('id', { required: true })}
          />
          {errors.id && <span className='registro__span'>Este campo es necesario</span>}
          <label htmlFor='id'>id</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Enviar</button>
        <p className='mt-5 mb-3 text-muted' />
      </form>
    </main>
  )
}

export default AgregarArticulo
