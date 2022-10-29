const Button = ({ children, ...props }) => {
  return (
    <button className="hover:bg-blue-100/90 bg-blue-100/70 py-2 px-3 rounded-md" {...props}>
      {children}
    </button>
  );
};

export default Button;
