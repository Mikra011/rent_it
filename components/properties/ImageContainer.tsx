import Image from 'next/image'

function ImageContainer({
    mainImage,
    name,
}: {
    mainImage: { url: string }[],
    name: string,
}) {
    return (
        <section className='h-[300px] md:h-[500px] relative mt-8'>
            <Image
                src={mainImage[2].url}
                fill
                sizes='100vw'
                alt={name}
                className='object-cover rounded'
                priority
            />
        </section>
    )
}
export default ImageContainer