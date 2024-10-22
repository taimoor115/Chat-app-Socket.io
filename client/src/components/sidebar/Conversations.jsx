import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = ({ search }) => {
  const { isLoading, conversations } = useGetConversation();
  console.log("🚀 ~ Conversations ~ conversations:", conversations);

  const filteredConversations = search
    ? conversations?.filter((conversation) =>
        conversation?.fullname?.toLowerCase()?.includes(search?.toLowerCase())
      )
    : conversations;

  return (
    <div className="flex flex-col py-2 overflow-auto">
      {filteredConversations && filteredConversations?.length !== 0 ? (
        filteredConversations?.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            emoji={getRandomEmoji()}
            conversation={conversation}
            lastIndex={idx === conversation.length - 1}
          />
        ))
      ) : (
        <div>No users found...</div>
      )}
      {isLoading && <span className="mx-auto loading loading-spinner"></span>}
    </div>
  );
};
export default Conversations;
