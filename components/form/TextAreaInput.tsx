import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

function TextAreaInput({ name, labelText, defaultValue }: TextAreaInputProps) {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue || tempDefaultDescription}
        rows={5}
        required
        className='leading-loose'
        placeholder='Type description here'
      />
    </div>
  );
}

const tempDefaultDescription =
"Our Danube bend cabin is the perfect place to escape from all that big city hustle and bustle. You can put your feet up in front of the fireplace after a hike, cook a hearty meal in the kitchen or grill in the nearby firepit."
export default TextAreaInput;