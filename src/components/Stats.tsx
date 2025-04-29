
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { number: 135, label: "Projects Completed", icon: "📊" },
    { number: 225, label: "Satisfied Clients", icon: "🤝" },
    { number: 115, label: "Awards Won", icon: "🏆" },
    { number: 272, label: "Cups of Coffee", icon: "☕" }
  ];

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const statsSection = document.getElementById("stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!inView) return;

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.number) {
            const increment = Math.max(1, Math.floor(stat.number / 50));
            newCounts[index] = Math.min(
              newCounts[index] + increment,
              stat.number
            );
          }
          return newCounts;
        });
      }, 30);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [inView, stats]);

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4 text-teal-500">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">
                {counts[index].toLocaleString()}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
