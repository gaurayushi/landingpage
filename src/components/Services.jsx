import { motion } from 'framer-motion';

const Services = () => {
  const services = ["Web Design", "App Development", "API Integration", "SEO Optimization", "E-commerce"];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800 animate-fadeIn">Our Services</h2>
      <div className='flex flex-wrap justify-center gap-10'>
      {services.map((services,i)=>{
        return (
         <motion.div
          key={i}
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6,delay:i*0.2}}
          whileHover={{scale:1.1,rotate:2}}
          className='bg-white shadow-xl rounded-xl p-8 w-72 cursor-pointer'
         >
          <h3 className='text-sm font-semibold'>{services}</h3>

         </motion.div>
        );
})}
      </div>
    </section>
  );
};

export default Services;


//[-{