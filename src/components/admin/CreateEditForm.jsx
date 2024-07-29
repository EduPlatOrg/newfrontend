import { uploadFile, uploadFiles } from '../../api/services';
import { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { LiaCloudUploadAltSolid } from 'react-icons/lia';
import { toast } from 'sonner';

import { Loader2 } from 'lucide-react';
import ToolTip from '../ToolTip';
import PreviewImagesModal from './PreviewImagesModal';
import { createEventRequest, editEventRequest } from '../../api/events';
import { useNavigate } from 'react-router-dom';
import { formatInTimeZone } from 'date-fns-tz';

const CreateEditForm = ({ event }) => {
  const [loading, setLoading] = useState(false);
  const [mainImage, setMainImage] = useState('');
  const [images, setImages] = useState([]);
  const [pdf, setPdf] = useState('');
  const [previewImagesModal, setPreviewImagesModal] = useState(false);

  const [mainImageLoading, setMainImageLoading] = useState(false);
  const [imagesLoading, setImagesLoading] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    if (event?._id) {
      setMainImage(event?.mainImage);
      setImages(event?.images);

      setPdf(event?.pdfDocument);
      setValue('title', event?.title);
      setValue('description', event?.description);
      setValue('youtubeUrl', event?.youtubeUrl);
      setValue('online', event?.online);
      setValue('inPerson', event?.inPerson);
      setValue('onlinePremiumPlaces', event?.onlinePremiumPlaces);
      setValue('onlineFreePlaces', event?.onlineFreePlaces);
      setValue('inPersonPlaces', event?.inPersonPlaces);
      setValue('streetaddress', event?.address?.streetaddress);
      setValue('city', event?.address?.city);
      setValue('state', event?.address?.state);
      setValue('country', event?.address?.country);
      setValue('postalCode', event?.address?.postalCode);
      setValue('price', event?.price);
      setValue('premiumEventUrl', event?.premiumEventUrl);
      setValue('publicEventUrl', event?.publicEventUrl);
      if (event?.startDate && event?.endDate) {
        let startDate = formatInTimeZone(
          new Date(event?.startDate),
          'Europe/Paris',
          'yyyy-MM-dd HH:mm:ss zzz'
        );

        setValue('startDate', startDate.slice(0, 16));
        let endDate = formatInTimeZone(
          new Date(event?.endDate),
          'Europe/Paris',
          'yyyy-MM-dd HH:mm:ss zzz'
        );
        setValue('endDate', endDate.slice(0, 16));
      }
    }
  }, [event]);

  const handleImage = async (files) => {
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
  const handleImages = async (files) => {
    setImagesLoading(true);
    try {
      const imagesArray = await uploadFiles(files);
      for (let i = 0; i < imagesArray.length; i++) {
        setImages((prevImages) => [...prevImages, imagesArray[i].secure_url]);
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al subir la Imagen');
    }
    setImagesLoading(false);
  };
  const handlePdf = async (file) => {
    setPdfLoading(true);
    try {
      const pdf = await uploadFile(file[0]);

      setPdf(pdf.secure_url);
    } catch (error) {
      console.log(error);
      toast.error('Error al subir la Imagen');
    }
    setPdfLoading(false);
  };

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    if (!event?._id) {
      const newEvent = {
        ...data,
        mainImage,
        images,
        pdfDocument: pdf,
        address: {
          streetaddress: data.streetaddress,
          city: data.city,
          state: data.state,
          postalCode: data.postalCode,
          country: data.country,
        },
      };

      try {
        const response = await createEventRequest(newEvent);
        if (response.status === 200) {
          toast.success('Evento creado correctamente');
        }
        navigate('/admin-panel');
        reset();
      } catch (error) {
        console.log(error);
        toast.error('Error al crear el evento');
      }
    } else {
      // Edit Event
      const editEvent = {
        ...data,
        mainImage,
        images,
        pdfDocument: pdf,
        address: {
          streetaddress: data.streetaddress,
          city: data.city,
          state: data.state,
          postalCode: data.postalCode,
          country: data.country,
        },
      };

      try {
        const response = await editEventRequest(event._id, editEvent);
        if (response.status === 200) {
          toast.success('Evento editado correctamente');
        }
        navigate('/admin-panel');
        reset();
      } catch (error) {
        console.log(error);
        toast.error('Error al crear el evento');
      }
    }
    setLoading(false);
  });
  return (
    <>
      {previewImagesModal && (
        <PreviewImagesModal
          images={images}
          onClose={() => setPreviewImagesModal(false)}
          setImages={setImages}
          isOpen={previewImagesModal}
        />
      )}
      <div className='w-full flex flex-col items-center justify-normal p-10'>
        <h1 className=' uppercase'>
          {!event?.id ? 'Create New Event' : 'Edit Event'}
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
              placeholder='Feria de los libros...'
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
              placeholder='Descripcion detallada del evento...'
              name='description'
              id='description'
              {...register('description', {
                required: true,
              })}></textarea>
            {errors.message && <span>This field is required</span>}
          </div>
          <div className='flex items-center gap-2 flex-col md:flex-row'>
            <div className='flex flex-col items-center justify-center mb-1 '>
              <label
                htmlFor='mainImage'
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
            <div className='flex flex-col items-center justify-center mb-1 '>
              <label
                htmlFor='description'
                className=' text-sm font-medium leading-6 text-gray-900 flex items-center gap-8'>
                {images?.length >= 1 ? (
                  <ToolTip
                    label='Click to preview'
                    className='whitespace-nowrap -top-12 '>
                    <span
                      onClick={() => setPreviewImagesModal(true)}
                      className='cursor-pointer'>
                      Click to preview ←
                    </span>
                  </ToolTip>
                ) : (
                  'Imagenes Extra:'
                )}
              </label>
              <Dropzone
                acceptedFiles='.jpg, .png, .jpeg, .gif, .webp'
                multiple={true}
                noClick={true}
                maxSize={20000000}
                onDrop={(acceptedFiles) => {
                  const filteredFiles = acceptedFiles.filter(
                    (file) =>
                      file.type === 'image/jpeg' ||
                      file.type === 'image/jpg' ||
                      file.type === 'image/png' ||
                      file.type === 'image/gif' ||
                      file.type === 'image/webp'
                  );

                  if (filteredFiles.length > 0) {
                    handleImages(filteredFiles);
                  }
                }}>
                {({ getRootProps, getInputProps, open }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />

                      {images && images.length >= 1 ? (
                        <div
                          className='grid grid-cols-2 md:w-full w-[300px] items-center justify-center gap-4 cursor-pointer'
                          onClick={open}>
                          {images?.map((image, index) => (
                            <div
                              key={index}
                              className='flex justify-center items-center p-2'>
                              <img
                                src={image}
                                alt='imagen'
                                className='max-w-full max-h-52 object-contain'
                              />
                            </div>
                          ))}
                          <p className='text-xs text-center w-full col-span-2'>
                            Click on Images to add more
                          </p>
                        </div>
                      ) : (
                        <div
                          onClick={open}
                          className='md:w-full w-[300px] py-8 flex flex-col justify-center 
                      items-center border-2 border-gray-300 border-dashed rounded-lg'>
                          {imagesLoading ? (
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
                      )}
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
            <div className='flex flex-col items-center justify-center mb-1 '>
              <label
                htmlFor='description'
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
              Presentacion en Youtube/Vimeo:
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
          <div className='flex items-center gap-8 flex-col md:flex-row justify-center'>
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                id='online'
                name='online'
                {...register('online')}
              />
              <label htmlFor='online'>Disponible Online:</label>
            </div>
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                id='inPerson'
                name='inPerson'
                {...register('inPerson')}
              />
              <label htmlFor='inPerson'>Evento precencial:</label>
            </div>
          </div>
          <div className='flex items-center gap-2 flex-wrap'>
            <label
              htmlFor='onlinePremiumPlaces'
              className=' whitespace-nowrap'>
              Plazas Premium Online:
            </label>
            <input
              type='number'
              id='onlinePremiumPlaces'
              name='onlinePremiumPlaces'
              className='block w-full rounded-md border-0 
              py-1.5 text-gray-900 shadow-sm ring-1 
              ring-inset ring-gray-300
              placeholder:text-gray-400 
              focus:ring-2 focus:ring-inset
              focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              {...register('onlinePremiumPlaces', { valueAsNumber: true })}
            />
          </div>
          <div className='flex items-center gap-2 flex-wrap'>
            <label
              htmlFor='onlineFreePlaces'
              className=' whitespace-nowrap'>
              Plazas Online Youtube:
            </label>
            <input
              type='number'
              id='onlineFreePlaces'
              name='onlineFreePlaces'
              className='block w-full rounded-md border-0 
              py-1.5 text-gray-900 shadow-sm ring-1 
              ring-inset ring-gray-300
              placeholder:text-gray-400 
              focus:ring-2 focus:ring-inset
              focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              {...register('onlineFreePlaces', { valueAsNumber: true })}
            />
          </div>
          <div className='flex items-center gap-2 flex-wrap'>
            <label
              htmlFor='inPersonPlaces'
              className=' whitespace-nowrap'>
              Plazas Presenciales:
            </label>
            <input
              type='number'
              id='inPersonPlaces'
              name='inPersonPlaces'
              className='block w-full rounded-md border-0 
              py-1.5 text-gray-900 shadow-sm ring-1 
              ring-inset ring-gray-300
              placeholder:text-gray-400 
              focus:ring-2 focus:ring-inset
              focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              {...register('inPersonPlaces', { valueAsNumber: true })}
            />
          </div>
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
                {...register('streetaddress')}
                id='streetaddress'
                name='streetaddress'
                type='text'
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
                {...register('city')}
                id='city'
                name='city'
                type='text'
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
                {...register('state')}
                id='state'
                name='state'
                type='text'
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
                {...register('country')}
                id='country'
                name='country'
                type='text'
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
                {...register('postalCode')}
                id='postalCode'
                name='postalCode'
                type='text'
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
            <div className='flex items-center justify-between w-full'>
              <label
                htmlFor='price'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Precio
              </label>

              <div className='text-sm'></div>
            </div>
            <div className='mt-2 relative'>
              <input
                {...register('price', {
                  required: true,
                })}
                id='price'
                name='price'
                type='text'
                required
                placeholder='Gratuito o X€'
                className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              />
            </div>
            {errors.price && (
              <span className='text-red-500'>This Field is Required</span>
            )}
          </div>
          <div>
            <div className='flex items-center justify-between w-full'>
              <label
                htmlFor='premiumEventUrl'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Premium Access URL
              </label>

              <div className='text-sm'></div>
            </div>
            <div className='mt-2 relative'>
              <input
                {...register('premiumEventUrl')}
                id='premiumEventUrl'
                name='premiumEventUrl'
                type='text'
                placeholder='URL o Link de la web de ZOOM'
                className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              />
            </div>
            {errors.premiumEventUrl && (
              <span className='text-red-500'>This Field is Required</span>
            )}
          </div>
          <div>
            <div className='flex items-center justify-between w-full'>
              <label
                htmlFor='publicEventUrl'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Youtube Streeming URL
              </label>

              <div className='text-sm'></div>
            </div>
            <div className='mt-2 relative'>
              <input
                {...register('publicEventUrl')}
                id='publicEventUrl'
                name='publicEventUrl'
                type='text'
                placeholder='URL donde se retransmitira el evento en Youtube o Vimeo'
                className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              />
            </div>
            {errors.publicEventUrl && (
              <span className='text-red-500'>This Field is Required</span>
            )}
          </div>
          <label htmlFor='startDate'>Fecha de Comienzo </label>
          <input
            {...register('startDate', { required: true })}
            type='datetime-local'
            id='startDate'
            name='startDate'
            className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
          />
          {errors.dateStart && (
            <span className='text-red-500'>This Field is Required</span>
          )}
          <label htmlFor='endDate'>Fecha de Finalizacion</label>
          <input
            {...register('endDate', { required: true })}
            type='datetime-local'
            id='endDate'
            name='endDate'
            className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
          />
          {errors.dateEnd && (
            <span className='text-red-500'>This Field is Required</span>
          )}
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
            ) : event?._id ? (
              'Editar Evento'
            ) : (
              'Crear Evento'
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateEditForm;
