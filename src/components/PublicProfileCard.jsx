import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import SocialsIconsLinks from './SocialsIconsLinks';
import { useUser } from '../context/UserContext';
import { useState } from 'react';
import ValorationCard from './ValorationCard';
import clsx from 'clsx';
import { toast } from 'sonner';
import { sendNewUserValoration } from '../api/valorations';

import { Loader2 } from 'lucide-react';

const PublicProfileCard = ({ userData, onNewValoration }) => {
  const { user } = useUser();
  console.log(userData && userData);
  const showValorationForm = user && user?._id !== userData._id;
  const [rating, setRating] = useState();
  const [loading, setLoading] = useState(false);
  const [ratingComment, setRatingComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleRating = (index) => {
    setRating(index);
  };
  const handleValoration = async () => {
    setLoading(true);
    if (!user || !userData) {
      toast.error('User or resource is undefined');
      return;
    }
    const newValoration = {
      rating,
      comment: ratingComment,
      userId: userData._id,
      senderId: user._id,
    };
    try {
      const response = await sendNewUserValoration(newValoration);

      if (response?.data.success) {
        toast.success('Valoración enviada correctamente');
        setRating(0);
        setRatingComment('');
        //TODO: Actualizar valoraciones para no tener que refrescar la pagina.
        onNewValoration(response.data.userValoratedWithAverage);
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al enviar la valoración');
    }
    setLoading(false);
  };

  return (
    <div className='flex flex-col items-center justify-center  p-8 '>
      <div className='flex flex-col items-center justify-center  w-full '>
        <img
          src={userData.palette.pictureHeader}
          alt={`${userData.firstname} ${userData.lastname}`}
          className='w-full h-36 object-cover rounded-lg'
        />
        <div className='flex flex-col items-center -mt-12'>
          <img
            src={userData.picture}
            alt={`${userData.firstname} ${userData.lastname}`}
            className='w-24 h-24 object-cover rounded-full border-4 border-secondaryColor'
          />
          <h2 className='text-xl font-semibold mt-2'>
            {userData.publicData.name
              ? `${userData.firstname} ${userData.lastname}`
              : 'Nombre privado'}
          </h2>
          <p className='text-secondaryText'>
            {userData.job.position} at {userData.job.workplace}
          </p>
          <p>
            <strong>Karma: </strong>
            {userData.karma}
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-start shadow-lg min-w-[80%]'>
        <div className='flex flex-col justify-center items-start w-full'>
          <div className='bg-primaryColor text-primaryText  px-5 rounded-lg w-full'>
            <div className='mt-4 space-y-2'>
              <div>
                <h3 className='font-semibold'>Email:</h3>
                {userData.publicData.emails ? (
                  userData.emails.map((email, index) => (
                    <p key={index}>
                      {email.emailUrl} ({email.emailDescription})
                    </p>
                  ))
                ) : (
                  <p>Email privado</p>
                )}
              </div>
              <div>
                <h3 className='font-semibold'>Address:</h3>
                {userData.publicData.address ? (
                  userData.address.map((addr, index) => (
                    <p
                      key={
                        index
                      }>{`${addr.streetaddress}, ${addr.city}, ${addr.state}, ${addr.country} - ${addr.postalCode}`}</p>
                  ))
                ) : (
                  <p>Dirección privada</p>
                )}
              </div>
              <div>
                <h3 className='font-semibold'>Phone:</h3>
                {userData.publicData.phones ? (
                  userData.phones.map((phone, index) => (
                    <p key={index}>
                      {phone.phoneNumber} ({phone.phoneDescription})
                    </p>
                  ))
                ) : (
                  <p>Teléfono/s privado/s</p>
                )}
              </div>
              <div>
                <h3 className='font-semibold'>Social Media:</h3>
                {userData.publicData.social ? (
                  <div className='flex items-center gap-2'>
                    {userData.social.map((social, index) => (
                      <SocialsIconsLinks
                        media={social.media}
                        link={social.user}
                        key={index}
                      />
                    ))}
                  </div>
                ) : (
                  <p>Redes sociales privadas</p>
                )}
              </div>
              <div>
                <h3 className='font-semibold'>Last Login:</h3>
                {userData.publicData.lastLogin ? (
                  <p>{new Date(userData.lastLogin).toLocaleString()}</p>
                ) : (
                  <p>Último login privado</p>
                )}
              </div>
            </div>
          </div>{' '}
          <div className='bg-primaryColor text-primaryText w-full p-5 rounded-lg space-y-2'>
            <div className=''>
              <h2 className='text-xl font-semibold'>Biografia</h2>
              <p className='p-4 text-start '>{userData.bio}</p>
            </div>
            <div className=''>
              <h2 className='text-xl font-semibold'>
                Mis Recursos Compartidos
              </h2>
              <div className='flex flex-col justify-start items-center gap-2 w-full mt-1'>
                {userData.edusources.map((edusource, index) => (
                  <div
                    key={index}
                    className='flex flex-col gap-2 items-start md:flex-row md:items-center justify-between w-full'>
                    <div className='flex items-center gap-2'>
                      <img
                        src={edusource?.image}
                        alt={edusource.title}
                        className='w-16 h-16 object-cover rounded-lg'
                      />{' '}
                      <h3 className='font-semibold'>{edusource?.title}</h3>
                    </div>
                    <div className='w-full flex justify-end'>
                      <Link
                        to={`/recursos-educativos/${edusource._id}`}
                        className='text-primaryColor text-xs bg-indigo-600 
                        px-2 py-1 rounded-md text-white 
                        hover:bg-transparent hover:border-indigo-600
                        hover:border-2 hover:text-black font-bold '>
                        Ver recurso
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=''>
              <h2 className='text-xl font-semibold'>Valoraciones</h2>
              <div className=''>
                {userData.valorations.map((val, index) => (
                  <div
                    key={index}
                    className='flex gap-2 items-center'>
                    <Rating
                      ratingValue={val.rating}
                      SVGclassName={`inline-block`}
                      stars={5}
                      size={24}
                      transition
                      fillColor='yellow'
                      emptyColor='gray'
                    />
                    <div className=''>Description</div>
                  </div>
                ))}
              </div>
            </div>
            {showValorationForm && (
              <div className='bg-gray-100 p-6 rounded-lg shadow-lg w-full mx-auto my-8 '>
                <h3 className='text-lg font-semibold mb-4'>
                  Deja tu comentario y valoración
                </h3>
                <div className='mb-4'>
                  <textarea
                    onChange={(e) => setRatingComment(e.target.value)}
                    className='w-full p-2 text-gray-700 border rounded-lg focus:outline-none resize-none'
                    value={ratingComment}
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
          </div>
        </div>
      </div>
      <div className='flex items-center flex-col justify-center py-2 px-2 md:max-w-6xl w-full mx-auto '>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold py-2 px-4 rounded mt-4 w-fit self-end'
          onClick={() => setShowComments(!showComments)}>
          {showComments ? 'Ocultar Comentarios' : 'Mostrar Comentarios'}
        </button>{' '}
        {/* TODO: Quitar bg */}
        <div className='flex gap-4 items-center justify-center md:justify-start w-full my-2'>
          <h2 className='text-lg md:text-xl font-bold'>Comentarios</h2>
          <p className='text-xs md:text-lg'>
            {' '}
            {(userData?.valorationsAverage?.average || 0).toFixed(2)}{' '}
          </p>
          <Rating
            SVGclassName={`inline-block`}
            initialValue={userData?.valorationsAverage?.average}
            size={25}
            readonly={true}
            allowFraction={true}
            tooltipClassName={clsx(
              'text-xs p-1 px-2',
              userData?.valorationsAverage?.average === 0 && 'hidden',
              userData?.valorationsAverage?.average === 1 && 'bg-red-500',
              userData?.valorationsAverage?.average === 2 && 'bg-yellow-500',
              userData?.valorationsAverage?.average === 3 && 'bg-green-500',
              userData?.valorationsAverage?.average === 4 && 'bg-green-500',
              userData?.valorationsAverage?.average === 5 && 'bg-green-500'
            )}
          />
          <p className='text-xs whitespace-nowrap md:text-lg'>
            de {userData?.valorationsAverage?.votes || 0} valoraciones
          </p>
        </div>
        {showComments && (
          <div className='w-full flex flex-col gap-2 '>
            <div className='flex flex-wrap justify-around '>
              {userData?.valorations.map((val, index) => (
                <ValorationCard
                  key={index}
                  valoration={val}
                  id={userData?._id}
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

export default PublicProfileCard;
