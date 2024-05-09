import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center mt-32 p-8">
           <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-red-600 text-5xl font-extrabold mb-4">Oops!!! 😨🥵</h2>
    <p className="text-red-400">The name of the page is incorrect. Enter the correct name</p>
    <div className="card-actions justify-end">
    <Link className="btn btn-error" to='/'>Go back to home</Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ErrorPage;