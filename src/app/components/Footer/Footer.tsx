import Link from 'next/link';
import { BsFillSendFill, BsTelephoneOutboundFill } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className='mt-16'>
      <div className="container mx-auto px-4">
        <Link className='text-tertiary-dark font-black' href={'/'}>
            Hotelin
        </Link>

        <h4 className='font-black text-[32px]'>Contact</h4>
        <div className="flex flex-wrap gap-16 items-center justify-between">
           <div className="flex-1">
            <p>#23 Kurudu</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className='ml-4'>
                <Link href={'/'}>
                  codewithwestie
                </Link>
              </p>
            </div>
            <div className="flex items-center pt-2">
              <BsTelephoneOutboundFill />
              <p className='ml-4'>
                090-234-234-234
              </p>
            </div>
            <div className="flex items-center pt-2">
              <BiMessageDetail />
              <p className='ml-4'>
                <Link href={'/'}>
                  codewithwestie
                </Link>
              </p>
            </div>
           </div>
           <div className="flex-1 md:text-right">
            <p className='capitalize pb-4'>Our story</p>
            <p className='capitalize pb-4'>get in touch</p>
            <p className='capitalize pb-4'>our privacy commitment</p>
            <p className='capitalize pb-4'>terms and condition</p>
            <p>Customer assistance</p>
           </div>
           <div className="flex-1 md:text-right">
            <p className='capitalize pb-4'>Dinning experience</p>
            <p className='capitalize pb-4'>wellness</p>
            <p className='capitalize pb-4'>fitness</p>
            <p className='capitalize pb-4'>sports</p>
            <p>Events</p>
           </div>
        </div>
      </div>
      <div className='bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0' />
    </footer>
  )
}

export default Footer
