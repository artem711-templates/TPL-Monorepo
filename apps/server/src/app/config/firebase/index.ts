import admin from 'firebase-admin'

// import serviceAccount from '../../../firebase.json'

// const firebase_params = {
//   type: serviceAccount.type,
//   projectId: serviceAccount.project_id,
//   privateKeyId: serviceAccount.private_key_id,
//   privateKey: serviceAccount.private_key,
//   clientEmail: serviceAccount.client_email,
//   clientId: serviceAccount.client_id,
//   authUri: serviceAccount.auth_uri,
//   tokenUri: serviceAccount.token_uri,
//   authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
//   clientC509CertUrl: serviceAccount.client_x509_cert_url,
// }

export default function initializeFirebase() {
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert({
        type: 'service_account',
        project_id: 'investment-club-europe-c318c',
        private_key_id: 'eaf85ac3469d0c7583541e04f0f87a025091accf',
        private_key:
          '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCxo8mbJ8Bl6QLG\nvqhiIff+nxw4DerJUKnoXRNlX1k3/0YakMAV24R8gxWl/bnZ+tnL46L7CXb1Zgkk\nk7FG9QihL5WAEVWHvvTUsrxKuvVDwOp7AjgLxkSEAHID14pkvTfR2IftDJIgn8O6\npkn0f3QDHlFGHpHnuDYxGHAZ6eqgO+wd/1NN47UJ1oVcDoriP/TbeV5gXUGY4g3Z\noatBwLWO5gnSJZu0uIGJpZ05XDr8IT0J5bEWCrPk/mRQfyTabSMuinC6tLfN3doc\nm0i7Dr+xRxPm32Xl/f+Fl5gZHesVX2YTBgR/49eBzyRI4jLHBy5Pal46ti3vVP8b\nW0R4lcyNAgMBAAECggEAPrOF216uIiqbgMRWUgEUdIr73mtHJtTyjCKiUINVzhas\nS38xVeW8f2iTkRocai0JiFaqtfpSw27HJmJ9TgL6j05o8iHsMzR7XcJTBPu1y7sB\n6PZRCxLqJz+y/tkrL8C8PbU00T7BK4PJBg5hB0yfieQ/IsVykbxrYGv0UalH2FOH\nLDhaPnsVMAL9Oe5TuW/u91NHVQAofj2sMPjxoOcTppHJ+HH+DpUZRM18/ELmZtJQ\nXbkQe3vs/LE4fEVXxP/Nw6jrJ8iEPjL09H98D/9zy9hbl8h++gD2RFgeaKUik+7Y\nBPFvNWffwPw8AEE6ICbNldR8TWilQtdSmvc6HXR7LwKBgQDpe2mfygaXQgZrHW1y\nFBM18SY3LTd0cFanNSnmklAnK5mtlYmyzlq97DWt6BeFq6FdSe8QVgS34pX0klcn\n9KJy5YpStlk8JIJfJUTD6g8OnNFtLdrQd6/elPaQZPcfNQEv0i1o0dMQo8BLukSV\nuOYbobgsFBZg0GiGS3lRs0QXawKBgQDCxaY2jrjZVQFUe+NoH3UzTP4dcQFGoJxU\nA//df55HESl7s8fu2O35xsNO2nUwiLGYNA8mQKFa+3vDMl0hL+B4cAOWtUA1fD9R\nyDHPWcb7mBiWMW2NyKd9N1GXNT5wGYXTXSIRK89N+JRVFy/jgGHkt5PtVA8efoch\nHzuJqbfB5wKBgBwl6cT+2S6RIi71vEUdkHdXXFEYnW/nPzsnWKbYits+EWfw+Enb\nQOtWt94Adh2CZJDXof+pLyZwJb33ipRhlNgfPj7chwOOLz2DQ7gO1sPfOgxck93A\nIC7IbLVZxsU3Ya4/O4RAj56Y70zx5uTaBrvcElUWEuCXH5LZNIYaA6KDAoGAM4Ax\nqAFrDUR12pH7mn+e7Nax5rUHwlYbn/eCw13IS0BVeLkb56MCoeYVpJcNH601UGqL\nivDR+Y2/tuhtSaYwM4hi2onIlZvp3kUSLqKtg78+2Q/uyOvCpdBnyZSxktCc2zuo\nE2RDJ3nQNwOvjPdYazLDcaClcsnAD1kD1C3FQgcCgYEAzfpk6nfI+uQTgu3mCMIR\nCA+/32IpxWVbv5JucuGjCZJS7aslZxEZTOksD305KEWQoqSzHntJxHraAdd3V1v3\nXOQfSViwUqZ+NM9enl/6O5vpD8r5zuIgny4hF65cHmRjwqiqBS1DqQTJezzuOlMF\nHVBtinWI0sgMxsqNDqTC/E8=\n-----END PRIVATE KEY-----\n',
        client_email:
          'firebase-adminsdk-1it51@investment-club-europe-c318c.iam.gserviceaccount.com',
        client_id: '112751033231166940500',
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url:
          'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url:
          'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1it51%40investment-club-europe-c318c.iam.gserviceaccount.com',
      } as any),
    })
  }

  return admin
}
