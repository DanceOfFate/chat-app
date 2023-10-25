import {SafeAreaView, Text} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store";


export const Requests = () => {
  const user = useSelector<RootState>(state => state.auth.user);

  console.log(user);
    return(
        <SafeAreaView>
            <Text>Requests</Text>
        </SafeAreaView>
    )
}