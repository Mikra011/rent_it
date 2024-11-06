'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Link from 'next/link'

interface ImageCarouselProps {
    images: string[]
    altText: string
    propertyId: string
}

function ImageCarousel({ images, altText, propertyId }: ImageCarouselProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    return (
        <div className='relative h-[300px] mb-2 overflow-hidden rounded-md'>
            <button
                onClick={handlePreviousImage}
                className='absolute top-1/2 left-2 z-10 transform -translate-y-1/2 p-2 bg-white bg-opacity-60 rounded-full hover:bg-opacity-100 transition'
            >
                <FaChevronLeft size={20} />
            </button>

            <button
                onClick={handleNextImage}
                className='absolute top-1/2 right-2 z-10 transform -translate-y-1/2 p-2 bg-white bg-opacity-60 rounded-full hover:bg-opacity-100 transition'
            >
                <FaChevronRight size={20} />
            </button>

            {/* Image inside Link with propertyId */}
            <Link href={`/properties/${propertyId}`}>
                <Image
                    src={images[currentImageIndex]}
                    fill
                    sizes='(max-width:768px) 100vw, 50vw'
                    alt={altText}
                    className='rounded-md object-cover transform transition-transform duration-500'
                />
            </Link>

            {/* Dots representing the current image */}
            <div className='absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full bg-white transition-opacity duration-300 ${currentImageIndex === index ? 'opacity-100' : 'opacity-60'}`}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default ImageCarousel
