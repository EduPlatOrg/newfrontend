import React from 'react';

const TermsAndConditions = () => {
  const date = "April 3, 2020";
  const organizationInfo = `Registered in the Spanish national registry of associations on 25-4-2018 in GROUP 1, SECTION 1, No. 615536. Final Tax Identification Number: CIF: G99525594`;

  return (
    <div className="terms-and-conditions">
        <h2>Privacy Policy BienesDar.org/EduPlat</h2>
        <p>Date: {date}</p>
        <p>
          At BienesDar.org, we want to protect and respect everyone’s privacy and, therefore, we adopt the security measures required by the applicable regulations. Next, we will explain how and why we collect data in the contact forms of www.bienesDar.org. The information provided in them is confidential and will only be disclosed in the cases contemplated below. The association ({organizationInfo}), is directly responsible for the processing of your data.
        </p>
        <p>
          At BienesDar.org we treat the information provided to us in order to provide/receive the requested/offered service. The data provided will be kept as long as the interested party or legal representative does not request the cessation of the activity, the commercial relationship is maintained and/or for the time necessary to comply with the legal obligations and attend to the possible responsibilities that may derive from the fulfillment of the purpose for which the data was collected. The data will not be transferred to third parties except in cases where there is a legal obligation or a specific need (for example, when registering for an event, data is shared with the person who has made the publication and, if they believe it necessary, with the rest of the participants).
        </p>
        <p>
          Anyone has the right to obtain information about whether (and how) BienesDar.org is treating their personal data, so they can exercise their rights of access, rectification, deletion and portability of data and opposition and limitation to their treatment through our contact form at www.EduPlat.org, indicating the type of information you are requesting (ideally the date of your original registration in our database) and a valid email to which we may request other information (to ensure your authenticity as a user). Likewise, and especially if you consider that you have not obtained full satisfaction in the exercise of your rights, you may file a claim with the national control authority by contacting the Spanish Data Protection Agency, C/ Jorge Juan 6 – 28001 Madrid, for these purposes.
        </p>
        <p>
          This privacy policy is likely to be modified on a later date than the aforementioned to adapt to current regulations.
        </p>
    </div>
  );
};

export default TermsAndConditions;
