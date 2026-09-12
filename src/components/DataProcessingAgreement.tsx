import React, { useEffect } from 'react';
import './TermsOfService.css';

const DataProcessingAgreement: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="legal-page">
            <header className="legal-hero">
                <div className="legal-hero-inner">
                    <p className="legal-label">Legal</p>
                    <h1>Data Processing Agreement</h1>
                    <p className="legal-meta">World Aigent OÜ · worldaigent.com · Effective date: 12 September 2026 · Version 1.0</p>
                </div>
            </header>

            <div className="legal-layout">
                <nav className="legal-toc">
                    <p className="toc-heading">Contents</p>
                    <ol>
                        <li><a href="#parties">Parties and Scope</a></li>
                        <li><a href="#roles">Roles of the Parties</a></li>
                        <li><a href="#instructions">Processing on Instructions</a></li>
                        <li><a href="#confidentiality">Confidentiality</a></li>
                        <li><a href="#security">Security</a></li>
                        <li><a href="#subprocessors">Sub-processors</a></li>
                        <li><a href="#transfers">International Transfers</a></li>
                        <li><a href="#rights">Data Subject Requests</a></li>
                        <li><a href="#breach">Personal Data Breach</a></li>
                        <li><a href="#audit">Audits and Information</a></li>
                        <li><a href="#deletion">Return and Deletion</a></li>
                        <li><a href="#term">Term and Precedence</a></li>
                        <li><a href="#annex-a">Annex A: The Processing</a></li>
                        <li><a href="#annex-b">Annex B: Security Measures</a></li>
                        <li><a href="#annex-c">Annex C: Sub-processors</a></li>
                    </ol>
                </nav>

                <article className="legal-body">
                    <section id="parties">
                        <h2><span className="section-num">1.</span> Parties and Scope</h2>
                        <p>This Data Processing Agreement ("DPA") is entered into between <strong>World Aigent OÜ</strong>, registry code 17403898, Sepapaja tn 6, Lasnamäe linnaosa, 15551 Tallinn, Estonia ("Processor", "we") and the client identified in the applicable client agreement ("Controller", "you").</p>
                        <p>It applies where we process personal data on your behalf in the course of providing the Service, and forms part of our Terms of Service. It gives effect to Article 28 of Regulation (EU) 2016/679 (GDPR).</p>
                        <p>A countersigned copy is available on request from <a href="mailto:contact@worldaigent.com">contact@worldaigent.com</a>. If your organisation requires its own DPA template, send it and we will review it.</p>
                    </section>

                    <section id="roles">
                        <h2><span className="section-num">2.</span> Roles of the Parties</h2>
                        <p>You are the Controller of personal data contained in the content you ask us to publish, in the source material you provide, and in the accounts you connect. You determine the purposes and means of that processing.</p>
                        <p>We are the Processor of that data and act only on your instructions.</p>
                        <p>We are an independent Controller for data we hold about our own client relationship with you, such as your account details, billing records and support correspondence. That processing is described in our Privacy Policy and is not governed by this DPA.</p>
                        <p>LinkedIn is an independent Controller of personal data on its own platform. Once content is published, LinkedIn's handling of it is governed by LinkedIn's own terms and privacy policy, not by this DPA.</p>
                    </section>

                    <section id="instructions">
                        <h2><span className="section-num">3.</span> Processing on Instructions</h2>
                        <p>We process personal data only on your documented instructions, including in relation to transfers to a third country, unless required to do otherwise by Union or Member State law. Where such a legal requirement applies, we will inform you before processing unless that law prohibits it on important grounds of public interest.</p>
                        <p>Your instructions are given by this DPA, the Terms of Service, your client agreement, your configuration of the Service, and the requests your authorised users send through the messaging channel connected to the Service.</p>
                        <p>We will inform you if, in our opinion, an instruction infringes GDPR or other applicable data protection law.</p>
                        <p><strong>We do not use personal data processed under this DPA to train artificial intelligence models, and we contract with providers on terms that prevent them from doing so.</strong> Requests to our model routing provider are sent with data collection denied at the provider level.</p>
                    </section>

                    <section id="confidentiality">
                        <h2><span className="section-num">4.</span> Confidentiality</h2>
                        <p>We ensure that persons authorised to process personal data are bound by an appropriate obligation of confidentiality, whether contractual or statutory, and that access is limited to those who need it to provide the Service.</p>
                    </section>

                    <section id="security">
                        <h2><span className="section-num">5.</span> Security</h2>
                        <p>We implement appropriate technical and organisational measures to ensure a level of security appropriate to the risk, taking into account the state of the art, the costs of implementation, and the nature, scope, context and purposes of processing. Those measures are described in <a href="#annex-b">Annex B</a>.</p>
                        <p>We may update these measures over time, provided the level of protection is not reduced.</p>
                    </section>

                    <section id="subprocessors">
                        <h2><span className="section-num">6.</span> Sub-processors</h2>
                        <p>You give general authorisation for us to engage sub-processors. Those engaged at the effective date are listed in <a href="#annex-c">Annex C</a>.</p>
                        <p>We impose on each sub-processor data protection obligations no less protective than those in this DPA, and we remain fully liable to you for their performance.</p>
                        <p>We will give you at least <strong>30 days' notice by email</strong> before adding or replacing a sub-processor. If you reasonably object on data protection grounds within that period, we will work with you in good faith to find an alternative. If none is available, you may terminate the affected part of the Service without penalty for the remainder of the prepaid term.</p>
                    </section>

                    <section id="transfers">
                        <h2><span className="section-num">7.</span> International Transfers</h2>
                        <p>We are established in Estonia. Our default infrastructure is located in the United States, so personal data processed under this DPA is transferred outside the European Economic Area.</p>
                        <p>Those transfers are made under the European Commission's Standard Contractual Clauses (Decision 2021/914), Module Three (processor to processor), which are incorporated into this DPA by reference and take precedence in the event of conflict. Where a sub-processor is certified under the EU-US Data Privacy Framework, that mechanism applies instead. Supplementary measures are described in Annex B, principally encryption in transit and at rest and strict access control.</p>
                        <p>Where you require personal data to remain within the European Economic Area, a regional configuration must be agreed in writing before onboarding. It cannot be applied retrospectively.</p>
                    </section>

                    <section id="rights">
                        <h2><span className="section-num">8.</span> Data Subject Requests</h2>
                        <p>Taking into account the nature of the processing, we assist you by appropriate technical and organisational measures, insofar as this is possible, in fulfilling your obligation to respond to requests to exercise data subject rights.</p>
                        <p>If a data subject contacts us directly about data we process on your behalf, we will not respond to the substance of the request. We will tell them to contact you and forward the request to you without undue delay.</p>
                    </section>

                    <section id="breach">
                        <h2><span className="section-num">9.</span> Personal Data Breach</h2>
                        <p>We notify you without undue delay, and in any event within <strong>48 hours</strong> of becoming aware of a personal data breach affecting personal data processed on your behalf.</p>
                        <p>Our notification will describe, to the extent known at the time: the nature of the breach and the categories and approximate number of data subjects and records concerned; the likely consequences; the measures taken or proposed; and a contact point for further information. Where the full picture is not yet available, we provide information in phases without further undue delay.</p>
                        <p>We assist you in meeting your own obligations under Articles 33 and 34 GDPR. We do not notify your supervisory authority or your data subjects on your behalf unless you instruct us to in writing.</p>
                        <p>We also assist you, on request and taking into account the information available to us, with data protection impact assessments and prior consultations under Articles 35 and 36.</p>
                    </section>

                    <section id="audit">
                        <h2><span className="section-num">10.</span> Audits and Information</h2>
                        <p>We make available to you the information necessary to demonstrate compliance with Article 28 and allow for and contribute to audits, including inspections, conducted by you or an auditor you mandate.</p>
                        <p>Audits are limited to once per twelve month period unless a personal data breach has occurred or a supervisory authority requires otherwise, must be requested at least 30 days in advance, must take place during business hours, must not unreasonably disrupt the Service, and are subject to confidentiality. The auditor must not be a competitor of ours. You bear your own costs and ours where an audit exceeds one working day.</p>
                    </section>

                    <section id="deletion">
                        <h2><span className="section-num">11.</span> Return and Deletion</h2>
                        <p>At your choice, we delete or return all personal data processed on your behalf at the end of the provision of the Service, and delete existing copies, unless Union or Member State law requires storage.</p>
                        <p>In practice: access and refresh tokens for connected accounts are deleted <strong>immediately</strong> as part of disconnection or termination. Remaining content and performance data is deleted <strong>within 90 days</strong> of termination unless you request an export first. Records we are required to keep as financial history, such as usage and billing records, are retained under the periods set out in our Privacy Policy.</p>
                        <p>Suspension is not termination. Where the Service is paused, for example for non-payment, connected accounts remain connected and their tokens are retained so service can resume without re-authorisation.</p>
                        <p>Content already published to a connected platform remains on that platform under your control and is not affected by deletion here.</p>
                    </section>

                    <section id="term">
                        <h2><span className="section-num">12.</span> Term and Precedence</h2>
                        <p>This DPA takes effect when you begin using the Service and continues for as long as we process personal data on your behalf.</p>
                        <p>In the event of conflict, the order of precedence is: the Standard Contractual Clauses, then this DPA, then the Terms of Service, then any other agreement between us, unless a signed client agreement expressly states otherwise.</p>
                        <p>Liability under this DPA is subject to the limitations in our Terms of Service, except where applicable law does not permit that limitation.</p>
                    </section>

                    <section id="annex-a">
                        <h2><span className="section-num">A.</span> Annex A: The Processing</h2>
                        <p><strong>Subject matter.</strong> Provision of the Service: generating, scheduling and publishing content to the social media accounts you connect, measuring its performance, and reporting on it. Related workflows including email drafting and sending, and processing documents and recordings into content.</p>
                        <p><strong>Duration.</strong> The term of your client agreement, plus the deletion periods in section 11.</p>
                        <p><strong>Nature and purpose.</strong> Collection, storage, organisation, retrieval, use, transmission and erasure, by automated means, for the purpose of operating the Service on your instructions.</p>
                        <p><strong>Categories of data subject.</strong> Your personnel who use the Service or whose accounts are connected; individuals whose personal data appears in source material you provide; individuals who engage with content published on your connected accounts, to the extent the platform returns data about that engagement.</p>
                        <p><strong>Types of personal data.</strong> Names and business contact details; social media account identifiers, display names and profile information; access and refresh tokens for connected accounts; the content of instructions, messages and published posts; engagement and performance metrics for posts on connected accounts; personal data contained in documents, recordings or files you submit; IP addresses and client information collected for security.</p>
                        <p><strong>Special categories.</strong> None. The Service is not intended for special category data under Article 9 or criminal conviction data under Article 10, and our Terms of Service prohibit submitting it without a separate written addendum.</p>
                    </section>

                    <section id="annex-b">
                        <h2><span className="section-num">B.</span> Annex B: Security Measures</h2>
                        <ul>
                            <li><strong>Encryption in transit.</strong> TLS 1.2 or higher for all connections.</li>
                            <li><strong>Encryption at rest.</strong> AES-256 for stored data.</li>
                            <li><strong>Credential management.</strong> Secrets, credentials and third-party access tokens held in a dedicated secret management service, never in source code, databases or logs.</li>
                            <li><strong>Tenant isolation.</strong> A dedicated processing namespace per client, so no client's workflow can observe or affect another's.</li>
                            <li><strong>Access control.</strong> Access to production systems restricted to authorised personnel on a role basis and limited to what is needed to provide the Service. The production database is not exposed to the public internet.</li>
                            <li><strong>Auditability.</strong> Every workflow execution is recorded, so any action taken on your account can be traced to the instruction that caused it.</li>
                            <li><strong>Resilience.</strong> Durable workflow execution: a workflow survives infrastructure failure and resumes rather than losing state.</li>
                            <li><strong>Purpose limitation in model use.</strong> Requests to AI model providers are sent with data collection denied at the provider level, so submitted content is not retained or used for model training.</li>
                            <li><strong>Data minimisation in platform access.</strong> We request only the platform permissions needed for the work you have asked for, and do not request access to connections, private messages or personal news feeds.</li>
                        </ul>
                    </section>

                    <section id="annex-c">
                        <h2><span className="section-num">C.</span> Annex C: Sub-processors</h2>
                        <p>As at the effective date of this DPA:</p>
                        <ul>
                            <li><strong>Google Cloud Platform</strong> (Google Ireland Limited / Google LLC): infrastructure, databases, file storage, secret management, speech and video processing. United States.</li>
                            <li><strong>Google Workspace</strong> (Google Ireland Limited / Google LLC): sending email composed by the Service on your behalf. United States.</li>
                            <li><strong>Temporal Technologies</strong> (Temporal Cloud): workflow orchestration and execution history. United States.</li>
                            <li><strong>Anthropic</strong>: AI language model processing for content generation. United States.</li>
                            <li><strong>OpenRouter</strong>: routing of requests to AI model providers, including passing a topic to its search provider where a request requires current facts. United States.</li>
                            <li><strong>Slack Technologies</strong> (Salesforce): the messaging channel through which you interact with the Service, where you have chosen Slack. United States.</li>
                            <li><strong>Web3Forms</strong>: processing of website contact form submissions. United States. This applies to website enquiries only and not to client data processed under this DPA.</li>
                        </ul>
                        <p>Where you provide source material by linking to third-party storage such as Google Drive, OneDrive or a video hosting service, we retrieve that file using the access you have granted. Those services are not our sub-processors; they are yours.</p>
                    </section>

                    <section id="contact">
                        <h2><span className="section-num">D.</span> Contact</h2>
                        <p>For questions about this DPA, or to request a countersigned copy:</p>
                        <div className="legal-contact-block">
                            <strong>World Aigent OÜ</strong>
                            <span>Registry code 17403898</span>
                            <span>Sepapaja tn 6, Lasnamäe linnaosa, 15551 Tallinn, Harju maakond, Estonia</span>
                            <span>Email: <a href="mailto:contact@worldaigent.com">contact@worldaigent.com</a></span>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
};

export default DataProcessingAgreement;
