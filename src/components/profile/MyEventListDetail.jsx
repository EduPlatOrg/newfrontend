import EventCardWithLinks from './EventCardWithLinks';

const MyEventListDetail = ({ events, handleDelete, loading }) => {
  return (
    <div className='w-full flex gap-4 flex-col p-8'>
      <h1 className='w-full text-center font-bold text-xl md:text-2xl'>
        MIS EVENTOS
      </h1>
      {events.length === 0 ? (
        <p>No hay eventos</p>
      ) : (
        events.map((event) => (
          <EventCardWithLinks
            event={event}
            key={event?._id}
            handleDelete={handleDelete}
            loading={loading}
          />
        ))
      )}
    </div>
  );
};

export default MyEventListDetail;
