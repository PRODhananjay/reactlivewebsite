import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Sponsorship = ({ sponsor }) => {
  const { name, price, features, onGroundBranding } = sponsor;

  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
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
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Submitting...", {
      hideProgressBar: true,
    });

    const data = { ...value, sponsor: name };
    axios
      .post("/mail/query", data)
      .then((res) => {
        if (res.data) {
          toast.update(toastId, {
            type: toast.TYPE.SUCCESS,
            render: "Your query has been submitted successfully!",
            isLoading: false,
            autoClose: 3000,
          });
          setValue({
            name: "",
            email: "",
            phone: "",
            query: "",
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
    <section className="p-10 h-full max-h-full overflow-y-scroll">

      <h1 className="text-4xl font-bold serif">
        {name}
        <span className="hidden md:inline-block text-secondary-light text-5xl cursive">
          &nbsp;Deliverables
        </span>
      </h1>
      <section className="grid md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">{price}</h2>
          <ul className="list-disc">
            {features.map((feature, index) => (
              <li key={index}>
                <strong className="text-secondary-light">
                  {feature.title} -{" "}
                </strong>
                {feature.desc}
              </li>
            ))}
          </ul>
          {onGroundBranding && (
            <>
              <h2 className="text-xl font-semibold underline -my-2">
                On Ground Branding
              </h2>
              <ul className="list-disc">
                {onGroundBranding?.map((feature, index) => (
                  <li key={index}>
                    <strong className="text-secondary-light">
                      {feature.title} -{" "}
                    </strong>
                    {feature.desc}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <form
          className="col-span-1 md:px-7 md:py-10 flex flex-col gap-3 items-start justify-start max-h-fit h-full"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold">Have any question?</h1>
          <p className="text-gray-400"></p>
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
          <textarea
            className="w-full focus:outline glass-modal border border-gray-400 py-2 px-4 placeholder:text-gray-500 placeholder:capitalize"
            style={{
              borderRadius: "16px",
              resize: "none",
            }}
            value={value.query}
            onChange={(e) => setValue({ ...value, query: e.target.value })}
            placeholder={`What would you like to know about ${name}?`}
            rows="5"
          ></textarea>
          <button
            className="w-full mt-5 bg-primary text-white rounded-full py-2 px-4 hover:bg-blue-900"
            type="submit"
          >
            Submit Query
          </button>
        </form>
      </section>
    </section>
  );
};

export default Sponsorship;
