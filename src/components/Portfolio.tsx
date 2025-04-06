import React from 'react';
import { Mail, Phone, ArrowRight, Github, Twitter, Linkedin, Instagram, Brush, Target, Code, Rocket } from 'lucide-react';
import { SiFigma, SiSketch, SiAdobexd, SiAdobeillustrator, SiAdobephotoshop, SiAdobeaftereffects } from 'react-icons/si';

const Portfolio = () => {
  const expertise = [
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.',
      icon: <Brush className="w-8 h-8 text-[#FF7F50]" />
    },
    {
      title: 'Brand Strategy',
      description: 'Developing comprehensive brand identities and guidelines that resonate with target audiences.',
      icon: <Target className="w-8 h-8 text-[#FF7F50]" />
    },
    {
      title: 'Web Development',
      description: 'Building responsive and performant websites using modern web technologies and best practices.',
      icon: <Code className="w-8 h-8 text-[#FF7F50]" />
    },
    {
      title: 'Product Design',
      description: 'Crafting end-to-end product experiences from concept to final implementation.',
      icon: <Rocket className="w-8 h-8 text-[#FF7F50]" />
    },
  ];

  const tools = [
    { name: 'Figma', icon: <SiFigma className="w-10 h-10 text-[#FF7262]" /> },
    { name: 'Sketch', icon: <SiSketch className="w-10 h-10 text-[#F7B500]" /> },
    { name: 'Adobe XD', icon: <SiAdobexd className="w-10 h-10 text-[#FF61F6]" /> },
    { name: 'Illustrator', icon: <SiAdobeillustrator className="w-10 h-10 text-[#FF9A00]" /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop className="w-10 h-10 text-[#31A8FF]" /> },
    { name: 'After Effects', icon: <SiAdobeaftereffects className="w-10 h-10 text-[#9999FF]" /> },
  ];
  

  const works = [
    { 
      image: '/images/1.png',
      title: 'E-commerce Dashboard',
      category: 'UI Design'
    },
    { 
      image: '/images/2.png',
      title: 'Social Media App',
      category: 'Mobile App'
    },
    { 
      image: '/images/3.png',
      title: 'Healthcare Platform',
      category: 'Web Design'
    },
    { 
      image: '/images/4.png',
      title: 'Finance Analytics',
      category: 'Dashboard'
    },
  ];

  const posts = [
    {
      image: '/images/5.png',
      date: '15 March',
      title: 'The Future of UI Design in 2025',
      category: 'Design'
    },
    {
      image: '/images/6.png',
      date: '12 March',
      title: 'How to Create Effective User Personas',
      category: 'UX Research'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Navbar */}
      <header className="bg-[#FF7F50] text-white min-h-screen relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 rounded-full bg-white -top-20 -right-20"></div>
          <div className="absolute w-96 h-96 rounded-full bg-white -bottom-20 -left-20"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
          {/* Navbar */}
         <nav className="flex flex-col md:flex-row justify-between items-center pt-6">
  <Link href="/" className="text-2xl font-semibold mb-4 md:mb-0">Hamza Zaka.</Link>

  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
    <div className="flex gap-4 md:gap-8">
      <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
      <Link href="/work" className="hover:text-gray-200 transition-colors">Work</Link>
      <Link href="/blog" className="hover:text-gray-200 transition-colors">Blog</Link>
      <Link href="/about" className="hover:text-gray-200 transition-colors">About</Link>
    </div>
  </div>
</nav>

          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-16 md:pt-32">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-white flex-shrink-0 border-4 border-white shadow-lg">
              <img
                src="/images/profile.png"
                alt="Profile-Picture"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="mb-6 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">My name is Hamza Zaka.</h2>
                <h4 className="text-3xl md:text-4xl font-bold">Backend Developer</h4>
              </div>
              <p className="text-lg mb-6 text-center md:text-left">Head of design at DezignWise</p>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <a href="tel:+16017367924" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+1 601 736 7924</span>
                </a>
                <div className="hidden md:block w-px h-6 bg-white/30"></div>
                <a href="mailto:hamza@gmail.com" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>hamza@gmail.com</span>
                </a>
              </div>
              <div className="flex justify-center md:justify-start gap-6 mt-8 mb-4">
                <a href="#" className="hover:text-gray-200 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Expertise Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center md:text-left">My Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {expertise.map((item, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a href="#" className="text-[#FF7F50] flex items-center gap-2 hover:gap-3 transition-all">
                Read more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Works Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center md:text-left">My Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {works.map((work, index) => (
              <div key={index} className="group relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-sm uppercase tracking-wider mb-2">{work.category}</p>
                    <h4 className="text-xl font-bold">{work.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* About Section */}
<section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
  <h3 className="text-2xl font-bold mb-8 text-center md:text-left">About Me</h3>
  <p className="text-gray-600 mb-12 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
    With over 8 years of experience in digital design, I specialize in creating 
    user-centered solutions that combine aesthetics with functionality. My approach 
    focuses on understanding user needs and business goals to deliver impactful results.
  </p>
  <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
    {tools.map((tool, index) => (
      <div
        key={index}
        className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
      >
        {/* Render Icons Directly */}
        {tool.icon}
        <span className="text-sm text-center mt-2">{tool.name}</span>
      </div>
    ))}
  </div>
</section>

      {/* Latest News Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Latest News</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {posts.map((post, index) => (
              <div key={index} className="rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-sm text-[#FF7F50]">{post.category}</span>
                  </div>
                  <h4 className="text-xl font-bold hover:text-[#FF7F50] transition-colors">
                    {post.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-2xl font-bold mb-4">Hamza Zaka.</h1>
            <p className="text-gray-400 max-w-md">
              Creating meaningful digital experiences through thoughtful design and innovation.
            </p>
            <div className="flex justify-center md:justify-start gap-6 mt-6">
              <a href="#" className="hover:text-[#FF7F50] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#FF7F50] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#FF7F50] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#FF7F50] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors">
              Download CV
            </button>
            <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-[#FF7F50] hover:text-white transition-colors">
              Let's Talk
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Portfolio;
