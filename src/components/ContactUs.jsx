import React, { useState } from 'react'

export const ContactUs = () => {

    const [ formData, setFormData ] = useState({name:'',email:'',subject:'',message:''});
    const[successmessage,setSuccessMessage]=useState('');
    const[errormessage,setErrorMessage]=useState('');
    const[submittedvalues,setSubmittedValues]=useState(null);
    
    const handleChange=(e)=>{
        setFormData((prev)=>({
            ...prev,
            [e.target.id]:e.target.value
        }))
    };

    function BackendF(data){
      try{
        const flag=true
        if (!flag){
          throw new Error('Failed to send data');
        }
        console.log(data);
        return {status:'success',data};
      } catch(error){
        return {status:'error',message:error.message}
      }
      }


    const sendMail=(e)=>{
        e.preventDefault();
        const{name,email,subject,message}=formData;
        const nameregex= /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
        if (!nameregex.test(name) || name.length<5)
       {
            setErrorMessage('Name must be at least 5 characters long');
            setSuccessMessage('');
            return;
        }
    const emailregex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailregex.test(email)){
          setErrorMessage('Enter a valid email');
          setSuccessMessage('');
          return;
    }
       if (subject.trim()===''){
          setErrorMessage('Subject is empty');
          setSuccessMessage('');
          return;
        }
    if (message.trim()===''){
      setErrorMessage('Message is empty');
      setSuccessMessage('');
      return;
        }

        const final=BackendF(formData);

        if (final.status==='success'){

        setSubmittedValues({...formData});
        setSuccessMessage('Message sent successfully');
        setErrorMessage('');
        setFormData({name:'',email:'',subject:'',message:''});
        } else{
          setErrorMessage(final.message);
          setSuccessMessage('');
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

              {submittedvalues &&(
                <div className='mt-4 p-4 border rounded bg-light'>
                  <h4>Submitted data:</h4>
                  <p><strong>Name:</strong> {submittedvalues.name}</p>
                  <p><strong>Email:</strong> {submittedvalues.email}</p>
                  <p><strong>Subject:</strong> {submittedvalues.subject}</p>
                  <p><strong>Message:</strong> {submittedvalues.message}</p>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
