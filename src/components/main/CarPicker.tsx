import { TextField, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useEffect, useState } from "react";
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
		<Box>
			<TextField
				label="Брой места в колата"
				type="number"
				variant="outlined"
				size="small"
				value={seatsCount || ""}
				onChange={(e) => {
					const val = parseInt(e.target.value, 10);
					setSeatsCount(isNaN(val) || val < 0 ? 0 : val);
				}}
				fullWidth
			/>
			<Grid container spacing={2} columns={{ xs: 1, sm: 2 }} sx={{ mt: 2, justifyContent: "center" }}>
				{positions.map((p) => (
					<Grid xs={1} key={p.id} display="flex" justifyContent="center">
						<Seat position={p} removeSeat={removeSeat} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default CarPicker;
