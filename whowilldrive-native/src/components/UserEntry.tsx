import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { IUser } from "../models/User/IUser";

const UserEntry = ({
	user,
	removeUser,
}: {
	user: IUser;
	removeUser: (user: IUser) => void;
}) => {
	return (
		<View style={styles.chip}>
			<Text style={styles.icon}>😊</Text>
			<Text style={styles.label}>{user.username}</Text>
			<TouchableOpacity onPress={() => removeUser(user)} style={styles.deleteButton}>
				<Text style={styles.deleteIcon}>✕</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	chip: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "#1976d2", // primary main approx
		borderRadius: 16,
		paddingVertical: 4,
		paddingHorizontal: 8,
		margin: 4,
	},
	icon: {
		fontSize: 16,
		marginRight: 4,
	},
	label: {
		fontSize: 14,
		color: "#1976d2",
	},
	deleteButton: {
		marginLeft: 6,
		padding: 2,
	},
	deleteIcon: {
		fontSize: 12,
		color: "#1976d2",
	},
});

export default UserEntry;
