import React, { useState } from "react";
import Contact from "../Routes/Contact";

const Form = () => {

	const [contact, setContact] = useState({
		fullName: "",
		email: "",
	})

	const [showError, setShowError] = useState(false);
	const [showSubmited, setShowSubmited] = useState(false);

	function validateEmail(email) {
		const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		return emailRegex.test(email);
	}

	function validateName(name) {
		const nameRegex = /^[a-zA-Z ]{6,}$/;
		return nameRegex.test(name);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if(!validateEmail(contact.email) || !validateName(contact.fullName)) {
			setShowError(true);
		} else {
			setShowSubmited(true);
		}

	}

	function handleChange(e) {
		setContact({
			...contact,
			[e.target.name]: e.target.value,
		})
	}

	function handleFocus() {
		setShowError(false);
		setShowSubmited(false);
	}

  return (
    <div>
      <form onSubmit={handleSubmit}>
					<input name="fullName" onFocus={handleFocus} onChange={handleChange} type="text" minLength={6} placeholder="Nombre completo" />
					<input name="email" onFocus={handleFocus} onChange={handleChange} type="email" placeholder="Email" />
					<button>Send</button>
      </form>
			{showError && <p>Por favor, verifique su información nuevamente</p>}
			{showSubmited && <p>Gracias {contact.fullName}, te contactaremos cuanto antes vía mail</p>}
    </div>
  );
};

export default Form;
