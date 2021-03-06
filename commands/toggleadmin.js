/*
Copyright (C) 2020-2021 Nicholas Christopher

This file is part of Quoter.

Quoter is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, version 3.

Quoter is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with Quoter.  If not, see <https://www.gnu.org/licenses/>.
*/

const config = require("../config.json");

module.exports = {
	hidden: true,
	name: "toggleadmin",
	description: "Toggles admin features.",
	usage: "",
	example: "",
	aliases: ["togglebypass"],
	cooldown: 3,
	args: false,
	guildOnly: false,
	async execute(message) {
		if (config.admins?.includes(message.author.id)) {
			const currentState = message.client.admins.get(message.author.id);
			message.client.admins.set(message.author.id, !currentState);

			const newState = currentState ? "disabled" : "enabled";
			await message.channel.send(
				`✅ **|** Admin features have been __${newState}__ for you.`
			);
		} else {
			await message.channel.send(
				"✋ **|** That action can only be used by bot administrators."
			);
		}
	},
};
