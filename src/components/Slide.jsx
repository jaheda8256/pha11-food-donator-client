
const Slide = ({image, text}) => {
    return (
    <div>
          <div
        className='w-full bg-center bg-cover h-[38rem]'
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className='flex items-center justify-center w-full h-full bg-gray-900/30'>
          <div className='text-center'>
            <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
             {text} </h1>
            <br />
            <button className='btn'>
              Request Now
            </button>
          </div>
        </div>
      </div>
    </div>
    )
  }
  
  export default Slide