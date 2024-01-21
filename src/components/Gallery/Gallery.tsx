import Image from "next/image"

const Gallery = () => {
  return (
    <section className="mx-auto container">
        <div className="flex flex-wrap md:m-2">
            <div className="w-1/2 flex flex-wrap">
                <div className="w-1/2 p-1 md:p-2 h-48">
                    <Image
                        className="img"
                        src={'/images/her0-suite.jpg'}
                        alt="gallery image"
                        height={200}
                        width={200}
                     />
                </div>
                <div className="w-1/2 p-1 md:p-2 h-48">
                    <Image
                        className="img"
                        src={'/images/gall.jpg'}
                        alt="gallery image"
                        height={200}
                        width={200}
                     />
                </div>
                <div className="w-full p-1 md:p-2 h-48">
                    <Image
                        className="img"
                        src={'/images/gall2.jpg'}
                        alt="gallery image"
                        height={200}
                        width={200}
                    />
                </div>
            </div>
            <div className="w-1/2 flex flex-wrap">
                <div className="w-1/2 p-1 md:p-2 h-48">
                    <Image
                        className="img"
                        src={'/images/hero-lux.jpg'}
                        alt="gallery image"
                        height={200}
                        width={200}
                     />
                </div>
                <div className="w-1/2 p-1 md:p-2 h-48">
                    <Image
                        className="img"
                        src={'/images/gall3.jpg'}
                        alt="gallery image"
                        height={200}
                        width={200}
                     />
                </div>
                <div className="w-full p-1 md:p-2 h-48">
                    <Image
                        className="img"
                        src={'/images/hreo1.jpg'}
                        alt="gallery image"
                        height={200}
                        width={200}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery
