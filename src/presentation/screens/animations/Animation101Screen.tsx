import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../config/theme/theme'
import { useAnimation } from '../../hooks/useAnimation';

export const Animation101Screen = () => {

  const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingPosition } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View 
        style = {[
          styles.purpleBox,
          {
            opacity: animatedOpacity,
            transform: [{
              translateY: animatedTop
            }]
          }
        ]}
      />

      <Pressable 
        onPress={  () => {
          fadeIn({});
          startMovingPosition({ 
            initialPosition: -100, easing: 
            Easing.elastic(1), 
            duration: 750
          });
        } }
        style={{
          marginTop: 10,
        }}
      >
        <Text>Fade in</Text>
      </Pressable>

      <Pressable 
        onPress={ () =>  fadeOut({}) }
        style={{
          marginTop: 10,
        }}
      >
        <Text>Fade out</Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    height: 150,
    width: 150,
  }
})