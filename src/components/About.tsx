
const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-10 md:mb-0">
          <img 
            src="/lovable-uploads/ad4febfa-dc0c-4747-b010-fa439f33f345.png" 
            alt="John Watson Profile" 
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-12">
          <div className="mb-6">
            <p className="text-teal-600 font-semibold">ABOUT ME</p>
            <h2 className="text-3xl font-bold mb-4">A Lead UI Designer & Web Developer Based in UK</h2>
            <p className="text-gray-600 mb-6">
              I design and develop services for customers of all sizes, specializing in creating stylish, 
              modern websites, web services and online stores. My passion is to design digital user experiences 
              through the bold interface and meaningful interactions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-gray-700 mb-1">Name:</p>
              <p className="font-medium">John Watson</p>
            </div>
            <div>
              <p className="text-gray-700 mb-1">Email:</p>
              <p className="font-medium">contact@johnwatson.com</p>
            </div>
            <div>
              <p className="text-gray-700 mb-1">Phone:</p>
              <p className="font-medium">+44 123 456 7890</p>
            </div>
            <div>
              <p className="text-gray-700 mb-1">From:</p>
              <p className="font-medium">London, UK</p>
            </div>
          </div>
          
          <p className="mb-6">Follow me on</p>
          <div className="flex space-x-4 mb-8">
            <a href="#" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <span className="sr-only">Facebook</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>
          
          <div className="flex space-x-4">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md transition-colors">
              Download CV
            </button>
            <button className="border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-md transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
