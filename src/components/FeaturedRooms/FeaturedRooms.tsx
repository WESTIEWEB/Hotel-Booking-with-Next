import { RoomT } from '@/app/models/rooom';
import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
    featuredRooms: RoomT[];
}>;

const FeaturedRooms: React.FC<Props> = ({ featuredRooms }) => {

  console.log(featuredRooms, 'featured rooms')
  return (
    <div>
      
    </div>
  )
}

export default FeaturedRooms
