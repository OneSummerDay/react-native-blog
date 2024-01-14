import axios from 'axios'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, FlatList } from 'react-native'
import { Post } from './components/Post'

export default function App() {
  const [items, setItems] = React.useState()

  React.useEffect(() => {
    axios
      .get('https://65a43ae652f07a8b4a3d4245.mockapi.io/posts/v1/articles')
      .then(({ data }) => {
        setItems(data)
      })
      .catch((err) => {
        console.log(err)
        alert('Ошибка при получении статей')
      })
  }, [])

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Post
            title={item.title}
            imageUrl={item.imageUrl}
            createdAt={item.imageUrl}
          />
        )}
      />

      <StatusBar theme="auto" />
    </View>
  )
}
