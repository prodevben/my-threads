import { View, Text, Image, Pressable } from "react-native";
import { Post } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);


export default function PostListItem({ post }: { post: Post }) {
  return (
    <View className="flex-row p-4 border-b border-gray-800/80">
      {/* Profile Picture */}
      <Image
        source={{ uri: post.user.image }}
        className="w-12 h-12 rounded-full mr-3"
      />

      {/* Content Container */}
      <View className="flex-1">
        {/* User Info */}
        <View className="flex-row items-center mb-1">
          <Text className="text-white font-bold mr-2">{post.user.username}</Text>
          <Text className="text-gray-500 mx-1">·</Text>
          <Text className="text-gray-500">
            {dayjs(post.createdAt).fromNow()}
          </Text>
        </View>

        {/* Post Content */}
        <Text className="text-white text-base mb-2">{post.content}</Text>

        <View className="flex-row gap-6 mt-2">
          <Pressable className="flex-row items-center">
            <Ionicons name="heart-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 text-xs ml-1">0</Text>
          </Pressable>
          <Pressable className="flex-row items-center">
            <Ionicons name="chatbubble-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 text-xs ml-1">
              {post.replies.length}
            </Text>
          </Pressable>
          <Pressable className="flex-row items-center">
            <Ionicons name="repeat-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 text-xs ml-1">0</Text>
          </Pressable>

          <Pressable className="flex-row items-center">
            <Ionicons name="paper-plane-outline" size={20} color="#d1d5db" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
