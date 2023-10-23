import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Requests} from "../Requests";
import {Friends} from "../Friends";
import {Profile} from "../Profile";
import {useLayoutEffect} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../types";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {ParamListBase, RouteProp} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">
export const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);
  return(
      <Tab.Navigator
        screenOptions={{
            headerLeft: () => (
                <View style={{ marginLeft: 16 }}>
                    <Image
                        source={require('../../assets/images/profile.png')}
                        style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: "#c0c0c0" }}
                    />
                </View>
            ),
            headerRight: () => (
                <TouchableOpacity>
                    <Ionicons
                        style={{ marginRight: 16 }}
                        name="search-sharp"
                        size={28}
                        color="#404040"
                    />
                </TouchableOpacity>
            )
        }}
      >
        <Tab.Screen
            name="Requests"
            component={Requests}
            options={{
                tabBarIcon: ({focused}: {focused: boolean}) => (
                    <Ionicons
                        name={focused ? "notifications" : "notifications-outline"}
                        size={30}
                    />
                ),
                tabBarActiveTintColor: '#202020',
                tabBarShowLabel: false
            }}
        />
        <Tab.Screen
            name="Friends"
            component={Friends}
            options={{
                tabBarIcon: ({focused}: {focused: boolean}) => (
                    <Ionicons
                        name={focused ? "people" : "people-outline"}
                        size={30}
                    />
                ),
                tabBarActiveTintColor: '#202020',
                tabBarShowLabel: false
            }}
        />
        <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarIcon: ({focused}: {focused: boolean}) => (
                    <Ionicons
                        name={focused ? "person" : "person-outline"}
                        size={30}
                    />
                ),
                tabBarActiveTintColor: '#202020',
                tabBarShowLabel: false
            }}
        />
      </Tab.Navigator>
  )
}