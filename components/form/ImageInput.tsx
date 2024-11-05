import { Input } from "../ui/input"
import { Label } from "../ui/label"

function ImageInput() {
    const name = 'images'
    return (
        <div className="mb-2">
            <Label
                htmlFor={name}
                className="capitalize"
            >
                Image
            </Label>
            <Input
                id={name}
                name={name}
                type="file"
                required
                multiple 
                accept="image/*"
                className="max-w-xs"
            />
        </div>
    )
}

export default ImageInput