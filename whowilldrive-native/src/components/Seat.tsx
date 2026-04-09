import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Position } from "../models/Position/Position";

type Props = { position: Position; removeSeat: (position: Position) => void };

const Seat = ({ position, removeSeat }: Props) => {
	const [removeVisible, setRemoveVisible] = useState<boolean>(false);

	return (
		<TouchableOpacity
			style={[
				styles.paper,
				position.isFilled() ? styles.paperFilled : styles.paperEmpty,
				removeVisible && styles.paperHovered
			]}
			onPress={() => setRemoveVisible(!removeVisible)}
			activeOpacity={0.8}
		>
			{removeVisible && (
				<View style={styles.removeContainer}>
					<TouchableOpacity
						onPress={(e) => {
							e.stopPropagation();
							removeSeat(position);
						}}
						style={styles.iconButton}
					>
						<Text style={styles.deleteIcon}>✕</Text>
					</TouchableOpacity>
				</View>
			)}

			<Image
				source={require("../assets/car-seat_5102957.png")}
				style={[
					styles.image,
					{ opacity: position.isFilled() ? 1 : 0.5 }
				]}
				resizeMode="contain"
			/>

			<Text
				style={[
					styles.title,
					position.isFilled() ? styles.titleFilled : styles.titleEmpty
				]}
			>
				{position.isFilled() ? position.user?.username : "Свободно"}
			</Text>

			{position.lincenceRequired && (
				<Text style={styles.caption}>
					(Шофьор)
				</Text>
			)}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	paper: {
		position: "relative",
		padding: 16,
		borderRadius: 12,
		width: "100%",
		maxWidth: 150,
		alignItems: "center",
		justifyContent: "center",
		overflow: "hidden",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},
	paperEmpty: {
		backgroundColor: "#f5f5f5", // grey.100 equivalent
	},
	paperFilled: {
		backgroundColor: "#bbdefb", // primary.light equivalent
	},
	paperHovered: {
		elevation: 6,
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
	},
	removeContainer: {
		position: "absolute",
		top: 0,
		right: 0,
		backgroundColor: "rgba(255, 255, 255, 0.8)",
		borderBottomLeftRadius: 12,
		zIndex: 1,
	},
	iconButton: {
		padding: 8,
	},
	deleteIcon: {
		color: "#d32f2f", // error color equivalent
		fontSize: 16,
		fontWeight: "bold",
	},
	image: {
		width: "50%",
		aspectRatio: 1,
		marginBottom: 8,
	},
	title: {
		textAlign: "center",
		fontSize: 14,
	},
	titleEmpty: {
		color: "#666",
		fontWeight: "normal",
	},
	titleFilled: {
		color: "#fff", // primary.contrastText approx
		fontWeight: "bold",
	},
	caption: {
		textAlign: "center",
		color: "#666",
		fontSize: 12,
		marginTop: 4,
	},
});

export default Seat;
