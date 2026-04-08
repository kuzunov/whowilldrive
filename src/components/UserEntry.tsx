import { Chip } from "@mui/material";
import React from "react";
import FaceIcon from '@mui/icons-material/Face';
import { IUser } from "../models/User/IUser";

const UserEntry = ({
	user,
	removeUser,
}: {
	user: IUser;
	removeUser: (user: IUser) => void;
}) => {
	return (
		<Chip
			icon={<FaceIcon />}
			label={user.username}
			onDelete={() => removeUser(user)}
			color="primary"
			variant="outlined"
			sx={{
				fontSize: '1rem',
				padding: '4px',
				backgroundColor: 'white',
				'&:hover': {
					backgroundColor: 'rgba(25, 118, 210, 0.04)'
				}
			}}
		/>
	);
};

export default UserEntry;
