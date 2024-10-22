import * as z from 'zod'
import { ZodSchema } from 'zod'


export const profileSchema = z.object({
    firstName: z.string()
        .min(3, { message: 'First Name is too short' })
        .max(15, { message: 'First Name is too long' }),
    lastName: z.string()
        .min(3, { message: 'Last Name is too short' })
        .max(15, { message: 'Last Name is too long' }),
    userName: z.string()
        .min(3, { message: 'User Name is too short' })
        .max(15, { message: 'User Name is too long' }),
})

export function validateWithZodschema<T>(
    schema: ZodSchema<T>,
    data: unknown
): T {
    const result = schema.safeParse(data)

    if (!result.success) {
        const errors = result.error.errors.map((err) => err.message)
        throw new Error(errors.join(','))
    }

    return result.data
}

export const imageSchema = z.object({
    image: validateFile()
})

function validateFile() {
    const maxUploadSize = 1024 * 1024;
    const acceptedFilesTypes = ['image/'];
    return z
      .instanceof(File)
      .refine((file) => {
        return !file || file.size <= maxUploadSize;
      }, 'File size must be less than 1 MB')
      .refine((file) => {
        return (
          !file || acceptedFilesTypes.some((type) => file.type.startsWith(type))
        );
      }, 'File must be an image');
  }