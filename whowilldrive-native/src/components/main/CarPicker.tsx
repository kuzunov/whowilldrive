import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Position } from "../../models/Position/Position";
import Seat from "../Seat";

type Props = { numberOfPeople?: number };
const CarPicker = ({ numberOfPeople }: Props) => {
	const [seatsCount, setSeatsCount] = useState<number>(0);
	const [positions, setPositions] = useState<Position[]>([]);

	useEffect(() => {
		const positionsArray: Position[] = [];
		let driverSlot = true;
		for (let i = 1; i <= seatsCount; i++) {
			positionsArray.push(new Position(i, driverSlot));
			if (driverSlot) {
				driverSlot = false;
			}
		}
		setPositions(positionsArray);
	}, [seatsCount]);

	const removeSeat = (seat: Position) => {
		setSeatsCount((prev) => Math.max(0, prev - 1));
	};

	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder="Брой места в колата"
				keyboardType="numeric"
				value={seatsCount > 0 ? seatsCount.toString() : ""}
				onChangeText={(text) => {
					const val = parseInt(text, 10);
					setSeatsCount(isNaN(val) || val < 0 ? 0 : val);
				}}
			/>
			<View style={styles.grid}>
				{positions.map((p) => (
					<View style={styles.gridItem} key={p.id}>
						<Seat position={p} removeSeat={removeSeat} />
					</View>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 4,
		padding: 10,
		fontSize: 16,
		width: "100%",
	},
	grid: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 16,
		justifyContent: "center",
		marginHorizontal: -8, // compensate for item padding
	},
	gridItem: {
		width: "50%",
		padding: 8,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default CarPicker;
