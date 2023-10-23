import React from 'react';
import {
  SafeAreaView, Text, View,
} from 'react-native';




function App(): JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text>Check if works</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
