const SectionLabel = ({ number, label }) => {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span className="text-2xl font-light text-violet-400">{number}</span>
      <span className="text-xs uppercase tracking-[0.3em] text-violet-300">
        {label}
      </span>
    </div>
  );
};

export default SectionLabel;
