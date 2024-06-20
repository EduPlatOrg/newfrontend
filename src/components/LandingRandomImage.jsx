import i18next from 'i18next';
const LandingRandomImage = () => {
  const getRandomImageUrl = () => {
    const num = Math.floor(Math.random() * 7) + 1;
    const url = 'url(/images/background' + num.toString() + '.jpg)';
    return url;
  };
  return (
    <div
      className='w-full absolute flex items-center  '
      style={{
        backgroundImage: getRandomImageUrl(),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'auto',
        maxHeight: '500px',
        width: '100%',
        zIndex: '-1',
        aspectRatio: '16/9',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}>
      <div className='relative top-0 right-0 inset-0  bg-gray-900/55 p-6 rounded-lg text-white text-xs md:text-2xl'>
        <p className=''>
          {' '}
          {i18next.t('EduPlat.org is the Educational Platform')}
        </p>
        <p className=''>
          {' '}
          {i18next.t('where students, families, schools, teachers')}
        </p>
        <p className=''> {i18next.t('and other education professionals')}</p>
        <p className=''>
          {' '}
          {i18next.t('can collaborate by sharing resources.')}
        </p>
      </div>
    </div>
  );
};

export default LandingRandomImage;
