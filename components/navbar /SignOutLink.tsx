'use client'

import { SignOutButton } from "@clerk/nextjs"
import { useToast } from "@/hooks/use-toast"

export default function SignOutLink() {
    const { toast } = useToast()

    const handleLogout = () => {
        toast({ description: "You have been logged out." })
    }

    return (
        <SignOutButton redirectUrl="/">
            <button
                className="w-full text-left"
                onClick={handleLogout}
            >
                LogOut
            </button>
        </SignOutButton>
    )
}