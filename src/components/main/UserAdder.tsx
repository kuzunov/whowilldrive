import { Stack, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { User } from "../../models/User/User";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { IUser } from "../../models/User/IUser";

type Props = {
	addUser: (user: IUser) => void;
};
const UserAdder = ({ addUser }: Props) => {
	const [current, setCurrent] = useState<string>("");

	const handleAddUser = () => {
		if (current.trim()) {
			addUser(new User(current.trim()));
			setCurrent("");
		}
	}

	return (
		<Stack direction={"row"} gap={2} alignItems="center">
			<TextField
				label={"Име на пътник"}
				value={current}
				variant={"outlined"}
				size="small"
				onChange={(e) => setCurrent(e.target.value)}
				onKeyDown={(e) => e.key === "Enter" && handleAddUser()}
				sx={{ flexGrow: 1 }}
			/>
			<Button
				variant="contained"
				color="primary"
				startIcon={<PersonAddAlt1Icon />}
				onClick={handleAddUser}
				disabled={!current.trim()}
				sx={{ whiteSpace: "nowrap" }}
			>
				Добави
			</Button>
		</Stack>
	);
};

export default UserAdder;
