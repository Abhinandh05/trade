'use client'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {LogOut, User} from "lucide-react";
import NavItems from "@/components/NavItems";

const UserDropDown = () => {
    const router = useRouter();
    const handleSignOut = async () => {
        router.push('/sign-in')
    }

    const user = { name: "Abhinandh", email: "abhinandhc31@gamil.com" }

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='flex items-center gap-3 text-gray-400 hover:text-yellow-500'>
                        <Avatar className='w-8 h-8'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className='bg-yellow-500 text-yellow-900 text-sm font-bold'>
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className='hidden md:flex flex-col items-start'>
                            <span className='text-base font-medium text-gray-500'>
                                {user.name}
                            </span>
                        </div>
                    </Button>
                </DropdownMenuTrigger>

                {/* Dropdown with black background */}
                <DropdownMenuContent className='bg-black text-gray-200 border border-gray-700 rounded-lg shadow-lg'>

                    {/* User Info */}
                    <DropdownMenuLabel>
                        <div className='flex items-center gap-3'>
                            <Avatar className='w-10 h-10'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback className='bg-yellow-500 text-yellow-900 text-sm font-bold'>
                                    {user.name[0]}
                                </AvatarFallback>
                            </Avatar>
                            <div className='flex flex-col'>
                                <span className='text-base font-medium text-gray-100'>
                                    {user.name}
                                </span>
                                <span className='text-sm text-gray-400'>{user.email}</span>
                            </div>
                        </div>
                    </DropdownMenuLabel>

                    <DropdownMenuSeparator className='bg-gray-700' />

                    {/* Menu Items with hover effect */}
                    <DropdownMenuItem
                        onClick={handleSignOut}
                        className="cursor-pointer px-3 py-2 rounded-md hover:bg-gray-800 hover:text-red-400"
                    >
                        <LogOut className='w-4 h-4 mr-2 hidden sm:block text-gray-300' />
                        Sign Out
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className='hidden sm:block bg-gray-600' />
                    <nav className='sm:hidden'>
                   <NavItems />
                    </nav>

                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
export default UserDropDown
