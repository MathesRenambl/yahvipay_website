import React, { useState } from 'react'
export const FAQ = () => {
    const [open,setOpen]=useState(null);
    function accordian(index){
        if (open===index){
            setOpen(null);
        }
        else{
            setOpen(index);
        }
    };

    const faqData=[
      {
          question:"When can I withdraw the amount?",
          answer:"Customer transactions are reflected on the Business and Agent app in real time. The business App owner can withdraw the cash any number of times in a day. If there is a ongoing EMI, then the payment will need to be held back by the business owner for End of day settlement."
      },
      {
          question:"Customer has performed a transaction, but I did not receive the amount yet?",
          answer:"Check the sender UPI payment app if the payment has been successful. If not, wait for the amount to be reversed. In case of issues on the YahviPay side, you can raise a ticket or reach out to area manager via phone."
      },
      {
          question:"The QR code is not working? How can I replace it?",
          answer:"We will provide replacement for the QR stickers if they are worn out. Our support team will coordinate with you for further assistance."
      },
      {
          question:"How can I get a Soundbox?",
          answer:"Business use 4G enabled soundbox to confirm transactions. You can go to the product section and place your order. Customer support will reach out to you on the next steps."
      },
      {
          question:"How can I get a loan",
          answer:"Business should use our QR to receive payments for atleast 6 weeks, and depending on the transaction volume and KYC verification you will be approved for a loan."
      }
  ];
  
  return (
    <div className='container-xxl py-5' id='faq'>
        <div className="Container">
        <h2 className="accordion__heading">Frequently Asked Questions</h2>
          <br />
          {faqData.map((item,index)=>(
            <div className={`accordion__item ${open === index ? "accordion__item--active" : ""}`} key={index}>

            <button className="accordion__btn" onClick={()=>accordian(index)}>
              <span className="accordion__caption">{item.question}</span>
              <span className="accordion__icon">
                <i className={open === index ? 'fa fa-times' : 'fa fa-plus'}></i></span>
            </button>
            
                <div className="accordion__content"
                >
                    <p>{item.answer}</p>
                    
                    </div>
            </div>
          ))}

          </div>

          </div>
          


  )
};
