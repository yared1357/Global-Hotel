import React, { useState } from "react";
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!formData.password) newErrors.password = "Password is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Form submitted:", formData);
            // Handle form submission logic here
            setFormData({
                email: "",
                password: ""
            });
            setErrors({});
        }
    };

    return (
        <div className="main-container">
            <div className="containeroflogin"> 
                <div className="parallax6">
                    <div className="aboutcontent">Welcome Back to Login Page!</div>
                </div>
                <div className="login-container">
                    <h1>Login Here!</h1>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-groups">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="form-groups">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>
                        <button type="submit" className="submit-button">Login</button>
                    </form>
                    <p className="signup-redirect">
                        Don't have an account? <a href="/signup">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;