import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Title from '../../components/Title/Title';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
    const navigate = useNavigate();
    const {createUser} = useContext(AuthContext);


    const handleSignUP = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password,photo);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User Login Successfully',
                showConfirmButton: false,
                timer: 1500
              })
            navigate('/')
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="min-h-screen hero" data-aos="flip-right">
            <div className="flex-col hero-content ">
                <Title title="Register now"/>
                <div className="flex-shrink-0 w-full max-w-sm card bg-rose-500 md:w-[600px] shadow-rose-500 shadow-2xl">
                    <form onSubmit={handleSignUP} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo URL" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>

                        </div>
                        <div className="mt-6 form-control">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;