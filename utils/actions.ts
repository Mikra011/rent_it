'use server'

import { imageSchema, profileSchema, propertySchema, validateWithZodschema } from "./schemas"
import db from './db'
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { uploadImage } from "./supabase"

const getAuthUser = async () => {
    const user = await currentUser()
    if (!user) {
        throw new Error('You must be logged in the get access')
    }
    if (!user.privateMetadata.hasProfile) redirect('/profile/create')
    return user
}

const showError = (error: unknown): { message: string } => {
    return {
        message: error instanceof Error ? error.message : 'There is an error'
    }
}


export const createProfileAction = async (
    prevState: any,
    formData: FormData,
) => {
    try {
        const user = await currentUser()
        if (!user) throw new Error('Please login to create a profile')

        const rawData = Object.fromEntries(formData)
        const validatedFields = validateWithZodschema(profileSchema, rawData)

        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '',
                ...validatedFields,
            },

        })
        await clerkClient.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true,
            }
        })
    } catch (error) {
        return showError(error)
    }
    redirect('/')
}

export const fetchProfileImage = async () => {
    const user = await currentUser()
    if (!user) return null

    const profile = await db.profile.findUnique({
        where: {
            clerkId: user.id,
        },
        select: {
            profileImage: true,
        }
    })

    return profile?.profileImage
}

export const fetchProfile = async () => {
    const user = await getAuthUser()
    const profile = db.profile.findUnique({
        where: {
            clerkId: user.id,
        }
    })
    if (!profile) redirect('/profile/create')
    return profile
}

export const UpdateProfileAction = async (
    prevState: any,
    formData: FormData,
): Promise<{ message: string }> => {
    const user = await getAuthUser()
    try {
        const rawData = Object.fromEntries(formData)
        const validatedFields = validateWithZodschema(profileSchema, rawData)

        await db.profile.update({
            where: {
                clerkId: user.id,
            },
            data: validatedFields,
        })

        revalidatePath('/profile')
        return { message: 'Profile updated!' }
    } catch (error) {
        return showError(error)
    }
}

export const updateProfileImageAction = async (
    prevState: any,
    formData: FormData
): Promise<{ message: string }> => {
    const user = await getAuthUser()

    try {
        const image = formData.get('image') as File
        const validatedFields = validateWithZodschema(imageSchema, { image })
        const fullPath = await uploadImage(validatedFields.image)

        await db.profile.update({
            where: {
                clerkId: user.id,
            },
            data: {
                profileImage: fullPath,
              },
        })
        revalidatePath('/profile')
        return { message: 'Profile image updated successfully' }
    } catch (err) {
        console.log(err);

        return showError(err)
    }
}

export const createPropertyAction = async(
    prevState: any,
    formData: FormData
): Promise<{ message: string }> => {
    const user = await getAuthUser()
    try {
        const rawData = Object.fromEntries(formData)
        const validatedFields = validateWithZodschema(propertySchema, rawData)

        return { message: "property created"}
    } catch (error) {
        return showError(error)
    }
    // redirect('/')
}