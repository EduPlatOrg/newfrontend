import { LuLoader2 } from 'react-icons/lu';
const Loader = () => {
  return (
    <div className='absolute w-screen z-50 h-screen bg-gray-900/45 top-0 right-0 overflow-hidden'>
      <div className='flex items-center justify-center h-full animate-spin'>
        <LuLoader2 size={44} />
      </div>
    </div>
  );
};

export default Loader;
