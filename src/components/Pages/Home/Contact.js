import React from 'react';
import contact from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section style={
            {
                background: `url(${contact})`
            }
        }>


            <div className="hero min-h-screen my-11">
                <div className="card w-96 mx-auto ">
                    <div className="text-center text-white ">
                        <h3 className='text-secondary text-xl font-bold uppercase'>Contact Us
                        </h3>
                        <h2 className='text-4xl'>Stay connected with us</h2>
                    </div>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" placeholder="subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;