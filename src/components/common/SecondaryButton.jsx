const SecondaryButton = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5 active:scale-95"
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
