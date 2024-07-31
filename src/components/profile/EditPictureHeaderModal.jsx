import { Modal } from '../Modal';
import Dropzone from 'react-dropzone';
import { toast } from 'sonner';
import { useUser } from '../../context/UserContext';
import { useState } from 'react';
import { LiaCloudUploadAltSolid } from 'react-icons/lia';
import { Loader2 } from 'lucide-react';
import { uploadFile } from '../../api/services';

const EditPictureHeaderModal = ({ isOpen, onClose }) => {
  const { user, setUser, editUserById } = useUser();
  const [loading, setLoading] = useState(false);
  console.log(user);

  const [profilePicture, setProfilePicture] = useState(
    user?.palette?.pictureHeader
  );

  const handleImages = async (files) => {
    setLoading(true);
    try {
      const image = await uploadFile(files[0]);
      setProfilePicture(image.secure_url);
    } catch (error) {
      console.log(error);
      toast.error('Error al subir la Imagen');
    }
    setLoading(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newData = { ...user.palette, pictureHeader: profilePicture };
    console.log(newData);
    try {
      const response = await editUserById(user?._id, {
        palette: newData,
      });

      if (response.status !== 200) {
        toast.error('Error al cambiar la Imagen');
        return;
      }
      setUser((prev) => ({
        ...prev,
        palette: newData,
      }));

      onClose();
      toast.success('Imagen cambiada con éxito');
    } catch (error) {
      console.log(error);
      toast.error('Algo salió mal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Añade o cambia tu Foto de Fondo
          </h2>
        </div>

        <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            src={profilePicture}
            alt='Profile Picture'
            className=' mx-auto h-[120px] w-full object-cover rounded-md'
          />
          <form
            className='space-y-6'
            onSubmit={onSubmit}>
            <Dropzone
              acceptedFiles='.jpg, .png, .jpeg, .gif, .webp'
              multiple={false}
              noClick={true}
              maxSize={20000000}
              onDrop={(acceptedFiles) => {
                handleImages(acceptedFiles);
              }}>
              {({ getRootProps, getInputProps, open }) => (
                <section>
                  <div
                    {...getRootProps()}
                    className='flex gap-2'>
                    <input {...getInputProps()} />

                    <div onClick={open}>
                      <div
                        className='w-full py-8 flex flex-col mt-8  justify-center 
                      items-center border-2 border-gray-300 border-dashed rounded-lg'>
                        <LiaCloudUploadAltSolid
                          size={30}
                          className='text-gray-400'
                        />
                        <p className='text-[0.8rem] text-gray-400 text-center'>
                          Arrastra una imagen aquí o haz click para seleccionar
                          una imagen.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </Dropzone>
            <div>
              <button
                type='submit'
                disabled={loading}
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                leading-6 text-white shadow-sm 
                 hover:bg-indigo-500 
                 focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                {loading ? (
                  <div className='flex items-center justify-center gap-3'>
                    <Loader2 className='animate-spin ' />
                    Cargando...
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

export default EditPictureHeaderModal;
