"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Search, Select } from "../SearchComp";
import Button from "../Button/Button";


const SearchComponent = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [searchTerm, setSearchTerm] = useState('');


  const router = useRouter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(e.target.value);
  }

  const handleButtonClick = () => {
    console.log('search clicked');
    router.push(`/rooms?roomType=${selectedItem}$searchTerm=${searchTerm}`);
  }
  
  const items = ['all', 'basic', 'luxury', 'suite'];
  return (
    <section className='bg-tertiary-light px-4 py-6 rounded-lg'>
        <div className="container mx-auto gap-4 flex flex-wrap items-center justify-between">
            <Select
                items={items}
                handleSelectChange={handleSelectChange}
                selected={selectedItem}
                defaultText="Select room type"
            />
            <Search 
              handleSearchChange={handleSearchChange}
              searchTerm={searchTerm}
            />
            <Button 
                text="Search"
                type="button"
                className="btn-primary"
                handleClick={handleButtonClick}
            />
        </div>
    </section>
  )
}

export default SearchComponent
