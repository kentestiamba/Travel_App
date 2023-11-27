import React from "react";
import { View, Text } from "react-native";
import styles from './styles';

export default function DashBoardScreen() {

	return (
		<View style={styles.container}>
			<Text style={styles.font400}>Test Font Style DASHBOARD!</Text>
			<Text style={styles.font700}>Test Font Style DASHBOARD!</Text>
			<Text style={styles.font900}>Test Font Style DASHBOARD!</Text>
		</View>
	)
}