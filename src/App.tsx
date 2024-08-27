import cube from './images/image-equilibrium.jpg'
import eth from './images/icon-ethereum.svg'
import clock from './images/icon-clock.svg'
import profile from './images/image-avatar.png'

function App() {
  return (
   <>
  <div className="flex flex-col items-start justify-center w-full max-w-md mb-4 bg-[#15273f] mx-auto mt-4 rounded-xl overflow-hidden">
    <img src={cube} alt="image-cube" className='p-10' />
    <h2 className='px-10 text-2xl font-semibold hover:text-[#1df3f4] text-white  hover:cursor-pointer mb-4'>Equilibrium #3429</h2>
    <p className='px-10 text-lg text-gray-400'>Our Equilibrium Collection promotes balance and calm</p>
    <div className='flex flex-wrap space-x-24'>
      <div className='px-10 mt-4 mb-4 flex flex-row items-center gap-2 text-[#1df3f4] font-semibold'>
        <img src={eth} alt="ethereum" className='' /> 0.041ETH
      </div>
      <div className='px-10 mt-4 mb-4 justify-end flex flex-row items-center gap-2 text-gray-300'>
        <img src={clock} alt="" />3 days left
      </div>
    </div>
    <div className="flex items-center gap-2 mt-2 pt-4 border-t max-w-sm mx-auto border-gray-600 w-full">
      <div className='flex flex-row items-center text-white gap-2 text-lg mb-1'>
      <img src={profile} alt="profile-avatar" className='w-10 mb-4'  /><span className='text-gray-400'>Creation of</span>Musab Khurram
      </div>
      </div>
  </div>
</>
  );
}

export default App;
