import React from 'react';
import styled from "styled-components";

function Message({message, timestamp, user, userImage}) {
    return (
        <MessageContainer>
            <img src={userImage} />
            <MessageInfo>
                <h4>
                    {user}{' '}
                    <span>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>

            </MessageInfo>
            
        </MessageContainer>
    )
}

export default Message

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    > img {
        height: 50px;
        border-radius: 8px;
        margin-right: 8px;
    }
`;
const MessageInfo = styled.div``;