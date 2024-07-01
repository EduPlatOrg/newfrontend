import { MdOutlineDelete } from 'react-icons/md';
import { Modal } from '../Modal';

const EditPictureModal = ({ isOpen, onClose, images, setImages }) => {
  console.log(images, 'images');
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <div className='flex min-h-full flex-1 flex-col items-center justify-center px-6 py-3 '>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Imagenes Extra del evento.
          </h2>
        </div>
        <div className='grid grid-cols-2 w-[80%] items-center mt-8 justify-between gap-6'>
          {images &&
            images.length > 0 &&
            images.map((image, index) => (
              <div
                className='relative col-span-1 flex justify-center items-center w-full  p-2  rounded-md'
                key={index}>
                <img
                  src={image}
                  alt='event Images'
                  className='aspect-auto w-full
                   object-cover '
                />
                <div
                  className='absolute top-0 right-0 bg-red-600
                   text-white p-1 rounded-md cursor-pointer'
                  onClick={() =>
                    setImages((prev) => prev.filter((item) => item !== image))
                  }>
                  <MdOutlineDelete size={20} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </Modal>
  );
};

export default EditPictureModal;
