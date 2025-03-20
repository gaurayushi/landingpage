import React from 'react'

const Pricing = () => {
  const plans=[
    {name:'Basic',price:'$10 month'},
    {name:'pro',price:'$30 month'},
    {name:'Enterprise',price:'$50'},
  ];

  return (
  <section className='py-20 bg-gradient-to-r  from-purple-200  via-pink-200 to-blue-200  text-center'>
    <h2 className='text-5xl font-extrabold mb-16 text-gray-800'>pricing plans</h2>
    <div className="flex flex-wrap justify-center gap-12">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="p-10 bg-white rounded-3xl shadow-2xl hover:scale-105 hover:shadow-pink-400 hover:bg-gradient-to-br hover:from-purple-300 hover:to-pink-300 transition-all duration-300 w-80 cursor-pointer"
          >
    
    <h3 className="text-3xl font-bold mb-6 text-gray-800">{plan.name}</h3>
            <p className="text-2xl text-purple-600">{plan.price}</p>
            <button className="mt-6 px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">Choose Plan</button>
          </div>
        ))}
        </div>
    </section>
    );

};
export default Pricing;

//[-{