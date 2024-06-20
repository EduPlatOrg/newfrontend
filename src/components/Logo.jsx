import clsx from 'clsx';

const Logo = ({ className }) => {
  return (
    <div className='flex items-center justify-center gap-3'>
      <img
        className={clsx('w-[220px] h-auto ml-[20px]', className)}
        src='/images/EduPlatColor.png'
        alt='LOGO'
      />
    </div>
  );
};

export default Logo;
