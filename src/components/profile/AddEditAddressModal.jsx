import { useForm } from 'react-hook-form';

import { Modal } from '../Modal';
import { useUser } from '../../context/UserContext';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

const AddEditAddressModal = ({ isOpen, onClose, index, location }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { errors: formsErrors, editUserById, user, setUser } = useUser();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (location) {
      const { streetaddress, city, state, country, postalCode } = location;

      setValue('streetaddress', streetaddress);
      setValue('city', city);
      setValue('state', state);
      setValue('country', country);
      setValue('postalCode', postalCode);
    }
  }, [location]);

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    console.log(data);

    try {
      const response = await editUserById(user?._id, { address: data });
      console.log(response, 'response');
      if (response.status !== 200) {
        toast.error('Error al editar o añadir la direccion');
        return;
      }
      setUser((prev) => ({ ...prev, address: [data] }));
      onClose();
      toast.success('Direccion añadida o editada con exito ');
    } catch (error) {
      console.log(error);
      toast.error('Algo salió mal, por favor intenta de nuevo.');
    }
    setIsLoading(false);
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          {formsErrors &&
            formsErrors.map((error, i) => (
              <div
                className='bg-red-500 p-2 rounded-md text-white w-200 m-2'
                key={i}>
                {error}
              </div>
            ))}
          <h2 className='mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            {index ? 'Edita tu direccion' : 'Añade un Direccion'}
          </h2>
        </div>

        <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form
            className='space-y-6'
            onSubmit={onSubmit}>
            <div>
              <div className='flex items-center justify-between w-full'>
                <label
                  htmlFor='streetaddress'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Direccion
                </label>

                <div className='text-sm'></div>
              </div>
              <div className='mt-2 relative'>
                <input
                  {...register('streetaddress', { required: true })}
                  id='streetaddress'
                  name='streetaddress'
                  type='text'
                  required
                  placeholder='Calle San Juan 123 Edificio Torre 1 Apartamento 2B'
                  className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.streetaddress && (
                <span className='text-red-500'>This field is Requiered</span>
              )}
            </div>
            <div>
              <div className='flex items-center justify-between w-full'>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Ciudad
                </label>

                <div className='text-sm'></div>
              </div>
              <div className='mt-2 relative'>
                <input
                  {...register('city', {
                    required: true,
                  })}
                  id='city'
                  name='city'
                  type='text'
                  required
                  placeholder='Calpe'
                  className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.city && (
                <span className='text-red-500'>This Field is Required</span>
              )}
            </div>
            <div>
              <div className='flex items-center justify-between w-full'>
                <label
                  htmlFor='state'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Provincia
                </label>

                <div className='text-sm'></div>
              </div>
              <div className='mt-2 relative'>
                <input
                  {...register('state', {
                    required: true,
                  })}
                  id='state'
                  name='state'
                  type='text'
                  required
                  placeholder='Alicante'
                  className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.state && (
                <span className='text-red-500'>This Field is Required</span>
              )}
            </div>
            <div>
              <div className='flex items-center justify-between w-full'>
                <label
                  htmlFor='country'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Pais
                </label>

                <div className='text-sm'></div>
              </div>
              <div className='mt-2 relative'>
                <input
                  {...register('country', {
                    required: true,
                  })}
                  id='country'
                  name='country'
                  type='text'
                  required
                  placeholder='España'
                  className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.country && (
                <span className='text-red-500'>This Field is Required</span>
              )}
            </div>
            <div>
              <div className='flex items-center justify-between w-full'>
                <label
                  htmlFor='postalCode'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Codigo Postal
                </label>

                <div className='text-sm'></div>
              </div>
              <div className='mt-2 relative'>
                <input
                  {...register('postalCode', {
                    required: true,
                  })}
                  id='postalCode'
                  name='postalCode'
                  type='text'
                  required
                  placeholder='03711'
                  className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.postalCode && (
                <span className='text-red-500'>This Field is Required</span>
              )}
            </div>
            <div>
              <button
                disabled={isLoading}
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                leading-6 text-white shadow-sm
                 hover:bg-indigo-500 
                 focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                {isLoading ? (
                  <div className='flex items-center justify-center'>
                    {' '}
                    <Loader2
                      size={20}
                      className='mr-2 animate-spin'
                    />
                    Guardando...
                  </div>
                ) : (
                  'Guardar'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default AddEditAddressModal;
