import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
	const [successMessage, setSuccessMessage] = useState("");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const serviceID = "service_bhygaym";
	const templateID = "template_ID";
	const userID = "user_yM2aRTOGQYE8hG9oFHJIr";

	const onSubmit = (data, r) => {
		sendEmail(
			serviceID,
			templateID,
			{
				name: data.name,
				phone: data.phone,
				email: data.email,
				subject: data.subject,
				description: data.description,
			},
			userID
		);
		r.target.reset();
	};

	const sendEmail = (serviceID, templateID, variables, userID) => {
		emailjs
			.send(serviceID, templateID, variables, userID)
			.then(() => {
				setSuccessMessage(
					"Form sent successfully! I'll contact you as soon as possible."
				);
			})
			.catch((err) => console.error(`Something went wrong ${err}`));
	};

	return (
		<div id="contacts" className="contacts">
			<div className="text-center">
				<h1>contact me</h1>
				<p>
					Please fill out the form and describe you project needs and I'll
					contact you as soon as possible.
				</p>
				<span className="success-message">{successMessage}</span>
			</div>
			<div className="container">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="row">
						<div className="col-md-6 col-xs-12">
							{/* NAME INPUT */}
							<div className="text-center">
								<input
									type="text"
									className="form-control"
									placeholder="Name"
									name="name"
									{...register("name", { required: true, maxLength: 30 })}
								/>

								<div className="line"></div>
							</div>
							{errors.name && errors.name.type === "required" && (
								<span className="error-message">This is required</span>
							)}
							{/* PHONE INPUT */}
							<div className="text-center">
								<input
									type="text"
									className="form-control"
									placeholder="Phone Number"
									name="phone"
									{...register("phone", {
										required: true,
									})}
								/>
								<div className="line"></div>
							</div>

							{errors.phone && (
								<span className="error-message">This is required</span>
							)}

							{/* EMAIL INPUT */}
							<div className="text-center">
								<input
									type="email"
									className="form-control"
									placeholder="Email"
									name="email"
									{...register("email", {
										required: true,
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										},
									})}
								/>
								<div className="line"></div>
							</div>
							{errors.email && (
								<span className="error-message">This is required</span>
							)}

							{/* SUBJECT INPUT */}
							<div className="text-center">
								<input
									type="text"
									className="form-control"
									placeholder="Subject"
									name="subject"
									{...register("subject", {
										required: true,
									})}
								/>
								<div className="line"></div>
							</div>
							{errors.subject && (
								<span className="error-message">This is required</span>
							)}
						</div>
						<div className="col-md-6 col-xs-12">
							{/* DESCRIPTION */}
							<div className="text-center">
								<textarea
									type="text"
									className="form-control"
									placeholder="Please describe shortly you project..."
									name="description"
									{...register("description", {
										required: true,
									})}
								></textarea>
								<div className="line"></div>
							</div>
							{errors.description && (
								<span className="error-message">This is required</span>
							)}

							<button className="btn-main-offer contact-btn" type="submit">
								contact me
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contacts;
