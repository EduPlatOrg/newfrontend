import { FaLinkedin } from 'react-icons/fa';

const LinkedInIcon = () => {
  return (
    <div className='h-8 w-8 rounded-lg flex items-center justify-center -ml-1'>
      <FaLinkedin
        size={30}
        className='text-blue-800'
      />
    </div>
  );
};

export default LinkedInIcon;
