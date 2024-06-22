const Promotores = () => {
  return (
    <div className='flex sm:flex-col md:flex-row items-center justify-around w-[80%] px-20 mt-6'>
      <div className='flex flex-col items-center'>
        <p className='text-xs text-gray-500 mb-2'>Promoted by:</p>
        <img
          className='w-48'
          src='/logo-bienesdar-horizontal.webp'
          alt='bienesdar logo'
        />
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-xs text-gray-500 mb-2'>Subsidized by:</p>
        <img
          className='w-48'
          src='/european-union.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default Promotores;
