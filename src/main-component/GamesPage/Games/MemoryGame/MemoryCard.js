const MemoryCard = ({ item, id, handleClick, pointer }) => {
  const itemClass = item.stat ? ' active ' + item.stat : '';

  return (
    <div
      style={{ pointerEvents: pointer ? 'all' : 'none' }}
      className={'memory-card' + itemClass}
      onClick={() => handleClick(id)}
    >
      <img src={item.img} alt={`card-id-${id}`} loading="lazy" />
    </div>
  );
};

export default MemoryCard;
