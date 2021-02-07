// # PLUGINS IMPORTS //
import React, { useRef, useState } from 'react'
import { View, FlatList, StyleSheet, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// # COMPONENTS IMPORTS //
import Slide from './Slide'

// # EXTRA IMPORTS //
import { StackNavigationProp } from '@react-navigation/stack'
import { IAuthStackParams } from 'apps/mobile/src/navigations/typings'

/////////////////////////////////////////////////////////////////////////////

type ScreenNavigationProp = StackNavigationProp<
  IAuthStackParams,
  'AuthBoardingScreen'
>
export default function AuthBoarding() {
  const navigation = useNavigation<ScreenNavigationProp>()
  const data = [
    ...Array(8).fill({ title: 'texttxtxtxtxtx', subtitle: 'Subtitle' }),
  ]
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const viwableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0])
  }).current
  const scrollX = useRef(new Animated.Value(0)).current
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  const slidesRef = useRef(null)

  return (
    <View style={styles.wrapper}>
      <View style={styles.list_wrap}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Slide data={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.title}
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          viewabilityConfig={viewConfig}
          onViewableItemsChanged={viwableItemsChanged}
          ref={slidesRef}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  list_wrap: {
    flex: 3,
  },
})
