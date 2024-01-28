import Footer from '../components/Footer'
import SocialLinks from '../components/SocialLinks'

const Socials = () => {
  return (
    <div className='pt-32 w-[95%] min-w-[335px] tablet:w-[95%] tablet:max-w-[696px] laptop:max-w-[960px] desktop:max-w-[1140px] mx-auto pb-36'>
      <div className='flex flex-col gap-12 mb-48 desktop:flex-row desktop:gap-0 desktop:justify-between'>
        <h1 className='heading-1 uppercase text-center desktop:flex-1 desktop:text-left desktop:w-[50%]'>
          Want to talk something?
        </h1>
        <div className='desktop:flex-1'>
          <form className='flex flex-col gap-4 '>
            {/* NAME & EMAIL */}
            <div className='flex flex-col gap-4 tablet:flex-row'>
              <div className='flex-1'>
                <label htmlFor='name' className='block text-[16px] font-bold '>
                  Name
                </label>
                <input
                  type='text'
                  className='w-full border-[3px] border-primaryBlack bg-primaryWhite px-2 py-1 body'
                  id='name'
                />
              </div>
              <div className='flex-1'>
                <label htmlFor='email' className='block text-[16px] font-bold '>
                  Email
                </label>
                <input
                  type='text'
                  className='w-full border-[3px] border-primaryBlack bg-primaryWhite px-2 py-1 body'
                  id='email'
                />
              </div>
            </div>
            {/* MESSAGE */}
            <div>
              <label htmlFor='message' className='block text-[16px] font-bold '>
                Message
              </label>
              <textarea
                className='w-full border-[3px] border-primaryBlack bg-primaryWhite px-2 py-1 min-h-52 mb-2 body'
                id='message'
              />
              <div className='flex justify-end tablet:justify-center tablet:mt-2'>
                <button className='main-button uppercase'>Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='mb-48'>
        <h2 className='heading-2 uppercase text-center mb-8'>Follow Me</h2>
        <SocialLinks />
      </div>
      <Footer />
    </div>
  )
}

export default Socials
