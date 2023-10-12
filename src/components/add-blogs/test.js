import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../provider/AuthProvider';
import UseTitle from '../../hooks/UseTitle';

const AddToy = () => {
        const {user } = useContext(AuthContext);
        UseTitle('Add Toy')



    const handleAddToy = event =>{
            event.preventDefault();

            const form = event.target;
            const name = form.name.value;
            const price = form.price.value;
            const seller = form.seller.value;
            const email = form.email.value;
            const category = form.category.value;
            const subCategory = form.subCategory.value;
            const details = form.details.value;
            const quantity = form.quantity.value;
            const rating = form.rating.value;
            const photo = form.photo.value;


            const newToy = {name,price,seller,email,category,subCategory,details,quantity,rating,photo,
            }



            console.log(newToy);


                // send data to the server
                fetch('https://crescendo-the-musical-toy-server.vercel.app/toy', {
                    method: 'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(newToy)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.insertedId){
                        Swal.fire({
                            title: 'Success!',
                            text: 'User added successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                    }
                })





    }


    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add a Toy</h2>
            <form onSubmit={handleAddToy}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seller" defaultValue={user.seller} placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" defaultValue={user.email} placeholder=" Seller Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subCategory" placeholder=" Sub category" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>




                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>




                {/* form Photo url row */}
                <div className="mb-8 md:flex">

                <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                   
                </div>
                <input type="submit" value="Add Toy" className="btn btn-block" />

            </form>
        </div>
    );
};

export default AddToy;