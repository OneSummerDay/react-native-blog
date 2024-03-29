import axios from 'axios'
import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import Loading from '../components/Loading'

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`

const FullPost = ({ route }) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [data, setData] = React.useState()
  const { id, title } = route.params

  React.useEffect(() => {
    axios
      .get('https://65a43ae652f07a8b4a3d4245.mockapi.io/posts/v1/articles' + id)
      .then(({ data }) => {
        setData(data)
      })
      .catch((err) => {
        console.log(err)
        alert('Ошибка при получении статьи')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: data.imageUrl }} />
      <PostText>{data.text}</PostText>
    </View>
  )
}

export default FullPost
