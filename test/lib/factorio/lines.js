// Lines for testing the factorio output

"use strict";
let testLines = new Map([
	[
		"   1.306 Info RemoteCommandProcessor.cpp:131: Starting RCON interface at port 4000",
		{
			format: "seconds",
			time: "1.306",
			type: "log",
			level: "Info",
			file: "RemoteCommandProcessor.cpp:131",
			message: "Starting RCON interface at port 4000",
		},
	],
	[
		"   0.622 Warning FileUtil.cpp:527: test not found; using test.zip",
		{
			format: "seconds",
			time: "0.622",
			type: "log",
			level: "Warning",
			file: "FileUtil.cpp:527",
			message: "test not found; using test.zip",
		},
	],
	[
		"   0.554 Error Main.cpp:839: require_user_verification must be enabled for public games.",
		{
			format: "seconds",
			time: "0.554",
			type: "log",
			level: "Error",
			file: "Main.cpp:839",
			message: "require_user_verification must be enabled for public games.",
		},
	],
	[
		" 640.910 Quitting: remote-quit.",
		{
			format: "seconds",
			time: "640.910",
			type: "generic",
			message: "Quitting: remote-quit.",
		},
	],
	[
		"1641.421 Goodbye",
		{
			format: "seconds",
			time: "1641.421",
			type: "generic",
			message: "Goodbye",
		},
	],
	[
		"2019-01-20 10:30:04 [JOIN] User joined the game",
		{
			format: "date",
			time: "2019-01-20 10:30:04",
			type: "action",
			action: "JOIN",
			message: "User joined the game",
		},
	],
	[
		"2019-01-20 10:30:07 [CHAT] User: chat message",
		{
			format: "date",
			time: "2019-01-20 10:30:07",
			type: "action",
			action: "CHAT",
			message: "User: chat message",
		},
	],
	[
		"2019-01-20 10:30:14 [COMMAND] User (command): blah",
		{
			format: "date",
			time: "2019-01-20 10:30:14",
			type: "action",
			action: "COMMAND",
			message: "User (command): blah",
		},
	],
	[
		"2019-01-20 10:30:14 Cannot execute command. Error: [string \"blah\"]:1: syntax error near <eof>",
		{
			format: "date",
			time: "2019-01-20 10:30:14",
			type: "generic",
			message: "Cannot execute command. Error: [string \"blah\"]:1: syntax error near <eof>",
		},
	],
	[
		"2019-01-20 10:30:21 [LEAVE] User left the game",
		{
			format: "date",
			time: "2019-01-20 10:30:21",
			type: "action",
			action: "LEAVE",
			message: "User left the game",
		},
	],
	[
		"2019-01-20 15:46:34 [KICK] User was kicked by <server>. Reason: unspecified.",
		{
			format: "date",
			time: "2019-01-20 15:46:34",
			type: "action",
			action: "KICK",
			message: "User was kicked by <server>. Reason: unspecified.",
		},
	],
	[
		"2019-01-20 15:47:50 [BAN] User was banned by <server>. Reason: unspecified.",
		{
			format: "date",
			time: "2019-01-20 15:47:50",
			type: "action",
			action: "BAN",
			message: "User was banned by <server>. Reason: unspecified.",
		},
	],
	[
		"2019-01-20 15:48:28 [UNBANNED] User was unbanned by <server>.",
		{
			format: "date",
			time: "2019-01-20 15:48:28",
			type: "action",
			action: "UNBANNED",
			message: "User was unbanned by <server>.",
		},
	],
	[
		"Error while running event level::on_nth_tick(1)",
		{
			format: "none",
			type: "generic",
			message: "Error while running event level::on_nth_tick(1)",
		},
	],
	[
		"4802.763 Info AppManager.cpp:287: Saving to _autosave4 (blocking).",
		{
			format: "seconds",
			time: "4802.763",
			type: "log",
			level: "Info",
			file: "AppManager.cpp:287",
			message: "Saving to _autosave4 (blocking).",
		},
	],
	[
		"  10.806 Info AppManager.cpp:394: Saving game as C:\\factorio\\saves\\world.zip",
		{
			format: "seconds",
			time: "10.806",
			type: "log",
			level: "Info",
			file: "AppManager.cpp:394",
			message: "Saving game as C:\\factorio\\saves\\world.zip",
		},
	],
	[
		"4202.780 Info AppManagerStates.cpp:1802: Saving finished",
		{
			format: "seconds",
			time: "4202.780",
			type: "log",
			level: "Info",
			file: "AppManagerStates.cpp:1802",
			message: "Saving finished",
		},
	],
	[
		"   1.277 Script @/srv/clusterio/instances/test/temp/currently-playing/modules/example/test.lua:7: " +
		"Example log line.",
		{
			format: "seconds",
			time: "1.277",
			type: "log",
			level: "Script",
			file: "@/srv/clusterio/instances/test/temp/currently-playing/modules/example/test.lua:7",
			message: "Example log line.",
		},
	],
	[
		"   1.277 Script @C:\\My Cluster\\temp\\current-save\\file.lua:7: Contrived :12: example",
		{
			format: "seconds",
			time: "1.277",
			type: "log",
			level: "Script",
			file: "@C:\\My Cluster\\temp\\current-save\\file.lua:7",
			message: "Contrived :12: example",
		},
	],
	[
		" 344.683 Script =(command):1: test",
		{
			format: "seconds",
			time: "344.683",
			type: "log",
			level: "Script",
			file: "=(command):1",
			message: "test",
		},
	],
	[
		"   0.751 Verbose ModManager.cpp:554: Time to load mods: 0.746762",
		{
			format: "seconds",
			time: "0.751",
			type: "log",
			level: "Verbose",
			file: "ModManager.cpp:554",
			message: "Time to load mods: 0.746762",
		},
	],
]);

module.exports = {
	testLines,
};
