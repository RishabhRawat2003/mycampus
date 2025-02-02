import { Link, useRouteError } from "react-router-dom"


const Error = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <section className="flex justify-center items-center min-h-screen bg-gray-100 text-gray-700">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-semibold">Oops! Page not found</h1>
                <p className="text-lg text-gray-600">Sorry, we can't find that page.</p>
                <div>
                    <Link
                        to="/"
                        className="text-blue-600 hover:text-blue-800 font-medium underline"
                    >
                        Go to Home Page
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Error