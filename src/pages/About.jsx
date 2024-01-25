import Box from '../components/Box';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className='pt-32 w-[95%] min-w-[335px] tablet:w-[95%] tablet:max-w-[696px] laptop:max-w-[960px] desktop:max-w-[1140px] mx-auto pb-36'>
      <div className='pt-8 mb-32 laptop:mb-52 laptop:relative laptop:flex laptop:items-center laptop:gap-8 desktop:gap-0 desktop:justify-between'>
        <div className='min-w-[590px] w-[590px] desktop:w-[560px] desktop:min-w-[560px]'>
          <h1 className='heading-1 uppercase mb-5'>The Box</h1>
          <p className='body-about'>The Box is a passion project of mine that showcases the journals I authored. Its objective is to keep me active at all times and to constantly practice my design and web development abilities as I learn. I understand that the design and user experience are not optimal but I promise that it will improve with time.<br/><br/>Although the content may not be relevant to you, I promised that you would acquire some insight from my perspective. We all have distinct journeys and paths to take, but we are united because we all want to succeed.</p>
        </div>
        <div>
          <div className='hidden laptop:block'><Box/></div>
        </div>
      </div>
      <div className='mb-52 laptop:flex laptop:justify-between laptop:items-center'>
        <div className='hidden laptop:block w-[463px]'>
          <img src="/assets/me.jpg" alt="" srcset="" />
        </div>
        <div className='laptop:w-[467px] desktop:w-[560px]'>
          <h1 className='heading-1 uppercase mb-5'>About Me</h1>
          <p className='body-about'>An aspirant who will do anything to achieve his fullest potential.
          I had a lot of dreams and wanted to make them a reality. I am a web enthusiast who wants to create websites that can help people all over the world. As technology advances, my interest in it grows. <br /><br />I live in Davao Del Sur, Philippines. I am currently in my first year of college at the University of Southern Mindanao, studying a Bachelor of Science in Computer Science. </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About