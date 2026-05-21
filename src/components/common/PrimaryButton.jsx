const PrimaryButton = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90 active:scale-95"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
