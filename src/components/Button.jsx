function Button({ className, type = "button", onClick ,text}) {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;