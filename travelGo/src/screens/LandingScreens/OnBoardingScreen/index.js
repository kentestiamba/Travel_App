import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from './styles';

export default function OnBoardingScreen() {
    const navigation = useNavigation();

    const goToMainStack = () => {
        navigation.navigate('MainStackNavigation');
    };

    return (
        <View style={styles.container}>
            <Text>OnBoarding Screen</Text>
            <Button title="Go to Main Stack" onPress={goToMainStack} />
        </View>
    );
}
