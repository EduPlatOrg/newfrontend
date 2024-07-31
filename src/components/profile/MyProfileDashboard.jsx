/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

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
import DeletePhoneModal from './DeletePhoneModal';
import EditJobModal from './EditJobModal';
import AddEditMailModal from './AddEditMailModal';
import DeleteEmailModal from './DeletEmailModal';
import AddEditAddressModal from './AddEditAddressModal';
import DeleteAddressModal from './DeletAddressModal';
import EditSocialModal from './EditSocialModal';

import DeleteSocialModal from './DeleteSocialModal';
import { Loader2 } from 'lucide-react';
import EditPictureHeaderModal from './EditPictureHeaderModal';

const MyProfileDashboard = () => {
  const navigate = useNavigate();
  const [editPassword, setEditPassword] = useState(false);
  const [deleteEmail, setDeleteEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editPicture, setEditPicture] = useState(false);
  const [phoneToEdit, setPhoneToEdit] = useState(null);
  const [deletePhone, setDeletePhone] = useState(false);
  const [editJob, setEditJob] = useState(false);
  const [addEditMail, setAddEditMail] = useState(false);
  const [emailToEdit, setEmailToEdit] = useState(null);
  const [sendIndex, setSendIndex] = useState(null);
  const [editAddress, setEditAddress] = useState(false);
  const [addressToEdit, setAddressToEdit] = useState(null);
  const [deleteAddress, setDeleteAddress] = useState(false);
  const [editSocial, setEditSocial] = useState(false);
  const [socialToEdit, setSocialToEdit] = useState(null);
  const [deleteSocial, setDeleteSocial] = useState(false);
  const [bio, setBio] = useState(null);
  const [editBio, setEditBio] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editPictureHeader, setEditPictureHeader] = useState(false);

  const { user, isAuthenticated, setUser, editUserById } = useUser();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, user]);

  const handleEditPhone = (phone) => {
    setPhoneToEdit(phone);
    setEditPhone(true);
  };
  const handleEditPublicData = async (newPublicData) => {
    try {
      const response = await editUserById(user?._id, {
        publicData: newPublicData,
      });

      if (response.status !== 200) {
        toast.error('Error al cambiar la visibilidad');
        return;
      }
      setUser((currentUser) => ({
        ...currentUser,
        publicData: newPublicData,
      }));
      toast.success('Visibilidad cambiada con éxito');
    } catch (error) {
      console.log(error);
      toast.error('Algo salió mal');
    }
  };
  const handleDeletePhone = async (e) => {
    e.preventDefault();
    setDeletePhone(true);
  };

  const handleEditBio = () => {
    setBio(user?.bio);
    setEditBio(!editBio);
  };

  const handleBio = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await editUserById(user?._id, {
        bio: bio,
      });

      if (response.status !== 200) {
        toast.error('Error al cambiar la biografía');
        return;
      }
      setUser((currentUser) => ({
        ...currentUser,
        bio: bio,
      }));
      toast.success('Biografía cambiada con éxito');
    } catch (error) {
      console.log(error);
      toast.error('Algo salió mal');
    }
    setLoading(false);
    setEditBio(false);
    setBio(null);
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
      {deletePhone && (
        <DeletePhoneModal
          isOpen={deletePhone}
          onClose={() => setDeletePhone(false)}
          phone={phoneToEdit}
        />
      )}
      {editPicture && (
        <EditPictureModal
          isOpen={editPicture}
          onClose={() => setEditPicture(false)}
        />
      )}
      {editPictureHeader && (
        <EditPictureHeaderModal
          isOpen={editPictureHeader}
          onClose={() => setEditPictureHeader(false)}
        />
      )}
      {editJob && (
        <EditJobModal
          isOpen={editJob}
          onClose={() => setEditJob(false)}
        />
      )}
      {addEditMail && (
        <AddEditMailModal
          isOpen={addEditMail}
          onClose={() => setAddEditMail(false)}
          email={emailToEdit}
          index={sendIndex}
        />
      )}
      {deleteEmail && (
        <DeleteEmailModal
          isOpen={deleteEmail}
          onClose={() => setDeleteEmail(false)}
          email={emailToEdit}
          index={sendIndex}
        />
      )}
      {editAddress && (
        <AddEditAddressModal
          isOpen={editAddress}
          onClose={() => setEditAddress(false)}
          index={sendIndex}
          location={addressToEdit}
        />
      )}
      {deleteAddress && (
        <DeleteAddressModal
          isOpen={deleteAddress}
          onClose={() => setDeleteAddress(false)}
          location={addressToEdit}
          index={sendIndex}
        />
      )}
      {editSocial && (
        <EditSocialModal
          isOpen={editSocial}
          onClose={() => setEditSocial(false)}
          index={sendIndex}
          social={socialToEdit}
        />
      )}
      {deleteSocial && (
        <DeleteSocialModal
          isOpen={deleteSocial}
          onClose={() => setDeleteSocial(false)}
          index={sendIndex}
          social={socialToEdit}
        />
      )}
      <>
        <div className='md:w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
          <div className='bg-white shadow overflow-hidden sm:rounded-lg my-6'>
            <div className='px-4 py-5 sm:px-6 w-full relative min-h-[130px]'>
              <div className=' absolute px-4 py-5 sm:px-6 bg-white w-fit rounded-md z-20'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Información del Usuario
                </h3>
                <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                  Detalles personales.
                </p>
              </div>
              <img
                src={user?.palette?.pictureHeader}
                alt='imagen publica de fondo'
                className='absolute top-0 left-0 w-full h-full object-cover z-0'
                onClick={() => setEditPictureHeader(true)}
              />
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
                  <dt className='text-sm font-medium text-gray-500'>Karma</dt>
                  <div className='flex items-center gap-4'>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {user?.karma}
                    </dd>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Biografia
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    <div className='w-full flex flex-col gap-2 relative py-5'>
                      {editBio ? (
                        <>
                          <textarea
                            rows={bio ? bio.split('\n').length + 1 : 4}
                            className='w-full p-2 border rounded resize-none min-h-[200px]'
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                          />
                          <div className='w-full flex items-center justify-end gap-2'>
                            <button
                              className='self-end py-1 px-2 bg-indigo-500 rounded-md text-white text-sm hover:bg-indigo-700'
                              onClick={handleBio}>
                              {loading ? (
                                <Loader2 className='animate-spin' />
                              ) : (
                                'Enviar'
                              )}
                            </button>
                            <button
                              className='self-end py-1 px-2 bg-red-500 rounded-md text-white text-sm hover:bg-red-700'
                              onClick={() => {
                                setEditBio(false);
                                setBio(null);
                              }}>
                              Cancelar
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <p>{user?.bio}</p>

                          <button
                            className='absolute -bottom-1.5 right-0'
                            onClick={handleEditBio}>
                            <CiEdit size={20} />
                          </button>
                        </>
                      )}
                    </div>
                  </dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Teléfonos
                  </dt>
                  <div className='flex items-center gap-4'>
                    {user?.phones?.length === 1 &&
                    user.phones[0].phoneNumber === '' ? (
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
                      <div className=''>
                        {user?.phones.map((phone, index) => (
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
                            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                              <RxCross1
                                size={20}
                                onClick={(e) => {
                                  setPhoneToEdit(phone);
                                  handleDeletePhone(e);
                                }}
                              />
                            </dd>
                          </div>
                        ))}
                        <div className='flex items-center justify-start gap-2 '>
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
                        </div>
                      </div>
                    )}
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
                        <div className=''>
                          <p>
                            <span className='font-bold'>Empresa:</span>{' '}
                            {user?.job?.workplace}
                          </p>
                          <p>
                            {' '}
                            <span className='font-bold'>Puesto:</span>{' '}
                            {user?.job?.position}
                          </p>
                        </div>
                      ) : (
                        'Agrega un Trabajo'
                      )}
                    </dd>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer self-end'>
                      <CiEdit
                        size={20}
                        onClick={() => setEditJob(true)}
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
                          {index !== 0 && (
                            <>
                              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer'>
                                <CiEdit
                                  size={20}
                                  onClick={() => {
                                    setEmailToEdit(email);
                                    setAddEditMail(true);
                                    setSendIndex(index);
                                  }}
                                />
                              </dd>
                              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer'>
                                <RxCross1
                                  size={20}
                                  onClick={() => {
                                    setEmailToEdit(email);
                                    setSendIndex(index);
                                    setDeleteEmail(true);
                                  }}
                                />
                              </dd>{' '}
                            </>
                          )}
                        </div>
                      ))}
                      <dd className='w-full text-end'>
                        <div className='flex items-center gap-2 justify-start w-full'>
                          Agregar Email{' '}
                          <LuMailPlus
                            size={20}
                            onClick={() => setAddEditMail(true)}
                          />{' '}
                        </div>
                      </dd>
                    </dd>
                  </div>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Mi Direccion
                  </dt>
                  <div className='flex items-center gap-4'>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {user?.address.length === 1 &&
                      Object.values(user.address[0]).every(
                        (value) => value === ''
                      ) ? (
                        <dd className='w-full text-end'>
                          <div className='flex items-center gap-2 justify-end w-full'>
                            Agregar Dirección{' '}
                            <MdOutlineAddLocationAlt
                              className='cursor-pointer'
                              size={20}
                              onClick={() => {
                                setEditAddress(true);
                              }}
                            />
                          </div>
                        </dd>
                      ) : (
                        user?.address.map((address, index) => (
                          <div
                            key={index}
                            className='bg-white flex items-center gap-4 w-full'>
                            <div className='flex flex-col sm:col-span-2'>
                              <p className='text-sm font-medium text-gray-900'>
                                <span className='font-bold'>Dirección:</span>{' '}
                                {address.streetaddress}{' '}
                              </p>
                              <p className=''>
                                <span className='font-bold'>Ciudad:</span>{' '}
                                {address.city}
                              </p>
                              <p className=''>
                                <span className='font-bold'>Provincia:</span>{' '}
                                {address.state}
                              </p>
                              <p className=''>
                                <span className='font-bold'>CP:</span>{' '}
                                {address.postalCode}
                              </p>
                              <p className=''>{address.country}</p>

                              <span className='mt-1 p-2 text-gray-900'></span>
                            </div>
                            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer self-end'>
                              <MdEditLocationAlt
                                size={20}
                                onClick={() => {
                                  setAddressToEdit(address);
                                  setSendIndex(index);
                                  setEditAddress(true);
                                }}
                              />
                            </dd>
                            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer self-end'>
                              <MdOutlineWrongLocation
                                size={20}
                                onClick={() => {
                                  setAddressToEdit(address);
                                  setSendIndex(index);
                                  setDeleteAddress(true);

                                  // Lógica para confirmar la eliminación de esta dirección
                                }}
                              />
                            </dd>
                          </div>
                        ))
                      )}
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
                              className='bg-gray-50 flex items-center gap-4 w-full mb-3'>
                              <div className='flex flex-col sm:col-span-2'>
                                <span className='text-sm font-medium text-gray-900'>
                                  {social.media}: {social.user}
                                </span>
                                <span className='mt-1 p-2 text-gray-900'></span>
                                <div className='flex items-center  gap-3 w-full'>
                                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer '>
                                    <CiEdit
                                      size={20}
                                      onClick={() => {
                                        // Lógica para editar esta red social
                                        setSocialToEdit(social);
                                        setSendIndex(index);
                                        setEditSocial(true);
                                      }}
                                    />
                                  </dd>
                                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer '>
                                    <RxCross1
                                      size={20}
                                      onClick={() => {
                                        // Lógica para confirmar la eliminación de esta red social
                                        setSocialToEdit(social);
                                        setSendIndex(index);
                                        setDeleteSocial(true);
                                      }}
                                    />
                                  </dd>{' '}
                                </div>
                              </div>
                            </div>
                          ))}
                      <dd className='w-full text-end'>
                        <div className='flex items-center gap-2 justify-end w-full'>
                          Agregar Red Social{' '}
                          <GoPlus
                            size={20}
                            onClick={() => {
                              setEditSocial(true);
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
