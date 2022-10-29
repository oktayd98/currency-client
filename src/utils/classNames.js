export const classNames = (...classList) => {
  return classList.filter(Boolean).join(' ');
};
