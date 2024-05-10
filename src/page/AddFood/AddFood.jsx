import { Typewriter } from 'react-simple-typewriter';

const AddFood = () => {
    return (
        <div>
          <div className="bg-[#6aacac] text-[#195e5e] p-16 my-16 mx-2 rounded-md">
    
        <h2 className="text-3xl font-pop text-center font-extrabold"> <span style={{ color: '', fontWeight: 'bold' }}>
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

        <form >
            {/* photo url */}
        <div className="mb-8">
            <div className="form-control w-full">
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
          </div>
          {/* form name and subcategory name */}
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
                  type="text"
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
                required
                  type="text"
                  name="userPhoto"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form processing time and stock stactus */}
          {/* <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Travel_time</span>
              </label>
              <label className="input-group">
                <input
                required
                  type="text"
                  name="travel"
                  placeholder="travel_time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">TotalVisitorsPerYear</span>
              </label>
              <label className="input-group">
                <input
                required
                  type="text"
                  name="totalVisitorsPerYear"
                  placeholder="totalVisitorsPerYear"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div> */}
{/* form name, email */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <label className="input-group">
                <input
                required
                  type="text"
                  name="userName"
                  placeholder="User Name"
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