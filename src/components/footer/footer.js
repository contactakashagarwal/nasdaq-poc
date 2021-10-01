import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="page__footer" role="contentinfo" aria-hidden="true">
      <footer className="footer" role="contentinfo" aria-label="footer">
        <div className="footer__content">
          <div className="footer__form form">
            <fieldset className="footer__fieldset">
              <legend className="footer__form-header">Market Makers</legend>
              <div
                className="footer__form-container marketo-form"
                data-form-id="1686"
              >
                <label className="footer__form-label" htmlFor="footer-input">
                  Sign up for our newsletter to get the latest on the
                  transformative forces shaping the global economy, delivered
                  every Thursday.
                </label>
                {/* <form className="mktoForm mktoHasWidth mktoLayoutLeft" data-formid="1686" style="display: block; font-family: inherit; font-size: 13px; color: rgb(51, 51, 51); width: 400px;" id="" novalidate="novalidate"><style type="text/css"></style><div className="mktoFormRow" id="Email_16329844917900.8009001483244391"><div className="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 5px;"><div className="mktoOffset" style="width: 5px;"></div><div className="mktoFieldWrap mktoRequiredField"><label htmlFor="Email_16329844917900.8009001483244391" id="LblEmail" className="mktoLabel mktoHasWidth" style="width: 100px;"><div className="mktoAsterix">*</div>Email Address:</label><div className="mktoGutter mktoHasWidth" style="width: 5px;"></div>
                      <input id="Email" name="Email" maxlength="255" aria-labelledby="LblEmail InstructEmail" type="email" className="mktoField mktoEmailField mktoHasWidth mktoRequired" aria-required="true" style="width: 150px;" placeholder="example@yourdomain.com"/>
                      <span id="InstructEmail" tabindex="-1" className="mktoInstruction">
                          </span><div className="mktoClear"></div></div>
                          <div className="mktoClear"></div></div><div className="mktoClear"></div></div><div className="mktoFormRow" id="Country_16329844917900.8009001483244391"><div className="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 5px;"><div className="mktoOffset" style="width: 5px;"></div><div className="mktoFieldWrap mktoRequiredField"><label htmlFor="Country_16329844917900.8009001483244391" id="LblCountry" className="mktoLabel mktoHasWidth" style="width: 100px;"><div className="mktoAsterix">*</div>Location:</label><div className="mktoGutter mktoHasWidth" style="width: 5px;"></div><select id="Country" name="Country" aria-labelledby="LblCountry InstructCountry" className="mktoField mktoHasWidth mktoRequired" aria-required="true" style="width: 150px;"><option value="">Select...</option><option value="United States">United States</option><option value="Afghanistan">Afghanistan</option><option value="Åland Islands">Åland Islands</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia, Plurinational State of">Bolivia, Plurinational State of</option><option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="Brunei Darussalam">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="CÃ´te d'Ivoire">CÃ´te d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="CuraÃ§ao">CuraÃ§ao</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option><option value="Korea, Republic of">Korea, Republic of</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao">Macao</option><option value="Macedonia, the former Yugoslav Republic of">Macedonia, the former Yugoslav Republic of</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Micronesia, Federated States of">Micronesia, Federated States of</option><option value="Moldova, Republic of">Moldova, Republic of</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option><option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn">Pitcairn</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russian Federation">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint BarthÃ©lemy">Saint BarthÃ©lemy</option><option value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin (French part)">Saint Martin (French part)</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option><option value="South Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syrian Arab Republic">Syrian Arab Republic</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania, United Republic of">Tanzania, United Republic of</option><option value="Thailand">Thailand</option><option value="Timor-Leste">Timor-Leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela, Bolivarian Republic of">Venezuela, Bolivarian Republic of</option><option value="Viet Nam">Viet Nam</option><option value="Virgin Islands (British)">Virgin Islands (British)</option><option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option></select><span id="InstructCountry" tabindex="-1" className="mktoInstruction"></span><div className="mktoClear"></div></div><div className="mktoClear"></div></div><div className="mktoClear"></div></div><div className="mktoFormRow" id=""><div className="mktoPlaceholder mktoPlaceholderHtmlText_2020-07-14T19 957Z"></div><div className="mktoClear"></div></div><div className="mktoFormRow" id=""><div className="mktoPlaceholder mktoPlaceholderglobalOptIn"></div><div className="mktoClear"></div></div><div className="mktoFormRow" id=""><div className="mktoPlaceholder mktoPlaceholderHtmlText_2020-07-14T19 243Z"></div><div className="mktoClear"></div></div><div className="mktoFormRow" id="webPageURL"><input type="hidden" name="webPageURL" className="mktoField mktoFieldDescriptor mktoFormCol" value="https://www.nasdaq.com/about/board-of-directors" style="margin-bottom: 5px;"/><div className="mktoClear"></div></div><div className="mktoFormRow" id="utmprogramid">
                          <input type="hidden" name="utmprogramid" className="mktoField mktoFieldDescriptor mktoFormCol" value="NULL" style="margin-bottom: 5px;"/><div className="mktoClear"/></div></div><div className="mktoFormRow" id="utmcreative"><input type="hidden" name="utmcreative" className="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 5px;"/><div className="mktoClear"></div></div><div className="mktoFormRow" id="utmterm"><input type="hidden" name="utmterm" className="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 5px;"/><div className="mktoClear"></div></div><div className="mktoFormRow" id="gclid">
                          <input type="hidden" name="gclid" className="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 5px;"/><div className="mktoClear"></div></div><div className="mktoFormRow" id="ppccampaignid"><input type="hidden" name="ppccampaignid" className="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 5px;"/><div className="mktoClear"></div></div><div className="mktoFormRow" id="elqhp_16329844917900.8009001483244391"><div className="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 5px;"><div className="mktoOffset" style="width: 5px;"></div><div className="mktoFieldWrap" style="display: none;"><label htmlFor="elqhp_16329844917900.8009001483244391" id="Lblelqhp" className="mktoLabel mktoHasWidth mkto-optional" style="width: 100px;"><div className="mktoAsterix">*</div>elq_hp:</label><div className="mktoGutter mktoHasWidth" style="width: 5px;"></div>
                          <input id="elqhp" name="elqhp" maxlength="255" aria-labelledby="Lblelqhp Instructelqhp" type="text" className="mktoField mktoTextField mktoHasWidth mktoRequired" aria-required="true" style="width: 150px;"/><span id="Instructelqhp" tabindex="-1" className="mktoInstruction"></span><div className="mktoClear"></div></div><div className="mktoClear"></div></div><div className="mktoClear"></div></div><div className="mktoFormRow" id="leadChannelMostRecent">
                              <input type="hidden" name="leadChannelMostRecent" className="mktoField mktoFieldDescriptor mktoFormCol" value="Website" style="margin-bottom: 5px;"/>
                              <div className="mktoClear"></div></div><div className="mktoFormRow" id="leadSourceMostRecent">
                          <input type="hidden" name="leadSourceMostRecent" className="mktoField mktoFieldDescriptor mktoFormCol" value="Direct" style="margin-bottom: 5px;"/><div className="mktoClear"></div></div><div className="mktoFormRow" id="optInMarketMakers"/><input type="hidden" name="optInMarketMakers" className="mktoField mktoFieldDescriptor mktoFormCol" value="TRUE" style="margin-bottom: 5px;"><div className="mktoClear"></div>
                          </div><div className="mktoButtonRow"><span className="mktoButtonWrap mktoNative" style="margin-left: 110px;"><button type="submit" className="mktoButton">Submit</button></span></div><input type="hidden" name="formid" className="mktoField mktoFieldDescriptor" value="1686"><input type="hidden" name="munchkinId" className="mktoField mktoFieldDescriptor" value="303-QKM-463"/>

                          </form> */}
                <div className="footer__form-success">
                  <span className="footer__form-success-check"></span>
                  Thanks for submitting!
                </div>
              </div>
            </fieldset>
          </div>

          <div className="footer__links">
            <ul className="footer__links-primary">
              <li className="footer__link-primary">
                <Link
                  href="http://ir.nasdaq.com/"
                  title="Nasdaq Investor Relations Information"
                >
                  Investor Relations
                </Link>
              </li>
              <li className="footer__link-primary">
                <Link href="/contact-us" title="Contact Nasdaq">
                  Contact
                </Link>
              </li>
              <li className="footer__link-primary">
                <Link href="/about/careers" title="Careers at Nasdaq">
                  Careers
                </Link>
              </li>
              <li className="footer__link-primary">
                <Link href="/mediakit" title="">
                  Advertise
                </Link>
              </li>
              <li className="footer__link-primary">
                <Link
                  href="https://www.nasdaq.com/app/nasdaq-markets"
                  title="Mobile Apps"
                >
                  Mobile Apps
                </Link>
              </li>
              <li className="footer__link-primary">
                <Link href="/marketsite" title="">
                  Nasdaq MarketSIte
                </Link>
              </li>
              <li className="footer__link-primary">
                <Link href="/trust-center" title="">
                  Trust Center
                </Link>
              </li>
            </ul>

            <ul className="footer__links-secondary">
              <li className="footer__link-secondary">
                <Link href="/cookie-statement" title="">
                  Cookies
                </Link>
              </li>
              <li className="footer__link-secondary">
                <Link href="/legal" title="">
                  Legal
                </Link>
              </li>
              <li className="footer__link-secondary">
                <Link
                  href="https://www.nasdaq.com/ccpa"
                  title="(CA Residents Only)"
                >
                  Do Not Sell My Personal Information (CA Residents Only)
                </Link>
              </li>
            </ul>
          </div>

          {/* <ul className="footer__links-social">
            <li className="footer__link-social">
              <Link
                href="https://www.facebook.com/Nasdaq/"
                title="Visit NASDAQ on Facebook"
                aria-label="Facebook"
              ></Link>
            </li>
            <li className="footer__link-social">
              <Link
                href="https://twitter.com/Nasdaq"
                title="Visit NASDAQ on Twitter"
                aria-label="Twitter"
              ></Link>
            </li>
            <li className="footer__link-social">
              <Link
                href="https://www.linkedin.com/company/nasdaq/"
                title="Visit NASDAQ on LinkedIn"
                aria-label="LinkedIn"
              ></Link>
            </li>
            <li className="footer__link-social">
              <Link
                href="https://www.instagram.com/nasdaq"
                title="Visit NASDAQ on Instagram"
                aria-label="Instagram"
              ></Link>
            </li>
            <li className="footer__link-social">
              <Link
                href="https://www.pinterest.com/nasdaq/"
                title="Visit NASDAQ on Pinterest"
                aria-label="Pinterest"
              ></Link>
            </li>
            <li className="footer__link-social">
              <Link
                href="/nasdaq-RSS-Feeds"
                title="NASDAQ RSS"
                aria-label="RSS"
                data-drupal-link-system-path="node/5589111"
              ></Link>
            </li>
          </ul> */}

          <Link href="/" className="footer__logo">
            <svg
              width="106"
              height="30"
              viewBox="0 0 106 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M78.1281 22.8256C74.5111 22.8256 72.2639 20.7247 72.2639 17.3409C72.2639 13.8246 74.3374 11.6398 77.6759 11.6398L77.9581 11.6382C78.3755 11.6382 78.9524 11.6514 79.74 11.7517V7.50928H82.102V22.4441C82.102 22.4441 79.8589 22.8256 78.1281 22.8256ZM78.1076 13.5027C75.8219 13.5027 74.7106 14.7392 74.7106 17.2823C74.7106 19.5643 76.0503 20.9817 78.206 20.9817C78.6198 20.9817 79.0941 20.9559 79.74 20.8989V13.6537C79.0935 13.5508 78.5745 13.5027 78.1076 13.5027Z"
                fill="#FFF"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M45.8108 22.485L39.4365 11.3324L39.4349 22.485H37.214V8.36816H40.3225L46.6968 19.421L46.6941 8.36816H48.9435V22.485H45.8108Z"
                fill="#FFF"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M66.1111 22.7014C65.0383 22.7014 63.9186 22.5811 62.5857 22.3241L62.4441 22.2961V20.324L62.6552 20.3704C63.8286 20.6206 64.843 20.8369 65.8563 20.8369C66.677 20.8369 68.5858 20.706 68.5858 19.4975C68.5858 18.4827 67.2666 18.2289 66.2064 18.0257L66.1401 18.0125C65.9432 17.9735 65.7568 17.9365 65.5973 17.8964C64.0434 17.4916 62.3857 16.8847 62.3857 14.7965C62.3857 12.7605 63.9939 11.5927 66.7975 11.5927C68.1425 11.5927 69.1195 11.7383 69.9039 11.8555L70.2877 11.913V13.8244L70.0829 13.7891C69.1948 13.6249 68.1541 13.4566 67.1513 13.4566C66.04 13.4566 64.7161 13.6651 64.7161 14.6588C64.7161 15.482 65.7979 15.7179 67.0507 15.9908C68.8011 16.3728 70.9736 16.8483 70.9736 19.2426C70.9736 21.4406 69.2011 22.7014 66.1111 22.7014Z"
                fill="#FFF"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M88.7257 22.7014C86.2811 22.7014 84.0196 22.2708 84.0196 19.1445C84.0196 15.7427 87.5176 15.7427 89.608 15.7427C89.817 15.7427 90.7993 15.7876 91.102 15.8013C91.0993 13.893 91.0735 13.4376 88.313 13.4376C87.2186 13.4376 86.0026 13.6556 84.9298 13.8476L84.725 13.8846V11.9995L84.865 11.971C86.1079 11.7167 87.3065 11.5927 88.5289 11.5927C91.2046 11.5927 93.4719 11.8634 93.4719 15.1902V22.4476L93.3087 22.4644C91.4557 22.6729 89.9833 22.7014 88.7257 22.7014ZM89.5485 17.4251C87.5334 17.4251 86.2848 17.7223 86.2848 19.2025C86.2848 20.915 87.8788 21.058 89.3727 21.058C89.9323 21.058 90.9362 20.9868 91.2431 20.9636V17.4832C90.8098 17.4668 89.6849 17.4251 89.5485 17.4251Z"
                fill="#FFF"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M55.6178 22.7014C53.1731 22.7014 50.9117 22.2708 50.9117 19.1445C50.9117 15.7427 54.4097 15.7427 56.5001 15.7427C56.7085 15.7427 57.6913 15.7876 57.994 15.8013C57.9914 13.893 57.9656 13.4376 55.2051 13.4376C54.1107 13.4376 52.8952 13.6556 51.8218 13.8476L51.6171 13.8846V11.9995L51.7571 11.971C53.0005 11.7167 54.1986 11.5927 55.4209 11.5927C58.0967 11.5927 60.3639 11.8634 60.3639 15.1902V22.4476L60.2007 22.4644C58.3478 22.6729 56.8754 22.7014 55.6178 22.7014ZM56.4406 17.4251C54.4255 17.4251 53.1768 17.7223 53.1768 19.2025C53.1768 20.915 54.7708 21.058 56.2648 21.058C56.8243 21.058 57.8282 20.9868 58.1351 20.9636V17.4832C57.7019 17.4668 56.5769 17.4251 56.4406 17.4251Z"
                fill="#FFF"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M102.868 27.2799V22.6501C101.946 22.7799 101.456 22.7799 101.061 22.7799C100.127 22.7799 99.0893 22.5762 98.2844 22.2342C96.4867 21.4859 95.4134 19.5808 95.4134 17.1374C95.4134 15.9157 95.7098 13.6861 97.6938 12.4844C98.6871 11.8881 99.8642 11.6332 101.63 11.6332C102.264 11.6332 103.118 11.6823 103.943 11.7303L105.283 11.7994V26.2081L102.868 27.2799ZM101.453 13.4966C99.0572 13.4966 97.8412 14.7215 97.8412 17.1374C97.8412 20.2447 99.6558 20.897 101.179 20.897C101.549 20.897 101.967 20.897 102.89 20.7803V13.5636C102.167 13.5145 101.835 13.4966 101.453 13.4966Z"
                fill="#FFF"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.6726 0L18.8675 21.4961C18.6759 22.0265 18.1921 22.4138 17.612 22.4724V22.4851H25.8619C26.5089 22.4851 27.0616 22.0729 27.269 21.4961L35.0742 0H26.6726ZM16.9409 22.1567C17.4173 22.1567 17.8374 21.9203 18.0943 21.5593C18.1212 21.5218 18.2149 21.3899 18.2801 21.2099L21.1433 13.3225L19.4688 8.71643C19.255 8.20506 18.7502 7.84567 18.1622 7.84567C17.6863 7.84567 17.2657 8.08157 17.0088 8.44306C16.982 8.48001 16.8704 8.64835 16.823 8.79242L13.9609 16.6767L15.6423 21.3012C15.8602 21.8042 16.3587 22.1567 16.9409 22.1567ZM9.21221 7.51601H17.5522V7.52076C16.9326 7.54662 16.4077 7.94611 16.2066 8.50445L8.40206 30H0L7.80458 8.50445C8.01304 7.92764 8.56472 7.51601 9.21221 7.51601Z"
                fill="#0090BA"
              ></path>
            </svg>
          </Link>

          <p className="footer__legal">
            © 2021, Nasdaq, Inc. All Rights Reserved.
          </p>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
