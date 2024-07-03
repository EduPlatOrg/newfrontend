import { uploadFile } from '../../api/services';
import { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { LiaCloudUploadAltSolid } from 'react-icons/lia';
import { useRecources } from '../../context/RecourcesContext';
import { toast } from 'sonner';

import { Loader2 } from 'lucide-react';
import ToolTip from '../ToolTip';

import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const CreateEditRecourceForm = ({ recource }) => {
  const [loading, setLoading] = useState(false);
  const [mainImage, setMainImage] = useState('');

  const [pdf, setPdf] = useState('');

  const [mainImageLoading, setMainImageLoading] = useState(false);

  const [pdfLoading, setPdfLoading] = useState(false);
  const { user } = useUser();
  const { createNewRecource, editRecource } = useRecources();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    if (recource?._id) {
      setMainImage(recource?.image);

      setPdf(recource?.pdfDocument);
      setValue('title', recource?.title);
      setValue('description', recource?.description);
      setValue('youtubeUrl', recource?.youtubeUrl);

      setValue('externalLink', recource?.externalLink);
      setValue(
        'discipline',
        Array.isArray(recource?.discipline)
          ? recource.discipline.join(',')
          : recource?.discipline
      );
      setValue(
        'subDicipline',
        Array.isArray(recource?.subDicipline)
          ? recource.subDicipline.join(',')
          : recource?.subDicipline
      );
      setValue('language', recource?.language);
      setValue('media', recource?.media);
      setValue('user', recource?.user);
      setValue('licence', recource?.licence);
      setValue('level', recource?.level);
      setValue('autorName', recource?.autor?.autorName);
      setValue('media', recource?.autor?.media);
      setValue('user', recource?.autor?.user);
    }
  }, [recource, setValue]);

  const handleImage = async (files) => {
    console.log(files, '<-- files');
    setMainImageLoading(true);
    try {
      const image = await uploadFile(files[0]);
      setMainImage(image.secure_url);
    } catch (error) {
      console.log(error);
      toast.error('Error al subir la Imagen');
    }
    setMainImageLoading(false);
  };

  const handlePdf = async (file) => {
    console.log(file, '<-- files');
    setPdfLoading(true);
    try {
      const pdf = await uploadFile(file[0]);
      console.log(pdf, '<-- pdf');
      setPdf(pdf.secure_url);
    } catch (error) {
      console.log(error);
      toast.error('Error al subir la Imagen');
    }
    setPdfLoading(false);
  };

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    console.log(data, '<-- data');
    data.discipline = data.discipline.split(',');
    data.subDicipline = data.subDicipline.split(',');
    if (!recource?._id) {
      const newRecource = {
        ...data,
        autor: {
          autorName: data.autorName,
          media: data.media,
          user: data.user,
        },
        image: mainImage,
        pdfDocument: pdf,
        creatorId: user?._id,
      };
      console.log(newRecource, '<-- newEvent');
      try {
        const response = await createNewRecource(newRecource);

        if (response === 200) {
          toast.success('Evento creado correctamente');
          navigate('/profile-panel/my-recources');
          reset();
        }
      } catch (error) {
        console.log(error);
        toast.error('Error al crear el evento');
      }
    } else {
      // Edit Event
      const editedRecource = {
        ...data,
        autor: {
          autorName: data.autorName,
          media: data.media,
          user: data.user,
        },
        image: mainImage,
        pdfDocument: pdf,
      };
      console.log(editedRecource, '<-- editedRecource');

      try {
        const response = await editRecource(recource._id, editedRecource);
        if (response === 200) {
          toast.success('Evento editado correctamente');
          navigate('/profile-panel/my-recources');
          reset();
        }
      } catch (error) {
        console.log(error);
        toast.error('Error al crear el evento');
      }
    }
    setLoading(false);
  });
  return (
    <>
      <div className='w-full flex flex-col items-center justify-normal p-8'>
        <h1 className=' uppercase text-xl font-serif'>
          {!recource?.id ? 'Crear nuevo recurso' : 'Editar Recurso'}
        </h1>
        <form
          onSubmit={onSubmit}
          className='w-[80%] flex flex-col gap-3'>
          <div className='flex flex-col items-start justify-center mb-1'>
            <label
              htmlFor='title'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Titulo:
            </label>
            <input
              className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              type='text'
              placeholder='¿Cómo se usa el microscopio?'
              name='title'
              id='title'
              {...register('title', { required: true })}
            />
            {errors.title && <span>This field is required</span>}
          </div>
          <div className='flex flex-col items-start justify-center mb-1'>
            <label
              htmlFor='description'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Description:
            </label>
            <textarea
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2'
              rows={5}
              placeholder='Descripcion detallada del recurso...'
              name='description'
              id='description'
              {...register('description', {
                required: true,
              })}></textarea>
            {errors.message && <span>This field is required</span>}
          </div>
          <div className='flex items-center gap-2 flex-col md:flex-row  w-full'>
            <div className='flex flex-col items-center justify-center mb-1 w-full'>
              <label
                htmlFor='image'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Imagen Principal:
              </label>
              {mainImage ? (
                <ToolTip label='Click Image to clear'>
                  <img
                    src={mainImage}
                    alt='Imagen Subida'
                    className='w-[300px] object-cover cursor-pointer'
                    onClick={() => setMainImage('')}
                  />
                </ToolTip>
              ) : (
                <Dropzone
                  acceptedFiles='.jpg, .png, .jpeg, .gif, .webp'
                  multiple={false}
                  noClick={true}
                  maxSize={20000000}
                  onDrop={(acceptedFiles) => {
                    console.log(acceptedFiles, '<-- acceptedFiles');
                    if (
                      ![
                        'image/jpeg',
                        'image/jpg',
                        'image/png',
                        'image/gif',
                        'image/webp',
                      ].includes(acceptedFiles[0].type)
                    ) {
                      toast.error('Solo se permiten imagenes');
                      return;
                    }
                    handleImage(acceptedFiles);
                  }}>
                  {({ getRootProps, getInputProps, open }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />

                        <div
                          onClick={open}
                          className='md:w-full w-[300px]  py-8 flex flex-col justify-center 
                      items-center border-2 border-gray-300 border-dashed rounded-lg'>
                          {mainImageLoading ? (
                            <Loader2 className='animate-spin' />
                          ) : (
                            <LiaCloudUploadAltSolid
                              size={30}
                              className='text-gray-400'
                            />
                          )}
                          <p className='text-[0.8rem] text-gray-400 text-center'>
                            Arrastra una imagen aquí o haz click para
                            seleccionar una imagen.
                          </p>
                        </div>
                      </div>
                    </section>
                  )}
                </Dropzone>
              )}
            </div>

            <div className='flex flex-col items-center justify-center mb-1 w-full '>
              <label
                htmlFor='pdfDocument'
                className='block text-sm font-medium leading-6 text-gray-900'>
                PDF:
              </label>
              <Dropzone
                acceptedFiles='.pdf'
                multiple={false}
                noClick={true}
                maxSize={20000000}
                onDrop={(acceptedFiles) => {
                  if (acceptedFiles[0].type !== 'application/pdf') return;
                  handlePdf(acceptedFiles);
                }}>
                {({ getRootProps, getInputProps, open }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />

                      {!pdf && !pdf ? (
                        <div
                          onClick={open}
                          className='md:w-full w-[300px] py-8 flex flex-col justify-center 
                      items-center border-2 border-gray-300 border-dashed rounded-lg'>
                          {pdfLoading ? (
                            <Loader2 className='animate-spin' />
                          ) : (
                            <LiaCloudUploadAltSolid
                              size={30}
                              className='text-gray-400'
                            />
                          )}
                          <p className='text-[0.8rem] text-gray-400 text-center'>
                            Arrastra una imagen aquí o haz click para
                            seleccionar una imagen.
                          </p>
                        </div>
                      ) : (
                        <div className='flex justify-center items-center p-2 md:w-full md:min-w-[300px] w-[300px]'>
                          <iframe
                            src={pdf}
                            alt='pdf Preview'
                          />
                        </div>
                      )}
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
          </div>
          <div className='flex flex-col items-start justify-center mb-1'>
            <label
              htmlFor='youtubeUrl'
              className='flex items-center gap-1 text-sm font-medium leading-6 text-gray-900 '>
              Recurso en Youtube/Vimeo:
            </label>
            <input
              className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              type='text'
              placeholder='Direccion de https del video...'
              name='youtubeUrl'
              id='youtubeUrl'
              {...register('youtubeUrl')}
            />
            {errors.youtubeUrl && <span>This field is required</span>}
          </div>
          <div className='flex flex-col items-start justify-center mb-1'>
            <label
              htmlFor='externalLink'
              className='flex items-center gap-1 text-sm font-medium leading-6 text-gray-900 '>
              Link Extreno:
            </label>
            <input
              className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              type='text'
              placeholder='Direccion de http del recurso...'
              name='externalLink'
              id='externalLink'
              {...register('externalLink')}
            />
            {errors.externalLink && <span>This field is required</span>}
          </div>
          <div className='flex items-center gap-2 flex-wrap'>
            <label
              htmlFor='discipline'
              className=' whitespace-nowrap'>
              Disciplina:{' '}
              <em className='text-xs'>
                (Separar por comas las diferentes diciplinas si aplica)
              </em>
            </label>
            <input
              type='text'
              id='discipline'
              name='discipline'
              placeholder='Biologia, Quimica, Fisica, etc.'
              className='block w-full rounded-md border-0 
              py-1.5 text-gray-900 shadow-sm ring-1 
              ring-inset ring-gray-300
              placeholder:text-gray-400 
              focus:ring-2 focus:ring-inset
              focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              {...register('discipline', { required: true })}
            />
          </div>
          <div className='flex items-center gap-2 flex-wrap'>
            <label
              htmlFor='subDiscipline'
              className=' whitespace-nowrap'>
              Sub-disciplina:{' '}
              <em className='text-xs'>
                (Separar por comas las diferentes sub-diciplinas si aplica)
              </em>
            </label>
            <input
              type='text'
              id='subDicipline'
              name='subDicipline'
              placeholder='Biologia Molecular, Quimica Organica,  Trigonometria'
              className='block w-full rounded-md border-0 
              py-1.5 text-gray-900 shadow-sm ring-1 
              ring-inset ring-gray-300
              placeholder:text-gray-400 
              focus:ring-2 focus:ring-inset
              focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              {...register('subDicipline', { required: true })}
            />
          </div>
          <div>
            <div className='flex items-center justify-between w-full'>
              <label
                htmlFor='language'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Lenguaje:
              </label>

              <div className='text-sm'></div>
            </div>
            <div className='mt-2 relative'>
              <input
                {...register('language', { required: true })}
                id='language'
                name='language'
                type='text'
                placeholder='Español, Ingles, Frances, etc.'
                className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              />
            </div>
            {errors.language && (
              <span className='text-red-500'>This field is Requiered</span>
            )}
          </div>
          <div>
            <div className='flex items-center justify-between w-full'>
              <label
                htmlFor='level'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Nivel del Recurso:
              </label>

              <div className='text-sm'></div>
            </div>
            <div className='mt-2 relative'>
              <input
                {...register('level', { required: true })}
                id='level'
                name='level'
                type='text'
                required
                placeholder='Para que nivel es este recurso? (Basico, Intermedio, Avanzado)'
                className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              />
            </div>
            {errors.level && (
              <span className='text-red-500'>This field is Requiered</span>
            )}
          </div>
          <div className='flex sm:flex-col md:flex-row items-center gap-4 justify-between'>
            <div className='w-full'>
              <div className='flex items-center justify-between w-full'>
                <label
                  htmlFor='autorName'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Nombre del Autor
                </label>

                <div className='text-sm'></div>
              </div>
              <div className='mt-2 relative'>
                <input
                  {...register('autorName')}
                  id='autorName'
                  name='autorName'
                  type='text'
                  placeholder='Autor del Recurso.'
                  className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.autorName && (
                <span className='text-red-500'>Password is Requiered</span>
              )}
            </div>
            <div className='w-full'>
              <div className='flex items-center justify-between w-full'>
                <label
                  htmlFor='media'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Red Social
                </label>

                <div className='text-sm'></div>
              </div>
              <div className='mt-2 relative'>
                <input
                  {...register('media')}
                  id='media'
                  name='media'
                  type='text'
                  placeholder='Facebook, Twitter, Instagram, etc.'
                  className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.media && (
                <span className='text-red-500'>Password is Requiered</span>
              )}
            </div>
            <div className='w-full'>
              <div className='flex items-center justify-between w-full'>
                <label
                  htmlFor='user'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Url de la Red Social.
                </label>

                <div className='text-sm'></div>
              </div>
              <div className='mt-2 relative'>
                <input
                  {...register('user')}
                  id='user'
                  name='user'
                  type='text'
                  placeholder='Pega el link de tu perfil de la red social.'
                  className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.user && (
                <span className='text-red-500'>This field is Required</span>
              )}
            </div>
          </div>
          <div>
            <div className='flex items-center justify-between w-full'>
              <label
                htmlFor='licence'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Licencia
              </label>

              <div className='text-sm'></div>
            </div>
            <div className='mt-2 relative'>
              <input
                {...register('licence')}
                id='licence'
                name='licence'
                type='text'
                placeholder='CC BY-SA 4.0, CC BY-NC-SA 4.0, etc.'
                className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              />
            </div>
            {errors.licence && (
              <span className='text-red-500'>This Field is Required</span>
            )}
          </div>

          <button
            disabled={loading}
            type='submit'
            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                leading-6 text-white shadow-sm
                 hover:bg-indigo-500 
                 focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            {loading ? (
              <div className='flex items-center justify-center'>
                {' '}
                <Loader2
                  size={20}
                  className='mr-2 animate-spin'
                />
                Working...
              </div>
            ) : recource?._id ? (
              'Editar Recurso'
            ) : (
              'Crear Recurso'
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateEditRecourceForm;
