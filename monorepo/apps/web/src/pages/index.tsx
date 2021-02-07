// PLUGINS IMPORTS //
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { setContext } from '@apollo/client/link/context'
import admin from 'firebase-admin'
import nookies from 'nookies'

// COMPONENTS IMPORTS //
import { firebase } from '../shared/config'
import { useAuth } from '@web/shared/hooks'
import { firebaseAdmin } from '@web/shared/config/firebase-admin.config'

import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export default function Index() {
  // const { isAuth } = useAuth()
  // const router = useRouter()

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(async (user) => {
  //     console.log(user, 'user')
  //     if (user) {
  //       const token = await user.getIdToken()
  //       setContext(() => ({
  //         headers: { authorization: token },
  //       }))
  //       localStorage.setItem('token', token)
  //     } else {
  //       router.push('/auth')
  //     }
  //   })
  // }, [])

  return (
    <div>
      Home
      <button onClick={() => firebase.auth().signOut()}>logout</button>
    </div>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx)
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)
    const { uid, email } = token

    return {
      props: { email, uid },
    }
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/auth',
      },

      props: {} as never,
    }
  }
}
