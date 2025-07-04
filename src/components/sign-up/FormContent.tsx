import React from "react";
import { Form, Input, Button } from "@heroui/react";

const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
};

export const FormContent = () => {
    const [formData, setFormData] = React.useState(initialFormState);
    const [action, setAction] = React.useState<string | null>(null);

    console.log(action);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleReset = () => {
        setFormData(initialFormState);
        setAction("reset");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // setAction();
    };

    return (
        <Form
            className="w-full flex gap-6 bg-opacity-10 rounded-lg max-w-[450px]"
            onReset={handleReset}
            onSubmit={handleSubmit}
        >
            <Input
                color="secondary"
                isRequired
                errorMessage="Please enter your first name"
                label="First Name"
                labelPlacement="outside"
                name="firstName"
                placeholder="Enter your first name"
                type="text"
                value={formData.firstName || ""}
                onChange={handleChange}
                className="text-black w-full text-2xl"
            />

            <Input
                color="secondary"
                isRequired
                errorMessage="Please enter your last name"
                label="Last Name"
                labelPlacement="outside"
                name="lastName"
                placeholder="Enter your last name"
                type="text"
                value={formData.lastName || ""}
                onChange={handleChange}
                className="text-black w-full text-2xl"
            />

            <Input
                color="secondary"
                isRequired
                errorMessage="Please enter a valid email"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="text-black w-full text-2xl"
            />

            <Input
                color="secondary"
                isRequired
                errorMessage="Please enter your password"
                label="Password"
                labelPlacement="outside"
                name="password"
                placeholder="Enter your password"
                type="password"
                value={formData.password || ""}
                onChange={handleChange}
                className="text-black w-full text-2xl"
            />

            <Input
                color="secondary"
                isRequired
                errorMessage="Passwords do not match"
                label="Confirm Password"
                labelPlacement="outside"
                name="confirmPassword"
                placeholder="Confirm your password"
                type="password"
                value={formData.confirmPassword || ""}
                onChange={handleChange}
                className="text-black w-full text-2xl"
            />

            <div className="flex gap-5 mt-10">
                <Button color="primary" type="submit">
                    Submit
                </Button>
                <Button type="reset" variant="flat">
                    Reset
                </Button>
            </div>
        </Form>
    );
};
