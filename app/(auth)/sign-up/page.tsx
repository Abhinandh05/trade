'use client';
import React from 'react'
import {useForm} from "react-hook-form";
import {handleLog} from "next/dist/server/dev/browser-logs/receive-logs";
import {Button} from "@/components/ui/button";
import InputFiled from "@/components/forms/InputFiled";
import SelectField from "@/components/forms/SelectField";
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";
import CountrySelectFiled from "@/components/forms/CountrySelectFiled";
import FooterLink from "@/components/forms/FooterLink";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues:{

      fullName: '',
        email:'',
        password:'',
        country:'us',
        investmentGoals:'Growth',
        riskTolerance:'Medium',
        preferredIndustry:'Technology'
        },
        mode: 'onBlur'

    })
    const onSubmit = async (data:SignUpFormData) => {
        try {
                console.log(data)
        } catch (error){
            console.log("Error", error)
        }
    }

    return (
        <>
            <h1 className='form-title'>Sign Up & Personalize </h1>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                <InputFiled
                name='fullName'
                label='Full Name'
                placeholder='Abhinandh'
                register={register}
                error={errors.fullName}
                validation={{required: 'Full name is requied', minLength: 2}}
                />

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

                <CountrySelectFiled
                name='County'
                label='county'
                control={control}
                error={errors.country}
                required
                />

                <SelectField
                name='Investment Goals'
                label='Investment Goals'
                placeholder='Select your Investment Goals'
                options={INVESTMENT_GOALS}
                control={control}
                error={errors.investmentGoals}
                required
                />
                <SelectField
                    name='riskTolerance'
                    label='Risk Tolerance'
                    placeholder='Select your risk level'
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required
                />
                <SelectField
                    name='preferredIndustry'
                    label='Preferred Industry'
                    placeholder='Select your Preferred Industry'
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
                />


                <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                    {isSubmitting ? 'Creating Account ': 'Start your investing  journey'}
                </Button>
                
                <FooterLink text='Alreay have an account' linkText= 'Sign in' href='/sign-in' />
            </form>

        </>
    )
}
export default SignUp
