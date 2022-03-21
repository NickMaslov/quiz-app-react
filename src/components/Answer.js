const Answer = ({ answer, index }) => {
  return (
    <div className='answer'>
      <div className='answer-letter'>{index + 1}</div>
      <div className='answer-text'>{answer}</div>
    </div>
  );
};

export default Answer;
