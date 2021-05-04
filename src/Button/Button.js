const Button = ({ searchImages }) => {
  return (
    <button onClick={searchImages} type="button" className="Button">
      Load more
    </button>
  );
};

export default Button;
