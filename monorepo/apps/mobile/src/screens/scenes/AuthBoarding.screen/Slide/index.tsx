// # PLUGINS IMPORTS //
import React from 'react'
import { View, Image, useWindowDimensions, StyleSheet } from 'react-native'

// # COMPONENTS IMPORTS //

// # EXTRA IMPORTS //
import { Typography } from '~/mobile/components/atoms'
const { Paragraph } = Typography

/////////////////////////////////////////////////////////////////////////////

interface IProps {
  data: { title: string; subtitle: string }
}

export default function Slide({ data }: IProps) {
  const { width } = useWindowDimensions()

  return (
    <View style={[styles.wrapper, { width }]}>
      <View style={[styles.image, { width: width / 2 }]} />
      <View style={{ flex: 0.3 }}>
        <Paragraph style={styles.title}>{data.title}</Paragraph>
        <Paragraph style={styles.subtitle}>{data.subtitle}</Paragraph>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    flex: 0.7,
    backgroundColor: 'black',
    justifyContent: 'center',
    marginVertical: 40,
    borderRadius: 20,
  },

  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
  },

  subtitle: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
})
