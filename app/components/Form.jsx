'use client'
import React, { useState } from 'react'
import Button from './Button'
import { IoCheckmark } from 'react-icons/io5'

function Form() {
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [isGdprChecked, setIsGdprChecked] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = {
            email,
            role,
            isGdprChecked,
            timestamp: new Date().toISOString()
        }

        console.log(formData)

        try {
        } catch (error) {
            console.error('Error submitting form:', error)
        }
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl lg:ml-3 sm:my-0 p-3 md:p-6">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-space-blue text-md font-medium mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email..."
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="role" className="block text-space-blue text-md  font-medium mb-2">
                        Role
                    </label>
                    <select
                        id="role"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Select your role
                        </option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="product-manager">Product Manager</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className="flex items-start cursor-pointer">
                        <div className="relative flex items-center h-5">
                            <input
                                type="checkbox"
                                className="sr-only"
                                checked={isGdprChecked}
                                onChange={() => setIsGdprChecked(!isGdprChecked)}
                                required
                            />
                            <div
                                className={`w-5 h-5 border rounded ${isGdprChecked ? "bg-periwinkle-blue hover:bg-periwinkle-blue-hover border border-periwinkle-blue" : "border-gray-300"
                                    } flex items-center justify-center`}
                            >
                                {isGdprChecked && <IoCheckmark className="w-3 h-3 text-white" />}
                            </div>
                        </div>
                        <span className="ml-2 text-gray-700">Basic GDPR compliance</span>
                    </label>
                </div>

                <Button title="Join the Waitlist" className="bg-periwinkle-blue hover:bg-periwinkle-blue-hover text-white rounded-md w-full" />

                <p className="text-center mt-4">No spam, just career-changing stuff</p>
            </form>
        </div>
    )
}

export default Form