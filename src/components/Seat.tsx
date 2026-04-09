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
			variant="contained"
		>
			<Stack direction={"column"}>
				{removeVisible && (
					<Stack
						sx={{
							position: "absolute",
							bottom: 0,
							width: "100%",
							height: "100%",
							// backgroundColor: "lightgrey",
							// opacity: "10%",
						}}
					>
						<DoDisturbOnOutlinedIcon
							color="error"
							sx={{
								position: "absolute",
								alignSelf: "flex-end",
								marginTop: 1,
								marginRight: 3,
							}}
						/>
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
