import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const UserEntry = ({
	user,
	removeUser,
}: {
	user: IUser;
	removeUser: (user: IUser) => void;
}) => {
	return (
		<Stack
			direction={"row"}
			alignItems={"center"}
			border={1}
			borderRadius={2}
			borderColor={"#0000007a"}
			padding={1}
		>
			<Typography>{user.username}</Typography>
			<IconButton onClick={() => removeUser(user)}>
				<CloseIcon />
			</IconButton>
		</Stack>
	);
};

export default UserEntry;
