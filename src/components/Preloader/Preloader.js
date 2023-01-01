const Preloader = ({ isPreLoaderOpen }) => {
  return (
    <div className={isPreLoaderOpen ? "preloader" : "preload_hidden"}>
      <i className="circle-preloader"></i>
    </div>
  );
};

export default Preloader;
