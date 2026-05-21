const SectionContainer = ({ children, id, className = "" }) => {
  return (
    <section
      id={id}
      className={`relative border-b border-white/10 px-6 py-20 lg:px-16 ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
