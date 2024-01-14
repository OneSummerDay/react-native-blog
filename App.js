import { StatusBar } from 'expo-status-bar'
import { Text, View, Image } from 'react-native'
import styled from 'styled-components/native'

const Post = styled.View`
  flex: 1;
  padding: 15px;
  border-buttom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`

export default function App() {
  return (
    <View>
      <StatusBar theme="auto" />
      <Post>
        <Image
          source={{ uri: 'https://images.app.goo.gl/SpQ2bWgBHdgLuEF18' }}
        />
      </Post>
    </View>
  )
}
