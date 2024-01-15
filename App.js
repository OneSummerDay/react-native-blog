import axios from 'axios'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native'
import { Post } from './components/Post'

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [items, setItems] = React.useState()

  const fetchPosts = () => {
    setIsLoading(true)
    axios
      .get('https://65a43ae652f07a8b4a3d4245.mockapi.io/posts/v1/articles')
      .then(({ data }) => {
        setItems(data)
      })
      .catch((err) => {
        console.log(err)
        alert('Ошибка при получении статей')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  React.useEffect(fetchPosts, [])

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" />
        <Text>Загрузка...</Text>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Post
              title={item.title}
              imageUrl={item.imageUrl}
              createdAt={item.imageUrl}
            />
          </TouchableOpacity>
        )}
      />

      <StatusBar theme="auto" />
    </View>
  )
}
