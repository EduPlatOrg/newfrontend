import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import clsx from 'clsx';
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom';
import SocialsIconsLinks from './SocialsIconsLinks';
import { obtenerNombreIdioma } from '../lib/utils';
import { toast } from 'sonner';
import { sendNewValoration } from '../api/valorations';
import ValorationCard from './ValorationCard';
import { Loader2 } from 'lucide-react';
import { AiOutlineLike } from 'react-icons/ai';
import { manageLikes } from '../api/resources';

const ResourceDetailCard = ({ resource, onNewValoration }) => {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);

  const [ratingComment, setRatingComment] = useState('');
  const tooltipArray = ['Malo', 'Regular', 'Bueno', 'Muy bueno', 'Excelente'];
  const [showComments, setShowComments] = useState(false);

  const handleRating = (index) => {
    setRating(index);
  };
  const handleLike = async () => {
    if (!user || !resource) {
      toast.error('User or resource is undefined');
      return;
    }

    try {
      const response = await manageLikes(resource._id);
      console.log(response.data.resource);
      if (response?.data.success) {
        toast.success('Like añadido correctamente');
        setUser(response.data.user);
        onNewValoration(response.data.resource);
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al dar like');
    }
  };
  const handleValoration = async () => {
    setLoading(true);
    if (!user || !resource) {
      console.error('User or resource is undefined');
      return;
    }
    const newValoration = {
      rating,
      comment: ratingComment,
      resourceId: resource._id,
    };

    try {
      const response = await sendNewValoration(newValoration);

      if (response?.data.success) {
        toast.success('Valoración enviada correctamente');
        setRating(0);
        setRatingComment('');

        onNewValoration(response.data.resourceValoratedWithAverage);
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al enviar la valoración');
    }
    setLoading(false);
  };

  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden md:p-8'>
      <div className='bg-white  rounded-lg shadow-lg max-w-6xl mx-auto pb-3'>
        <h2 className='font-bold text-2xl md:text-4xl text-gray-800 mb-6 text-center'>
          {resource?.title}
        </h2>
        <img
          src={resource?.image}
          alt='Resource'
          className='w-full md:w-3/4 h-auto mx-auto rounded-lg mb-6 max-w-[500px]'
        />
        <p className='text-gray-700 text-[16px] md:text-xl mb-4 px-4'>
          {resource?.description}
        </p>
        <p className='text-gray-600 text-[16px] md:text-xl mb-2 px-4'>
          <strong>Autor:</strong> {resource.autor?.autorName}
        </p>
        <p className='text-gray-700 text-[16px] md:text-xl mb-4 px-4'>
          <strong>Página del creador: </strong>
          <Link
            to={`/public-profile/${resource.creatorId._id}`}
            className='text-blue-600 underline'>
            {resource.creatorId.firstname} {resource.creatorId.lastname}
          </Link>
        </p>
        <p className='text-gray-600 text-[16px] md:text-xl mb-2 px-4'>
          <strong>Publicado:</strong>{' '}
          {new Date(resource?.date).toLocaleDateString()}
        </p>
        {resource?.level && (
          <p className='text-gray-600 text-[16px] md:text-xl mb-2 px-4'>
            <strong>Nivel:</strong> {resource.level}
          </p>
        )}
        {resource?.discipline && resource.discipline.length > 0 && (
          <p className='text-gray-600 text-[16px] md:text-xl mb-2 px-4'>
            <strong>Disciplina:</strong> {resource.discipline}
          </p>
        )}
        {resource?.subDiscipline && resource.subDiscipline.length > 0 && (
          <p className='text-gray-600 text-[16px] md:text-xl mb-2 px-4'>
            <strong>Subdisciplina:</strong> {resource.vsubDicipline.join(', ')}
          </p>
        )}
        {resource?.lang && (
          <p className='text-gray-600 text-[16px] md:text-xl mb-2 px-4'>
            <strong>Lenguaje:</strong> {obtenerNombreIdioma(resource.lang)}
          </p>
        )}
        {resource?.externalLink && (
          <p className='text-gray-600 text-[16px] md:text-xl mb-2 px-4'>
            <strong>Link externo:</strong>{' '}
            <a
              href={resource.externalLink}
              className='text-blue-600 underline'
              target='_blank'
              rel='noopener noreferrer'>
              {resource.externalLink}
            </a>
          </p>
        )}
        {resource?.pdfDocument && (
          <p className='text-gray-600 text-[16px] md:text-xl mb-2 px-4'>
            <strong>PDF Documento:</strong>{' '}
            <a
              href={resource.pdfDocument}
              className='text-blue-600 underline'
              target='_blank'
              rel='noopener noreferrer'>
              Ver documento
            </a>
          </p>
        )}
        {resource?.autor?.socials && resource?.autor?.socials.length > 0 && (
          <div className='text-gray-600 text-[16px] md:text-xl mb-2 flex items-center gap-2 px-4'>
            <strong>Sociales:</strong>
            {resource.autor.socials.map((social, index) => (
              <SocialsIconsLinks
                media={social?.media}
                key={index}
                link={social?.user}
              />
            ))}
          </div>
        )}
        {user && user !== null && (
          <div className='text-gray-600 md:text-xl mb-2 flex flex-col justify-end items-end px-4 w-full h-fit'>
            <AiOutlineLike
              size={25}
              className={clsx(
                'cursor-pointer',
                resource?.likes.includes(user._id) && 'text-blue-500'
              )}
              onClick={handleLike}
            />
            <p className='text-[14px]'>
              {resource?.likes.length > 0 ? resource?.likes?.length : 0} likes
            </p>
          </div>
        )}
      </div>

      {/* Comentarios y valoraciones */}
      {user && user !== null && (
        <div className='bg-gray-100 p-6 rounded-lg shadow-lg max-w-6xl mx-auto my-8'>
          <h3 className='text-lg font-semibold mb-4'>
            Deja tu comentario y valoración
          </h3>
          <div className='mb-4'>
            <textarea
              onChange={(e) => setRatingComment(e.target.value)}
              value={ratingComment}
              className='w-full p-2 text-gray-700 border rounded-lg focus:outline-none'
              rows='4'
              placeholder='Deja tu comentario...'></textarea>
          </div>

          <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center justify-between gap-2'>
              <Rating
                SVGclassName={`inline-block`}
                onClick={handleRating}
                initialValue={rating}
                transition
                size={25}
                showTooltip
                tooltipArray={tooltipArray}
                tooltipClassName={clsx(
                  'text-xs p-1 px-2',
                  rating === 0 && 'hidden',
                  rating === 1 && 'bg-red-500',
                  rating === 2 && 'bg-yellow-500',
                  rating === 3 && 'bg-green-500',
                  rating === 4 && 'bg-green-500',
                  rating === 5 && 'bg-green-500'
                )}
              />
            </div>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs'
              onClick={handleValoration}>
              {loading ? <Loader2 className='animate-spin' /> : 'Enviar'}
            </button>
          </div>
        </div>
      )}

      {/* Ver más / menos */}
      <div className='flex items-center flex-col justify-center py-2 px-2 md:max-w-6xl w-full mx-auto '>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold py-2 px-4 rounded mt-4 w-fit self-end'
          onClick={() => setShowComments(!showComments)}>
          {showComments ? 'Ocultar Comentarios' : 'Mostrar Comentarios'}
        </button>{' '}
        {/* TODO: Quitar bg */}
        <div className='flex gap-4 items-center justify-start w-full my-2'>
          <h2 className='text-lg md:text-xl font-bold'>Comentarios</h2>
          <p className='text-xs md:text-lg'>
            {' '}
            {(resource?.valorationsAverage?.average || 0).toFixed(2)}{' '}
          </p>
          <Rating
            SVGclassName={`inline-block`}
            initialValue={resource?.valorationsAverage?.average}
            size={25}
            readonly={true}
            allowFraction={true}
            tooltipClassName={clsx(
              'text-xs p-1 px-2',
              resource.valorationsAverage?.average === 0 && 'hidden',
              resource.valorationsAverage?.average === 1 && 'bg-red-500',
              resource.valorationsAverage?.average === 2 && 'bg-yellow-500',
              resource.valorationsAverage?.average === 3 && 'bg-green-500',
              resource.valorationsAverage?.average === 4 && 'bg-green-500',
              resource.valorationsAverage?.average === 5 && 'bg-green-500'
            )}
          />
          <p className='text-xs whitespace-nowrap md:text-lg'>
            de {resource.valorationsAverage?.votes} valoraciones
          </p>
        </div>
        {showComments && (
          <div className='w-full flex flex-col gap-2 '>
            <div className='flex flex-wrap justify-around '>
              {resource?.valorations.map((val, index) => (
                <ValorationCard
                  key={index}
                  valoration={val}
                  id={resource.creatorId._id}
                  onNewValoration={onNewValoration}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceDetailCard;
