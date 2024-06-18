const RegistrationForm = (props:any) => {
    const {handleNavigate, formik} = props;
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-serif font-bold tracking-tight text-gray-900 ">
                        Sign up to your account
                    </h2>
                </div>
                <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
                    <input className="font-serif" defaultValue="true" name="remember" type="hidden" />
                    <div className="rounded-lg shadow-sm">
                        <div className='mb-4'>
                            <label className="font-serif" htmlFor="username">
                                User Name
                            </label>
                            <input
                                autoComplete="username"
                                className="font-serif relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                id="username"
                                name="username"
                                placeholder="User Name"
                                required
                                type="text"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className="font-serif" htmlFor="contactNumber">
                                Contact No
                            </label>
                            <input
                                autoComplete="contactNumber"
                                className="font-serif relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                id="contactNumber"
                                name="contactNumber"
                                placeholder="Contact Number"
                                required
                                type="text"
                                value={formik.values.contactNumber}
                                onChange={formik.handleChange}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className="font-serif" htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                autoComplete="email"
                                className="font-serif relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                id="email-address"
                                name="email"
                                placeholder="Email address"
                                required
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className="font-serif" htmlFor="password">
                                Password
                            </label>
                            <input
                                autoComplete="current-password"
                                className="font-serif relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                id="password"
                                name="password"
                                placeholder="Password"
                                required
                                type="password"
                                value={formik.values.password}
                                onChange={(event) => {
                                    formik.handleChange({
                                        target: {
                                            name: 'password',
                                            value: event.target.value,
                                        },
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            className="font-serif group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            type="submit"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="font-serif text-center text-sm text-gray-600">
                    Do have an account? &nbsp;
                    <a
                        className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500 "
                        onClick={handleNavigate}
                    >
                        Sign in
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm