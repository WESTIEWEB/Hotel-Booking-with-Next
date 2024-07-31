import React, { PropsWithChildren } from 'react';
import Image from 'next/image';

import { RoomT } from '@/app/models/rooom';

type Props = PropsWithChildren<{
    featuredRooms: RoomT;
}>;

const FeaturedRooms: React.FC<Props> = ({ featuredRooms }) => {
  const { coverImage, name } = featuredRooms;

  console.log(featuredRooms, 'featured rooms')
  return (
    <section className='flex md:flex-row flex-col px-4 py-10 items-center gap-12 container mx-auto'>
      <div className='md:grid grid-cols-1 gap-8'>
        <div className='h-48 rounded-2xl overflow-hidden mb-4 md:mb-0'>
          <Image
            className='img scale-animation'
            src={coverImage?.url}
            alt={name}
            height={300}
            width={300}
           />
        </div>
      </div>
    </section>
  )
}

export default FeaturedRooms
