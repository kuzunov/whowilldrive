import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import UserEntry from "./components/UserEntry";
import CarPicker from "./components/main/CarPicker";
import UserAdder from "./components/main/UserAdder";
import { IUser } from "./models/User/IUser";

const Koishtekara = () => {
	const [users, setUsers] = useState<IUser[]>([]);

	const removeUser = (user: IUser) => {
		setUsers(users.filter((u) => u.id !== user.id));
	};
	const addUser = (user: IUser) => {
		setUsers((prev) => [...prev, user]);
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.section}>
				<View style={styles.headerBox}>
					<Text style={styles.headerText}>Добави хора</Text>
					<UserAdder addUser={addUser} />
				</View>

				<View style={styles.usersBox}>
					<Text style={styles.subHeaderText}>
						Списък с пътници ({users.length})
					</Text>
					<View style={styles.usersList}>
						{users.map((u) => {
							return <UserEntry key={u.id} user={u} removeUser={removeUser} />;
						})}
						{users.length === 0 && (
							<Text style={styles.emptyText}>
								Няма добавени хора.
							</Text>
						)}
					</View>
				</View>

				<TouchableOpacity
					style={styles.button}
					onPress={() => console.log(users)}
				>
					<Text style={styles.buttonText}>Реши кой ще кара!</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.divider} />

			<View style={styles.section}>
				<View style={styles.headerBox}>
					<Text style={styles.headerText}>Избор на автомобил</Text>
					<CarPicker numberOfPeople={users.length} />
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		gap: 32,
	},
	section: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		gap: 24,
	},
	headerBox: {
		marginBottom: 16,
	},
	headerText: {
		fontSize: 20,
		fontWeight: "500",
		color: "#1976d2",
		marginBottom: 8,
	},
	usersBox: {
		flex: 1,
	},
	subHeaderText: {
		fontSize: 16,
		color: "#666",
		marginBottom: 8,
	},
	usersList: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 8,
	},
	emptyText: {
		fontSize: 14,
		color: "#666",
		fontStyle: "italic",
		marginTop: 8,
	},
	button: {
		backgroundColor: "#2e7d32",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 8,
		alignSelf: "flex-start",
		marginTop: 24, // fallback if mt: "auto" doesn't work perfectly in flex
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	divider: {
		height: 1,
		backgroundColor: "rgba(0,0,0,0.12)",
		marginVertical: 16,
	},
});

export default Koishtekara;
