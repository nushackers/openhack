const Card = ({ children }) => (
  <div className="mx-auto w-11/12 max-w-screen-md md:w-5/6 my-4 md:my-10 px-4 md:px-12 py-1 md:py-6 bg-opacity-100 bg-white rounded-lg shadow-lg">
    {children}
  </div>
);

export default Card;
