import { useState } from 'react';
const ToolTip = ({ label, children, className }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {label === '' ? (
        <div className=''>{children}</div>
      ) : (
        <div
          className='relative z-50'
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}>
          {show && (
            <p
              className={`absolute flex justify-center items-center 
         -top-0 left-10 bg-gray-700 text-white text-sm rounded-md min-w-[90px] p-3 z-50 ${className}`}>
              {label}
            </p>
          )}
          {children}
        </div>
      )}
    </>
  );
};

export default ToolTip;
