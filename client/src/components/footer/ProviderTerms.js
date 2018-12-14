import React, { Component } from 'react'
import styled from 'styled-components'

const ProviderTermsStyle = styled.div`
    margin: 4em 3em .4em 3em;
    h2 {
        color: rgba(14,151,255,1);
        font-size: 2.2em;
        margin: 1em 0 0 0;
    }
    p {
        color: rgba(112,112,112,1);
        font-size: 1em;
        line-height: 1.5;
        margin: .5em auto .5em auto;
    }
`

class ProviderTerms extends Component {
    render() {
        return (
            <ProviderTermsStyle>
                <h2>Provider Terms</h2>
                <p>Last Updated: January 12, 2018</p>
                <p>The Jonny On It mobile application revolutionizes the home services experience. We empower consumers with the ability to secure and effect home repairs almost effortlessly. We use real-time geo-location, satisfaction ratings, and integrated billing to make the home services experience easier and cheaper for customers and more profitable for service providers.</p>
                <p>The following terms and conditions outline your obligations as a Provider and the conditions on which We allow You to access and use the Platform.</p>
                <p>PLEASE READ THESE TERMS CAREFULLY. BY REGISTERING AS A PROVIDER OR OTHERWISE ACCESSING, DOWNLOADING, OR USING THE PLATFORM, YOU AGREE TO BE BOUND BY THESE TERMS. YOU FURTHER AGREE TO BE BOUND BY ALL APPLICABLE LAWS AND REGULATIONS RELATING TO THE PLATFORM AND/OR ANY JOBS THAT YOU PROVIDE TO USERS AS A PROVIDER. IF YOU DO NOT AGREE WITH ANY OF THESE TERMS, YOU ARE PROHIBITED FROM USING OR ACCESSING THE PLATFORM AND YOUR STATUS AS A “PROVIDER” IS HEREBY TERMINATED.</p>
                <h2>Definitions</h2>
                <p>As used in these Terms, the following capitalized terms shall have the meanings set forth below:</p>
                <p>insert table here</p>
                <h2>Modifications of Terms</h2>
                <p>We may modify or update the Terms at any time, with or without notice to You. When We do, We will update the “Last Updated” date at the top and the amended Terms shall be effective as of such date. If You do not agree with the amendments, You are no longer authorized as a Provider and must immediately stop using the Platform and provide Us notice to remove You from Provider directories, distribution lists, and other communications lists and to disable your Provider account. Your continued access and/or use of the Platform after such amendment constitutes your acceptance of and agreement to be bound by the amended Terms.</p>
                <h2>Jobs</h2>
                <p>The Platform enables customers who wish to engage You to perform Jobs to find You and negotiate an Order with You for such Jobs. By using the Platform, You acknowledge that We do not perform Jobs for Users. We do not control or have the right to control what or how You perform Jobs for Users and We do not provide tools, supplies, or materials to You for performing Jobs. Finally, We do not reimburse You for any expenses related to the Jobs.</p>
                <p>No joint venture, partnership, employment or agency relationship exists between You and Jonny On It as a result of these Terms, your use of the Platform, your performance of Jobs, or otherwise. Neither party has any authority to bind the other in any respect.</p>
                <h2>Payment; Taxes; Disputes</h2>
                <p>Payment Processing: By using our Platform, You agree that payment for Jobs will be facilitated via the Platform through a third-party payment processor. Our third-party payment processors charge payment processing fees for each transaction completed through the Platform and such fees will be deducted from each transaction in which You receive a payment from a User. The processing of payments will be subject to the terms, conditions, and privacy policies of our payment processors, in addition to this agreement. You hereby authorize Us to take all action necessary with our payment processor, on your behalf, to effect the transactions contemplated by these Terms or any Order.</p>
                <p>Stripe: Without limiting the generality of the foregoing, Stripe is one of our payment processors. We utilize its Stripe Connect services. You can learn more about Stripe Connect at https://stripe.com/connect. All payments made via Stripe on the Platform are processed according to Stripe’s terms and conditions and Privacy Policy. You expressly authorize and grant Us the right, power, and authority to (acting on your behalf) access and transmit your data to Stripe as reasonably necessary for Us facilitate your use of the Platform. We do not control and are not liable for the security or performance of any of our payment processors or other third party service providers. We reserve the right to correct, or instruct one or more of our payment processors to correct, any errors or mistakes, even if payment has already been requested or received.</p>
                <p>You agree to promptly onboard with Stripe upon our approval of You as a Provider. You hereby authorize Us to share with Stripe any and all information related to You, the Jobs, the Platform, your use of the Platform, the data that You input into the Platform, your Orders, the JOI Fees, all other fees associated with Orders and/or Jobs, and all other information and data about your Platform account, Stripe account, and transactions with Users.</p>
                <p>All payments will be processed through Stripe’s services as described on Stripe’s website. You are responsible for reading and complying with all terms and conditions set forth in the Stripe Connected Account Agreement (https://stripe.com/us/connect-account/legal) and all other terms and conditions of use posted or distributed by Stripe at any time.</p>
                <p>Stripe Instant Payout: In certain situations, we may offer Stripe’s “Instant Payout” service, which allows You to receive payments via accelerated settlement into a bank account linked to Your debit card. The availability of Instant Payout is dependent on several factors, including the terms of your debit card agreement and your bank’s ability to accelerate processing. If you choose to take advantage of Instant Payout, additional fees may be withheld from the payment that you would otherwise receive.</p>
                <p>Payment Collection: We strictly prohibit cash payments, donations, tips, or any exchange of money outside of the Platform between You and any User. You agree that You will not accept cash payments from Users under any condition and that all future monetary and services transactions between You and any User will be through the Platform. This includes any and all future services provided to the User and category of service provided via usage of the Platform (plumbing, electricity, HVAC, painting, etc.). You are responsible for calculation and collection of all applicable taxes and withholding related to the Jobs that You provide to Users and must notify Users of the amount of such taxes and withholdings when providing estimates for Jobs and account for such taxes and withholdings when establishing the fees to be paid by the User through the Platform.</p>
                <p>When You complete the agreed-upon Jobs for a User, You must use the Platform to mark the Jobs as “Job Done”. This will trigger payment collection from the User. The User can then approve payment or dispute the completion of the Jobs. If the User does not timely dispute the Jobs, payment will automatically be collected from the User’s account. You will receive the fees minus the JOI Fee.</p>
                <p>User Payment Disputes: If the User disputes the Jobs for any reason within thirty (30) minutes of the status change to “Job Done”, You will be notified and extraction of payment from the User will be cancelled. Upon receipt of notification of such dispute, We expect You to work with the User to resolve the dispute. We are not a party to the agreement between You and any User and are not responsible for disputes or misunderstandings arising from the Jobs or the cost, quality, or estimates associated therewith. Upon resolution of the dispute with the User, You may request payment (of the original or a modified amount) from the User through the Platform; this request is deemed identical to a status change to “Job Done” and triggers the same 30-minute dispute period and dispute process.</p>
                <h2>Order Cancellation</h2>
                <p>You may cancel an Order at any time prior to a User’s credit card being charged. We strongly recommend that You communicate with the User prior to such cancellation to avoid negative reviews and/or a dispute of the fees and unnecessary delay.</p>
                <p>If You cancel an Order, the User’s credit card will be billed for the fees that You indicate are due for all Jobs completed prior to the cancellation of the Order.</p>
                <p>If, at any time and in your sole discretion, You deem the work location for the Order to be a hazard to persons or property for any reason, including, without limitation, due to the presence of hazardous materials, animals, or environmental hazards, You may cancel the Order. If You cancel the Order prior to commencing performance of the Jobs due to an Undisclosed Condition, the User will be charged a cancellation fee.</p>
                <p>We trust that the Platform review system and our community of Users will be sufficient to avoid unreasonable or frequent Order cancellations by any one Provider. However, We reserve the right to terminate any Provider who cancels Orders frequently and/or without reasonable grounds for doing so.</p>
                <h2>Provider Qualification</h2>
                <p>Each person and entity performing Jobs for a User, utilizing the Platform, and/or receiving payment for Jobs performed must be authorized as a Provider. In order to be authorized as a Provider, You must:</p>
                <p>Possess a valid US driver’s license;</p>
                <p>Confirm that You own and/or have consistent access to a smartphone or tablet capable of operating the Jonny On It Technology;</p>
                <p>Authorize Us to perform financial, criminal, licensure, and other background and credential investigations and searches of You prior to You being authorized and at any time thereafter, while You remain a Provider. The initial checks shall be completed prior to your authorization as a Provider. We may, in our sole discretion, repeat or supplement such investigations at any time while You remain a Provider; and</p>
                <p>A statement that (a) all information provided in your Background check is true and accurate, to the best of your knowledge; (b) You are at least 18 years of age and legally able to enter into a binding contract under applicable law; (c) You meet industry standard qualifications (including, without limitation, all educational and training qualifications) and hold all licenses and/or certifications required to provide the Jobs that You intend to offer through the Platform; and (d) that You either (i) have not been convicted of any felony within the last 5 years or (ii) authorize Us to notify all Users of the date and nature of any felony conviction in the last 5 years.</p>
                <p>If You will be receiving payment through the Platform, You must also provide the following information and documents to Us, agree to provide updated documents to Us upon our reasonable request, and promptly notify Us upon any change in or to any of the information or documentation described below and provide updated documents supporting such changes:</p>
                <p>A copy of your current Declaration of Insurance, showing current General Liability coverage with minimum liability limits of $1,000,000 and listing Us as an Additional Insured.</p>
                <p>Current State Business License or the license that You operate under;</p>
                <p>Valid US tax identification number;</p>
                <p>Business name, entity type, and state of formation;</p>
                <p>Current state-required professional licenses for the Jobs You intend to offer and/or perform via the Platform; and</p>
                <p>Bank account information for the account in which You wish to receive payments for Jobs performed.</p>
                <p>If You are an individual and will be performing Jobs for a User, whether You are also receiving payment through the Platform or are an employee or contractor of another authorized Provider who is receiving payment for Jobs that You complete, You must also provide the following information and documents to Us, agree to provide updated documents to Us upon our reasonable request, and promptly notify Us upon any change in or to any of the information or documentation described below and provide updated documents supporting such changes:</p>
                <p>First, Middle (if applicable), and Last Name;</p>
                <p>Current address;</p>
                <p>Last three addresses, including county of residence;</p>
                <p>Valid US Social Security Number;</p>
                <p>Current (appropriate for business purposes) photo of yourself;</p>
                <p>Current state-required professional licenses for the Jobs You intend to offer and/or perform via the Platform;</p>
                <p>Valid email and phone number; and</p>
                <h2>Warranty of Work</h2>
                <p>For services (this warranty does not apply to products or parts) You perform via the Platform, You agree to provide User a limited Warranty on all Your labor for a period of 90 days from the initial service date. This warranty shall not apply when:</p>
            </ProviderTermsStyle>
        )
    }
}

export default ProviderTerms