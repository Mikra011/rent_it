import FormInput from '@/components/form/FormInput';
import FormContainer from '@/components/form/FormContainer';
import { createPropertyAction } from '@/utils/actions';
import SubmitButton from "@/components/form/Buttons"

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
                    <div className='grid grid-cols-2 gap-8 mb-4'>
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

                    </div>
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