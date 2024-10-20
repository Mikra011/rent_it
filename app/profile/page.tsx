import FormContainer from "@/components/form/FormContainer"
import { UpdateProfileAction, fetchProfile } from "@/utils/actions"
import FormInput from "@/components/form/FormInput"
import SubmitButton from "@/components/form/Buttons"

async function ProfilePage() {
    const profile = await fetchProfile()

    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">
                user profile
            </h1>
            <div className="border p-8 rounded-lg">
                {/* image container  */}
                <FormContainer action={UpdateProfileAction}>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInput
                            type='text'
                            name='firstName'
                            label='first name'
                            placeholder="Type first name here"
                            defaultValue={profile?.firstName} />
                        <FormInput
                            type='text'
                            name='lastName'
                            label='last name'
                            placeholder="Type last name here"
                            defaultValue={profile?.lastName} />
                        <FormInput
                            type='text'
                            name='userName'
                            label='user name'
                            placeholder="Type username here"
                            defaultValue={profile?.userName} />
                    </div>
                    <SubmitButton
                        text='update profile'
                        className="mt-8" />
                </FormContainer>
            </div>
        </section>
    )
}

export default ProfilePage