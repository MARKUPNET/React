import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import Container from 'react-bootstrap/Container';

function FormApp() {

	const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
	
	return (
		<Container className="mt-6">
			<form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
				<input {...register("firstName")} placeholder="First name" className="form-control" />
				<select {...register("category", { required: true })} className="form-control">
					<option value="">Select...</option>
					<option value="A">Option A</option>
					<option value="B">Option B</option>
				</select>
				<textarea {...register("aboutYou")} placeholder="About you" className="form-control" />
				<p>{data}</p>
				<input type="submit" />
			</form>
		</Container>
	)
}

export default FormApp;