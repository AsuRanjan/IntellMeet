const stats = [
  { value: 5000, label: "Meetings" },
  { value: 1200, label: "Organizations" },
  { value: 99, label: "Uptime %" },
  { value: 15000, label: "Users" },
];

export default function Statistics() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="text-center">
            <h2 className="text-5xl font-bold">
              {item.value}
            </h2>

            <p className="mt-3 text-slate-300">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

