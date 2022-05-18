import React from 'react';
import makeappoinment from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';
import CustomBtn from '../../Shared/CustomBtn';

const MakeAppoinment = () => {
    return (
        <section
            style={
                {
                    background: `url(${makeappoinment})`
                }
            }
            className='my-28 flex justify-center items-center p-3'>
            <div className='flex-1 hidden lg:block'>
                <img src={doctor} alt="image" className=' mt-[-100px] max-w-lg rounded-lg' />
            </div>
            <div className='flex-1 text-white'>
                <h3 className="text-xl font-bold text-primary py-2">Appointment</h3>
                <h2 className="text-3xl">Make an appointment Today</h2>
                <p className='py-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <CustomBtn>Get Started</CustomBtn>
            </div>
        </section>
    );
};

export default MakeAppoinment;