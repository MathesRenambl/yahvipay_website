import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import { Footer } from '../components/Footer'

export const TermsAndConditions = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>

    <NavBar/>
    <HeroSection title = {"Terms And Conditions"} displayBanner = {true} displayDownload = {false} />
    <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="text-center" data-wow-delay="0.1s"></div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">1. Introduction:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  Welcome to www.yahvipay.com. The Cashback Service is operated
                  by Renambl Technologies Private Ltd ("We", "Us", "YahviPay" or
                  “Our” where such expression shall unless repugnant to the
                  context thereof, be deemed to include its respective legal
                  heirs, representatives, administrators, permitted successors
                  and assigns). Please read these terms and conditions ("Terms
                  and Conditions" or "Agreement") carefully as they contain the
                  legal terms and conditions that you agree to when you use the
                  service provided by us through the Website and the App
                  (“Platform”, “Website”)
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">2. Membership:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  Our membership is available through the registration process
                  after you submit certain requested information to YahviPay.
                  During registration we display our current Terms and
                  Conditions for your perusal. Please be aware that a member of
                  YahviPay is not allowed to run any paid ads on Google,
                  Facebook or any other platform pointing to YahviPay. If the
                  member does not comply with this then it would result in
                  immediate termination of his/her account.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">3. Your Account:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  YahviPay will deduct GST, referral fees and platform fees
                  before paying the cashback to the customers. We have a
                  transparent policy to show the eligible cashback discount to
                  our customers. In the event the member decides to close the
                  Account with us, we will pay the pending amount to the
                  business.
                </p>
                <p>
                  YahviPay customer can delete their account and associated data using the Android and IOS app under 
                  <b style={{color: "black"}}>
                    {" Settings > Grievance Addressal > Delete account"}</b>. 
                   Please raise a support ticket if you face issues to delete your account. 
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">4. Our Service:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  Cashback Service:<br />
                  Our Cashback Service allows users who register on the Platform
                  ("Members") and therefore create an account with us
                  ("Account") to earn cashback on tracked purchases from
                  retailers on the Platform ("Retailers"). To qualify for
                  cashback, the Retailer must confirm that the Member's purchase
                  is tracked, genuine and successful (constituting a "Qualifying
                  Transaction"), and your resulting cashback must be received by
                  us (becoming “Cashback” as a result). In the event that the
                  Retailers do not track a transaction using their affiliate
                  tracking system, then such sales might not be paid to
                  YahviPay, and hence any due or expected cashback from these
                  sales will also not be paid to the Member. Unique Referral
                  Fee:
                  <br />
                  <br />
                  (Only on customer App) The YahviPay Service also provides a
                  unique referral fee to its customers where the Members get ten
                  per cent cashback on each new Member's Cashback introduced by
                  them in the manner provided on the Platform ("Qualifying
                  Referral") as long as they remain a Member themselves. Please
                  see Clause 6 below for details.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">5. Becoming a Member:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  If You are a natural person, (i) as a condition to Your use of
                  the Platform, You must be 18 (eighteen) years of age or older;
                  and (ii) by visiting the Platform or accepting these Terms and
                  Conditions, You represent and warrant to YahviPay that You are
                  18 (eighteen) years of age or older, and that You have the
                  right, authority and capacity to use the Platform and agree to
                  and abide by these Terms and Conditions; provided however that
                  if You are a parent or legal guardian of a person younger than
                  18 (eighteen) years of age, You are permitted to access and
                  use the Platform for the purposes of procuring the Services,
                  on behalf of such persons. You must register for the Cashback
                  Service using accurate and current information about yourself
                  - including your correct name, address and any other requested
                  details. If you are asked for, and provide, details of a bank
                  account or other payment mode details into which you wish to
                  receive payments. You should keep this information updated
                  through your Account. Generation and collection of ‘Sensitive
                  Personal Data or Information’ is in accordance with
                  Information Technology Act, 2000 as amended from time to time
                  and allied rules require the User’s express consent. By
                  affirming assent to this Policy by clicking on the “I read and
                  agree to Terms and Conditions” button at the time of
                  registration, the User provides consent to such information
                  generation and collection as required under applicable laws
                  Note that your Cashback Receipt Method (such as NEFT or other
                  payment modes as We may introduce) may have rules about the
                  maximum or minimum payment that you can receive through that
                  Cashback Receipt Method.
                  <br />
                  Important: You must ensure that the email address and mobile
                  number we hold for you is kept up-to-date and that you have
                  full access to it - we will be sending you important messages
                  there. If you change email address or mobile number, then you
                  must change the details we hold for you on your Account.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">6. Cashback and Referral Fees:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  After a Member successfully completes a Qualifying
                  Transaction, and once we have received the resulting Cashback
                  for that Qualifying Transaction, we pass that Cashback to the
                  Member through his/her Cashback Receipt Method.
                  <br />
                  Please note that there are various circumstances in which a
                  transaction with a Retailer may not constitute a Qualifying
                  Transaction, or Cashback may not result from it. This is also
                  true for a Qualifying Referral. The Member understands that
                  all transactions made by him/her are not with us, but with the
                  individual Retailer. Our help pages provide further
                  information about these circumstances. Further, from time to
                  time Retailers may increase or decrease the commission paid –
                  in which case the cashback offer illustrated on our Platform
                  may be incorrect. By default, your applicable transactions
                  will be credited in line with the commission reported to us by
                  the Retailer, which may be more or less than the advertised
                  rate. We shall not be liable for any difference in the
                  expected cashback by the Member and the actual Cashback
                  received by the Member. When we have traced a paying,
                  Qualifying Transaction to your Account, we will credit your
                  Account with a 'pending payment'. Once the Retailer confirms
                  the transaction, the payment will be marked as 'Paid'. If the
                  goods are returned or the sale reversed or amended by any
                  means, then the cashback payment will not be reversed. Apart
                  from the Retailer, it is also mandatory for the members to
                  intimate YahviPay about any returns or exchanges for which
                  they might have earned cashback unduly. Whether a transaction
                  shall qualify as a Qualifying for cashback Transaction
                  (including cashback through a Qualifying Referral) shall be at
                  the sole discretion of the Retailer or us and the Member
                  understands and agrees to the same. We shall not be held
                  responsible if the Retailer fails to report a sale to us or
                  does not qualify a transaction as Qualifying Transaction.
                  Further, we shall not be responsible in the event due to some
                  technical or other error we cannot trace a sale back to the
                  Member and does not qualify the transaction as a Qualifying
                  Transaction or a Qualifying Referral for any reason
                  whatsoever. Whilst we will endeavour to recuperate
                  non-payments from the Retailer, the decision of ourselves, the
                  Retailer or Retailer's tracking agent is final. Whilst we will
                  try and recuperate missing commissions, at any point we
                  reserve the right not to chase missing commission claims,
                  particularly where no purchase has been made. Further, in the
                  event that the Retailer feels that the purchase is not genuine
                  for any reason whatsoever and we do not receive any Cashback
                  for the transaction, the Member will not receive any Cashback.
                  <br />
                  When a Member sends us an enquiry on missing cashback, our
                  system would check if the user had an exit click from our
                  Platform for that store on the date mentioned by the user. If
                  no exit clicks can be tracked, then we will show a message to
                  the Member indicating that they did not click via our website
                  to earn cashback prior to the sale. All exit clicks to stores
                  are saved in the database for cross reference on adding
                  cashback values. Where a commission enquiry has been
                  successfully paid by a Retailer, you may receive a lower
                  amount than expected; this is due to the amounts received by
                  ourselves possibly being lower than the original claim. We do
                  allow you to query this with us. If a Retailer still hasn't
                  paid a manual commission claim after a period of six months,
                  then we reserve the right to close the enquiry claim. All
                  payment for Missing Cashback is only applicable in instances
                  where the Retailer pays YahviPay. We reserve the right to
                  reclaim or make balance adjustments accordingly where it has
                  been established that any credit has been applied in error.
                  This will include but is not limited to transactions where the
                  credit is not genuinely due or payment for any credited
                  transaction has not been received from a Retailer or its
                  agencies and/or misuse or fraud. This can include transactions
                  which are already marked as payable or validated in your
                  Account, or for transactions which have already been paid over
                  to you by NEFT or any other payment modes as we may introduce
                  from time to time. In all such incidents, YahviPay has the
                  right to recover all unduly paid cashback which the member is
                  not entitled to earn, through legal proceedings. There are
                  various circumstances in which Cashback will not be payable to
                  the Member, and will be forfeited to us, these could be,
                  without limitation: where the cashback payment that we receive
                  is not attributed to a Qualifying Transaction or associated
                  with an Account (such as where the Member is not logged-in to
                  our Platform when making the relevant purchase)
                  <br />
                  the transaction to which the Cashback relates is cancelled
                  after it has been entered into (whether under the right of
                  cancellation that applies to some sales made at a distance, or
                  otherwise) the Cashback is attributed to a Member or Account
                  that has been: suspended by us under Clause 9 of this
                  Agreement or for any other reason; associated with any
                  fraudulent activity or any breach of this Agreement;
                  <br />
                  <br />
                  Our help pages provide further information about these
                  circumstances.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">7. Intellectual Property:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  You acknowledge that all copyright, trademarks, and other
                  intellectual property rights in and relating to the Platform
                  (including the material which is contributed by Members or
                  Retailers) are owned by, or licensed to, us. It is easy to
                  copy material which appears on web-sites, but this does not
                  mean it is legal. Therefore, no-one may copy, distribute, show
                  in public or create any derivative work from the Platform, or
                  any of the material which is found on the Platform unless
                  properly licensed to do so by us. By uploading or including
                  any material on the Platform, a Member expressly grants:
                  <br />
                  to us a non-exclusive license (including the right to grant
                  sub-licenses) to use, reproduce and distribute that material
                  through our Cashback Service and any other interactive
                  services through which we or our sub-licensee make the
                  Cashback Service (or a service based on our service)
                  available; and to other Members (through us, under the license
                  referred to in a. above), the non-exclusive, personal,
                  non-transferable right to view the relevant material.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">8. Privacy Policy:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  Our Privacy Policy forms part of this Agreement, and by
                  entering into this Agreement you also give your consent to the
                  way we handle your personal data under that policy. Given the
                  global nature of the World Wide Web, please note that a
                  posting on the Platform may be accessible to internet users
                  around the world.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">9. Our Role:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  We deal only on the cashback amount from the Retailers, and
                  are not the seller or supplier of any of the goods or services
                  that they make available. Thus, we do not have any of the
                  legal obligations that apply to the sellers of those goods or
                  services.
                  <br />
                  Accordingly, we have no control over or responsibility for:
                  <br />
                  the quality, safety, or legality of those goods or services
                  available from Retailers; or whether the Retailer can or will
                  supply and pass good titles to any goods or services.
                  <br />
                  <br />
                  Members should exercise no lesser degree of caution in
                  entering into transactions with Retailers than they would when
                  entering into a similar transaction offline. To the extent
                  that the Applicable Law permits, you release us, our agents
                  and employees from all liability arising out of or in
                  connection with any transactions with Retailers, including
                  (without limitation) all claims and demands relating to
                  uncompleted or completed transactions with Retailers, or goods
                  or services offered for sale or supply, or actually sold or
                  supplied, through or in connection with any transactions with
                  Retailers.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">10. Misuse:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  We reserve the right to suspend or terminate any Members
                  access to our service, or parts of it, if in our reasonable
                  view the relevant Member or Account appears to be in breach of
                  any provision of this Agreement.
                  <br />
                  Members must not enter into, or attempt to enter into, any
                  transaction with a Retailer or to gain Cashback (a) by
                  providing personal information of someone else, or a payment
                  method which they are not entitled to use, (b) by deceptively
                  or unfairly exploiting a Retailers’ offering including but not
                  limited to creating fake or unauthorized referral links, or
                  (c) in breach of any terms and conditions applied by us or the
                  Retailer to that transaction. We reserve the right to forfeit
                  any pending payments or validated payments in the Member's
                  Account in case of such misuse of our service by the Member.
                  <br />
                  It is each Member's obligation to ensure that any material
                  posted by him/her or associated with his/her Account:
                  <br />
                  is not defamatory, offensive, or abusive or of an obscene,
                  indecent or menacing nature;
                  <br />
                  is not intended or likely to cause needless annoyance,
                  inconvenience or distress to any person;
                  <br />
                  does not contain any computer virus, macro virus, Trojan
                  horse, worm, or anything else designed to interfere with,
                  interrupt, or disrupt the normal operating procedures of a
                  computer or to surreptitiously intercept, access without
                  authority, or expropriate any system, data or personal
                  information;
                  <br />
                  does not contravene the Applicable Law or regulation
                  (including, but not limited to, laws governing consumer
                  protection, distance selling, unfair competition,
                  anti-discrimination, false advertising, copyright, trademark
                  and privacy);
                  <br />
                  does not contravene the Applicable Law or regulation
                  (including, but not limited to, laws governing consumer
                  protection, distance selling, unfair competition,
                  anti-discrimination, false advertising, copyright, trademark
                  and privacy);
                  <br />
                  where it constitutes feedback on a Retailer, is accurate and
                  fair; and
                  <br />
                  does not advertise any goods or services.
                  <br />
                  <br />
                  Notwithstanding anything contained elsewhere in this Agreement
                  and the Privacy Policy, we reserve the right to investigate
                  complaints or reported violations of this Agreement and to
                  take any action we deem appropriate, including but not limited
                  to reporting any suspected unlawful activity to law
                  enforcement officials, regulators, or other third parties and
                  disclosing any information necessary or appropriate to such
                  persons or entities relating to your Account, email addresses,
                  usage history, posted materials, IP addresses and traffic
                  information. Any Member, who in the sole discretion of the
                  Retailer or us, has committed fraud in use of the Platform or
                  our Cashback Service or misused the Platform or the Cashback
                  Service, their Account will be closed, email and IP address
                  will be blacklisted so they cannot use it again and cannot
                  register from the same PC.
                  <br />
                  If you see or experience anything on our Platform that appears
                  to infringe any of the above requirements, we would like you
                  to inform us by using our contact form. Each Member
                  acknowledges that we are entitled, but not obliged, to
                  withdraw any material, which appears - based on information
                  received from third parties or other Members - to be in breach
                  of this Agreement.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">11. Contact from third parties:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  If anyone contacts us in relation to material or transactions
                  associated with you or your Account, then you agree:
                  <br />
                  to provide all reasonable information and assistance we may
                  require in connection with responding to that contact; and
                  <br />
                  to respond promptly and accurately to it, should we pass the
                  message to you for a response.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">12. Additional services:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  We or our partners may offer new or additional services
                  through the Platform from time to time. Your use of those
                  services may be subject to additional terms and conditions,
                  which you must comply with. Provided that those terms are
                  notified to you on the Platform in an appropriate manner (as
                  determined by us in our reasonable discretion) when you agree
                  to take those services, any failure by you to comply with a
                  material provision of the terms governing those services will
                  amount to a breach of this Agreement.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">13. Operation of our Cashback Service:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  We reserve the right to withdraw, modify or suspend aspects of
                  the Cashback Service, or the entirety of it, where we have
                  legal, security, technical or commercial reasons to do so. We
                  will endeavor to give you 30 days advance notice before taking
                  such action, except where it is necessary to take earlier
                  action for security reasons or because of technical
                  difficulties which would otherwise adversely affect our
                  service. There may also be times when the Cashback Service
                  becomes inaccessible as a result of technical difficulties
                  experienced by us or on the Internet; we will, however, use
                  reasonable skill and care to overcome these difficulties where
                  they are within our control. Please note, however, that we
                  cannot guarantee continuous access to the Cashback Service or
                  any of the content that appears on it.<br />
                  Nevertheless, we will strive to ensure that any periods of
                  planned unavailability, which you will be informed of when you
                  access the Cashback Service at the relevant time, are kept to
                  a minimum. For security or other reasons, we may require you
                  to change password or other information which facilitates
                  access to the Cashback Service; however, we will never ask you
                  for your password via email, telephone, or any other means
                  other than through the Platform. You are solely responsible
                  for maintaining the confidentiality of your password and any
                  additional identifying information.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">
                  14. Disclaimer and Limitation of Liability:
                </h2>
                <h5 className="text-primary-gradient fw-medium">Disclaimer:</h5>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  The content and material from or through the Platform are
                  provided "as-is," "as available," with "all faults", and all
                  warranties, express or implied, are disclaimed (including but
                  not limited to the disclaimer of any implied warranties of
                  merchantability, non-infringement, freedom from error, and
                  fitness for a particular purpose). The information and
                  services may contain bugs, errors, problems or other
                  limitations. We and our affiliated parties have no liability
                  whatsoever for your use of any information or service, except
                  as provided in sub-section 13(d). In particular, but not as a
                  limitation thereof, we and our affiliated parties are not
                  liable for any indirect, special, incidental or consequential
                  damages (including damages for loss of business, loss of
                  profits, savings, litigation, or the like), whether based on
                  breach of contract, breach of warranty, tort (including
                  negligence), product liability or otherwise, even if advised
                  of the possibility of such damages. The negation and
                  limitation of damages set forth above are fundamental elements
                  of the basis of the agreement between us and you. This
                  Platform and the products, services, documents, content and
                  materials and information presented would not be provided
                  without such limitations. No advice or information, whether
                  oral or written, obtained by you from us through the Platform
                  or otherwise shall create any warranty, representation or
                  guarantee not expressly stated in this agreement. All
                  responsibility or liability for any damages caused by viruses
                  contained within the electronic file containing a form or
                  document is disclaimed.
                </p>
                <h5 className="text-primary-gradient fw-medium">Liability:</h5>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  We warrant that the Cashback Service will be provided with
                  reasonable care and skill with the intention of meeting our
                  specifications for the Cashback Service, but we cannot and do
                  not guarantee that the Cashback Service will meet your
                  requirements.
                  <br />
                  We shall be liable as expressly provided in this Agreement,
                  but shall have no other obligation, duty or liability
                  whatsoever in contract, tort (including negligence, breach of
                  statutory duty and any other tort) or otherwise.
                  <br />
                  Limitation of Liability: Subject always to sub-Clause d.
                  below, we shall be liable for direct loss or damage only,
                  whether in contract, tort (including negligence, breach of
                  statutory duty or other tort) or otherwise, and whether caused
                  by its act or omission or that of its employees, agents or
                  subcontractors. The aggregate liability of YahviPay and the
                  affiliated parties in connection with any claim arising out of
                  or relating to the Platform and/or the products, information,
                  documents and services provided herein or hereby shall not
                  exceed Rs 500 and that amount shall be in lieu of all other
                  remedies which you may have against us and any affiliated
                  party to us.
                  <br />
                  We will not be liable to you or anyone else, whether in
                  contract, tort (including negligence, breach of statutory duty
                  or other tort) or otherwise (A) for any loss of revenue,
                  business, anticipated savings or profits; (B)any errors in or
                  omissions from the Platform or any services or products
                  obtainable therefrom; (C) the unavailability or interruption
                  of the Platform or any features thereof; (D) your use of the
                  Platform; (E) the content and materials contained on the
                  Platform; (F) or any delay or failure in performance beyond
                  our control or any of our affiliated parties.
                  <br />
                  for any indirect, special or consequential loss damage, costs
                  or other claims, howsoever caused or arising, whether through
                  non-supply or late supply of the Cashback Service or other
                  non-performance of this Agreement or otherwise.
                  <br />
                  Except as expressly stated elsewhere in this Agreement, all
                  representations, warranties, conditions and other terms,
                  whether express or implied (by common law, statute,
                  collaterally or otherwise) are hereby excluded, except in the
                  case of fraud, or where such exclusion is not permitted by
                  Applicable Law.
                  <br />
                  For the avoidance of doubt, we will not have liability to you
                  or any other person in respect of material contributed by
                  Members, transactions (or non-transactions) with Retailers, or
                  any activity or communication relating to such material or
                  transactions.
                  <br />
                  <br />
                  The provisions of this Clause 14 shall survive the termination
                  or expiry of this Agreement.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">15. Third Party Content:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  Third party content and materials may appear on the Platform
                  or may be accessible via hyperlinks from the Platform. We are
                  not responsible for and assume no liability whatsoever for any
                  mistakes, misstatements of law, defamation, omissions,
                  falsehood, obscenity, pornography or profanity in the
                  statements, opinions, representations or any other form of
                  content and materials appearing on the Platform or accessible
                  via hyperlinks from the Platform.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">16. Communications:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  You hereby expressly agree to receive communications by way of
                  SMS, e-mails, mobile app and browser notifications, and any
                  other messages from time to time from YahviPay relating to
                  Services provided through the Website.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">17. Indemnity:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  You agree to indemnify us against all liabilities, claims and
                  expenses that may arise out of or in connection with (a) any
                  breach of this Agreement by you or through your Account, or
                  (b) any transaction with a Retailer.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">18. Assignment:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  We reserve the right to assign this Agreement, and to assign
                  or subcontract any or all of our rights and obligations under
                  this Agreement, but will not do so in such a way as to reduce
                  any guarantees you are given under this Agreement. You may not
                  without our written consent assign or dispose of this
                  Agreement, nor subcontract any of your rights and obligations
                  under it.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">19. Entire Agreement:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  This Agreement is intended to contain your entire agreement
                  with us relating to the Cashback Service; we believe it to be
                  fair and reasonable. It replaces all earlier agreements and
                  understandings with you relating to the Cashback Service,
                  except for any fraud or fraudulent representation by either of
                  us.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">20. Changes to this Agreement:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  We reserve the right to change this Agreement from time to
                  time, and post the new version on the Cashback Service. When
                  we do so, we will post the new version of the Agreement on the
                  Cashback Service, and the new version of these terms and
                  conditions will take effect, and will govern the Cashback
                  Service and your relationship with us: commencing no less than
                  three days after the date of posting (or such later date as we
                  indicate in the relevant posting), if any of the changes is to
                  an operative provision of this Agreement which is capable of
                  adversely affecting you; if you do not wish to be governed by
                  the new version of the Agreement, you may notify us on or
                  before the date when the new version of the Agreement is to
                  take effect, and from that date you must cease to use our
                  service or
                  <br />
                  immediately upon the date of posting (or such later date as we
                  indicate in the relevant posting), if the changes are not to
                  operative provisions, or not capable of adversely affecting
                  you - examples of which would include, without limitation,
                  changes to contact details referred to, or the refinement of
                  provisions that are already included, in this Agreement.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">21. General:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  In the event that any term of this Agreement is held to be
                  invalid or unenforceable, the remainder of this Agreement
                  shall remain valid and enforceable. You and us are independent
                  contractors, and no agency, partnership, joint venture or
                  employee-employer relationship is intended or created by this
                  Agreement. Our failure to act with respect to a breach by you
                  or others does not waive our right to act with respect to
                  subsequent or similar breaches.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">22. Governing Law:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  This Agreement, and our relationship with you and each Member,
                  is governed as per the Indian Laws. You and we each submit to
                  the non-exclusive jurisdiction of the Indian courts in
                  relation to disputes arising in connection with this
                  Agreement.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">23. Keeping this Agreement:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>
                  We don't separately file the individual Agreements entered
                  into by Members when they register for the Cashback Service.
                  You can access it at www.yahviPay.com. Please make a durable
                  copy of this Agreement by printing and/or saving a downloaded
                  copy on your own computer. It is offered in English only.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="" data-wow-delay="0.3s">
                <h2 className="mb-4">24. Contact:</h2>
                <p className="mb-4" style={{textAlign:"justify"}}>You can reach us on 'support@renambl.com'.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
