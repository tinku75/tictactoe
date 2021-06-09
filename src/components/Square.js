import React from 'react';

const Square = ({ value, onClick, iswinningSquare }) => {
  console.log('square rerender');
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: iswinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
