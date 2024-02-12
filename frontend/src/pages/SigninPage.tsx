import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import useStore from '../Store';
export default function SigninPage() {
  const { mode } = useStore();

  return (
    <div
      className={`flex flex-row ${
        mode === 'dark'
          ? 'bg-gradient-to-l from-gray-600 to-black'
          : 'bg-gradient-to-l from-gray-400 to-gray-600'
      }`}
    >
      <div className="w-[50%] h-screen text-white flex flex-col font-serif pt-48 pl-32 sophisticated-text">
        <h1 className="text-[90px] text-gray-5200 font-extrabold mb-4 tracking-wide inner-shadow">
          ShopTech
        </h1>
        <p className="text-[30px] mt-[-10px] font-bold mb-8 inner-shadow">
          Discover the Pinnacle of Tech Innovation
        </p>

        <div className="flex flex-row gap-12">
          <div className="inner-shadow">
            <h2 className="text-3xl font-extrabold mb-4 text-indigo-400">
              Smart Devices
            </h2>
            <p className="text-lg leading-relaxed">
              Elevate your lifestyle with avant-garde smart devices, seamlessly
              integrating into your daily tasks.
            </p>
          </div>
          <div className="inner-shadow">
            <h2 className="text-3xl font-extrabold mb-4 text-indigo-400">
              Tech Accessories
            </h2>
            <p className="text-lg leading-relaxed">
              Elevate your devices with sophisticated and functional
              accessories, meticulously crafted for contemporary living.
            </p>
          </div>
        </div>
        <div className=" inner-shadow">
          <button className="button mt-4">Learn More</button>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen m-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-400 pb-2">
            Join Us Today!
          </h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-800"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john.doe@example.com"
                className="mt-1 p-3 w-full border-b-2 border-gray-600 focus:outline-none focus:border-gray-700 bg-white rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="mt-1 p-3 w-full border-b-2 border-gray-600 focus:outline-none focus:border-gray-700 bg-white rounded-md"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="h-4 w-4 text-gray-800 focus:ring-gray-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>
              <a
                href="/forgot-password"
                className="text-sm text-gray-800 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-900 focus:outline-none"
            >
              Sign In
            </button>
          </form>

          <div className="flex items-center justify-center">
            <div className="w-1/2 h-px bg-gray-600"></div>
            <p className="mx-2 text-gray-600">or</p>
            <div className="w-1/2 h-px bg-gray-600"></div>
          </div>

          <div className="flex items-center justify-center space-x-4 text-md">
            <button className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none">
              <span className="flex items-center">
                <FaGoogle className="mr-2 h-6 w-6" />
                Sign in with Google
              </span>
            </button>
            <button className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none">
              <span className="flex items-center">
                <FaFacebookF className="mr-2 h-6 w-6" />
                Sign in with Facebook
              </span>
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-800 text-center">
            Don't have an account?{' '}
            <a href="/signup" className="text-gray-700 hover:underline">
              Sign up here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
