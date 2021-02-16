module.exports = {
	/* The token of your Discord Bot */
	token: "",
	/* For the support server */
	support: {
		id: "760836476102639648", // The ID of the support server
		logs: "760836476102639651", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "2eVomESt4RCe2TrnNwxaVwZsPA-H4-d0", // Your discord client secret
		baseURL: "https://dashboard.atlanta-bot.fr", // The base URl of the dashboard
		logs: "XXXXXXXX760836476102639651XXX", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "556611", // Express session password (it can be what you want)
		failureURL: "https://www.atlanta-bot.fr" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb+srv://raymond:fWnyyVUbiKSb5dPb@raymonds.w37hc.mongodb.net/Raymonds?retryWrites=true&w=majority", // The URl of the mongodb database
	prefix: "!", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "Test Server" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "590540346983710740", // The ID of the bot's owner
		name: "Raymond#1362" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "", // The webhook auth that you have defined on discordbots.org
		channel: "" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "e23839575669e3b4adafc948f5fa8ed358d6eb5424f9dfd8dd9d027cd004e7c262d61505eb3517917b79ffc7efc8018dc112ac130b4b84d08c27d308681a1edc",
		// SENTRY: https://sentry.io (this is not required and not recommended - you can delete the field)
		sentryDSN: ""
	},
	/* The others utils links */
	others: {
		github: "https://github.com/raymond390", // Founder's github account
		donate: "" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "Test helpt op {serversCount} servers",
			type: "LISTENING"
		},
		{
			name: "ben aan het leren",
			type: "PLAYING"
		}
	]
};
