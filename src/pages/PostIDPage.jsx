import React from 'react';
import { MessageWrapper } from './PostIDPage.style';
import { MessageCard } from '../components/MessageCard/MessageCard';
export default function PostIDPage() {
  return (
    <>
      <MessageWrapper>
        <MessageCard></MessageCard>
        <MessageCard></MessageCard>
        <MessageCard></MessageCard>
        <MessageCard></MessageCard>
        <MessageCard></MessageCard>
        <MessageCard></MessageCard>
      </MessageWrapper>
    </>
  );
}
