"use client";

import { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";

type SelectProps = PropsWithChildren<{
    items: Array<any>;
    defaultText: string;
    selected: string;
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}>;

const Select: FC<SelectProps> = ({
    items, defaultText, selected, handleSelectChange
}) => {

  return (
    <div className='w-full md:w-1/3 lg:w-auto mb-4 md:mb-0'>
        <label className="block capitalize text-sm font-medium mb-2 text-black">
            room type
        </label>
        <div className="relative">
            <select 
                value={selected}
                onChange={handleSelectChange}
                className='w-full dark:bg-black rounded leading-tight py-2 px-4 capitalize focus:outline-none'
            >
                {
                    items.length > 0 && items.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))
                }
            </select>
        </div>
    </div>
  )
}

export default Select
