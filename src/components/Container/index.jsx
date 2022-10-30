const Container = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen gap-48">
      {children}
    </div>
  );
};

export default Container;
