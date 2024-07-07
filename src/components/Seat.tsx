import React, { useState } from "react";
import { Position } from "../models/Position/Position";
import {
	Grid,
	Button,
	Stack,
	Typography,
	IconButton,
	Box,
} from "@mui/material";
import DoDisturbOnOutlinedIcon from "@mui/icons-material/DoDisturbOnOutlined";

type Props = { position: Position; removeSeat: (position: Position) => void };

const Seat = ({ position, removeSeat }: Props) => {
	const [removeVisible, setRemoveVisible] = useState<boolean>(false);

	return (
		<Button
			onClick={() => removeSeat(position)}
			onMouseOver={() => setRemoveVisible(true)}
			onMouseOut={() => setRemoveVisible(false)}
		>
			<Stack direction={"column"}>
				{removeVisible && (
					<Stack
						sx={{
							position: "absolute",
							bottom: 0,
							width: "100%",
							height: "100%",
						}}
					>
						<DoDisturbOnOutlinedIcon color="error" />
					</Stack>
				)}
				<img
					width={"30%"}
					src={require("../assets/car-seat_5102957.png")}
					style={{ alignSelf: "center" }}
				/>
				<Typography textAlign={"center"}>
					{position.isFilled()
						? position.user?.username
						: "Unoccupied"}
				</Typography>
			</Stack>
		</Button>
	);
};

export default Seat;
