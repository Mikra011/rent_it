import SubmitButton from "@/components/form/Buttons"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"


const createProfileAction = async (prevState: any, formData: FormData) => {
    'use server'
    const firstName = formData.get('firstName') as string
    console.log(firstName)
    return { message: 'Profile Created' }
}

export default function CreateProfilePage() {
    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">
                new user
            </h1>
            <div className="border p-8 rounded-lg">
                <FormContainer action={createProfileAction}>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInput type='text' name='firstName' label='first name' placeholder="Type first name here" />
                        <FormInput type='text' name='lastName' label='last name' placeholder="Type last name here"/>
                        <FormInput type='text' name='userName' label='user name' placeholder="Type username here"/>
                    </div>
                    <SubmitButton text='create profile' className="mt-8" />
                </FormContainer>
            </div> 
        </section>
    )
}