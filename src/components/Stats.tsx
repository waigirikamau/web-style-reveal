
const Stats = () => {
  const stats = [
    { number: "135", label: "Projects Completed" },
    { number: "225", label: "Satisfied Clients" },
    { number: "115", label: "Awards Won" },
    { number: "272", label: "Cups of Coffee" }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
