import React from 'react'
import Wrapper from './Wrapper'
import Card from './Card'
import FormImg from '../assets/images/FormImg.svg'
import Button from './UI/Button'
import { useForm } from 'react-hook-form'

type FormData = {
    firstName: string
    lastName: string
}
const ContactForm = () => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>()
    const onSubmit = handleSubmit((data) => console.log(data))
    // firstName and lastName will have correct type

    return (
        <Wrapper>
            <Card bg="bg-gray">
                <div className="pl-[100px] py-[60px] h-full flex items-center justify-between">
                    <div className="w-[556px] h-[635px] bg-amber-200 shrink-0">
                        <form onSubmit={onSubmit}>
                            <label>First Name</label>
                            <input {...register('firstName')} />
                            <label>Last Name</label>
                            <input {...register('lastName')} />
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
                                onClick={() => {
                                    setValue('lastName', 'luo') // ✅
                                    setValue('firstName', 'John') // ❌: true is not string
                                    errors // ❌: property bill does not exist
                                }}
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
