/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci';
import EditPassword from './EditPassword';
import EditPhoneModal from './EditPhoneModal';
import EditPictureModal from './EditPictureModal';
import { useUser } from '../../context/UserContext';
import { RxCross1 } from 'react-icons/rx';
import { LuMailPlus } from 'react-icons/lu';
import { MdOutlineWrongLocation } from 'react-icons/md';
import { MdEditLocationAlt } from 'react-icons/md';
import { MdOutlineAddLocationAlt } from 'react-icons/md';
import { GoPlus } from 'react-icons/go';
import { toast } from 'sonner';

const MyProfileDashboard = () => {
  const navigate = useNavigate();
  const [editPassword, setEditPassword] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editPicture, setEditPicture] = useState(false);
  const [phoneToEdit, setPhoneToEdit] = useState(null);

  const { user, isAuthenticated, setUser, editUserById } = useUser();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, user]);
  console.log('user', user);

  const handleEditPhone = (phone) => {
    setPhoneToEdit(phone);
    setEditPhone(true);
  };
  const handleEditPublicData = async (newPublicData) => {
    try {
      const response = await editUserById(user?._id, {
        publicData: newPublicData,
      });
      console.log(response, 'response');
      if (response.status !== 200) {
        toast.error('Error al cambiar la visibilidad');
        return;
      }
      setUser(...user, { publicData: newPublicData });
      toast.success('Visibilidad cambiada con éxito');
    } catch (error) {
      console.log(error);
      toast.error('Algo salió mal');
    }
  };
  return (
    <div className='flex flex-col items-center justify-center gap-2 w-full'>
      {editPassword && (
        <EditPassword
          isOpen={editPassword}
          onClose={() => setEditPassword(false)}
        />
      )}
      {editPhone && (
        <EditPhoneModal
          isOpen={editPhone}
          onClose={() => setEditPhone(false)}
          phone={phoneToEdit}
        />
      )}
      {editPicture && (
        <EditPictureModal
          isOpen={editPicture}
          onClose={() => setEditPicture(false)}
        />
      )}
      <>
        <div className='md:w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white shadow overflow-hidden sm:rounded-lg my-6'>
            <div className='px-4 py-5 sm:px-6'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                Información del Usuario
              </h3>
              <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                Detalles personales.
              </p>
            </div>
            <div className='border-t border-gray-200'>
              <dl>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Profile Picture
                  </dt>
                  <div className='flex items-center gap-4'>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      <img
                        src={user?.picture}
                        alt='profile'
                        className='h-16 w-16 rounded-full'
                      />
                    </dd>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 '>
                      <div
                        className='flex items-center gap-2 whitespace-nowrap cursor-pointer'
                        onClick={() => setEditPicture(!editPicture)}>
                        <CiEdit size={20} />
                        Change Picture
                      </div>
                    </dd>
                  </div>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Nombre completo
                  </dt>
                  <div className='flex items-center gap-4'>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {user?.firstname} {user?.lastname}
                    </dd>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>Email</dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    {user?.email}
                  </dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Teléfonos
                  </dt>
                  <div className='flex items-center gap-4'>
                    {user?.phone === '' ||
                      (!user?.phone ? (
                        <>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                            Agrega un Telefono
                          </dd>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                            <CiEdit
                              size={20}
                              onClick={() =>
                                handleEditPhone({
                                  phoneNumber: '',
                                  phoneDescription: '',
                                })
                              }
                            />
                          </dd>
                        </>
                      ) : (
                        user?.phones.map((phone, index) => (
                          <div
                            key={index}
                            className='flex items-center gap-4'>
                            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                              {phone.phoneDescription}:{phone.phoneNumber}
                            </dd>
                            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                              <CiEdit
                                size={20}
                                onClick={() => handleEditPhone(phone)}
                              />
                            </dd>
                          </div>
                        ))
                      ))}
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Contraseña
                  </dt>
                  <div className='flex items-center gap-4'>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      ***********
                    </dd>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer'>
                      <CiEdit
                        size={20}
                        onClick={() => setEditPassword(true)}
                      />
                    </dd>
                  </div>
                </div>
                <div className='bg-whitepx-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>Trabajo</dt>
                  <div className='flex items-center gap-4'>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {user?.job?.position !== 'enter position' &&
                      user?.job?.workplace !== 'enter workplace' ? (
                        <p className=''>
                          <span>{user?.job?.workplace}</span>
                          <span>{user?.job?.position}</span>
                        </p>
                      ) : (
                        'Agrega un Trabajo'
                      )}
                    </dd>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer'>
                      <CiEdit
                        size={20}
                        onClick={() => setEditPassword(true)}
                      />
                    </dd>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Cantidad de Recursos Favoritos
                  </dt>
                  <div className='flex items-center gap-4'>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {user?.favorites?.length}
                    </dd>
                  </div>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Change Privacity
                  </dt>
                  <div className='flex items-center gap-4'>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {Object.entries(user?.publicData || {}).map(
                        ([key, value], index) => (
                          <div
                            key={index}
                            className='flex items-center mb-4'>
                            <input
                              type='checkbox'
                              id={`publicData-${key}`}
                              name={key}
                              checked={value}
                              onChange={(e) => {
                                e.preventDefault();
                                /* Aquí la funcion que emitiremos al backend para cambiar la visibilidad */
                                const newPublicData = {
                                  ...user?.publicData,
                                  [key]: e.target.checked,
                                };

                                console.log(newPublicData);
                                handleEditPublicData(newPublicData);
                              }}
                              className='mr-2'
                            />
                            <label
                              htmlFor={`publicData-${key}`}
                              className='text-sm text-gray-900'>
                              {key === 'name'
                                ? 'Nombre'
                                : key === 'emails'
                                ? 'Emails'
                                : key === 'address'
                                ? 'Direccion'
                                : key === 'phones'
                                ? 'Telefonos'
                                : key === 'social'
                                ? 'Redes Sociales'
                                : 'Ultimo Login'}
                            </label>
                          </div>
                        )
                      )}
                    </dd>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Mis Emails
                  </dt>
                  <div className='flex items-center gap-4'>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {user?.emails.map((email, index) => (
                        <div
                          key={index}
                          className='bg-gray-50 flex items-center gap-4'>
                          <div className='flex flex-col sm:col-span-2'>
                            <span className='text-sm font-medium text-gray-900'>
                              Email: {email.emailDescription}
                            </span>

                            <span className='text-sm font-medium text-gray-900'>
                              <em> {email.emailUrl}</em>
                            </span>
                            <span className='mt-1 p-2 text-gray-900'></span>
                          </div>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer'>
                            <CiEdit
                              size={20}
                              onClick={() => {
                                /* Modal para editar este email debe estar relleno con los datos anteriores. */
                              }}
                            />
                          </dd>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer'>
                            <RxCross1
                              size={20}
                              onClick={() => {
                                /* Modal para preguntar si esta seguro de eliminar este email */
                              }}
                            />
                          </dd>
                        </div>
                      ))}
                      <dd className='w-full text-end'>
                        <div className='flex items-center gap-2 justify-start w-full'>
                          Agregar Email{' '}
                          <LuMailPlus
                            size={20}
                            onClick={() => {
                              /* Modal para preguntar si esta seguro de eliminar este email */
                            }}
                          />{' '}
                        </div>
                      </dd>
                    </dd>
                  </div>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Mis Direcciones
                  </dt>
                  <div className='flex items-center gap-4'>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {user?.address.length === 1 &&
                      Object.values(user.address[0]).every(
                        (value) => value === ''
                      )
                        ? null
                        : user?.address.map((address, index) => (
                            <div
                              key={index}
                              className='bg-white flex items-center gap-4'>
                              <div className='flex flex-col sm:col-span-2'>
                                <span className='text-sm font-medium text-gray-900'>
                                  Dirección: {address.streetAddress}, Ciudad:{' '}
                                  {address.city}, Provincia: {address.state},{' '}
                                  CP: {address.postalCode}, {address.country}
                                </span>
                                <span className='mt-1 p-2 text-gray-900'></span>
                              </div>
                              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer'>
                                <MdEditLocationAlt
                                  size={20}
                                  onClick={() => {
                                    // Lógica para editar esta dirección
                                  }}
                                />
                              </dd>
                              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer'>
                                <MdOutlineWrongLocation
                                  size={20}
                                  onClick={() => {
                                    // Lógica para confirmar la eliminación de esta dirección
                                  }}
                                />
                              </dd>
                            </div>
                          ))}
                      <dd className='w-full text-end'>
                        <div className='flex items-center gap-2 justify-end w-full'>
                          Agregar Dirección{' '}
                          <MdOutlineAddLocationAlt
                            size={20}
                            onClick={() => {
                              // Lógica para agregar una nueva dirección
                            }}
                          />
                        </div>
                      </dd>
                    </dd>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Mis Redes Sociales
                  </dt>
                  <div className='flex items-center gap-4'>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {user?.social.length === 1 && user.social[0].user === '@'
                        ? null
                        : user?.social.map((social, index) => (
                            <div
                              key={index}
                              className='bg-white flex items-center gap-4'>
                              <div className='flex flex-col sm:col-span-2'>
                                <span className='text-sm font-medium text-gray-900'>
                                  {social.media}: {social.user}
                                </span>
                                <span className='mt-1 p-2 text-gray-900'></span>
                              </div>
                              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer'>
                                <CiEdit
                                  size={20}
                                  onClick={() => {
                                    // Lógica para editar esta red social
                                  }}
                                />
                              </dd>
                              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer'>
                                <GoPlus
                                  size={20}
                                  onClick={() => {
                                    // Lógica para confirmar la eliminación de esta red social
                                  }}
                                />
                              </dd>
                            </div>
                          ))}
                      <dd className='w-full text-end'>
                        <div className='flex items-center gap-2 justify-end w-full'>
                          Agregar Red Social{' '}
                          <GoPlus
                            size={20}
                            onClick={() => {
                              // Lógica para agregar una nueva red social
                            }}
                          />
                        </div>
                      </dd>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MyProfileDashboard;
