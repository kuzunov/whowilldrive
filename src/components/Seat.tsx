import React, { useState } from "react";
import { Position } from "../models/Position/Position";
import {
	Paper,
	Typography,
	IconButton,
	Box,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

type Props = { position: Position; removeSeat: (position: Position) => void };

const Seat = ({ position, removeSeat }: Props) => {
	const [removeVisible, setRemoveVisible] = useState<boolean>(false);

	return (
		<Paper
			elevation={removeVisible ? 6 : 2}
			onMouseOver={() => setRemoveVisible(true)}
			onMouseOut={() => setRemoveVisible(false)}
			sx={{
				position: "relative",
				padding: 2,
				borderRadius: 3,
				width: "100%",
				maxWidth: 150,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				transition: "all 0.2s ease-in-out",
				bgcolor: position.isFilled() ? "primary.light" : "grey.100",
				cursor: "pointer",
				overflow: "hidden",
			}}
		>
			{removeVisible && (
				<Box
					sx={{
						position: "absolute",
						top: 0,
						right: 0,
						bgcolor: "rgba(255, 255, 255, 0.8)",
						borderBottomLeftRadius: 12,
						zIndex: 1,
					}}
				>
					<IconButton
						size="small"
						color="error"
						onClick={(e) => {
							e.stopPropagation();
							removeSeat(position);
						}}
					>
						<DeleteOutlineIcon fontSize="small" />
					</IconButton>
				</Box>
			)}

			<img
				width={"50%"}
				src={require("../assets/car-seat_5102957.png")}
				style={{ opacity: position.isFilled() ? 1 : 0.5, marginBottom: 8 }}
				alt="Seat"
			/>

			<Typography
				variant="subtitle2"
				textAlign="center"
				color={position.isFilled() ? "primary.contrastText" : "text.secondary"}
				fontWeight={position.isFilled() ? "bold" : "normal"}
			>
				{position.isFilled() ? position.user?.username : "Свободно"}
			</Typography>

			{position.lincenceRequired && (
				<Typography variant="caption" color="text.secondary" sx={{ display: "block", textAlign: "center", mt: 0.5 }}>
					(Шофьор)
				</Typography>
			)}
		</Paper>
	);
};

export default Seat;
