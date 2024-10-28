import { FaStar } from 'react-icons/fa'

function PropertyRating({
    propertyId,
    inPage,
}: {
    propertyId: string,
    inPage: boolean,
}) {

    // will be removed
    const rating = 4.5
    const count = 80

    const className = `flex gap-1 items-center ${inPage ? 'text-md' : 'text-xs'}`
    const countText = count > 1 ? 'review' : 'reviews'
    const countValue = `(${count}) ${inPage ? countText : ''}`

    return (
        <span className={className}>
            <FaStar className='w-3 h-3' />
            {rating} {countValue}
        </span>
    )
}

export default PropertyRating