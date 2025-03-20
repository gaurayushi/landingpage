const Hero = () => (
    <section className="relative h-screen w-full overflow-hidden">
      <video src="/video.mp4" autoPlay muted loop className="absolute w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/50 to-blue-600/50 flex flex-col items-center justify-center text-white animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-bounce">Welcome to Future Web</h1>
        <p className="text-xl md:text-2xl mb-8">Creating Colorful Web Experiences</p>
        <button className="px-10 py-4 bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-105 transition rounded-full text-lg shadow-lg">Get Started</button>
      </div>
    </section>
  );
  export default Hero;
  
  