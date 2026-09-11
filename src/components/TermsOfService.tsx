import React, { useEffect } from 'react';
import './TermsOfService.css';

const TermsOfService: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="legal-page">
            <header className="legal-hero">
                <div className="legal-hero-inner">
                    <p className="legal-label">Legal</p>
                    <h1>Terms of Service</h1>
                    <p className="legal-meta">World Aigent · worldaigent.com · Effective date: 11 September 2026 · Version 1.2</p>
                </div>
            </header>

            <div className="legal-layout">
                <nav className="legal-toc">
                    <p className="toc-heading">Contents</p>
                    <ol>
                        <li><a href="#acceptance">Acceptance of Terms</a></li>
                        <li><a href="#description">Description of Service</a></li>
                        <li><a href="#accounts">Accounts and Access</a></li>
                        <li><a href="#connected">Connected Social Accounts</a></li>
                        <li><a href="#responsibility">Content and Approval</a></li>
                        <li><a href="#acceptable-use">Acceptable Use</a></li>
                        <li><a href="#ai-outputs">AI-Generated Outputs</a></li>
                        <li><a href="#data-privacy">Data and Privacy</a></li>
                        <li><a href="#data-residency">Data Residency</a></li>
                        <li><a href="#billing">Billing and Payment</a></li>
                        <li><a href="#ip">Intellectual Property</a></li>
                        <li><a href="#confidentiality">Confidentiality</a></li>
                        <li><a href="#availability">Service Availability</a></li>
                        <li><a href="#liability">Limitation of Liability</a></li>
                        <li><a href="#warranties">Disclaimer of Warranties</a></li>
                        <li><a href="#termination">Term and Termination</a></li>
                        <li><a href="#governing-law">Governing Law</a></li>
                        <li><a href="#changes">Changes to Terms</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ol>
                </nav>

                <article className="legal-body">
                    <section id="acceptance">
                        <h2><span className="section-num">1.</span> Acceptance of Terms</h2>
                        <p>By accessing or using the platform operated by World Aigent OÜ, a private limited company registered in Estonia under registry code 17403898 (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization to these Terms. If you do not agree, do not use the Service.</p>
                    </section>

                    <section id="description">
                        <h2><span className="section-num">2.</span> Description of Service</h2>
                        <p>World Aigent OÜ operates a multi-tenant AI workflow automation platform. Our principal service is the management of a client's social media presence, currently on LinkedIn, which includes planning content, generating posts and accompanying images, scheduling them, publishing them to the accounts you have connected, measuring their performance, and reporting on it.</p>
                        <p>The platform also supports related workflows, including email drafting and sending, processing documents and recordings into content, and scheduled reporting. Additional workflows may be built for a client by agreement.</p>
                        <p>Clients interact with the Service through a messaging channel in their own workspace, currently Slack. The Service is provided on the commercial terms set out in your client agreement.</p>
                    </section>

                    <section id="accounts">
                        <h2><span className="section-num">3.</span> Accounts and Access</h2>
                        <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must:</p>
                        <ul>
                            <li>Provide accurate and current information at registration</li>
                            <li>Notify us immediately of any unauthorized access to your account</li>
                            <li>Not share credentials with individuals outside your authorized team</li>
                            <li>Control who in your organization has access to the messaging channel connected to the Service, since anyone in that channel can instruct the Service to publish</li>
                        </ul>
                        <p>We reserve the right to suspend or terminate accounts that show signs of unauthorized use.</p>
                    </section>

                    <section id="connected">
                        <h2><span className="section-num">4.</span> Connected Social Accounts</h2>
                        <p>To use the Service you authorise us to access one or more social media accounts through that platform's standard authorisation process. By doing so, you represent and warrant that:</p>
                        <ul>
                            <li>You own the account, or are authorised by its owner to connect it and to have content published in its name</li>
                            <li>Where a personal profile is connected, the individual whose profile it is has consented</li>
                            <li>Connecting the account and having us publish to it does not breach your agreement with that platform</li>
                        </ul>
                        <p>You may withdraw our access at any time, either by asking us or directly in your settings on that platform. Withdrawal takes effect immediately and stops all further publishing and measurement. Posts already published remain on the platform under your control.</p>
                        <p>Your use of any connected platform remains governed by that platform's own terms. You are responsible for ensuring that content published in your name complies with them. If a platform suspends, restricts, or revokes access to a connected account, we may be unable to provide the Service for that account, and we are not liable for that outcome.</p>
                    </section>

                    <section id="responsibility">
                        <h2><span className="section-num">5.</span> Content and Approval</h2>
                        <p>Content is generated from the instructions and source material you provide. You are shown content before it is published and may change it, reschedule it, or cancel it.</p>
                        <p>You are responsible for what is published in your name. This includes reviewing content for accuracy before it goes out, ensuring it does not infringe third-party rights, and ensuring any claims it makes about your business are true. Where you instruct us to publish text exactly as written, that text is published without alteration and is entirely your responsibility.</p>
                        <p>You confirm that you have the rights necessary to share any source material you provide to us, including documents, recordings, and files held in third-party storage, and that sharing it with us does not breach any obligation of confidence or any third party's rights.</p>
                    </section>

                    <section id="acceptable-use">
                        <h2><span className="section-num">6.</span> Acceptable Use</h2>
                        <h3>6.1 Permitted Use</h3>
                        <p>You may use the Service only for lawful business purposes consistent with these Terms and applicable law.</p>
                        <h3>6.2 Prohibited Use</h3>
                        <p>You must not use the Service to:</p>
                        <ul>
                            <li>Process, store, or transmit content that is illegal, fraudulent, or infringes third-party rights</li>
                            <li>Submit sensitive personal data such as health records, government IDs, financial account numbers, or biometric data without an explicit data processing addendum</li>
                            <li>Publish content that breaches the terms or community policies of any connected platform, including spam, bulk unsolicited messaging, or engagement manipulation</li>
                            <li>Publish content in the name of a person or organisation without their authorisation, or impersonate anyone</li>
                            <li>Attempt to reverse-engineer, circumvent, or compromise the security of the platform</li>
                            <li>Resell or sublicense access to the platform without our prior written consent</li>
                            <li>Engage in activities that could damage, disable, or impair the platform or its infrastructure</li>
                            <li>Use AI outputs to generate misinformation or content designed to deceive</li>
                        </ul>
                        <p>We may suspend the Service without notice where continuing it would, in our reasonable judgement, breach a connected platform's terms or expose either party to legal risk.</p>
                    </section>

                    <section id="ai-outputs">
                        <h2><span className="section-num">7.</span> AI-Generated Outputs: Disclaimer</h2>
                        <p>The platform uses artificial intelligence models to generate outputs based on client-provided inputs. You acknowledge that:</p>
                        <ul>
                            <li>AI outputs are probabilistic and may contain errors, omissions, or inaccuracies</li>
                            <li>We do not guarantee the accuracy, completeness, or fitness for any particular purpose of AI-generated content</li>
                            <li>AI outputs do not constitute legal, financial, medical, or professional advice</li>
                            <li>You are solely responsible for reviewing, validating, and deciding whether to act on or publish any AI output</li>
                            <li>We do not guarantee any particular level of reach, engagement, follower growth, or commercial result from content we publish</li>
                        </ul>
                        <p>World Aigent is not liable for decisions made by you or your organization based on AI-generated outputs, nor for the consequences of content published at your instruction.</p>
                    </section>

                    <section id="data-privacy">
                        <h2><span className="section-num">8.</span> Data and Privacy</h2>
                        <p>Our Privacy Policy governs how we collect and process personal data and is incorporated into these Terms by reference. By using the Service, you agree to the practices described in the Privacy Policy.</p>
                        <p>You retain ownership of all data you submit to the platform and of the content generated for you. You grant us a limited, non-exclusive license to process that data solely to provide the Service.</p>
                        <p>We will not use your data, your content, or data obtained from your connected accounts to train AI models, sell data to third parties, or use it for any purpose beyond operating the platform for you.</p>
                    </section>

                    <section id="data-residency">
                        <h2><span className="section-num">9.</span> Data Residency</h2>
                        <p>By default, data is processed on infrastructure located in the United States. If you require data to remain within a specific jurisdiction, such as Canada under PIPEDA or the European Union under GDPR, you must declare this requirement in writing before onboarding, and the agreed configuration will be documented in your client agreement. Residency cannot be applied retrospectively.</p>
                    </section>

                    <section id="billing">
                        <h2><span className="section-num">10.</span> Billing and Payment</h2>
                        <p>Fees consist of a one-time implementation fee and a recurring subscription fee, as set out in your client agreement. You authorize us to charge the payment method on file for all applicable fees.</p>
                        <ul>
                            <li>Invoices are issued monthly, or as otherwise agreed</li>
                            <li>Payment is due within 30 days of the invoice date</li>
                            <li>Overdue accounts may be suspended after 15 days' written notice</li>
                            <li>All fees are non-refundable except as required by law or explicitly stated in your client agreement</li>
                        </ul>
                        <p>We reserve the right to modify pricing with 60 days' advance notice. Continued use of the Service after the effective date of a pricing change constitutes acceptance.</p>
                    </section>

                    <section id="ip">
                        <h2><span className="section-num">11.</span> Intellectual Property</h2>
                        <p>All rights in the World Aigent platform, including software, architecture, documentation, and branding, remain the exclusive property of World Aigent. These Terms do not grant you any ownership rights in the platform.</p>
                        <p>You retain all intellectual property rights in the data and source material you provide. Subject to payment of applicable fees, you own the content generated for you and published in your name.</p>
                    </section>

                    <section id="confidentiality">
                        <h2><span className="section-num">12.</span> Confidentiality</h2>
                        <p>Each party agrees to keep confidential all non-public information disclosed by the other party in connection with the Service. This obligation does not apply to information that: (a) is or becomes publicly known without breach; (b) was known before disclosure; (c) is independently developed; or (d) must be disclosed by law.</p>
                    </section>

                    <section id="availability">
                        <h2><span className="section-num">13.</span> Service Availability and Dependencies</h2>
                        <p>The Service depends on third-party platforms and providers, including the social platform you have connected, cloud infrastructure, and AI model providers. Interruptions, rate limits, policy changes, or outages affecting those providers may interrupt the Service or delay scheduled publication.</p>
                        <p>We will make reasonable efforts to restore service and to reschedule affected content, but we do not guarantee uninterrupted availability, and we are not liable for delays or failures caused by third parties outside our control. Any service level commitment applies only if expressly stated in your client agreement.</p>
                    </section>

                    <section id="liability">
                        <h2><span className="section-num">14.</span> Limitation of Liability</h2>
                        <p className="legal-caps">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WORLD AIGENT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, REPUTATIONAL HARM, LOSS OR RESTRICTION OF A SOCIAL MEDIA ACCOUNT, OR DAMAGE ARISING FROM AI OUTPUTS OR FROM CONTENT PUBLISHED AT YOUR INSTRUCTION.</p>
                        <p className="legal-caps">OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE THREE (3) MONTHS PRECEDING THE CLAIM.</p>
                    </section>

                    <section id="warranties">
                        <h2><span className="section-num">15.</span> Disclaimer of Warranties</h2>
                        <p className="legal-caps">THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE". WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE SERVICE, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR UNINTERRUPTED AVAILABILITY.</p>
                    </section>

                    <section id="termination">
                        <h2><span className="section-num">16.</span> Term and Termination</h2>
                        <p>These Terms remain in effect for the duration of your use of the Service.</p>
                        <ul>
                            <li>You may terminate your account at any time by providing 30 days' written notice</li>
                            <li>We may suspend or terminate your access immediately for material breach of these Terms, non-payment, or conduct that poses a security or legal risk</li>
                            <li>On termination we stop publishing, cancel anything still scheduled, and delete stored access tokens immediately</li>
                            <li>Suspension is not termination. Where service is paused, for example for non-payment, your connected accounts stay connected and their tokens are retained so service can resume without you authorising us again</li>
                            <li>Your remaining data is deleted within 90 days, unless you request an export before that period. Content already published remains on the connected platform under your control.</li>
                        </ul>
                    </section>

                    <section id="governing-law">
                        <h2><span className="section-num">17.</span> Governing Law and Disputes</h2>
                        <p>World Aigent OÜ is established in Tallinn, Estonia. These Terms are governed by the laws of the Republic of Estonia, without regard to conflict of law principles, unless a different governing law is expressly agreed in your client agreement.</p>
                        <p>The parties shall attempt to resolve any dispute in good faith. Where they cannot, the dispute shall be submitted to the Harju County Court in Tallinn, Estonia, which shall have exclusive jurisdiction, unless your client agreement provides otherwise.</p>
                        <p>Nothing in this clause prevents either party from seeking emergency injunctive relief in a court of competent jurisdiction. Nothing in these Terms removes any mandatory right you have under the law of your own country of residence.</p>
                    </section>

                    <section id="changes">
                        <h2><span className="section-num">18.</span> Changes to These Terms</h2>
                        <p>We may update these Terms at any time. We will provide at least 30 days' notice of material changes via email. Continued use of the Service after the effective date constitutes acceptance of the updated Terms.</p>
                    </section>

                    <section id="contact">
                        <h2><span className="section-num">19.</span> Contact</h2>
                        <p>For questions about these Terms:</p>
                        <div className="legal-contact-block">
                            <strong>World Aigent OÜ</strong>
                            <span>Registry code 17403898</span>
                            <span>Sepapaja tn 6, Lasnamäe linnaosa, 15551 Tallinn, Harju maakond, Estonia</span>
                            <span>Email: <a href="mailto:contact@worldaigent.com">contact@worldaigent.com</a></span>
                            <span>Website: worldaigent.com</span>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
};

export default TermsOfService;
