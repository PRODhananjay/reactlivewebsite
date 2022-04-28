import React, { useState } from "react";
import TeamImage from "assets/images/team.jpg";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const fields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      value: value.name,
      placeholder: "Enter your name",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      value: value.email,
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "phone",
      label: "Phone",
      type: "tel",
      value: value.phone,
      placeholder: "Enter your phone number",
      required: true,
    },
    {
      name: "company",
      label: "Company Name",
      type: "text",
      value: value.company,
      placeholder: "Enter your company name",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Submitting...", {
      hideProgressBar: true,
    });

    axios
      .post("/mail/register", value)
      .then((res) => {
        if (res.data) {
          toast.update(toastId, {
            type: toast.TYPE.SUCCESS,
            render: "Your request has been submitted successfully!",
            isLoading: false,
            autoClose: 3000,
          });
          setValue({
            name: "",
            email: "",
            phone: "",
            company: "",
          });
        }
      })
      .catch((err) => {
        toast.update(toastId, {
          type: toast.TYPE.ERROR,
          render: "Something went wrong, please try again!",
          isLoading: false,
          autoClose: 3000,
        });
      });
  };

  return (
    <section className="max-h-full overflow-y-scroll grid md:grid-cols-2 gap-4 md:gap-10 p-4 h-full">
      <img className="rounded-2xl h-full object-cover" src={TeamImage} alt="" />
      <form
        className="col-span-1 p-7 flex flex-col gap-3 items-start justify-center max-h-fit h-full"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold">Register for event</h1>
        <p className="text-gray-400">
          We have structured a one-day conclave which is a conglomeration of the
          learned academic group that consists of all school founders,
          principals, chancellor, and parents.
        </p>
        {fields.map((field, index) => (
          <input
            key={index}
            className="w-full focus:outline glass-modal border border-gray-400 py-2 px-4 placeholder:text-gray-500 placeholder:capitalize"
            style={{
              borderRadius: "99px",
            }}
            value={field.value}
            onChange={(e) =>
              setValue({ ...value, [field.name]: e.target.value })
            }
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
          />
        ))}
        <button
          className="w-full mt-5 bg-primary text-white rounded-full py-2 px-4 hover:bg-blue-900"
          type="submit"
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default Register;
