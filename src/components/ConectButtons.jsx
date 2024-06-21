import { FaFolder, FaFolderOpen, FaFolderPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ConectButtons = () => {
  return (
    <div className='flex lg:flex-row flex-col items-center justify-center w-full gap-6 z-10'>
      <Link
        to='/'
        className='bg-red-400 py-4 px-6 
        rounded-full text-white min-w-[273px]
        flex items-center justify-center hover:bg-blue-500 transition-all duration-200 cursor-pointer gap-2 text-xs whitespace-nowrap'>
        <FaFolder size={20} /> Plataforma de Recursos Educativos
      </Link>
      <Link
        to='/'
        className='bg-[#FE9A00] py-4 
        px-6 rounded-full text-white min-w-[273px] 
        flex items-center justify-center hover:bg-blue-500 transition-all duration-200 cursor-pointer gap-2 text-xs'>
        <FaFolderOpen size={20} /> Feria de Recursos Educativos
      </Link>
      <Link
        to='/como-colaborar'
        className='bg-blue-500 hover:bg-gray-400 
        py-4 px-6 rounded-full text-white min-w-[273px] 
        flex items-center justify-center whitespace-nowrap transition-all duration-200 cursor-pointer gap-2 text-xs'>
        <FaFolderPlus size={20} />
        Como Colaborar
      </Link>
    </div>
  );
};

export default ConectButtons;
