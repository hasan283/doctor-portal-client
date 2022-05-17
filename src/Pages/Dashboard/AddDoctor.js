import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()));


    const imageStorageKey = 'd1ec43e6d21fd3cf13f560b8077ce09d';
    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialization: data.specialization,
                        image: image
                    }

                    // send to database 
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('Access Token')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log('Doctor', inserted);
                            if (inserted.insertedId) {
                                toast.success('Doctor Add Successfully!')
                                reset()
                            } else {
                                toast('Failed Add the Doctor')
                            }
                        })
                }
                console.log('ImageBB', result)
            })
    };
    if (isLoading) {
        return <Loading></Loading>;
    }


    return (
        <div>
            <h2 className="tex-xl">Add A Doctor</h2>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                            type="text" placeholder="Type Your Name" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>




                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a Valid Email'
                                }
                            })}
                            type="email" placeholder="Type Your Email" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                        </label>
                    </div>




                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Specialty</span>
                        </label>
                        <select {...register("specialization")} className="select select-bordered w-full max-w-xs" >
                            {
                                services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
                            }
                        </select>
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Add Doctor Picture</span>
                        </label>
                        <input
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Doctor Photo is Required'
                                }
                            })}
                            type="file" className="w-full max-w-xs" />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                        </label>
                    </div>


                    <button className="btn w-full mt-5 max-w-xs uppercase">Add Doctor</button>
                </form>

            </div >
        </div >
    );
};

export default AddDoctor;