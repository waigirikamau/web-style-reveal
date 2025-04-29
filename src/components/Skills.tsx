
const Skills = () => {
  const skills = [
    { name: "UI/UX Design", percentage: 90 },
    { name: "Web Development", percentage: 85 },
    { name: "Graphic Design", percentage: 75 },
    { name: "Digital Marketing", percentage: 65 }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
          <img 
            src="/placeholder.svg" 
            alt="Skills" 
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-8">My Featured Skills</h2>
          
          <p className="text-gray-600 mb-8">
            I specialize in Branding and Strategy, and am passionate about creating memorable brand identities. 
            I've founded my own studio in 2012, I help companies reach their goals by using cutting edge technologies.
          </p>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-teal-500 h-2 rounded-full" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
