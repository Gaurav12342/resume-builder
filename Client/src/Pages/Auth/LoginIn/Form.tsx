import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

function ChromeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" x2="12" y1="8" y2="8" />
            <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
            <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
        </svg>
    )
}


const LoginForm = (props: any) => {
    const { handleNavigate, formik, recaptcha } = props;
    const siteKey:any = import.meta.env.VITE_SITE_KEY
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-serif font-bold tracking-tight text-gray-900 ">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 font-serif">
                        Or &nbsp;
                        <a
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            href="#"
                        >
                            start your 14-day free trial
                        </a>
                    </p>
                </div>
                <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
                    <input className="font-serif" defaultValue="true" name="remember" type="hidden" />
                    <div className="-space-y-px rounded-lg shadow-sm">
                        <div className="mb-5">
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
                                // error={formik.touched.email && Boolean(formik.errors.email)}
                                // helperText={formik.touched.email && formik.errors.email}
                            />
                        </div>
                        <div>
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
                    <ReCAPTCHA ref={recaptcha} sitekey={siteKey} />

                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember-me" name="remember-me" />
                            <label className="font-serif ml-2 block text-sm text-gray-900" htmlFor="remember-me">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a
                                className="font-medium text-indigo-600 hover:text-indigo-500 font-serif"
                                href="#"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button
                            className="font-serif group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            type="submit"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-300 " />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-gray-100 px-2 text-gray-500 font-serif">Or sign in with</span>
                    </div>
                </div>
                <div>
                    <button
                        className="text-white bg-[#DB4437] hover:bg-[#c53b2e] font-serif group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        type="button"
                    >
                        <ChromeIcon className="mr-2 h-5 w-5" />
                        Sign in with Google
                    </button>
                </div>
                <div className="font-serif text-center text-sm text-gray-600">
                    Don't have an account? &nbsp;
                    <a
                        className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                        onClick={handleNavigate}
                    >
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LoginForm