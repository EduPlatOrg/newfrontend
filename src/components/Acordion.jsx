import clsx from 'clsx';
import { useState } from 'react';

const Acordeon = ({ titulo, children, Icon, iconClassName, className }) => {
  const [abierto, setAbierto] = useState(false);

  const toggleAbierto = () => {
    setAbierto(!abierto);
  };

  return (
    <div className='transition-all duration-200'>
      <div
        className={clsx(
          'acordeon-titulo cursor-pointer py-2 px-4 bg-gray-200',
          className
        )}
        onClick={toggleAbierto}>
        {Icon && <Icon className={iconClassName} />}
        {titulo}
      </div>
      {abierto && (
        <div className='acordeon-contenido py-2 px-4'>{children}</div>
      )}
    </div>
  );
};

export default Acordeon;
