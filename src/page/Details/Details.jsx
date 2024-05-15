import { Link, useLoaderData } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const foods = useLoaderData();
  // console.log(foods);


  const { user } = useAuth() || {};



  const formatDate = (dateString) => {
    if (!dateString) return ""; // Return empty string if dateString is undefined or null

    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Adding 1 because getMonth() returns 0-indexed month
    const day = String(dateObject.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handleRequest = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const status = form.status.value;
    const name = form.name.value;
    const email = user.email;
    const location = form.location.value;
    const quantity = parseInt(form.quantity.value);
    const date = form.date.value;
    const deadline = form.deadline.value;
    const notes = form.notes.value;
    const photoURL = user?.photoURL;
    const displayName = user?.displayName;
    

    const requestFoods = {
      photo,
      status,
      name,
      deadline,
      location,
      quantity,
      date,
      notes,
      photoURL,
      displayName,
      email,
      foodId: foods._id,
    
    };
    // console.log(requestFoods);

    //   // send data to the server
    fetch(`https://food-server-rho.vercel.app/foods-request`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestFoods),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.message) {
          Swal.fire({
            title: "Success!",
            text: "request added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }

        document.getElementById("my_modal_4").close();
      });
  };

  return (
    <div className="flex items-center justify-center my-16">
      
      <Helmet>
                <title>Foods Project: {foods._id}</title>
            </Helmet>
      <div className="max-w-lg p-8 shadow-xl dark:bg-gray-50 dark:text-gray-800">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={foods.photo}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <h2 className="text-2xl text-[#07a7a7] font-extrabold">
                {foods.name}
              </h2>
            </div>
          </div>

          <div className="flex justify-between border-bottom">
            <div className="flex items-center">
              <p
                rel="noopener noreferrer"
                href="#"
                className="mb-0 font-extrabold capitalize dark:text-gray-800"
              >
                {" "}
                <span className="mr-1 text-xl text-[#07a7a7]">
                  {" "}
                  Donor Name:{" "}
                </span>
                {foods.displayName}
              </p>
            </div>
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="font-bold">
                {" "}
                <span className="mr-1 text-xl text-[#07a7a7]">
                  {" "}
                  Quantity:{" "}
                </span>{" "}
                {foods.quantity}
              </h3>
            </a>
          </div>
          <div className="flex justify-between border-bottom">
            <div className="flex items-center">
              <p
                rel="noopener noreferrer"
                href="#"
                className="mb-0 font-extrabold capitalize dark:text-gray-800"
              >
                {" "}
                <span className="mr-1 text-[#07a7a7]"> Expired Date: </span>
                {foods.date}
              </p>
            </div>
          </div>
          <p rel="noopener noreferrer" href="#" className="block">
            <h3 className=" font-semibold">
              {" "}
              <span className="mr-1 text-xl text-[#07a7a7]">
                {" "}
                Location:{" "}
              </span>{" "}
              {foods.location}
            </h3>
          </p>

          {/* modal */}

          <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn w-full bg-[#0664738e] text-xl text-[#195e5e]"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              {" "}
              Request
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12">
                {/* <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Click the button below to close</p> */}
                <div className="modal-action">
                  <div method="dialog">
                    {/* if there is a button, it will close the modal */}

                    <form onSubmit={handleRequest}>
                      {/* photo url and status*/}
                      <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text"> Food Image</span>
                          </label>
                          <label className="input-group">
                            <input
                              readOnly
                              type="text"
                              defaultValue={foods.photo}
                              name="photo"
                              placeholder="Food URL"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                          <label className="label">
                            <span className="label-text"> Food Status</span>
                          </label>
                          <label className="input-group">
                            <input
                              readOnly
                              type="text"
                              name="status"
                              defaultValue={foods.status}
                              placeholder=" Food Status"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
                      </div>
                      <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text"> Food Name</span>
                          </label>
                          <label className="input-group">
                            <input
                              readOnly
                              type="text"
                              defaultValue={foods.name}
                              name="name"
                              placeholder="food name"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                          <label className="label">
                            <span className="label-text">Food Quantity</span>
                          </label>
                          <label className="input-group">
                            <input
                              readOnly
                              type="text"
                              defaultValue={foods.quantity}
                              name="quantity"
                              placeholder="Food Quantity"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
                      </div>

                      {/* form description and price row */}
                      <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text">Pickup Location</span>
                          </label>
                          <label className="input-group">
                            <input
                              readOnly
                              type="text"
                              name="location"
                              defaultValue={foods.location}
                              placeholder="location"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                          <label className="label">
                            <span className="label-text">
                              {" "}
                              Expired Date/Time
                            </span>
                          </label>
                          <label className="input-group">
                            <input
                              readOnly
                              type="date"
                              defaultValue={formatDate(foods.date)}
                              name="date"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
                      </div>
                      {/* form rating and customization row */}
                      <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text">Additional Notes</span>
                          </label>
                          <label className="input-group">
                            <input
                              type="text"
                              name="notes"
                              defaultValue=""
                              placeholder="Additional Notes"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                          <label className="label">
                            <span className="label-text">Donator Image</span>
                          </label>
                          <label className="input-group">
                            <input
                              readOnly
                              type="text"
                              name="photoURL"
                              placeholder="PhotoURL"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
                      </div>

                      {/* form name, email */}
                      <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text">User Name</span>
                          </label>
                          <label className="input-group">
                            <input
                              readOnly
                              type="text"
                              name="displayName"
                              placeholder="displayName"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                          <label className="label">
                            <span className="label-text">Request Date</span>
                          </label>
                          <label className="input-group">
                            <input
                              type="date"
                              defaultValue={formatDate(foods.deadline)}
                              name="deadline"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
                      </div>

                      <input
                        type="submit"
                        value="Request"
                        className="btn btn-block"
                      />
                    <Link to="/availableFood">
                    <button className="btn w-full mt-2">Close</button>
                    </Link>
                    </form>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
