
const Portfolio = () => {
  // Sample portfolio projects
  const projects = [
    {
      id: 1,
      title: "Website Design",
      category: "Web Design",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Mobile App",
      category: "App Development",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "Branding",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "E-commerce Website",
      category: "Web Development",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "UI Design System",
      category: "UI/UX",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Photography",
      category: "Photography",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Success Work</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                <p className="text-gray-300">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
