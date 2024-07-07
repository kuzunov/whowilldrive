import { Button, IconButton, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import UserEntry from "./components/UserEntry";
import { User } from "./models/User/User";
import CarPicker from "./components/main/CarPicker";
import UserAdder from "./components/main/UserAdder";

const Koishtekara = () => {
	const [users, setUsers] = useState<IUser[]>([]);

	const removeUser = (user: IUser) => {
		setUsers(users.filter((u) => u.id !== user.id));
	};
	const addUser = (user: IUser) => {
		setUsers((prev) => [...prev, user]);
	};

	return (
		<Stack direction={"row"}>
			<Stack
				direction={"column"}
				sx={{
					flex: 0.5,
					maxWidth: "50%",
					alignItems: "flex-start",
					justifyContent: "space-between",
				}}
			>
				<UserAdder addUser={addUser} />
				<Stack direction={"row"} gap={2} margin={1} flexWrap={"wrap"}>
					{users.map((u) => {
						return <UserEntry user={u} removeUser={removeUser} />;
					})}
				</Stack>
				<Button
					variant={"contained"}
					color={"success"}
					onClick={() => console.log(users)}
					sx={{ marginY: 5 }}
				>
					Реши!
				</Button>
			</Stack>
			<Stack flex={0.5} maxWidth={"50%"}>
				<CarPicker numberOfPeople={users.length} />
			</Stack>
		</Stack>
	);
};

export default Koishtekara;
