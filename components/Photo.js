import React, { useEffect, useState } from "react";
import { Image, useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const Container = styled.View`
`;

const Header = styled.View`
    padding: 10px 10px;
    flex-direction: row;
    align-items: center;
`;

const UserAvatar = styled.Image`
    margin-right: 10px;
    width: 25px;
    height: 25px;
    border-radius: 12.5;
`;

const Username = styled.Text`
    color: white;
    font-weight: 600;
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

function Photo({ id, user, caption, file, isLiked, likes }) {
    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();
    const [imageHeight, setImageHeight] = useState(height - 450);
    useEffect(() => {
        Image.getSize(file, (width, height) => {
            setImageHeight(height / 3);
        });
    }, [file])
    return (
        <Container>
            <Header onPress={() => navigation.navigate("Profile")}>
                <UserAvatar 
                    resizeMode="cover"
                    source={{ uri: user.avatar }}
                />
                <Username>{user.username}</Username>
            </Header>
            <File 
                resizeMode="contain"
                style={{
                    width,
                    height: imageHeight
                }} 
                source={{ uri: file }} 
            />
            <Actions>
                <Action />
                <Action />
            </Actions>
            <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
            <Caption>
                <TouchableOpacity>
                    <Username>{user.username}</Username>
                </TouchableOpacity>
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

export default Photo;