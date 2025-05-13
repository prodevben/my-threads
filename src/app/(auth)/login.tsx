import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      // TODO: Add proper validation/error handling
      return;
    }

    try {
      setIsLoading(true);
      // TODO: Implement your login logic here
      console.log('Login attempt with:', { email, password });
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-neutral-900 px-8 justify-center">
      <View className="gap-8">
        <View className="gap-3">
          <Text className="text-4xl font-bold text-center text-white">Welcome back</Text>
          <Text className="text-neutral-400 text-center text-base">Sign in to continue</Text>
        </View>

        <View className="gap-6">
          <View className="gap-2">
            <Text className="text-neutral-300 text-sm font-medium">Email</Text>
            <TextInput
              className="w-full px-4 py-3.5 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:border-blue-500"
              placeholder="Enter your email"
              placeholderTextColor="#6B7280"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              editable={!isLoading}
            />
          </View>

          <View className="gap-2">
            <Text className="text-neutral-300 text-sm font-medium">Password</Text>
            <TextInput
              className="w-full px-4 py-3.5 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:border-blue-500"
              placeholder="Enter your password"
              placeholderTextColor="#6B7280"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              editable={!isLoading}
            />
          </View>

          <TouchableOpacity 
            className={`w-full py-3 rounded-xl bg-white shadow-lg`}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text className="text-black text-center font-semibold text-lg">
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Text>
          </TouchableOpacity>

          <View className="flex-row justify-center items-center gap-1 pt-2">
            <Text className="text-neutral-400 text-sm">Don't have an account?</Text>
            <Link href="/signup" asChild>
              <Pressable>
                <Text className="text-white font-semibold text-sm">Create one</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
