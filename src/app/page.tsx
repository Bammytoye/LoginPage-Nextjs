import {FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">Zeke </span>Comapny
            </div>

            <div className="py-5">
              <h2 className="text-3xl font-bold text-green-500 mb-2">Sign in to account</h2>
            </div>
            <div className="border-b-2 w-20 border-green-500 inline-block mb-2"></div>
            <div className="flex justify-center my-2">
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaFacebookF className="text-sm" />
              </a>

              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaLinkedinIn className="text-sm" />
              </a>

              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaGoogle className="text-sm" />
              </a>              
            </div>

            <p className="text-gray-400 my-3">Or use your email</p>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-gray-100 w-64 p-2 rounded-md flex item-center">
                <FaRegEnvelope className="text-gray-600 m-2"/>
                <input type="email" placeholder="Email" className='bg-gray-100 outline-none text-sm flex-1' />
              </div>

              <div className="bg-gray-100 w-64 p-2 rounded-md flex item-center">
                <MdLockOutline className="text-gray-600 m-2"/>
                <input type="password" placeholder="Password" className='bg-gray-100 outline-none text-sm flex-1' />
              </div>

              <div className="flex w-64 mb-5 justify-between">
                <label className="flex items-center text-xs" >
                <input type="checkbox" name="remember" className="mr-1" /> Remember Me </label>
                <a href="#" className="text-xs">Forget Password?</a>
              </div>

              <a href="#" className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white mt-4">
              Sign Up
            </a>
            </div>
          </div>
          
          <div className="w-2/5 bg-green-400 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">
              Hello Friend!!!
            </h2>

            <div className="border-b-2 w-20 border-white inline-block mb-2"></div>
            <p className="mb-2">
              Fill up personal information and start journey with us.
            </p>
            <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 mt-4">
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
