"use client";

import { FC, PropsWithChildren } from 'react'
import CountUpNumber from '../../Counter/CountUpNumber'

type ClientProps = PropsWithChildren<{
    heading1: React.ReactNode;
    imageComponent: React.ReactNode;
}>;
const ClientSide: FC<ClientProps> = ({heading1, imageComponent}) => {
  return (
    <section className="flex px-4 gap-10 items-center justify-between container mx-auto">
        <div className="py-10 h-full">
            {heading1}

            <div className="flex justify-between mt-12">
                <div className="flex gap-3 flex-col items-center justify-center">
                    <p className="text-xs lg:text-xl text-center">Basic Room</p>
                    <CountUpNumber endValue={250} duration={3000} />
                </div>
                <div className="flex gap-3 flex-col items-center justify-center">
                    <p className="text-xs lg:text-xl text-center">Luxury Room</p>
                    <CountUpNumber endValue={300} duration={3000} />
                </div>
                <div className="flex gap-3 flex-col items-center justify-center">
                    <p className="text-xs lg:text-xl text-center">Suite</p>
                    <CountUpNumber endValue={200} duration={3000} />
                </div>
            </div>
        </div>

        {imageComponent}
    </section>
  )
}

export default ClientSide;
