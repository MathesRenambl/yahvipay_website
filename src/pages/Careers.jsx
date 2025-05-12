import React, { useState } from 'react';
import './Careers.css';

export const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobData = [
    {
      title: "Software Developer Intern",
      jobId: "15235",
      experience: "0 to 3 years",
      ctc: "1 to 2 LPA",
      location: "Chennai,IN",
      qualification: [
        "Pursuing degree in Computer Science or related field.",
        "Familiar with Java, Python, or C++.",
        "Strong communication and collaboration skills.",
        "Analytical mindset and problem-solving abilities."
      ],
      keyresponsibilites:[
        "Collaborate with the development team to design, develop, test, and maintain software solutions.",
        "Learn and apply industry best practices in software development."
      ]
    },
    {
      title: "Marketing Executive",
      jobId: "15236",
      experience: "0 to 3 years",
      ctc: "1.8 to 3 LPA",
      location: "Chennai,IN",
      qualification: [
        "Bachelor's degree in Marketing, Business, Communications, or a related field.",
        "A focus on data-driven decision-making and continuous improvement in marketing strategies.",
        "Good communication and teamwork abilities.",
        "Eagerness to learn and adapt to new challenges."
      ],
      keyresponsibilites:[
        "Ability to use data analytics to measure the effectiveness of marketing campaigns.",
        "A commitment to ethical marketing practices and adherence to industry regulations."
      ]
    },
    {
      title: "Support Engineer",
      jobId: "15237",
      experience: "0 to 3 years",
      ctc: "1.5 to 2 LPA",
      location: "Chennai,IN",
      qualification: [
        "Bachelor's degree in any related field.",
        "Excellent problem-solving abilities to address customer inquiries and troubleshoot technical problems.",
        "Clear and concise communication skills to interact with customers and provide solutions.",
        "Basic Computer Knowledge and Excel skills are added advantage."
      ],
      keyresponsibilites:[
        "A strong focus on customer satisfaction and a commitment to delivering high-quality support.",
        "The capability to convey technical information in a non-technical manner."
      ]

    },

    
  ];

  const openModal = (job) => {
    setSelectedJob(job);
    const modal = new bootstrap.Modal(document.getElementById('jobModal'));
    modal.show();
  };

  return (
    <div>
      <div className='careers_container'>
        <div>
          <h1 className='heading'>Join Our Team</h1>
          <p className='description'>
            Our goal is to create a workplace where you’re not just an employee, but a valued member of a supportive team. Together, we grow, learn, and celebrate every success. Come be part of something greater – a place where your contributions truly make an impact.
          </p>
          <a href="#job" className="opening">View Openings</a>
        </div>
      </div>

      <div className='careers_container'>
    <h1 className='j1' id="job">Our Job Opening</h1>
    <p className='description'>Join Our Team</p>
    <div className='job-card-container'>
          {jobData.map((job, index) => (
            <div className='job-card' key={index}>
              <h3 className="job-title">{job.title}</h3>
              <hr />
              <ul>
                <li>Job Id : {job.jobId}</li>
                <li>Experience : {job.experience}</li>
                <li>CTC : {job.ctc}</li>
                <li>Location : {job.location}</li>
              </ul>
              <button className="opening" onClick={() => openModal(job)}>View Job</button>
            </div>
          ))}
        </div>

        {/*How to apply*/}
          <div>
    
          <h1 className='heading' style={{marginTop:'50px'}}>How to Apply?</h1>
          <p className='description_2'>
          Browse our available roles and take the next step in your career journey. Submit your resume and a short cover letter to <a href="mailto:support@renambl.com">support@renambl.com</a> — we’d love to hear from you.
          </p>
          </div>
      </div>

      {/* Bootstrap model */}
      <div className="modal fade" id="jobModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            {selectedJob && (
              <>
                <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title fw-bold text primary" >{selectedJob.title}</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body pt-2">
                  <div className='mb-3'>
                  <p className='mb-1'><strong>Job Id:</strong> {selectedJob.jobId}</p>


                  <p className='mb-1'><strong>Experience:</strong> {selectedJob.experience}</p>
                  <p className='mb-1'><strong>CTC:</strong> {selectedJob.ctc}</p>
                  <p className='mb-1'><strong>Location:</strong> {selectedJob.location}</p>

                  </div>

                  <div >
                  <h6 >Qualifications:</h6>
                  <ul >
                    {selectedJob.qualification.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                  </div>
                  

                  <div >
                  <h6>Key Responsibitites</h6>
                  <ul >
                    {selectedJob.keyresponsibilites.map((q,i)=>(
                        <li key={i}>{q}</li>
                    ))}
                  </ul>
                    </div>

                  <div className='text-center mt-4' >

                  <a href="mailto:support@renambl.com" className="opening" style={{backgroundColor:"#e32f45",color:'white',display:"inline-block"}}>Apply now</a>

                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>



      
    </div>
  );
};
