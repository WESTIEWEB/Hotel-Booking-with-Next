"use client"

import { use, useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md'
import { signUp } from 'next-auth-sanity/client'
import { signIn, useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import Loader from '../../../components/Loader/Loader';
const Auth = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState<'password' | 'text'>('password');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };
  const { data: session} = useSession();
  const router = useRouter() as any;

  useEffect(() => {
    if (session) {
      router.push('/')
    }
  }, [session, router])

  const handleLogin = async () => {
    setLoading(true)
    try {
        await signIn();
        // router.push('/')
    } catch (error: any) {
      // alert(error.message)
        console.log(error, 'from auth');
        toast.error('An error occurred, please try again')
        setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault();
    try {
        const user = await signUp(formData);
        console.log(user, 'user auth')
        if (user) {
          setLoading(false)
          toast.success('Successfully created account, please login to continue')
        }
    } catch (error: any) {
      // alert(error.message)
        console.log(error, 'from auth');
        toast.error('An error occurred, please try again')
        setLoading(false)
    } finally {
        // setLoading(false)
        setFormData({
            email: '',
            password: '',
            name: ''
        })
    }
  }

  const toggleVisibility = () => {
    if (formData.password.length !== 0) {
      setShowPassword(!showPassword);
      showPassword ? setPasswordType('password') : setPasswordType('text')
    }
    else {
        setPasswordType('password')
    }
  }
  
  const inputStyles = `border text-red-600 dark:text-gray-700 border-gray-300 sm:text-sm rounded-lg p-2.5 w-full focus:outline-none`
  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Create an account
            </h1>
            <p>OR</p>
            <span className="inline-flex items-center">
            <AiFillGithub onClick={handleLogin} className='mr-4 text-4xl dark:text-white text-black cursor-pointer'/> | <FcGoogle onClick={handleLogin} className='text-4xl ml-4' />
            </span>
        </div>
        <Loader loading={loading} message='Submitting...' />
        <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
            <div>
                <input
                    type='email'
                    name={'email'}
                    // value={email}
                    required
                    id='email'
                    placeholder='sabi@fancymail.com'
                    className={inputStyles}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type='text'
                    name={'name'}
                    // value={email}
                    id='name'
                    required
                    placeholder='Sabi Fancy'
                    className={inputStyles}
                    onChange={handleChange}
                />
            </div>
            <div className='flex relative justify-between items-center'>
                <input
                    type={passwordType}
                    name={'password'}
                    // value={email}
                    id='password'
                    placeholder='password'
                    minLength={6}
                    required
                    className={inputStyles}
                    onChange={handleChange}
                />
                {
                    formData.password.length > 0 && (
                        showPassword ? 
                            <MdOutlineVisibilityOff className='absolute right-3 dark:text-gray-700 text-black text-2xl cursor-pointer' onClick={toggleVisibility} /> : 
                            <MdOutlineVisibility onClick={toggleVisibility} className='absolute right-3 dark:text-gray-700 text-black text-2xl cursor-pointer'/>
                    )
                }
            </div>
            <button 
                type='submit'
                className='bg-tertiary-dark capitalize text-white text-sm rounded-lg py-2.5 w-full'
            >
                sign up
            </button>
        </form>
        <button
          className='text-blue-700'
          onClick={handleLogin}
        >
          login
        </button>
      </div>
    </section>
  )
}

export default Auth
