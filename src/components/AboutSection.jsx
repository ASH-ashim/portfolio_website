import {
  Container,
  Code,
  Shield,
  MonitorSmartphone,
} from "lucide-react";

 export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
          Crafting digital experiences with precision and passion
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Full Stack • DevOps • Security</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Building Secure & Scalable Digital Solutions
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a full-stack engineer and DevOps specialist with a growing passion for cybersecurity. I have hands-on experience across modern technologies like <span className="font-semibold text-gray-800">React, Next.js, Node.js, Docker, Kubernetes, and AWS</span>.
              </p>
              <p>
                I've built scalable web apps, mobile and desktop solutions, and deployed secure cloud-native architectures with a focus on security best practices. My approach combines elegant code with robust infrastructure to deliver production-ready solutions.
              </p>
              <p>
                I'm passionate about crafting elegant solutions to complex problems and constantly exploring new technologies to stay ahead in the fast-paced tech world, with a particular interest in <span className="font-semibold text-gray-800">security-focused development</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="#contact" 
                className="group relative px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 text-center overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-center"
              >
                View Projects
              </a>
            </div>
          </div>
          
          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Full-Stack Development */}
            <div className="group relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2 text-gray-900">
                    Full-Stack Development
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Building modern, responsive websites and applications using cutting-edge frameworks like React, Next.js, and Node.js.
                  </p>
                </div>
              </div>
            </div>
            
            {/* DevOps Infrastructure */}
            <div className="group relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Container className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2 text-gray-900">
                    DevOps Infrastructure
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Automating infrastructure and deploying secure, scalable systems with Docker, Kubernetes, and modern DevOps practices.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Cybersecurity Focus */}
            <div className="group relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2 text-gray-900">
                    Cybersecurity Focus
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Implementing security best practices and building robust, secure applications with a security-first mindset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

