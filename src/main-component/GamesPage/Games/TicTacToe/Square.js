const Square = (props) => {
  return (
    <div
      className={`square ${props.x ? 'x' : props.o ? 'o' : ''}`}
      {...props}
    >
      {props.x ? 'x' : props.o ? 'o' : ''}
    </div>
  );
};

export default Square;
