// PLUGINS IMPORTS //
import React, { useState, useEffect } from 'react'
import { useTranslation } from '../i18n'
import { useForm } from 'react-hook-form'
import { useLazyQuery, gql } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// COMPONENTS IMPORTS //
import { firebase } from '../shared/config'
import { useThemeSelector } from '../state/app/app.hooks'

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type IFormData = {
  email: string
  password: string
}

export default function Index() {
  const { register, handleSubmit } = useForm<IFormData>()
  const { selectedTheme, setTheme } = useThemeSelector()
  const { t } = useTranslation('common')

  // const [register, {}] = useLazyQuery(gql``, { variables: {} })

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken()
        setContext(() => ({
          headers: { authorization: token },
        }))
        localStorage.setItem('token', token)
      }
    })
  }, [])

  const onSubmit = handleSubmit(async (data) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
  })

  const [getProfile, { data }] = useLazyQuery(
    gql`
      query getProfile($id: String!) {
        getProfile(id: $id) {
          id
          firstname
          lastname
        }
      }
    `,
    {
      variables: {
        id: 'ckkv4dqwi0017sbp0i0jx2bso',
      },
    }
  )

  return (
    <div>
      <button
        onClick={() => setTheme(selectedTheme === 'dark' ? 'light' : 'dark')}
      >
        {t('firstName')}
      </button>

      <form onSubmit={onSubmit}>
        <label>First Name</label>
        <input name="email" ref={register} />
        <label>Last Name</label>
        <input name="password" ref={register} />
        <button type={'submit'}>Register</button>
      </form>

      <button onClick={() => getProfile()}>Get profile</button>
      {data && data.getProfile.id}
    </div>
  )
}
