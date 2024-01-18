"use client";

import { useState, useEffect, PropsWithChildren, FC } from 'react'

type CountUpNumberProps = PropsWithChildren<{
    duration: number;
    endValue: number;
}>;

const CountUpNumber: FC<CountUpNumberProps> = ({
    duration,
    endValue
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
        if (start === undefined) {
            start = timestamp;
        }
        const elapsed = timestamp - start;
        const progress = Math.min(endValue, (elapsed / duration) * endValue);

        if (progress < duration) {
            setCount(progress);
            animationFrameId = requestAnimationFrame(updateCount);
        }
        else {
            setCount(endValue);
        }

        
    }
    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [duration, endValue]);

  return (
    <p className="md:font-bold font-medium text-lg xl:text-5xl">{Math.round(count)}</p>
  )
}

export default CountUpNumber;
