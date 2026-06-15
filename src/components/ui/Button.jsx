const Button = ({ children, onClick, className = "", type = "button", style }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={`bg-[#2B8EF8] text-[#FFFFFF] text-[15px] font-medium px-9 py-3 rounded-[5px] cursor-pointer hover:opacity-90 transition-opacity ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
