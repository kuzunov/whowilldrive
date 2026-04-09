import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Кой ще кара?</Text>
			<Text style={styles.subtitle}>Не можете да решите кой да кара?</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "white",
	},
	subtitle: {
		fontSize: 12,
		fontStyle: "italic",
		color: "rgba(255, 255, 255, 0.8)",
	},
});

export default Header;
