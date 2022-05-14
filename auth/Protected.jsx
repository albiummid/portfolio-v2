import { useRouter } from 'next/router'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import { isEmpty } from '../helpers/helpers'
const userData = {
  name: 'Albi  Ummid Tanvir',
  email: 'albiummid@gmail.com',
  phone: '+8801755977522',
  geo: {
    lat: 94.11,
    lng: 88.33,
  },
  userType: 1999, //1999 = superAdmin //1984 =Admin //2001 = user //
}

export default function Protected({
  userType,
  needLoginOnly,
  redirect,
  children,
  disableSpinner,
}) {
  const router = useRouter()

  const [isAllowed, setIsAllowed] = useState(null)
  const [loading, setLoading] = useState(true)
  const { isAuthenticated } = { isAuthenticated: true }

  const fetchUserData = () => {
    console.log('fetching userData')
  }

  useEffect(() => {
    isEmpty(userData) && fetchUserData()
  }, [userData])

  useEffect(() => {
    if (isAuthenticated && !isEmpty(userData)) {
      setIsAllowed(true)
      if (Array.isArray(userType)) {
        setIsAllowed(
          !isEmpty(userType.find((item) => item === userData.userType))
        )
      }
      if (typeof userType === 'number') {
        setIsAllowed(userType === userData.userType)
      }
      if (typeof userType === 'undefined') {
        setIsAllowed(true)
      }
    }
    setLoading(false)
  }, [isAuthenticated, userType, userData])

  console.log(isAllowed)

  useEffect(() => {
    if (!loading && !isAllowed) {
      if (needLoginOnly && !isAuthenticated) {
        return router.push('/login')
      }

      !isEmpty(redirect) ? router.push(redirect) : router.back()
    }
  }, [loading, isAllowed, needLoginOnly, isAuthenticated, redirect, router])

  if (loading && !disableSpinner) return <LoadingSpinner />
  if (loading && disableSpinner) return null

  return <>{isAuthenticated && isAllowed && !loading && children}</>
}
