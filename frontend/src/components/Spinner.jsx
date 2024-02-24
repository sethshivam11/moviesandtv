const Spinner = () => {
  return (
    <div className="container text-center my-4" style={{ height: "50px" }}>
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
