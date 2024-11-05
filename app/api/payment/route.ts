import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
import { type NextRequest, type NextResponse } from 'next/server';
import db from '@/utils/db';
import { formatDate } from '@/utils/format';

export const POST = async (req: NextRequest) => {
    const requestHeaders = new Headers(req.headers)
    const origin = requestHeaders.get('origin')
    const { bookingId } = await req.json()

    // Fetch the booking along with the property details including images
    const booking = await db.booking.findUnique({
        where: { id: bookingId },
        include: {
            property: {
                select: {
                    name: true,
                    // Update to include the images array
                    images: {
                        select: {
                            url: true, // Ensure you select the URL of each image
                        },
                    },
                },
            },
        },
    })

    if (!booking) {
        return Response.json(null, {
            status: 404,
            statusText: 'Not Found',
        })
    }

    const {
        totalNights,
        orderTotal,
        checkIn,
        checkOut,
        property: { images, name }, // Destructure images array
    } = booking

    // Extract image URLs from the images array
    const imageUrls = images.map(img => img.url)

    try {
        // Create the Stripe Checkout session with multiple images
        const session = await stripe.checkout.sessions.create({
            metadata: { bookingId: booking.id },
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: `${name}`,
                            images: imageUrls, // Use the array of image URLs
                            description: `Stay in this wonderful place for ${totalNights} nights, from ${formatDate(checkIn)} to ${formatDate(checkOut)}. Enjoy your stay!`,
                        },
                        unit_amount: orderTotal * 100, // Convert to cents
                    },
                },
            ],
            mode: 'payment',
            return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`,
        })

        return Response.json({ clientSecret: session.client_secret });
    } catch (error) {
        console.error('Error creating Stripe session:', error);
        return Response.json(null, {
            status: 500,
            statusText: 'Internal Server Error',
        })
    }
}
