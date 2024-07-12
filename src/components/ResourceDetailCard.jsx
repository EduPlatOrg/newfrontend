import { useState } from 'react';

const ResourceDetailCard = ({ resource }) => {
  const {
    title,
    description,
    author,
    publishDate,
    image,
    level,
    discipline,
    subDicipline,
  } = resource;
  const [rating, setRating] = useState(0);
  const [mostrarComentarios, setMostrarComentarios] = useState(false);
  const [ratingComment, setRatingComment] = useState('');

  const handleRating = (index) => {
    {
      /* TODO: Cambiar mensajes */
    }
    setRating(index);
    switch (index) {
      case 1:
        setRatingComment('Mal recurso');
        break;
      case 2:
        setRatingComment('Recurso Regular ');
        break;
      case 3:
        setRatingComment('Buen recurso');
        break;
      case 4:
        setRatingComment('Muy buen recurso');
        break;
      case 5:
        setRatingComment('Excelente recurso');
        break;
      default:
        setRatingComment('');
    }
  };

  {
    /* TODO: Funcion submit para enviar comentario y valoración*/
  }

  const Star = ({ selected = false, onClick = () => {} }) => (
    <span
      className={`cursor-pointer text-3xl ${
        selected ? 'text-yellow-500' : 'text-gray-300'
      }`}
      onClick={onClick}>
      {' '}
      ★
    </span>
  );

  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden m-4'>
      <div className='p-4'>
        <h2 className='font-bold text-2xl md:text-4xl my-4'>{title}</h2>
        <img
          src={image}
          alt='Resource'
          className='w-96 h-auto my-4'
        />
        <p className='text-black text-xl md:text-2xl my-4'>{description}</p>
        <p className='text-black text-xl my-2'>Autor: {author}</p>
        <p className='text-black text-xl my-2'>Publicado: {publishDate}</p>
        <p className='text-black text-xl my-2'>Nivel: {level}</p>
        <p className='text-black text-xl my-2'>Disciplina: {discipline}</p>
        <p className='text-black text-xl mt-2 mb-4'>
          Subdisciplina: {subDicipline}
        </p>
      </div>

      {/* Comentarios y valoraciones */}
      <div className='bg-gray-100 p-4'>
        <h3 className='text-lg font-semibold mb-4'>
          Deja tu comentario y valoración
        </h3>
        <div className='mb-4'>
          <textarea
            className='w-full p-2 text-gray-700 border rounded-lg focus:outline-none'
            rows='4'
            placeholder='Deja tu comentario...'></textarea>
        </div>
        <div className='flex justify-between items-center mb-4'>
          <div>
            {[1, 2, 3, 4, 5].map((index) => (
              <Star
                key={index}
                selected={index <= rating}
                onClick={() => handleRating(index)}
              />
            ))}
          </div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Enviar
          </button>
        </div>
        {ratingComment && <div className='mt-2 mb-4'>{ratingComment}</div>}
      </div>

      {/* Ver más / menos */}
      <div className='ver-mas-container bg-red-500'>
        {' '}
        {/* TODO: Quitar bg */}
        <button
          className='ver-mas-btn'
          onClick={() => setMostrarComentarios(!mostrarComentarios)}>
          {mostrarComentarios ? 'Ocultar comentarios' : 'Ver comentarios'}
        </button>
      </div>
    </div>
  );
};

export default ResourceDetailCard;
