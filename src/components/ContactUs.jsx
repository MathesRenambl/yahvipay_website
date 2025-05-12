import React, { useState } from 'react'

export const ContactUs = () => {

    const [formData,setFormData]=useState({name:'',email:'',subject:'',message:''});

    const [successmessage,setSuccessMessage]=useState('');
    const [errormessage,setErrorMessage]=useState('');
    const handleChange=(e)=>{
        setFormData((prev)=>({
            ...prev,
            [e.target.id]:e.target.value
        }))
    };
    const sendMail=(e)=>{
        e.preventDefault();

        if (!formData.name||!formData.email||formData.subject||formData.message){
            setErrorMessage('Please fill out all fields');
            setSuccessMessage('');
        }
    else{
    setSuccessMessage('Message sent successfully');
    setErrorMessage('');

            setFormData({name:'',email:'',subject:'',message:''});
        }
    };
    
  return (
    <div className="container-xxl py-5" id="contact">
      <div className="container py-5 px-lg-5">
        <div className="text-center" data-wow-delay="0.1s">
          <h5 className="text-primary-gradient fw-medium">Contact Us</h5>
          <h1 className="mb-5">Get In Touch!</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div data-wow-delay="0.3s">
              <form onSubmit={sendMail}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: '150px' }}
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                </div>

                <div className="col-12 text-center" style={{ margin: '10px' }}>
                  {successmessage && (
                    <div className="alert alert-success" role="alert">
                      <input
                        className="txt-style text-center"
                        type="text"
                        value={successmessage}
                        style={{ fontWeight: 500, width: '100%' }}
                        disabled
                      />
                    </div>
                  )}
                  {errormessage && (
                    <div className="alert alert-danger" role="alert">
                      <input
                        className="txt-style text-center"
                        type="text"
                        value={errormessage}
                        style={{ fontWeight: 500, width: '100%' }}
                        disabled
                      />
                    </div>
                  )}

                  <button
                    className="btn btn-primary-gradient rounded-pill py-3 px-5"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
