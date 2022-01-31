export default function generateLinkId(senderId, receiverId) {
  const numericSenderId = parseInt(senderId);
  const numericReceiverId = parseInt(receiverId);
  const linkId =
    numericSenderId > numericReceiverId
      ? receiverId + senderId
      : senderId + receiverId;
  return linkId;
}
