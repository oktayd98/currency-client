import { classNames } from '@/utils/classNames';

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={classNames(
        'hover:bg-blue-100/90 bg-blue-100/70 py-2 px-3 rounded-md flex-grow-0',
        'disabled:opacity-30',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
