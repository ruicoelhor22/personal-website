'use strict';

// Public portfolio summaries grounded in Rui's supplied CV and dissertation.
// Company examples describe workstreams without reproducing internal systems or data.
window.PORTFOLIO_CASE_STUDIES = {
 automation: `
  <p class="eyebrow">NORDEX / OPERATIONAL AUTOMATION</p>
  <h2 id="case-title">Making repetitive data work automatic.</h2>
  <p class="case-lead">File handling, data-quality monitoring and reporting across an industrial data estate.</p>
  <div class="case-scale"><div><strong>Dozens</strong><span>of file types automated</span></div><div><strong>Thousands</strong><span>of wind farms in scope</span></div></div>
  <h3>The operational problem</h3><p>Repeated file checks, missing-data investigations and routine reports create manual work around a data platform. The work includes finding the exceptions and getting the right information to the teams who need to act.</p>
  <h3>What I implemented</h3><p>I automated file processing and monitoring workflows at Nordex. My work included identifying missing turbine data, checking files, creating country-level reports, preparing Excel attachments and HTML summaries, and handling incident records through their lifecycle.</p>
  <h3>The practical result</h3><p>Automated handling covered dozens of file types across thousands of wind farms, reducing the need for routine manual file work. Reports and exception information could be prepared by the workflow rather than assembled by hand.</p>
  <h3>Technologies in the work</h3><p>R, SQL, programmatic reporting and API-based integrations connected the data checks, outputs and operational follow-up.</p>
  <div class="tags"><span>R</span><span>SQL</span><span>APIs</span><span>Excel & HTML reports</span><span>Data-quality monitoring</span></div>
  <p class="case-note">The figures describe approximate delivery scope, based on my project account. A before-and-after measure of hours saved or error reduction is not available. Internal project names, datasets and operational thresholds are omitted.</p>`,
 frontwell: `
  <p class="eyebrow">FRONTWELL SOLUTIONS / GLOBAL MATERIALS COMPANY</p>
  <h2 id="case-title">From disconnected systems to data people can use.</h2>
  <p class="case-lead">Breaking down data silos, from understanding legacy data and stakeholder needs to delivering the platform and the data products that support their decisions.</p>
  <div class="case-facts"><div><span>Role</span><strong>Senior Data Engineer</strong></div><div><span>Progression</span><strong>Data Engineer → Senior · July 2026</strong></div><div><span>Joined</span><strong>October 2025 · Remote</strong></div></div>
  <div class="case-scale fws-scale"><div><strong>4</strong><span>departments in one organisation</span></div><div><strong>22</strong><span>source data products</span></div><div><strong>10</strong><span>analytical data products</span></div></div><p class="scope-caption">Project landscape I work across. Product counts describe scope, rather than the number of reports or individual source systems.</p><div data-lineage="frontwell"></div>
  <h3>The work</h3>
  <p>At FrontWell Solutions, supporting a global materials company, my work connects the systems where data originates with the people who need to use it. The goal is to break down silos and make operational data useful across the organisation.</p>
  <div class="case-workstream"><span class="workstream-number">01</span><div><h3>Understand the data and the people using it</h3><p>I work with stakeholders to understand what the data means, which questions they need to answer and how they want to see the results. I connect that business understanding with the structure and constraints of the source systems.</p><p><strong>My contribution:</strong> turning an operational need into a clear delivery plan, data model and usable output.</p></div></div>
  <div class="case-workstream"><span class="workstream-number">02</span><div><h3>Connect legacy systems and remove silos</h3><p>I bring data from legacy enterprise systems, such as laboratory, manufacturing and SAP systems, into a modern data platform. Integration is part of the complete process, from understanding the source to preparing data that can be used beyond its original system.</p><p><strong>My contribution:</strong> connecting fragmented operational data and building the ingestion, transformation and orchestration behind it.</p></div></div>
  <div class="case-workstream"><span class="workstream-number">03</span><div><h3>Deliver the data behind an app, report or dashboard</h3><p>I shape the platform and its data products around the output stakeholders actually need: an application, a report, a dashboard or another operational use. I own the work through implementation and production deployment, with performance, maintainability and cost efficiency informing the design.</p><p><strong>My contribution:</strong> carrying the business context through to the final data product, so the output matches the way people need to use it.</p></div></div>
  <div class="case-workstream"><span class="workstream-number">04</span><div><h3>Help the team deliver consistently</h3><p>Alongside hands-on engineering, I line-manage and mentor data engineers through onboarding, goal setting and technical reviews. Shared engineering standards support the way the team builds and maintains its solutions.</p></div></div>
  <div class="case-workstream"><span class="workstream-number">05</span><div><h3>Keep documentation connected to the code</h3><p>I built a dbt-based documentation framework to generate model reference information, lineage and compiled SQL from the projects. It makes the transformations easier to understand, review and hand over as the platform evolves.</p></div></div><div data-lineage="documentation"></div>
  <div class="tags"><span>Azure</span><span>ADLS</span><span>Databricks</span><span>PySpark</span><span>SQL</span><span>dbt</span><span>Data modelling</span><span>Technical leadership</span></div>
  <p class="case-note">This is a public-facing summary of my role and workstreams. Client datasets, internal architecture, operational details and implementation code are not reproduced.</p>`,

 nordex: `
  <p class="eyebrow">NORDEX GROUP / RENEWABLE ENERGY</p>
  <h2 id="case-title">Data engineering at an industrial scale.</h2>
  <p class="case-lead">Centralised master data, the move to Azure Databricks, and the platforms that support dependable data delivery.</p>
  <div class="case-facts"><div><span>Role</span><strong>Data Engineer</strong></div><div><span>Period</span><strong>November 2023 – October 2025</strong></div><div><span>Environment</span><strong>International · Remote</strong></div></div>
  <div class="case-scale"><div><strong>20,000+</strong><span>wind turbines represented</span></div><div><strong>5M+</strong><span>daily records processed</span></div></div><div data-lineage="nordex"></div>
  <div class="case-workstream"><span class="workstream-number">01</span><div><h3>Centralised master-data platform</h3><p>I designed a centralised master-data platform processing data from more than 20,000 wind turbines and over five million daily records. The work supported the migration towards Azure Databricks.</p><p><strong>My contribution:</strong> platform and data design, connecting the requirements of an industrial data estate with the move towards a cloud lakehouse.</p></div></div>
  <div class="case-workstream"><span class="workstream-number">02</span><div><h3>Spark performance & lakehouse structure</h3><p>I optimised Spark and Databricks workloads through cluster tuning, memory optimisation and the use of Medallion Architecture across Bronze, Silver and Gold layers.</p><p><strong>My contribution:</strong> working on both the structure of the data platform and the way processing workloads used the available resources.</p></div></div>
  <div class="case-workstream"><span class="workstream-number">03</span><div><h3>SQL Server administration & engineering</h3><p>I administered SQL Server environments, covering role-based access control, stored procedures, database design and performance optimisation.</p><p><strong>My contribution:</strong> combining database administration with hands-on engineering across the existing platform and its evolution.</p></div></div>
  <div class="tags"><span>Azure Databricks</span><span>Apache Spark</span><span>Medallion architecture</span><span>SQL Server</span><span>RBAC</span><span>Cloud migration</span></div>
  <p class="case-note">Scale figures are taken from my CV. They describe the platform’s scope, not a measured performance improvement. Internal schemas, infrastructure and implementation details are omitted.</p>`,

 spaces: `
  <p class="eyebrow">MASTER’S DISSERTATION / UNIVERSIDADE DO MINHO / 2026</p>
  <h2 id="case-title">Sharing data. Keeping sovereignty.</h2>
  <p class="case-lead">Proposal of an Approach for Inter-Organizational Data Architecture: Data Spaces.</p>
  <div class="case-facts"><div><span>Author</span><strong>Rui Pedro Fernandes Coelho</strong></div><div><span>Supervisor</span><strong>Professor António Amaro Costa Vieira</strong></div><div><span>Method</span><strong>Design Science Research</strong></div></div>
  <div class="case-actions"><a class="button primary" href="documents/rui-coelho-masters-dissertation.pdf" target="_blank" rel="noopener noreferrer">Read the dissertation <span data-icon="arrow-up-right"></span></a><a class="text-link" href="documents/rui-coelho-masters-dissertation.pdf" download="Rui-Coelho-Masters-Dissertation.pdf">Download PDF · 105 pages <span data-icon="arrow-down"></span></a></div>
  <h3>The question behind the research</h3>
  <p>How can independent organisations discover, share and reuse data without giving up ownership or control? My dissertation explores a federated approach to that problem, bringing governance, interoperability and data sovereignty into the architecture itself.</p>
  <h3>What I designed</h3>
  <p>The research develops three connected architectural contributions: a domain model describing the participants and their responsibilities, a technology-independent conceptual architecture, and a technological architecture showing how the model could be realised using existing tools.</p>
  <div class="research-contributions"><div><strong>Domain model</strong><span>Participants, data products, responsibilities and policies.</span></div><div><strong>Conceptual architecture</strong><span>Discovery, contracts, trust and governed exchange.</span></div><div><strong>Technological architecture</strong><span>A path from the concepts to concrete platform choices.</span></div></div>
  <h3>A proof of concept with three fictional organisations</h3>
  <p>The controlled scenario uses two data providers and an analytics participant. Each retains responsibility for its own products and sharing conditions.</p>
  <div class="research-scenario" aria-label="Fictional proof-of-concept participants"><div><span>ORGANISATION A</span><strong>Customer Services</strong><small>Customer Profile</small></div><div><span>ORGANISATION B</span><strong>Operations & Service Delivery</strong><small>Operational Metrics</small></div><div><span>ORGANISATION C</span><strong>Analytics & Insights</strong><small>Engagement Insights, derived from A + B</small></div></div>
  <h3>How the workflow operates</h3>
  <ol class="research-steps"><li><strong>Register participants.</strong> Establish explicit identities and responsibilities in a shared participant registry.</li><li><strong>Publish data products.</strong> Each domain maintains its product specification and a baseline contract describing default sharing conditions.</li><li><strong>Agree on a particular use.</strong> An interaction contract defines the relationship between a named producer and consumer, refining purpose, scope and constraints.</li><li><strong>Approve and record access.</strong> Requests are documented through GitHub Issues; the product owner decides, and an access grant records the approval.</li><li><strong>Discover and derive.</strong> A shared metadata catalogue references the domain-owned artifacts. The analytics participant consumes approved interfaces and publishes a derived product with declared lineage.</li></ol>
  <h3>The implementation</h3>
  <p>The proof of concept uses version-controlled YAML and JSON artifacts in domain repositories and a shared governance registry. Databricks provides a controlled analytical execution environment, with consumption-ready views acting as the declared data-product interfaces.</p>
  <p>The catalogue is an index of references rather than a central store of the participating organisations’ data. Baseline contracts define default conditions; interaction contracts and grants document the approved relationship with a specific consumer.</p>
  <h3>What the evaluation showed</h3>
  <p>A qualitative assessment demonstrates the core workflow of publication, discovery, governed access and traceable derivation in the simplified scenario. It shows how shared coordination can coexist with local ownership and access decisions.</p>
  <h3>Where the evidence stops</h3>
  <p>This is an architectural proof of concept. Automated policy enforcement, federated identity, standalone connector components and production-scale performance were not implemented or empirically validated. Unity Catalog is discussed as a possible platform-native evolution, rather than presented as an implemented catalogue.</p>
  <p class="case-note">The participating organisations and example data are fictional. The study demonstrates architectural and governance mechanisms; it does not claim measured production savings or performance gains.</p>
  <div class="tags"><span>Data Spaces</span><span>Federated governance</span><span>Data contracts</span><span>Databricks</span><span>GitHub</span><span>YAML & JSON</span><span>Lineage</span></div>
  <p class="research-credit">Master in Engineering and Management of Information Systems · Universidade do Minho. Dissertation supplied by the author; licensed <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC 4.0</a>.</p>`
};
