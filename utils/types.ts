
export type actionFunction = (
    prevState: any,
    fromDate: FormData
) => Promise<{ message: string }>