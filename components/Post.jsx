import styled from 'styled-components/native'

const PostView = styled.View`
  flex-direction: row;
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

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`

const PostDetails = styled.View`
  flex-direction: column;
  justify-content: center;
  flex: 1;
`

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`

export const Post = () => {
  return (
    <PostView>
      <PostImage
        source={{ uri: 'https://images.app.goo.gl/SpQ2bWgBHdgLuEF18' }}
      />
      <PostDetails>
        <PostTitle>Тестовая статья</PostTitle>
        <PostDate>14.01.2024</PostDate>
      </PostDetails>
    </PostView>
  )
}
