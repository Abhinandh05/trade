'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import InputFiled from "@/components/forms/InputFiled";
import {Button} from "@/components/ui/button";
import FooterLink from "@/components/forms/FooterLink";


const SignIn = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
    });

    const onSubmit = async (data: SignInFormData) => {
        try {
            console.log('Form data:', data);
        } catch (error) {
            console.log('Error', error);
        }
    };

    return (
        <>
            <h1 className="form-title text-center mt-20">Sign In</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>


                <InputFiled
                    name='email'
                    label='Enter your email'
                    placeholder='abhi@gmail.com'
                    register={register}
                    error={errors.email}
                    validation={{required: 'Enter your email', pattern:/^\w+@\w+\. \w+$/, message:"email address is required"}}
                />

                <InputFiled
                    name='password'
                    label='Password'
                    placeholder='Enter a strong password'
                    type='password'
                    register={register}
                    error={errors.password}
                    validation={{required: 'password is required', minLength: 8}}
                />


                <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                    {isSubmitting ? 'Loading..... ': 'Start your investing  journey'}
                </Button>

                <FooterLink text='Create an account' linkText= 'Sign up' href='/sign-up' />
            </form>
        </>
    );
};

export default SignIn;
