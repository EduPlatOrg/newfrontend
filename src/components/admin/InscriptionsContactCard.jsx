const InscriptionsContactCard = ({ inscription }) => {
  console.log(inscription);
  return (
    <div className='w-full flex flex-col items-start justify-center gap-2 p-4 border-1 border-gray-400 shadow-lg min-w-[300px]'>
      <p>
        <span className='font-semibold'>Nombre: </span> {inscription?.firstname}{' '}
        {inscription?.lastname}
      </p>
      <p>
        <span className='font-semibold'>Email: </span> {inscription?.email}
      </p>
      <p>
        <span className='font-semibold'>Telefono: </span>{' '}
        {inscription?.phones[0]?.phoneNumber}
      </p>
    </div>
  );
};

export default InscriptionsContactCard;
