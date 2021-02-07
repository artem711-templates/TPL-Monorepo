// PLUGINS IMPORTS //
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { setContext } from '@apollo/client/link/context'
import admin from 'firebase-admin'

// COMPONENTS IMPORTS //
import { firebase } from '../shared/config'
import { useAuth } from '@web/shared/hooks'

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export default function Index() {
  const { isAuth } = useAuth()
  const router = useRouter()

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      console.log(user, 'user')
      if (user) {
        const token = await user.getIdToken()
        setContext(() => ({
          headers: { authorization: token },
        }))
        localStorage.setItem('token', token)
      } else {
        router.push('/auth')
      }
    })
  }, [])

  return (
    <div>
      Home
      <button onClick={() => firebase.auth().signOut()}>logout</button>
    </div>
  )
}

const getStaticProps = () => {}
