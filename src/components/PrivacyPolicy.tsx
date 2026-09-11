import React, { useEffect } from 'react';
import './TermsOfService.css';

const PrivacyPolicy: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="legal-page">
            <header className="legal-hero">
                <div className="legal-hero-inner">
                    <p className="legal-label">Legal</p>
                    <h1>Privacy Policy</h1>
                    <p className="legal-meta">World Aigent · worldaigent.com · Effective date: September 2026 · Version 1.1</p>
                </div>
            </header>

            <div className="legal-layout">
                <nav className="legal-toc">
                    <p className="toc-heading">Contents</p>
                    <ol>
                        <li><a href="#introduction">Introduction</a></li>
                        <li><a href="#controller">Data Controller and Processor</a></li>
                        <li><a href="#data-collected">Data We Collect</a></li>
                        <li><a href="#data-use">How We Use Your Data</a></li>
                        <li><a href="#linkedin">Connected LinkedIn Accounts</a></li>
                        <li><a href="#ai">AI Processing and Model Training</a></li>
                        <li><a href="#storage">Data Storage &amp; Residency</a></li>
                        <li><a href="#subprocessors">Sub-processors</a></li>
                        <li><a href="#security">Security</a></li>
                        <li><a href="#rights">Your Rights</a></li>
                        <li><a href="#gdpr">GDPR</a></li>
                        <li><a href="#pipeda">PIPEDA</a></li>
                        <li><a href="#cookies">Cookies &amp; Website</a></li>
                        <li><a href="#changes">Changes to Policy</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ol>
                </nav>

                <article className="legal-body">
                    <section id="introduction">
                        <h2><span className="section-num">1.</span> Introduction</h2>
                        <p>World Aigent OÜ ("World Aigent", "we", "our", or "us"), a private limited company registered in Estonia under registry code 17403898, operates the platform available at worldaigent.com (the "Service"). This Privacy Policy explains how we collect, use, store, and protect information in connection with our AI workflow automation platform, including the publishing of content to social media accounts you connect.</p>
                        <p>World Aigent OÜ is established in Tallinn, Estonia. We are therefore subject to the European Union's General Data Protection Regulation (GDPR) in respect of all personal data we process, regardless of where our clients are located. Where we serve clients in other jurisdictions, we additionally observe the requirements that apply there, including Canada's Personal Information Protection and Electronic Documents Act (PIPEDA).</p>
                        <p>This policy applies to all clients, users, and visitors who interact with the Service.</p>
                    </section>

                    <section id="controller">
                        <h2><span className="section-num">2.</span> Data Controller and Processor</h2>
                        <p>World Aigent is the data controller for information we hold about our own clients and about visitors to our website, such as account details, billing records, and enquiries.</p>
                        <p>Where we publish content on your behalf and process the audience and performance data that results, we act as a data processor on your instructions. You remain the controller of the content you ask us to publish and of any personal data contained in it.</p>
                        <p>Our contact details as controller are:</p>
                        <div className="legal-contact-block">
                            <strong>World Aigent OÜ</strong>
                            <span>Registry code 17403898</span>
                            <span>Sepapaja tn 6, Lasnamäe linnaosa, 15551 Tallinn, Harju maakond, Estonia</span>
                            <span>Email: <a href="mailto:contact@worldaigent.com">contact@worldaigent.com</a></span>
                        </div>
                        <p>We have not appointed a Data Protection Officer, as we are not required to do so under Article 37 GDPR. Privacy enquiries are handled at the address above.</p>
                    </section>

                    <section id="data-collected">
                        <h2><span className="section-num">3.</span> Data We Collect</h2>

                        <h3>3.1 Account and Client Data</h3>
                        <p>When you register as a client or user of the platform, we collect:</p>
                        <ul>
                            <li>Full name and business name</li>
                            <li>Email address and business contact information</li>
                            <li>Billing information, processed by our payment processor. We do not store card details.</li>
                            <li>Your business profile: industry, audience, tone of voice, value proposition, key services and timezone. This is used to generate content that reflects your business.</li>
                        </ul>

                        <h3>3.2 Connected Account Credentials</h3>
                        <p>When you connect a social media account, we store the access and refresh tokens issued to us by that platform, together with the account identifier and display name. Tokens are held in Google Secret Manager and are never written to our databases, our logs, or our source code. See section 5 for how LinkedIn data specifically is handled.</p>

                        <h3>3.3 Content and Source Material</h3>
                        <p>We process the instructions you send us and any source material you provide, which may include documents (such as PDFs), video and audio recordings, links to files held in third-party storage, and text you supply to be published exactly as written. We also store the content we generate for you and the schedule on which it is published.</p>
                        <p>Source material may contain personal data about third parties, for example names in a report or voices in a recording. You are responsible for ensuring you have the right to share that material with us.</p>

                        <h3>3.4 Communications</h3>
                        <p>You interact with the Service primarily through a messaging channel in your own workspace, currently Slack. We process the messages you send in that channel for the purpose of carrying out your requests, and we send you notifications, previews and reports through the same channel. We do not read or process messages in channels we have not been added to.</p>

                        <h3>3.5 Platform Usage Data</h3>
                        <p>When you use the Service, we automatically collect:</p>
                        <ul>
                            <li>Workflow execution logs, including type, duration, status and timestamp</li>
                            <li>AI model usage, including model name and approximate token consumption</li>
                            <li>API call metadata, including endpoint, response time and errors</li>
                            <li>IP address and client information for security and fraud prevention</li>
                        </ul>

                        <h3>3.6 Website Visitors</h3>
                        <p>If you submit our website contact form, we collect the name, company, email address and message you provide, along with your IP address, which our form provider records for abuse prevention. This information is sent to our contact inbox and is used only to respond to your enquiry.</p>

                        <h3>3.7 Data We Do Not Collect</h3>
                        <p>We do not collect sensitive personal data such as health records, financial account numbers, government identification numbers, biometric data, or data about minors. Clients are responsible for ensuring they do not submit this type of data through the platform.</p>
                    </section>

                    <section id="data-use">
                        <h2><span className="section-num">4.</span> How We Use Your Data</h2>
                        <p>We use the data we collect for the following purposes:</p>
                        <ul>
                            <li>Providing and operating the platform and its features</li>
                            <li>Generating, scheduling and publishing content to the accounts you have connected, at your instruction</li>
                            <li>Measuring how that content performed and preparing your reports</li>
                            <li>Processing billing and managing client accounts</li>
                            <li>Monitoring platform performance, reliability, and security</li>
                            <li>Complying with legal obligations</li>
                            <li>Responding to support requests and communications</li>
                        </ul>
                        <p>We do not sell personal data to third parties. We do not use personal data for advertising purposes. We do not use your data, your content, or data obtained from your connected accounts to train artificial intelligence models. See section 6.</p>
                    </section>

                    <section id="linkedin">
                        <h2><span className="section-num">5.</span> Connected LinkedIn Accounts</h2>
                        <p>LinkedIn is currently the platform we publish to. This section explains what that involves. It applies equally to any other social platform we may support in future.</p>

                        <h3>5.1 What We Access</h3>
                        <p>When you authorise us through LinkedIn's standard OAuth flow, you choose which permissions to grant. We request only the permissions needed to do the work you have asked for, which are the ability to identify the account, to publish posts on its behalf, and to read the performance of posts we published. We do not request access to your connections, your inbox, or your feed, and we do not read them.</p>

                        <h3>5.2 How We Use It</h3>
                        <p>Data obtained from LinkedIn is used for one purpose only: operating the Service for the client who authorised the connection. Specifically, to publish the content you approved, to measure how those posts performed, and to prepare your reports. We do not use it for any other client, we do not combine it with data from other clients, and we do not disclose it to any third party.</p>

                        <h3>5.3 What We Store</h3>
                        <p>We store the identifier of each post we publish, the content we generated, the publication time, and the performance metrics LinkedIn returns for those posts. We store only metrics for posts we published on your behalf.</p>

                        <h3>5.4 Retention and Deletion</h3>
                        <p>Performance data is retained only as long as it is needed to produce your reports and to compare periods, and is deleted automatically once it falls outside that window. If a post is deleted on LinkedIn, we stop reporting on it. When your account with us ends, or when you disconnect a LinkedIn account, we delete the stored tokens immediately and the associated content and metrics within 90 days unless you ask us to export them first.</p>

                        <h3>5.5 Withdrawing Access</h3>
                        <p>You can revoke our access at any time, either by asking us or directly in your LinkedIn account settings, without contacting us first. Revocation takes effect immediately and stops all further publishing and measurement. It does not affect posts already published, which remain under your control on LinkedIn.</p>

                        <h3>5.6 Compliance with LinkedIn</h3>
                        <p>Our use of LinkedIn's API is subject to LinkedIn's own terms and developer policies. We handle data obtained through it in line with those terms, including the requirements not to use it for purposes other than the one authorised, not to share it, not to use it to train models, and to delete it when authorisation ends.</p>
                    </section>

                    <section id="ai">
                        <h2><span className="section-num">6.</span> AI Processing and Model Training</h2>
                        <p>Generating content involves sending your instructions and your source material to third-party AI model providers listed in section 8. Those providers process the request and return a result.</p>
                        <p>We do not use your content to train AI models, and we select providers and service tiers under which submitted content is not used to train their models either. Content is sent for the purpose of producing your output and is not retained by us for any training purpose.</p>
                        <p>AI-generated content is probabilistic and can be wrong. You see content before it is published and remain responsible for what is published in your name. This is set out further in our Terms of Service.</p>
                        <p>Content we generate is produced with the assistance of artificial intelligence. Where a platform, or applicable law such as the EU Artificial Intelligence Act, requires that machine-generated content be identified as such, it is the client's responsibility as publisher to make that disclosure, and we will support them in doing so.</p>
                    </section>

                    <section id="storage">
                        <h2><span className="section-num">7.</span> Data Storage and Residency</h2>

                        <h3>7.1 Default Infrastructure</h3>
                        <p>By default, client data is processed and stored on Google Cloud Platform infrastructure in the United States, together with workflow orchestration provided by Temporal Cloud. Because we are established in the European Union, this constitutes a transfer of personal data outside the European Economic Area, and we rely on the safeguards described in section 11.2.</p>

                        <h3>7.2 Regional Configurations</h3>
                        <p>Where a client has a regulatory or contractual requirement for data to remain in a specific jurisdiction, a dedicated regional configuration can be arranged as part of your client agreement. This must be agreed in writing before onboarding, because it cannot be applied retrospectively. Regions available on request include Canada and the European Union. If you have a residency requirement, raise it before you sign.</p>

                        <h3>7.3 Data Retention</h3>
                        <p>We retain data for the following periods:</p>
                        <ul>
                            <li>Workflow execution logs and usage events: 90 days in operational storage, then archived or deleted</li>
                            <li>Account and billing data: the duration of the client relationship plus 7 years, for legal and accounting compliance</li>
                            <li>Published content and its performance data: for the duration of the client relationship, then deleted within 90 days of termination unless exported</li>
                            <li>Source material you upload: processed and then deleted or retained in your designated storage per your configuration</li>
                            <li>Access and refresh tokens: deleted immediately on disconnection or termination</li>
                            <li>Security and access logs: 12 months</li>
                            <li>Website enquiries: 24 months from last contact</li>
                        </ul>
                    </section>

                    <section id="subprocessors">
                        <h2><span className="section-num">8.</span> Sub-processors and Third Parties</h2>
                        <p>We use the following sub-processors to operate the Service. Each is bound by terms requiring appropriate security standards. We will give clients notice of material changes to this list.</p>
                        <ul>
                            <li><strong>Google Cloud Platform:</strong> infrastructure, databases, file storage, secret management, and speech and video processing. United States by default.</li>
                            <li><strong>Temporal Cloud:</strong> workflow orchestration and execution history.</li>
                            <li><strong>Anthropic:</strong> AI language model processing for content generation.</li>
                            <li><strong>OpenRouter:</strong> routing of requests to AI model providers.</li>
                            <li><strong>Slack:</strong> the messaging channel through which clients interact with the Service, where the client has chosen Slack.</li>
                            <li><strong>Web3Forms:</strong> processing of website contact form submissions. United States.</li>
                        </ul>
                        <p>In addition, content you approve is transmitted to <strong>LinkedIn</strong> for publication at your instruction. LinkedIn acts as an independent controller of the data on its own platform and its handling of that data is governed by LinkedIn's privacy policy.</p>
                        <p>Where you provide source material by linking to third-party storage such as Google Drive, OneDrive or a video hosting service, we retrieve that file using the access you have granted. We do not otherwise access those accounts.</p>
                        <p>We do not share personal data with any other third parties except as required by law or with explicit client consent.</p>
                    </section>

                    <section id="security">
                        <h2><span className="section-num">9.</span> Security</h2>
                        <p>We implement technical and organizational measures to protect your data:</p>
                        <ul>
                            <li>All data in transit is encrypted using TLS 1.2 or higher</li>
                            <li>Data at rest is encrypted using AES-256</li>
                            <li>Access to production systems is restricted to authorized personnel via role-based access controls</li>
                            <li>Secrets, credentials and third-party access tokens are stored in Google Secret Manager and never in source code, databases, or logs</li>
                            <li>Client data is logically isolated using a dedicated namespace per client, so no client's workflow can observe or affect another's</li>
                            <li>Every workflow execution is recorded, so any action taken on your account can be traced</li>
                        </ul>
                        <p>No method of transmission over the Internet or electronic storage is 100% secure. We will notify affected clients without undue delay in the event of a data breach that poses a risk to their rights, and will notify the relevant supervisory authority where required by law.</p>
                    </section>

                    <section id="rights">
                        <h2><span className="section-num">10.</span> Your Rights</h2>
                        <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
                        <ul>
                            <li><strong>Access:</strong> request a copy of the personal data we hold about you</li>
                            <li><strong>Rectification:</strong> request correction of inaccurate or incomplete data</li>
                            <li><strong>Erasure:</strong> request deletion of your data, subject to our legal retention obligations</li>
                            <li><strong>Portability:</strong> receive your data in a structured, machine-readable format</li>
                            <li><strong>Restriction:</strong> request that we limit the processing of your data in certain circumstances</li>
                            <li><strong>Objection:</strong> object to processing based on legitimate interests</li>
                            <li><strong>Withdrawal of consent:</strong> disconnect a connected account at any time, as described in section 5.5</li>
                        </ul>
                        <p>To exercise any of these rights, contact us at <a href="mailto:contact@worldaigent.com">contact@worldaigent.com</a>. We will respond within 30 days.</p>
                        <p>If you are an individual whose personal data appears in material a client has submitted to us, please contact that client directly, as they control that data. If you contact us, we will forward your request to them.</p>
                    </section>

                    <section id="gdpr">
                        <h2><span className="section-num">11.</span> GDPR</h2>
                        <p>We are established in Estonia, so GDPR governs our processing of personal data in all cases, not only for clients located in the European Union.</p>
                        <h3>11.1 Legal Basis for Processing</h3>
                        <p>We process personal data under the following legal bases: (a) performance of a contract, to provide the Service you have subscribed to; (b) legitimate interests, to ensure platform security and prevent fraud; (c) consent, for connecting a social media account and publishing on your behalf; and (d) legal obligation, to comply with applicable laws.</p>
                        <h3>11.2 International Transfers</h3>
                        <p>Our default infrastructure is located in the United States, so personal data we process is transferred outside the European Economic Area. These transfers are made under the European Commission's Standard Contractual Clauses, together with the supplementary measures described in section 9, principally encryption in transit and at rest and strict access control. Transfers to providers certified under the EU-US Data Privacy Framework rely on that framework where it applies.</p>
                        <p>Clients who require personal data to remain within the European Economic Area may request a dedicated EU regional configuration before onboarding, as described in section 7.2.</p>
                        <h3>11.3 Data Processing Agreement</h3>
                        <p>Clients acting as controllers may request a Data Processing Agreement covering our processing on their behalf. Contact us and we will provide one.</p>
                        <h3>11.4 Right to Lodge a Complaint</h3>
                        <p>Our lead supervisory authority is the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon), Tatari 39, 10134 Tallinn, Estonia. You may lodge a complaint with them, or with the supervisory authority of the EU member state where you live or work, if you believe we have processed your data in violation of GDPR.</p>
                    </section>

                    <section id="pipeda">
                        <h2><span className="section-num">12.</span> PIPEDA: Additional Information for Canadian Clients</h2>
                        <p>For clients subject to Canada's Personal Information Protection and Electronic Documents Act (PIPEDA), we collect, use, and disclose personal information only for purposes a reasonable person would consider appropriate. We obtain consent before or at the time of collection. Clients may withdraw consent at any time, subject to legal or contractual restrictions.</p>
                        <p>Canadian clients who require personal information to remain in Canada should request a Canadian regional configuration before onboarding, as described in section 7.2. Where no such configuration is agreed, data is processed in the United States and may be subject to access by authorities in that jurisdiction under its laws.</p>
                    </section>

                    <section id="cookies">
                        <h2><span className="section-num">13.</span> Cookies and Our Website</h2>
                        <p>Our public website at worldaigent.com does not set advertising cookies, tracking cookies, or third-party analytics, and does not profile visitors.</p>
                        <p>Where the platform provides an authenticated interface, it uses session cookies that are strictly necessary for secure access and are deleted when you close your browser, and preference cookies that store interface settings and can be cleared through your browser.</p>
                        <p>We do not share cookie data with third parties.</p>
                    </section>

                    <section id="changes">
                        <h2><span className="section-num">14.</span> Changes to This Policy</h2>
                        <p>We may update this Privacy Policy to reflect changes in our practices or applicable law. We will notify clients of material changes by email at least 30 days before the changes take effect. Continued use of the Service after the effective date constitutes acceptance of the updated policy.</p>
                    </section>

                    <section id="contact">
                        <h2><span className="section-num">15.</span> Contact</h2>
                        <p>For questions, requests, or concerns about this Privacy Policy, contact us at:</p>
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

export default PrivacyPolicy;
