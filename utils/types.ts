
export type actionFunction = (
    prevState: any,
    fromDate: FormData
) => Promise<{ message: string }>

export type PropertyCardProps = {
    image: string;
    id: string;
    name: string;
    tagline: string;
    country: string;
    price: number;
}

