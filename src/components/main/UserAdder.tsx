import { Stack, TextField, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { User } from "../../models/User/User";
import PlusIcon from "@mui/icons-material/Add";

type Props = {
	addUser: (user: IUser) => void;
};
const UserAdder = ({ addUser }: Props) => {
	const [current, setCurrent] = useState<string>();

	return (
		<Stack direction={"row"} gap={1}>
			<TextField
				label={"Добави льольо"}
				value={current}
				variant={"filled"}
				onChange={(e) => setCurrent(e.target.value)}
			/>
			<IconButton
				aria-label="Добави льольо"
				size="large"
				// variant={"contained"}
				color={"primary"}
				onClick={() => {
					current && addUser(new User(current));
					setCurrent("");
				}}
			>
				<PlusIcon />
			</IconButton>
		</Stack>
	);
};

export default UserAdder;
