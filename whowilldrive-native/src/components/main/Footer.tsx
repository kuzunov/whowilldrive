import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Footer</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	text: {
		color: "white",
	},
});

export default Footer;
