import React from "react";
import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`

`;

const Header = styled.View`

`;

const UserAvatar = styled.Image`

`;

const Username = styled.Text`
    color: white;
`;

const File = styled.Image``;

const Actions = styled.View``;

const Action = styled.TouchableOpacity``;

const Likes = styled.Text`

`;

const Caption = styled.View`
    color: white;
`;

const CaptionText = styled.Text`
    color: white;
`;

export default function Photo({ id, user, caption, isLiked, likes }) {
    const { width, height } = useWindowDimensions();
    return (
        <Container>
            <Header>
                <UserAvatar />
                <Username>{user.username}</Username>
            </Header>
            <File style={{
                width,
                height: height - 500
            }} source={{ uri: file }} />
            <Actions>
                <Action />
                <Action />
            </Actions>
            <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
            <Caption>
                <Username>{user.username}</Username>
                <CaptionText>{caption}</CaptionText>
            </Caption>
        </Container>
    )
}

Photo.propTypes = {
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string,
      username: PropTypes.string.isRequired,
    }),
    caption: PropTypes.string,
    file: PropTypes.string.isRequired,
    isLiked: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    commentNumber: PropTypes.number.isRequired,
  };