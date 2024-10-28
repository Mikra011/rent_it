import FormInput from '@/components/form/FormInput';
import FormContainer from '@/components/form/FormContainer';
import { createPropertyAction } from '@/utils/actions';
import SubmitButton from "@/components/form/Buttons"
import PriceInput from '@/components/form/PriceInput';
import CategoryInput from '@/components/form/CategoryInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import CountriesInput from '@/components/form/CountriesInput';
import ImageInput from '@/components/form/ImageInput';
import CounterInput from '@/components/form/CounterInput';
import AmenitiesInput from '@/components/form/AmenitiesInput';

function createPropertyPage() {
    return (
        <section>
            <h1 className='text-2xl font-semibold mb-8 capitalize'>
                create property
            </h1>
            <div className='border p-8 rounded'>
                <h3 className='text-lg mb-4 font medium'>
                    General Info
                </h3>
                <FormContainer action={createPropertyAction}>
                    <div className='grid sm:grid-cols-2 gap-8 mb-4'>
                        <FormInput
                            name='name'
                            type='text'
                            label='Name (20 limit)'
                            defaultValue='Cabin in Hungary'
                            placeholder='Type name here'
                        />
                        <FormInput
                            name='tagline'
                            type='text'
                            label='Tagline (30 limit)'
                            defaultValue='Your dream rental awaits you!'
                            placeholder='Type tagline here'
                        />
                        <PriceInput />
                        <CategoryInput />
                    </div>
                    <TextAreaInput
                        name='description'
                        labelText='Description (10-1000 words)' 
                        />
                    <div className='grid sm:grid-cols-2 gap-8 mt-4'>
                        <CountriesInput defaultValue='HU' />
                        <ImageInput />
                    </div>
                    <h3 className='text-lg mt-8 mb-4 font-medium'>Accomodation Details</h3>
                    <CounterInput detail='guests'/>
                    <CounterInput detail='bedrooms'/>
                    <CounterInput detail='beds'/>
                    <CounterInput detail='baths'/>
                    <h3 className='text-lg mt-8 mb-4 font-medium'>Amenites</h3>
                    <AmenitiesInput />
                    <SubmitButton
                        text='Create Rental'
                        className='mt-12'
                        size='default'
                    />
                </FormContainer>
            </div>
        </section>
    )
}

export default createPropertyPage