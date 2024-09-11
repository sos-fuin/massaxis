import { KTIcon } from '@/helper/icon'
import React from 'react'
import './privacy-list.scss'

export function PrivacyList() {
  return (
    <div className="ms-container">
      <div className="ms-privacy">
        <h3 className="h-heading">
          <span className="marked">Privacy </span> Policy
        </h3>
        <p className="l-desc">
          Welcome to Mass Axis CRM! These Terms of Use govern your access to and use of our services, including our
          website, applications, and any other services we offer (collectively, the &quot;Services&quot;). By using our
          Services, you agree to these Terms of Use. If you do not agree to these Terms, you may not use our Services.
        </p>

        <ul className="ms-privacy-list">
          <List
            h5="1. Acceptance of Terms"
            dc="By accessing or using our Services, you agree to be bound by these Terms of Use and our Privacy Policy. If you are using our Services on behalf of an organization, you agree to these Terms on behalf of that organization and warrant that you have the authority to bind that organization to these Terms."
          />
          <List
            h5="2. Changes to Terms"
            dc={`We may modify these Terms at any time. We will notify you of changes by posting the updated Terms on our website and updating the "Effective Date." Your continued use of the Services after the changes become effective constitutes your acceptance of the new Terms.`}
          />
          <List
            h5="3. Use of Services"
            dc="You agree to use our Services only for lawful purposes and in accordance with these Terms. You must not use our Services:">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 lg:gap-y-10 mt-5">
              <ListIcon dc="In any way that violates any applicable federal, state, local, or international law or regulation." />
              <ListIcon dc="To exploit, harm, or attempt to exploit or harm minors in any way by exposing them to inappropriate content or otherwise." />
              <ListIcon dc="To send, knowingly receive, upload, download, use, or re-use any material that does not" />
              <ListIcon dc="To transmit or procure the sending of any advertising or promotional material without our prior written consent." />
            </div>
          </List>
          <List
            h5="4. User Accounts"
            dc="To access certain features of our Services, you may be required to create an account. You must provide accurate and complete information and keep your account information updated. You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account."
          />
          <List
            h5="5. Subscription and Payment"
            dc="Some parts of our Services are available on a subscription basis. By subscribing, you agree to pay the fees specified at the time of subscription. All fees are non-refundable except as required by law. We reserve the right to change our subscription plans and the fees for our Services at any time."
          />
          <List
            h5="6. Intellectual Property"
            dc="All content, features, and functionality of the Services, including but not limited to text, graphics, logos, icons, and images, are the exclusive property of Mass Axis or its licensors and are protected by copyright, trademark, and other intellectual property laws."
          />
          <List
            h5="7. Termination"
            dc="We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Services will cease immediately."
          />
          <List
            h5="8. Disclaimer of Warranties"
            dc={`Our Services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.`}
          />
          <List
            h5="9. Limitation of Liability"
            dc="In no event shall Mass Axis, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services."
          />
          <List
            h5="10. Governing Law"
            dc="These Terms shall be governed and construed in accordance with the laws of the United States of America, without regard to its conflict of law provisions."
          />
          <List
            h5="11. Compliance with Law"
            dc="Subscriber agrees to use the Services in accordance with all applicable federal, state, and local laws and regulations and industry standards. Without limiting the generality of the foregoing, Subscriber will use the Services in compliance with the Telephone Consumer Protection Act of 1991 (“TCPA”) and all regulations implementing the TCPA, other teleservices laws and regulations, and privacy and data security laws and regulations. Subscriber bears sole responsibility for compliance with applicable laws and regulations and sole liability for any and all communications sent using the Services."
          />
          <List
            h5="12. Export Laws and International Privacy"
            dc="Subscriber agrees to fully comply with all U.S. and other applicable export laws and regulations. Subscriber is not permitted to use the Services in connection with the processing of personal data of an EU, EEA, UK, or Swiss data subject or of any person located outside the United States of America."
          />
          <List h5="13. Contact Us" dc={`If you have any questions about these Terms, please contact us at:`}>
            <p className="l-dc"> Mass Axis</p>
            <p className="l-dc">Country of United </p>
            <p className="l-dc " style={{ textDecoration: 'underline' }}>
              Statessupport@massaxis.com
            </p>
          </List>
        </ul>
      </div>
      <div className="ms-privacy">
        <h3 className="h-heading">
          <span className="marked">Terms and </span> Condition
        </h3>
        <p className="l-desc">
          Welcome to Mass Axis CRM! These Terms of Use govern your access to and use of our services, including our
          website, applications, and any other services we offer (collectively, the &quot;Services&quot;). By using our
          Services, you agree to these Terms of Use. If you do not agree to these Terms, you may not use our Services.
        </p>

        <ul className="ms-privacy-list">
          <List
            h5="1. Services Provided"
            dc="The Service Provider agrees to provide the following services to the Client">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 lg:gap-y-10 mt-5">
              <ListIcon dc="Access to the Mass Axis CRM platform" />
              <ListIcon dc="Features including contact management, sales pipeline management, SMS automation, and more as listed in the feature set" />
              <ListIcon dc="Customer support via live chat and other available channels" />
              <ListIcon dc="Regular updates and maintenance to ensure the platform’s optimal performance" />
            </div>
          </List>
          <List
            h5="2. Term and Termination"
            dc={`This Agreement will commence on the date of execution and will continue until terminated by either party. Either party may terminate this Agreement with 30 days' written notice. The Service Provider reserves the right to terminate the Agreement immediately if the Client breaches any terms of this Agreement.`}
          />
          <List
            h5="3. Fees and Payment"
            dc="he Client agrees to pay the fees for the selected subscription plan as outlined on the Mass Axis CRM pricing page. Payments are due monthly/annually in advance. Failure to make timely payments may result in suspension or termination of access to the services."
          />
          <List h5="4. Client Responsibilities" dc="The Client agrees to">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 lg:gap-y-10 mt-5">
              <ListIcon dc="Provide accurate and complete information when registering for the service" />
              <ListIcon dc="Maintain the confidentiality of their login credentials" />
              <ListIcon dc="Use the services in compliance with all applicable laws and regulations" />
              <ListIcon dc="Notify the Service Provider immediately of any unauthorized use of their account" />
            </div>
          </List>
          <List
            h5="5. Data and Privacy"
            dc=" The Service Provider will take reasonable measures to protect the Client's data. The Client acknowledges that the Service Provider may collect and use data as necessary to provide the services. The Client retains ownership of their data and can export it as needed.5. ConfidentialityBoth parties agree to keep confidential any proprietary information received from the other party and not to disclose it to any third party without prior written consent."
          />
          <List
            h5="6. Limitation of Liability"
            dc="The Service Provider shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to the use or inability to use the services, even if advised of the possibility of such damages. The Service Provider’s total liability to the Client for any damages shall not exceed the amount paid by the Client in the preceding 12 months."
          />
          <List
            h5="7. Warranties"
            dc="The Service Provider warrants that the services will perform substantially in accordance with the documentation. The Service Provider does not warrant that the services will be error-free or uninterrupted."
          />
          <List
            h5="8. Governing Law"
            dc={`Governing LawThis Agreement shall be governed by and construed in accordance with the laws of Unite State of America .. Any disputes arising out of this Agreement shall be resolved in the courts of Unite State of America .`}
          />
          <List
            h5="9.Amendments"
            dc="The Service Provider reserves the right to amend this Agreement at any time. The Client will be notified of any changes, and continued use of the services after such notice will constitute acceptance of the amended terms."
          />
          <List h5="10. Miscellaneous">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 lg:gap-y-10">
              <ListIcon dc="This Agreement constitutes the entire agreement between the parties and supersedes all prior agreements and understandings." />
              <ListIcon dc="If any provision of this Agreement is found to be unenforceable, the remaining provisions will remain in effect." />
              <ListIcon dc="The failure of either party to enforce any right or provision of this Agreement will not be deemed a waiver of such right or provisions." />
            </div>
          </List>
        </ul>
      </div>
    </div>
  )
}

const List = ({ h5, dc, children }: { h5: string; dc?: string; children?: React.ReactNode }) => {
  return (
    <li>
      <h5 className="h-su-head">{h5}</h5>
      <p className="l-dc">{dc}</p>
      {children}
    </li>
  )
}

const ListIcon = ({ dc }: { dc: string }) => {
  return (
    <div className="flex gap-3">
      <KTIcon iconName="check-circle" className="text-skin-color-blue text-3xl" />
      <p className="l-dc">{dc}</p>
    </div>
  )
}
