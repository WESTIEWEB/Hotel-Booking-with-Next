import Image from "next/image"


const heading1 = 
    <>
        <h1 className="font-heading mb-6 capitalize">Explore Our Exquisite Hotel</h1>
        <p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg z-0">
            Experience an Exquisite Hotel with a touch of class and comfort.
        </p>
        <button className="btn-primary capitalize">Get started</button>
    </>

const imageComponent = 
    <div className="md:grid hidden gap-8 grid-cols-1">
        <div className="rounded-2xl overflow-hidden h-48">
            <Image 
                src={"/images/hreo1.jpg"}
                alt={"hero image"} 
                height={300} width={300} 
                className="scale-animation img" 
            />
        </div>
        <div className="grid gap-8 h-48 grid-cols-2 overflow-hidden">
            <div className="rounded-2xl overflow-hidden">
                <Image 
                    src={"/images/hero-lux.jpg"}
                    alt={"hero image"} 
                    height={300} width={300} 
                    className="scale-animation img" 
                />
            </div>
            <div className="rounded-2xl overflow-hidden">
                <Image 
                    src={"/images/her0-suite.jpg"} 
                    alt={"hero image"} 
                    height={300} width={300} 
                    className="scale-animation img" 
                />
            </div>
        </div>
    </div>

export  {heading1, imageComponent};
