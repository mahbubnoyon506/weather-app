import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const Home = () => {
  return (
    <SafeAreaView className='flex-1 bg-slate-50 relative'>
      <View className='flex-row px-6 mt-8 items-center space-x-2'>
        <View className='w-16 h-16 bg-black justify-center items-center rounded-full'>
          <Text className='text-cyan-500 text-3xl font-semibold'>Go</Text>
        </View>
        <Text className='text-slate-900 text-3xl font-semibold'>Travel</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
