import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import styled from 'styled-components/native'

const Title = styled.Text`
  color: #fff;
  font-size: 32px;
`

export default function App() {
  return (
    <View style={styles.container}>
      <Title>Hello, Matheus!</Title>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4f4f4f',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
