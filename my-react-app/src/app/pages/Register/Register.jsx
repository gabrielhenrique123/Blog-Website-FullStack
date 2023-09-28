import { useState } from "react";

export default function Register() {









    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="flex h-screen w-screen flex-col justify-center items-center px-6 py-12 lg:px-8 bg-neutral-50">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-8 bg-gray-50 rounded-2xl shadow-2xl">
                <h2 className="font-semibold text-indigo-600 flex justify-center w-full text-4xl mb-4">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900" style={{ alignItems: 'center', textAlign: 'center' }}>Insert your mail address</label>
                        <div className="mt-2">
                            <input onChange={e => {
                                setForm({
                                    ...form,
                                    email: e.target.value
                                })
                            }} type="email" autoComplete="email" placeholder="Enter your email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{ textAlign: 'center' }} />
                        </div>
                    </div>
                    <br />
                    <div>
                        <div className="block text-sm font-medium leading-6 text-gray-900">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900" style={{ alignItems: 'center', textAlign: 'center' }}> Insert your password</label>
                        </div>
                        <div className="mt-2">
                            <input onChange={e => {
                                setForm({
                                    ...form,
                                    password: e.target.value
                                })
                            }} type="password" placeholder="Enter your Password" autoComplete="current-password" style={{ alignItems: 'center', textAlign: 'center' }} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900" style={{ alignItems: 'center', textAlign: 'center' }}>Insert your profile Name</label>
                        <div className="mt-2">
                            <input onChange={e => {
                                setForm({
                                    ...form,
                                    email: e.target.value
                                })
                            }} type="text"  placeholder="Enter your Profile Name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{ textAlign: 'center' }} />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register Account</button>
                    </div>
                    <div className="flex justify-center items-center">
                        <a href="#" className="font-semibold text-indigo-600 hover: text-indigo-500 hover:text-indigo-500">Já possui uma conta? <b>Logar agora</b></a>
                    </div>
                </form>

            </div>
        </div>
    )
}