import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { User } from "../../models/User/User";
import { IUser } from "../../models/User/IUser";

type Props = {
	addUser: (user: IUser) => void;
};
const UserAdder = ({ addUser }: Props) => {
	const [current, setCurrent] = useState<string>("");

	const handleAddUser = () => {
		if (current.trim()) {
			addUser(new User(current.trim()));
			setCurrent("");
		}
	}

	const isButtonDisabled = !current.trim();

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Име на пътник"
				value={current}
				onChangeText={setCurrent}
				onSubmitEditing={handleAddUser}
			/>
			<TouchableOpacity
				style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
				onPress={handleAddUser}
				disabled={isButtonDisabled}
			>
				<Text style={[styles.buttonText, isButtonDisabled && styles.buttonTextDisabled]}>
					+ Добави
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		gap: 16,
	},
	input: {
		flex: 1,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 4,
		padding: 10,
		fontSize: 14,
	},
	button: {
		backgroundColor: "#1976d2",
		paddingVertical: 10,
		paddingHorizontal: 16,
		borderRadius: 4,
		flexDirection: "row",
		alignItems: "center",
	},
	buttonDisabled: {
		backgroundColor: "#e0e0e0",
	},
	buttonText: {
		color: "white",
		fontWeight: "500",
		fontSize: 14,
	},
	buttonTextDisabled: {
		color: "#a6a6a6",
	},
});

export default UserAdder;
