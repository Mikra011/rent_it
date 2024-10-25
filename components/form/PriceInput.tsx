import { Label } from '@/components/ui/label'
import { Input } from "@/components/ui/input"
import { Prisma } from '@prisma/client'

const name = Prisma.PropertyScalarFieldEnum.price; // this is same: const name = 'price'

type PriceInputProps = {
    defaultValue?:number

}

function PriceInput({ defaultValue }: PriceInputProps) {
    // const name = 'price'
    return (
        <div className="mb-2">
            <Label htmlFor={name} className="capitalize">
                Price ($)
            </Label>
            <Input
                id={name}
                type='number'
                name={name}
                min={0}
                defaultValue={ defaultValue || 100 }
                placeholder='Price here'
                required
            />
        </div>
    )
}

export default PriceInput