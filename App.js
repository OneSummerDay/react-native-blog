import { StatusBar } from 'expo-status-bar'
import { Text, View, Image } from 'react-native'
import { Post } from './components/Post'

export default function App() {
  return (
    <View>
      <StatusBar theme="auto" />
      <Post />
    </View>
  )
}
