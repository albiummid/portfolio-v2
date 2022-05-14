import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react/cjs/react.production.min'
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
  const [loading, setLoading] = useState(false)
  const { isAuthenticated } = { isAuthenticated: true }

  const fetchUserData = () => {
    console.log('fetching userData')
  }

  useEffect(() => {
    isEmpty(userData) && fetchUserData()
  }, [userData])

  useEffect(() => {
    if (isAuthenticated && !isEmpty(userData) && !isEmpty(userType)) {
      if (Array.isArray(userType)) {
        return setIsAllowed(
          !isEmpty(userType.find((item) => item === userData.userType))
        )
      }
      if (typeof userType === 'number') {
        return setIsAllowed(userType === userData.userType)
      }
      if (typeof userType === 'undefined') {
        return setIsAllowed(true)
      }
    }
  }, [isAuthenticated, userData])

  if (loading && !disableSpinner) return <LoadingSpinner />
  if (loading && disableSpinner) return null
  if (!loading && !isAllowed) {
    if (needLoginOnly && !isAuthenticated) {
      return router.push('/login')
    }
    !isEmpty(redirect) ? router.push(redirect) : router.back()
  }

  return <>{isAuthenticated && isAllowed && !loading && children}</>
}
