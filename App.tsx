/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        /* 1. Navigate to the Details route with params */
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
}

function DetailsScreen({navigation, route}) {
  /* 2. Get the param */
  const {itemId, otherParam} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Details... Push"
        onPress={() => navigation.push('Details2')}
      />
      <Button
        title="Go to Home-navigate to a specific Screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go back - navigation.goBack()"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go back to first screen in stack. Pop"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function Details2({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details2</Text>
      <Button
        title="Go to Home Screen"
        /* 1. Navigate to the Details route with params */
        onPress={() => navigation.navigate('Home', {})}
      />
      <Button
        title="Go back - navigation.goBack()"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go to Details2... Push"
        onPress={() => navigation.push('Details2')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Details2" component={Details2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
