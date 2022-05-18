import React from 'react';
import contact from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section style={
            {
                background: `url(${contact})`
            }
        }>
            

            <div class="hero min-h-screen my-11">
                <div class="card w-96 mx-auto ">
                    <div className="text-center text-white ">
                        <h3 className='text-secondary text-xl font-bold uppercase'>Contact Us
                        </h3>
                        <h2 className='text-4xl'>Stay connected with us</h2>
                    </div>
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Subject</span>
                            </label>
                            <input type="text" placeholder="subject" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Message</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-bordered input-lg w-full max-w-xs" />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;