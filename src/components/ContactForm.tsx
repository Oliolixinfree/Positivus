import React from 'react'
import Wrapper from './Wrapper'
import Card from './Card'
import FormImg from '../assets/images/FormImg.svg'
import Button from './UI/Button'
import { useForm } from 'react-hook-form'

// type OptionsEnum = 'Say Hi' | 'Get a Quote'

type FormData = {
    name: string
    email: string
    message: string
    checkbox: string[]
}
const ContactForm = () => {
    const {
        register,
        setValue,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            name: '',
            email: '',
            message: '',
            checkbox: ['Say Hi', 'Get a Quot'],
        },
    })
    console.log(watch('email'))
    const onSubmit = handleSubmit((data) =>
        console.log('JSON: ', JSON.stringify(data))
    )
    // firstName and lastName will have correct type

    return (
        <Wrapper>
            <Card bg="bg-gray">
                <div className="pl-[100px] py-[60px] h-full flex items-center justify-between">
                    <div className="w-[556px] h-[635px] shrink-0">
                        <form
                            className="grid justify-items-stretch "
                            onSubmit={onSubmit}
                        >
                            <div className="flex gap-9">
                                <label className="flex items-center justify-center gap-2 cursor-pointer">
                                    <div
                                        className="w-7 h-7 rounded-full border border-dark
                                            bg-white flex items-center justify-center shrink-0"
                                    >
                                        <input
                                            type="radio"
                                            value="Say Hi"
                                            {...register('checkbox')}
                                            className="peer hidden"
                                        />
                                        <div className="w-4 h-4 rounded-full bg-green peer-checked:block hidden" />
                                    </div>
                                    <span className="text-base">Say Hi</span>
                                </label>
                                <label className="flex items-center justify-center gap-2 cursor-pointer">
                                    <div
                                        className="w-7 h-7  rounded-full border border-dark
                                            bg-white flex items-center justify-center shrink-0"
                                    >
                                        <input
                                            type="radio"
                                            value="Get a Quote"
                                            {...register('checkbox')}
                                            className="peer hidden"
                                        />
                                        <div className="w-4 h-4 rounded-full bg-green peer-checked:block hidden" />
                                    </div>
                                    <span className="text-base">
                                        Get a Quote
                                    </span>
                                </label>
                                {/* <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value="Get a Quote"
                                        {...register('checkbox')}
                                        className="peer hidden"
                                    />
                                    <div
                                        className="w-5 h-5 rounded-full border border-dark peer-checked:bg-green 
                                        peer-checked:border-dark transition-colors duration-200"
                                    ></div>
                                    <span className="text-base">
                                        Get a Quote
                                    </span>
                                </label> */}
                            </div>
                            <div className="grid justify-items-stretch gap-6 my-10">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-base">Name*</label>
                                    <input
                                        placeholder={'Name'}
                                        className="px-7 py-5 border-[1px] border-dark rounded-[14px]"
                                        {...register('name', {
                                            required: true,
                                            maxLength: 10,
                                        })}
                                    />
                                    {errors.name && (
                                        <p>This field is required</p>
                                    )}
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-base">Email*</label>
                                    <input
                                        placeholder={'Email'}
                                        className="px-7 py-5 border-[1px] border-dark rounded-[14px]"
                                        {...register('email', {
                                            required: true,
                                        })}
                                    />
                                    {errors.email && (
                                        <p>This field is required</p>
                                    )}
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-base">
                                        Message*
                                    </label>
                                    <input
                                        placeholder={'message'}
                                        className="h-48 px-7 py-5 border-[1px] border-dark rounded-[14px]"
                                        {...register('message', {
                                            required: true,
                                            maxLength: 100,
                                        })}
                                    />
                                    {errors.message && (
                                        <p>This field is required</p>
                                    )}
                                </div>
                            </div>
                            {/* <button
                                type="button"
                                onClick={() => {
                                    setValue('lastName', 'luo') // ✅
                                    setValue('firstName', 'John') // ❌: true is not string
                                    errors // ❌: property bill does not exist
                                }}
                            >
                                SetValue
                            </button> */}
                            <Button
                                type="button"
                                onClick={() => {}}
                                // onClick={() => {
                                //     setValue('email', 'luo') // ✅
                                //     setValue('firstName', 'John') // ❌: true is not string
                                //     setValue('message', 'lorem')
                                //     errors // ❌: property bill does not exist
                                // }}
                                className="bg-dark text-white border-dark w-full hover:text-green"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                    <img className="" src={FormImg} alt={FormImg} />
                </div>
            </Card>
        </Wrapper>
    )
}

export default ContactForm
