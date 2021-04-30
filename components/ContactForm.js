import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiFormControl-root": {
			width: "100%",
			margin: theme.spacing(1),
		},
	},
}));

const ContactForm = () => {
	const classes = useStyles();
	const { handleSubmit } = useForm();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const [state, setState] = useState("IDLE");
	const [errorMessage, setErrorMessage] = useState(null);
	const [errors, setErrors] = useState({});

	const validation = () => {
		let temp = {};
		temp.name = name ? "" : "This field is required.";
		temp.email = /$^|.+@.+..+/.test(email) ? "" : "Email is not valid.";
		temp.subject = subject ? "" : "This field is required.";
		temp.message = message ? "" : "This field is required.";
		setErrors({ ...temp });
		return Object.values(temp).every((x) => x == "");
	};

	function getRequestParams(name, email, subject, message) {
		const Portal_ID = "19542633";
		const Form_ID = "df44df7c-6b86-4387-9bcf-ca970558ae24";

		const url = `https://api.hsforms.com/submissions/v3/integration/submit/${Portal_ID}/${Form_ID}`;
		const data = {
			fields: [
				{
					name: "email",
					value: email,
				},
				{
					name: "firstname",
					value: name,
				},
				{
					name: "subject",
					value: subject,
				},
				{
					name: "message",
					value: message,
				},
			],
		};

		const headers = {
			"Content-Type": "application/json",
		};

		return {
			url,
			data,
			headers,
		};
	}

	async function sendToHubSpot(data) {
		const { name, email, subject, message } = data;

		let response = "";
		try {
			const { url, data, headers } = getRequestParams(
				name,
				email,
				subject,
				message
			);

			const response = await axios.post(url, data, { headers });

			return response;
		} catch (error) {
			return response;
		}
	}

	const onSubmitForm = async (evt) => {
		evt.preventDefault;
		if (validation()) {
			setState("LOADING");
			setErrorMessage(null);
			try {
				const response = await sendToHubSpot({
					name,
					email,
					subject,
					message,
				});
				setState("SUCCESS");
			} catch (error) {
				setErrorMessage(error);
				setState("ERROR");
			}
		}
	};

	return (
		<form className={classes.root} onSubmit={handleSubmit(onSubmitForm)}>
			<Grid container spacing={4} justify="center">
				<Grid item xs={12} md={6}>
					<TextField
						label="Your Name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						{...(errors.name && { error: true, helperText: errors.name })}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						label="Your Email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						{...(errors.email && { error: true, helperText: errors.email })}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="Subject"
						name="subject"
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						{...(errors.subject && { error: true, helperText: errors.subject })}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						multiline
						rows={4}
						label="Your Message"
						name="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						{...(errors.message && { error: true, helperText: errors.message })}
					/>
				</Grid>
				<Grid item>
					<Button
						type="submit"
						text="Send Message"
						disabled={state === "LOADING"}
					></Button>

					<div>
						{state === "ERROR" && (
							<p style={{ color: "red" }}>{errorMessage}</p>
						)}
						{state === "SUCCESS" && (
							<p style={{ color: "green" }}>
								Thank you for contacting us!. Your message has been successfully
								sent. We will contact you very soon!
							</p>
						)}
					</div>
				</Grid>
			</Grid>
		</form>
	);
};

export default ContactForm;
