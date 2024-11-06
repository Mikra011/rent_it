
import Link from 'next/link'
import CountryFlagAndName from './CountryFlagAndName'
import PropertyRating from './PropertyRating'
import FavoriteToggleButton from './FavoriteToggleButton'
import { PropertyCardProps } from '@/utils/types'
import { formatCurrency } from '@/utils/format'
import ImageCarousel from '../home/ImageCarousel'

function PropertyCard({ property }: { property: PropertyCardProps }) {
    const { name, images, price } = property
    const { country, id: propertyId, tagline } = property

    return (
        <article className='group relative'>
            <ImageCarousel propertyId={propertyId} images={images} altText={name} />
            <Link href={`/properties/${propertyId}`}>

                <div className='flex justify-between items-center'>
                    <h3 className='text-sm font-semibold mt-1'>
                        {name.substring(0, 30)}
                    </h3>
                    {/* property rating */}
                    <PropertyRating inPage={false} propertyId={propertyId} />
                </div>
                <p className='text-sm mt-1 text-muted-foreground'>
                    {tagline.substring(0, 40)}
                </p>

                <div className='flex justify-between items-center mt-1'>
                    <p className='text-sm mt-1'>
                        <span className='font-semibold'>{formatCurrency(price)} </span>
                        / night
                    </p>
                    {/* country and flag */}
                    <CountryFlagAndName countryCode={country} />
                </div>
            </Link>
            <div className='absolute top-5 right-5 z-5'>
                {/* favorite toggle button */}
                <FavoriteToggleButton propertyId={propertyId} />
            </div>
        </article>
    )
}
export default PropertyCard