const StatCard = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur-sm">
      <span className="mb-1 text-3xl font-semibold text-white">{value}</span>
      <span className="text-sm text-white/60">{label}</span>
    </div>
  );
};

export default StatCard;
