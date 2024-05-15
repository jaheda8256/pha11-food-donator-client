import { Typewriter } from 'react-simple-typewriter';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const AddFood = () => {

    const { user } = useAuth() || {};

    const handleAddFood = (event) => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const status = form.status.value;
        const name = form.name.value;
        const email = user.email;
        const  location = form.location.value;
        const quantity = parseInt(form.quantity.value);
        const date = form.date.value;
        const notes = form.notes.value;
        const  photoURL = user?.photoURL;
        const  displayName = user?.displayName;
        
    
        const addFoods= {
        photo,
        status,
        name,
        location,
        quantity,
        date,
        notes,
        photoURL,
        displayName,
        email,
        
        };
        // console.log(addFoods);
    
      //   // send data to the server
        fetch('https://food-server-rho.vercel.app/foods', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(addFoods)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'food added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
      }


    return (
        <div>
            
          <Helmet>
                <title>Foods Project | AddFood</title>
            </Helmet>
          <div className="bg-[#0664738e] text-[#195e5e] p-16 my-16 mx-2 rounded-md">
    
        <h2 className="text-4xl font-lato text-center font-extrabold mb-6"> <span style={{ color: '', fontWeight: 'bold' }}>
          <Typewriter
            words={['Add a Food']}
            loop={1000000}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
          />
        </span></h2>

        <form onSubmit={handleAddFood}>
            {/* photo url and status*/}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text"> Food Image</span>
              </label>
              <label className="input-group">
                <input
                required
                  type="text"
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
                required
                  type="text"
                  name="status"
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
                required
                  type="text"
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
                required
                  type="number"
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
                required
                  type="text"
                  name="location"
                  placeholder="location"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text"> Expired Date/Time</span>
              </label>
              <label className="input-group">
                <input
                required
                  type="date"
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
                required
                  type="text"
                  name="notes"
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
                <span className="label-text">User Email</span>
              </label>
              <label className="input-group">
                <input
                readOnly
                  type="email"
                  name="email"
                  placeholder="User Email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>


          <input type="submit" value="Add Food" className="btn btn-block" />
        </form>
      </div>
        </div>
    );
};

export default AddFood;