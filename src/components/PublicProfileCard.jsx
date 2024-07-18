import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import SocialsIconsLinks from './SocialsIconsLinks';
import { useUser } from '../context/UserContext';
import { useState } from 'react';
import clsx from 'clsx';

const PublicProfileCard = ({ userData }) => {
  const { user } = useUser();
  const showValorationForm = user?._id !== userData._id;
  const [rating, setRating] = useState();
  const [ratingComment, setRatingComment] = useState('');
  const tooltipArray = ['Malo', 'Regular', 'Bueno', 'Muy bueno', 'Excelente'];

  const handleRating = (index) => {
    console.log(index);
    setRating(index);
  };
  const handleValoration = () => {
    const newValoration = {
      rating,
      comment: ratingComment,
      userId: userData._id,
      senderId: user._id,
    };
    console.log(newValoration);
  };

  console.log(userData);
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
        </div>
      </div>
      <div className='flex flex-col justify-center items-start shadow-lg'>
        <div className='flex flex-col justify-center items-start'>
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
                        link={social.userData}
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
                    className='flex gap-2 items-center justify-between w-full'>
                    <div className='flex items-center gap-2'>
                      <img
                        src={edusource?.image}
                        alt={edusource.title}
                        className='w-16 h-16 object-cover rounded-lg'
                      />{' '}
                      <h3 className='font-semibold'>{edusource?.title}</h3>
                    </div>
                    <div>
                      <Link
                        to={`/recursos-educativos/${edusource._id}`}
                        className='text-primaryColor text-xs bg-indigo-600 
                        px-2 py-1 rounded-md text-white 
                        hover:bg-transparent hover:border-indigo-600
                        hover:border-2 hover:text-black font-bold'>
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
            {!showValorationForm && (
              <div className='bg-gray-100 p-6 rounded-lg shadow-lg w-full mx-auto my-8'>
                <h3 className='text-lg font-semibold mb-4'>
                  Deja tu comentario y valoración
                </h3>
                <div className='mb-4'>
                  <textarea
                    onChange={(e) => setRatingComment(e.target.value)}
                    className='w-full p-2 text-gray-700 border rounded-lg focus:outline-none resize-none'
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
                    <button
                      onClick={() => setRating(0)}
                      type='button'
                      className='p-1 mr-10 text-xs bg-black text-white px-2 rounded-md'>
                      Reset stars
                    </button>
                  </div>
                  <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs'
                    onClick={handleValoration}>
                    Enviar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicProfileCard;
