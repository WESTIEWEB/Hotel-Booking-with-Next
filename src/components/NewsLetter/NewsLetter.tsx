"use client"

import Button from "../Button/Button"

const NewsLetter = () => {
  const handleSubscribe = () => {
    console.log('subscribe clicked');
  }

  return (
    <section className="mx-auto container px-4 md:px-10 py-6">
      <form className="bg-primary text-white px-4 py-6 rounded-xl md:rounded-[30px] grid justify-center items-center">
        <p className="md:font-semibold text-lg md:text-xl text-center mb-3">
            Know more about our services
        </p>
        <h6 className="md:font-semibold font-medium text-2xl md:text-3xl lg:text-5xl text-center">
            Subscribe to Our Newsletter
        </h6>

        <div className="flex flex-col md:flex-row w-full items-center justify-center pt-12">
            <input 
                type="text" 
                placeholder="Enter your email address"
                className="rounded-xl focus:outline-none bg-[#026057] h-11 md:h-16 mb-2 md:mb-0 pl-6 md:mr-5 md:w-[452px] text-white placeholder:text-white"
            />
            <Button 
                handleClick={handleSubscribe}
                text="Subscribe"
                type="button"
                className="btn-tertiary"
            />
        </div>
      </form>
    </section>
  )
}

export default NewsLetter
