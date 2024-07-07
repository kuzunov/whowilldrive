import { Input } from "@mui/base";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useEffect, useState } from "react";
import { Position } from "../../models/Position/Position";
import { Box, Button, Stack, Typography } from "@mui/material";
import Seat from "../Seat";
type Props = { numberOfPeople?: number };
const CarPicker = ({ numberOfPeople }: Props) => {
	const [seatsCount, setSeatsCount] = useState<number>(0);
	const [positions, setPositions] = useState<Position[]>([]);

	useEffect(() => setSeatsCount(positions.length), [positions]);

	useEffect(() => {
		if (seatsCount > 0) {
			const positionsArray: Position[] = [];
			let driverSlot = true;
			for (let i = 1; i <= seatsCount; i++) {
				positionsArray.push(new Position(i, driverSlot));
				if (driverSlot) {
					driverSlot = false;
				}
			}
			setPositions(positionsArray);
		}
	}, [seatsCount]);

	const removeSeat = (seat: Position) => {
		setPositions((prev) => prev.filter((p) => p.id !== seat.id));
	};

	return (
		<>
			<Input
				value={positions.length}
				onChange={(e) =>
					setSeatsCount((prev) =>
						Number.isInteger(Number(e.target.value))
							? Number(e.target.value)
							: prev
					)
				}
			/>
			<Grid container spacing={2} columns={2} marginTop={10}>
				{positions.map((p) => (
					<Grid xs={1}>
						<Seat position={p} removeSeat={removeSeat} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default CarPicker;
