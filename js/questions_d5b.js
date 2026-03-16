// Domain 5 — Security, Compliance & Governance (extra batch, q471-q500)
const D5B = [
  {
    id:"q471",domain:5,subdomain:"5.1",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is 'indirect prompt injection' in RAG-based AI systems?",
    options:[{key:"A",text:"Injecting malicious instructions into the system prompt by the application developer"},{key:"B",text:"Malicious instructions embedded in external documents that are retrieved and inserted into the FM context, overriding system instructions"},{key:"C",text:"SQL injection attacks targeting the vector database"},{key:"D",text:"Unauthorized modification of the FM's system prompt via API"}],
    answer:"B",
    explanation:"Indirect prompt injection attacks embed malicious instructions in external content (web pages, documents, emails) that an AI system retrieves. When these documents are inserted into the context, the embedded instructions can override system prompts, exfiltrate data, or cause the AI to perform unauthorized actions. This is particularly dangerous in agentic RAG systems with tool access."
  },
  {
    id:"q472",domain:5,subdomain:"5.1",service:"Amazon Bedrock",difficulty:"hard",
    question:"What is 'model inversion attack' and what information does it attempt to recover?",
    options:[{key:"A",text:"Reversing model quantization to recover original FP32 weights"},{key:"B",text:"Using a trained model's predictions to reconstruct or approximate sensitive training data samples"},{key:"C",text:"Inverting the direction of gradient flow during training"},{key:"D",text:"Converting a text model to a image model through adversarial techniques"}],
    answer:"B",
    explanation:"Model inversion attacks use the model's prediction interface to reconstruct approximations of training data. By repeatedly querying the model and analyzing confidence scores, attackers can reconstruct data samples (e.g., patient records, private images) that were in the training set. This is a privacy attack that motivates differential privacy and training data protection requirements."
  },
  {
    id:"q473",domain:5,subdomain:"5.1",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is 'data exfiltration' in the context of AI system security?",
    options:[{key:"A",text:"Exporting model weights for local deployment"},{key:"B",text:"When an AI system is manipulated to leak private information (system prompts, user data, internal documents) to unauthorized parties"},{key:"C",text:"Transferring training data from on-premise to cloud storage"},{key:"D",text:"Downloading model evaluation metrics to external dashboards"}],
    answer:"B",
    explanation:"Data exfiltration occurs when an AI system is exploited to reveal confidential information it has access to. In agentic systems with database access, prompt injection can cause the AI to query and return sensitive data. In RAG systems, carefully crafted queries can extract contents of confidential documents. System design must prevent AI from being used as a data exfiltration vector."
  },
  {
    id:"q474",domain:5,subdomain:"5.1",service:"Amazon Bedrock",difficulty:"hard",
    question:"What is 'jailbreaking' in the context of foundation model security?",
    options:[{key:"A",text:"Removing DRM from model weights for local execution"},{key:"B",text:"Using adversarial prompts to bypass an FM's safety training and elicit harmful or policy-violating outputs"},{key:"C",text:"Unauthorized access to the model provider's API without a key"},{key:"D",text:"Extracting a model's training data through repeated queries"}],
    answer:"B",
    explanation:"Jailbreaking involves crafting prompts (often using roleplay, hypothetical framing, or adversarial formatting) that cause an FM to bypass its safety training and produce harmful outputs it would normally refuse. Mitigations include Bedrock Guardrails, robust RLHF/Constitutional AI training, and regular red-teaming to identify new jailbreak vectors."
  },
  {
    id:"q475",domain:5,subdomain:"5.1",service:"AWS",difficulty:"medium",
    question:"What is the 'principle of least privilege' and how does it apply to AI systems in AWS?",
    options:[{key:"A",text:"AI models should use the smallest possible number of parameters"},{key:"B",text:"AI system components should only have the minimum permissions necessary to perform their specific functions, granted via fine-grained IAM policies"},{key:"C",text:"Training datasets should be the minimum size needed for acceptable performance"},{key:"D",text:"AI agents should request fewer permissions than they actually need to test security boundaries"}],
    answer:"B",
    explanation:"Least privilege requires granting AI system components only the permissions they need. For Bedrock agents: only the S3 buckets, knowledge bases, and APIs it must access. For fine-tuning jobs: only the training data bucket. Overly permissive roles create blast radius if the AI is compromised — e.g., a jailbroken agent could exfiltrate or modify data beyond its intended scope."
  },
  {
    id:"q476",domain:5,subdomain:"5.1",service:"Amazon Bedrock",difficulty:"medium",
    question:"Amazon Bedrock Guardrails can block 'sensitive information' in model responses. Which categories of PII can it detect and redact?",
    options:[{key:"A",text:"Only Social Security Numbers and credit card numbers"},{key:"B",text:"Categories including names, phone numbers, email addresses, SSNs, credit card numbers, IP addresses, and custom regex patterns"},{key:"C",text:"Only information that matches exact strings in a blocklist"},{key:"D",text:"Only information explicitly mentioned in the system prompt as sensitive"}],
    answer:"B",
    explanation:"Bedrock Guardrails' sensitive information filters use ML-based PII detection to identify and optionally redact or block a wide range of PII categories (names, phone numbers, emails, SSNs, credit cards, IPs, etc.) plus custom regex patterns for organization-specific sensitive data. This prevents inadvertent PII leakage in model inputs and outputs."
  },
  {
    id:"q477",domain:5,subdomain:"5.2",service:null,difficulty:"medium",
    question:"What does 'HIPAA compliance' require for AI systems processing protected health information (PHI)?",
    options:[{key:"A",text:"PHI can be freely used for AI training as long as it is anonymized after the model is trained"},{key:"B",text:"AI systems processing PHI must implement technical safeguards (encryption, access controls), administrative safeguards (policies, training), and physical safeguards, with Business Associate Agreements for service providers"},{key:"C",text:"HIPAA only applies to human doctors, not AI systems"},{key:"D",text:"AI providers must store all PHI in HIPAA-certified data centers regardless of usage patterns"}],
    answer:"B",
    explanation:"HIPAA requires covered entities and business associates to implement comprehensive safeguards for PHI. For AI systems: encryption at rest and in transit, access controls (IAM/RBAC), audit logging, minimum necessary data use, and Business Associate Agreements with cloud providers. AWS has HIPAA-eligible services including many AI/ML services that can be used for PHI processing."
  },
  {
    id:"q478",domain:5,subdomain:"5.2",service:"AWS",difficulty:"easy",
    question:"What is an AWS Business Associate Agreement (BAA) and when is it required for AI workloads?",
    options:[{key:"A",text:"A pricing agreement for bulk AI inference requests"},{key:"B",text:"A contractual agreement required when AWS services process protected health information (PHI), establishing HIPAA compliance obligations for AWS as a business associate"},{key:"C",text:"A partnership agreement for AWS Partners building AI solutions"},{key:"D",text:"A terms of service addendum for enterprise Bedrock customers"}],
    answer:"B",
    explanation:"A BAA is legally required under HIPAA when a covered entity uses a business associate (like AWS) to process PHI on their behalf. Organizations must execute a BAA with AWS before using HIPAA-eligible services (including Amazon SageMaker and some Bedrock features) to process patient data, even for AI model training."
  },
  {
    id:"q479",domain:5,subdomain:"5.1",service:"Amazon Bedrock",difficulty:"hard",
    question:"What is 'training data poisoning' and how can it compromise an FM?",
    options:[{key:"A",text:"Using low-quality, noisy data that reduces model accuracy uniformly"},{key:"B",text:"Deliberately injecting malicious samples into training data to cause the model to produce incorrect outputs or exhibit backdoor behaviors on specific triggers"},{key:"C",text:"Corrupting model weights after training through unauthorized storage access"},{key:"D",text:"Exposing the model to toxic content that causes refusals on all subsequent queries"}],
    answer:"B",
    explanation:"Data poisoning attacks inject crafted malicious samples into training datasets to create backdoors (e.g., the model behaves normally except when seeing a specific trigger phrase, at which point it produces attacker-controlled output) or to degrade model performance. Defending against poisoning requires training data provenance verification, anomaly detection in training sets, and trusted data supply chains."
  },
  {
    id:"q480",domain:5,subdomain:"5.2",service:"AWS",difficulty:"medium",
    question:"What is the AWS Shared Responsibility Model for AI services like Amazon Bedrock?",
    options:[{key:"A",text:"AWS is responsible for everything including the prompts customers send to models"},{key:"B",text:"AWS secures the infrastructure, model availability, and managed service operations; customers are responsible for their application security, data governance, prompt design, and compliance for their specific use case"},{key:"C",text:"Responsibility is shared 50/50 with no specific delineation"},{key:"D",text:"Customers handle security only if they use custom models; AWS handles all security for base models"}],
    answer:"B",
    explanation:"For Bedrock: AWS handles infrastructure security, model integrity, service availability, and managed service controls. Customers are responsible for: IAM permissions design, data classification and handling, prompt injection prevention, output validation, regulatory compliance for their use case, and appropriate guardrails. Understanding this boundary is essential for compliance planning."
  },
  {
    id:"q481",domain:5,subdomain:"5.2",service:"AWS",difficulty:"medium",
    question:"What is 'AI governance' and what elements should an enterprise AI governance framework include?",
    options:[{key:"A",text:"Government regulations that apply to AI companies"},{key:"B",text:"An organizational framework including policies, processes, roles, and controls that ensure AI is developed and used responsibly, safely, and in compliance with regulations"},{key:"C",text:"Technical settings that control model behavior through system prompts"},{key:"D",text:"A software platform for managing AI model deployment"}],
    answer:"B",
    explanation:"Enterprise AI governance frameworks typically include: AI use case inventory and risk classification, approval workflows for high-risk AI, model documentation standards (model cards), bias testing requirements, monitoring and incident response procedures, third-party AI vendor assessment, regulatory compliance mapping, and executive accountability structures."
  },
  {
    id:"q482",domain:5,subdomain:"5.1",service:"Amazon Bedrock",difficulty:"hard",
    question:"What is 'model watermarking' and how is it used in AI security?",
    options:[{key:"A",text:"Adding visible copyright text to AI-generated images"},{key:"B",text:"Embedding imperceptible signatures into AI-generated content or model weights that allow tracing of content provenance or detecting model theft"},{key:"C",text:"Marking training data with identifiers to prevent reuse"},{key:"D",text:"Cryptographically signing model weights to verify authenticity"}],
    answer:"B",
    explanation:"Model watermarking embeds invisible markers in either model weights (to detect model extraction/theft) or generated outputs (to identify AI-generated content). For outputs, statistical watermarks can be embedded in token distributions during generation. These help attribute generated content to specific models and detect copyright violations or model theft."
  },
  {
    id:"q483",domain:5,subdomain:"5.2",service:"AWS",difficulty:"medium",
    question:"What is 'AI risk classification' and how should organizations use it?",
    options:[{key:"A",text:"Classifying AI models by their parameter count and computational cost"},{key:"B",text:"Categorizing AI use cases by their potential harm severity and probability, applying proportionate governance controls based on the risk level"},{key:"C",text:"Rating AI vendor risk using standardized cybersecurity scoring frameworks"},{key:"D",text:"Classifying training data by its sensitivity level before AI processing"}],
    answer:"B",
    explanation:"AI risk classification (as required by frameworks like the EU AI Act and NIST AI RMF) categorizes use cases by risk: minimal risk (recommendation systems), limited risk (chatbots requiring disclosure), high risk (hiring, credit, healthcare), and unacceptable risk (mass surveillance, social scoring). Higher risk requires more governance: impact assessments, human oversight, documentation, and compliance obligations."
  },
  {
    id:"q484",domain:5,subdomain:"5.1",service:"AWS",difficulty:"medium",
    question:"What does 'encryption at rest' protect in the context of AI training data?",
    options:[{key:"A",text:"Data while it is being processed by the GPU during training"},{key:"B",text:"Data stored in S3, databases, or other storage services, protected from unauthorized physical or logical access to storage media"},{key:"C",text:"Model weights while the model is not actively processing requests"},{key:"D",text:"Training data while it is in transit between services"}],
    answer:"B",
    explanation:"Encryption at rest protects stored data (training datasets in S3, model weights, databases) using AES-256 or similar encryption. AWS services like S3, SageMaker, and Bedrock integrate with AWS KMS to encrypt data at rest automatically. This protects sensitive training data from unauthorized access even if storage media is physically compromised."
  },
  {
    id:"q485",domain:5,subdomain:"5.2",service:"AWS",difficulty:"easy",
    question:"What does AWS CloudTrail provide for AI governance?",
    options:[{key:"A",text:"Real-time monitoring of model quality metrics in production"},{key:"B",text:"Immutable audit logs of all API calls made to AWS services, including Bedrock model invocations and configuration changes"},{key:"C",text:"Automated compliance scanning of AI model code"},{key:"D",text:"Governance dashboards showing AI system performance across business units"}],
    answer:"B",
    explanation:"AWS CloudTrail records all API activity across AWS services, creating an audit trail of who invoked which Bedrock models, when, from which identity, and what parameters were used. This is essential for compliance auditing, incident investigation, and demonstrating AI governance controls to regulators or auditors."
  },
  {
    id:"q486",domain:5,subdomain:"5.1",service:"Amazon Bedrock",difficulty:"hard",
    question:"What is 'adversarial example' attack on AI models?",
    options:[{key:"A",text:"Competing companies providing misleading examples during third-party audits"},{key:"B",text:"Carefully crafted inputs with small, often imperceptible perturbations that cause the model to produce incorrect outputs with high confidence"},{key:"C",text:"Test examples specifically designed to stress-test model robustness"},{key:"D",text:"Negative examples in training data representing incorrect behaviors"}],
    answer:"B",
    explanation:"Adversarial examples are inputs crafted by adding small, often human-imperceptible perturbations (in images: pixel-level noise; in text: character substitutions) that cause ML models to misclassify with high confidence. For example, an image clearly showing a stop sign with minor perturbations that causes an autonomous vehicle's model to classify it as a speed limit sign."
  },
  {
    id:"q487",domain:5,subdomain:"5.2",service:"AWS",difficulty:"medium",
    question:"What is the purpose of an 'AI Impact Assessment' (AIIA)?",
    options:[{key:"A",text:"Measuring the business ROI of AI deployment"},{key:"B",text:"A structured evaluation of potential harms, risks, and fairness implications of an AI system before deployment"},{key:"C",text:"Assessing the environmental impact of AI model training compute"},{key:"D",text:"Evaluating the technical performance metrics of AI models"}],
    answer:"B",
    explanation:"An AI Impact Assessment evaluates potential harms before an AI system is deployed. It examines: affected populations, potential discriminatory impacts, privacy risks, safety risks, security vulnerabilities, and mitigation measures. Required by the EU AI Act for high-risk AI systems, AIIAs are becoming a best practice for responsible AI deployment globally."
  },
  {
    id:"q488",domain:5,subdomain:"5.1",service:"AWS",difficulty:"medium",
    question:"What is 'network isolation' for AI training workloads and why is it important?",
    options:[{key:"A",text:"Separating AI training from production workloads using different AWS accounts"},{key:"B",text:"Running training jobs in VPCs without internet access, with traffic routed through VPC endpoints to AWS services, preventing training data exfiltration via network"},{key:"C",text:"Using different network cables for AI compute vs. storage traffic"},{key:"D",text:"Isolating AI workloads from general business network traffic using VLANs"}],
    answer:"B",
    explanation:"Network isolation for AI training ensures that training instances cannot access the internet, preventing training data from being exfiltrated via malicious code in training scripts or dependencies. SageMaker training jobs can run in VPC mode with internet access disabled, routing only through VPC endpoints to necessary AWS services (S3, CloudWatch) using controlled, auditable paths."
  },
  {
    id:"q489",domain:5,subdomain:"5.2",service:null,difficulty:"hard",
    question:"What is the EU AI Act's approach to 'General Purpose AI Models' (GPAI) like large foundation models?",
    options:[{key:"A",text:"GPAI models are exempt from all EU AI Act requirements as they are not application-specific"},{key:"B",text:"GPAI providers must maintain technical documentation, comply with copyright law, publish summaries of training data, and models with systemic risk (>10^25 FLOPs) face additional obligations including adversarial testing"},{key:"C",text:"GPAI models are classified as prohibited AI and cannot be deployed in the EU"},{key:"D",text:"Only the deployers of GPAI models have obligations; model providers are not regulated"}],
    answer:"B",
    explanation:"The EU AI Act (fully applicable 2026) includes specific GPAI provisions: all providers must maintain technical documentation, respect copyright, and publish training data summaries. Models posing systemic risk (trained above 10^25 FLOPs or with significant societal impact) face additional requirements: model evaluation, adversarial testing, incident reporting, and cybersecurity measures."
  },
  {
    id:"q490",domain:5,subdomain:"5.2",service:"AWS",difficulty:"medium",
    question:"What is 'supply chain security' for AI models and what are the key risks?",
    options:[{key:"A",text:"Managing the physical supply chain for AI hardware procurement"},{key:"B",text:"Security risks from using third-party pre-trained models, datasets, or libraries that may contain backdoors, poisoned weights, or malicious code"},{key:"C",text:"Ensuring AWS supply chains for GPU hardware are not disrupted"},{key:"D",text:"Managing vendor contracts for AI data labeling services"}],
    answer:"B",
    explanation:"AI supply chain attacks target the components used in building AI systems: pre-trained model weights with embedded backdoors, poisoned open-source datasets, malicious ML libraries with hidden data exfiltration. Mitigations include: using models from trusted providers (like Bedrock's curated marketplace), cryptographic verification of model artifacts, scanning dependencies, and provenance tracking."
  },
  {
    id:"q491",domain:5,subdomain:"5.1",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is 'output filtering' in the context of Bedrock Guardrails?",
    options:[{key:"A",text:"Filtering which models can be invoked by specific users"},{key:"B",text:"Examining FM-generated responses and blocking or modifying outputs that violate content policies before they are returned to users"},{key:"C",text:"Removing tokens from model outputs to reduce response length"},{key:"D",text:"Filtering model training outputs to improve dataset quality"}],
    answer:"B",
    explanation:"Output filtering in Bedrock Guardrails applies content policies to model-generated text before it is returned to the application. If the model generates harmful content, hate speech, or violates configured denied topics, Guardrails blocks the response and returns a configured fallback message. This provides a safety layer independent of the model's own RLHF training."
  },
  {
    id:"q492",domain:5,subdomain:"5.2",service:null,difficulty:"hard",
    question:"What is 'algorithmic auditing' and who typically performs it?",
    options:[{key:"A",text:"Automated unit testing of AI model code performed by the development team"},{key:"B",text:"Independent examination of AI systems by third parties to assess fairness, accuracy, security, and compliance with stated policies"},{key:"C",text:"Internal performance benchmarking of AI models before deployment"},{key:"D",text:"Regular review of model hyperparameters to ensure optimal settings"}],
    answer:"B",
    explanation:"Algorithmic auditing is the independent assessment of AI systems by parties without a conflict of interest (external auditors, regulators, or civil society organizations). Audits examine whether systems perform as claimed, whether they exhibit bias, whether they comply with regulations, and whether their documentation accurately reflects their behavior. Required for high-risk AI under the EU AI Act."
  },
  {
    id:"q493",domain:5,subdomain:"5.1",service:"AWS",difficulty:"medium",
    question:"What is 'Amazon Macie' and how can it support AI governance?",
    options:[{key:"A",text:"An AI model that identifies sensitive business requirements"},{key:"B",text:"A data security service that uses ML to automatically discover, classify, and protect sensitive data (PII) in S3, preventing sensitive data from inadvertently entering AI training sets"},{key:"C",text:"A compliance management tool for tracking AI regulation requirements"},{key:"D",text:"A service for classifying AI models by their risk level"}],
    answer:"B",
    explanation:"Amazon Macie uses ML to automatically discover and classify sensitive data in S3 — identifying PII like names, credit cards, and SSNs. For AI governance, Macie can scan training data buckets to ensure sensitive personal data is not inadvertently included in training sets, supporting data minimization and privacy compliance requirements."
  },
  {
    id:"q494",domain:5,subdomain:"5.2",service:null,difficulty:"medium",
    question:"What is the NIST AI Risk Management Framework's (AI RMF) primary purpose?",
    options:[{key:"A",text:"A mandatory compliance regulation for all US AI systems"},{key:"B",text:"A voluntary framework providing organizations with guidance to manage AI risks through four core functions: Govern, Map, Measure, and Manage"},{key:"C",text:"A technical standard specifying AI model architecture requirements"},{key:"D",text:"A certification program for AI practitioners"}],
    answer:"B",
    explanation:"The NIST AI RMF (2023) is a voluntary framework helping organizations identify, assess, and manage AI risks. Its four core functions: GOVERN (establish risk culture, policies, accountability), MAP (categorize AI use cases and stakeholders), MEASURE (analyze and assess risk), MANAGE (prioritize and treat risks). It is widely adopted as a best practice framework for AI governance."
  },
  {
    id:"q495",domain:5,subdomain:"5.1",service:"Amazon Bedrock",difficulty:"hard",
    question:"What is 'prompt leaking' and what type of information does it expose?",
    options:[{key:"A",text:"Memory leaks in the prompt processing pipeline causing performance issues"},{key:"B",text:"When a system prompt containing proprietary instructions, personas, or confidential business logic is revealed to end users through manipulation"},{key:"C",text:"Accidentally including sensitive data in model evaluation prompts"},{key:"D",text:"Model outputs that 'leak' training data verbatim"}],
    answer:"B",
    explanation:"Prompt leaking occurs when users craft inputs that cause the model to reveal its system prompt — potentially exposing proprietary business logic, security instructions, or confidential configuration. Mitigations include: Bedrock Guardrails (which can detect and block system prompt disclosure), explicitly instructing the model not to reveal system prompt contents, and accepting that prompt engineering alone is not sufficient protection."
  },
  {
    id:"q496",domain:5,subdomain:"5.2",service:"AWS",difficulty:"medium",
    question:"What is 'data residency' and why does it matter for AI compliance?",
    options:[{key:"A",text:"The physical location where AI model weights are stored on disk"},{key:"B",text:"The requirement that data remains within specific geographic boundaries, often mandated by data protection regulations like GDPR for EU citizen data"},{key:"C",text:"The latency of accessing training data from compute instances"},{key:"D",text:"The length of time training data must be retained under compliance requirements"}],
    answer:"B",
    explanation:"Data residency requirements mandate that certain data (particularly personal data) cannot be transferred outside specific jurisdictions. GDPR restricts EU personal data transfers to non-adequate countries. For AI systems, this means training data, fine-tuning data, and potentially inference logs must remain in designated AWS regions, requiring careful architecture planning."
  },
  {
    id:"q497",domain:5,subdomain:"5.2",service:null,difficulty:"hard",
    question:"What is 'algorithmic impact assessment' as required by some AI regulations?",
    options:[{key:"A",text:"Performance benchmarking of AI algorithms on standard datasets"},{key:"B",text:"A structured pre-deployment evaluation of an AI system's potential effects on individuals and communities, examining fairness, privacy, safety, and rights impacts"},{key:"C",text:"Assessment of computational resource requirements for AI deployment"},{key:"D",text:"Audit of algorithm source code for security vulnerabilities"}],
    answer:"B",
    explanation:"Algorithmic impact assessments (required by Canada's AIDA, New York City's automated employment law, and similar regulations) systematically evaluate AI system impacts before deployment. They identify affected populations, potential discriminatory outcomes, privacy risks, decision contestability mechanisms, and required mitigation measures. They must be documented and often disclosed to regulators."
  },
  {
    id:"q498",domain:5,subdomain:"5.1",service:"AWS",difficulty:"medium",
    question:"What is 'Amazon GuardDuty' and how can it protect AI workloads?",
    options:[{key:"A",text:"A tool for monitoring model output content for policy violations"},{key:"B",text:"A threat detection service that continuously monitors for malicious activity and unauthorized behavior in AWS accounts protecting AI training and inference infrastructure"},{key:"C",text:"A guardrails service specifically designed for Bedrock model safety"},{key:"D",text:"An IAM service that guards access to sensitive AI models"}],
    answer:"B",
    explanation:"Amazon GuardDuty uses ML to analyze AWS CloudTrail logs, VPC Flow Logs, and DNS logs to detect threats like unusual API activity, compromised credentials, or data exfiltration attempts. For AI workloads, GuardDuty can detect if training jobs are accessing unusual endpoints, if credentials are being used from unexpected locations, or if sensitive training data in S3 is being exfiltrated."
  },
  {
    id:"q499",domain:5,subdomain:"5.2",service:null,difficulty:"medium",
    question:"What is 'AI transparency reporting' and why is it increasingly required by regulators?",
    options:[{key:"A",text:"Publishing open-source code for all AI systems"},{key:"B",text:"Periodic public reporting on AI system usage, capabilities, safety measures, bias metrics, and incident history to enable public accountability"},{key:"C",text:"Internal reporting on AI model training costs and performance"},{key:"D",text:"Real-time dashboards showing AI system availability metrics"}],
    answer:"B",
    explanation:"Transparency reporting requirements (emerging in EU AI Act, proposed US legislation) require organizations deploying AI to publicly disclose: what AI systems they operate, what decisions they make, bias mitigation measures taken, safety incidents, and how individuals can seek redress. This accountability mechanism allows civil society, journalists, and regulators to scrutinize AI deployment."
  },
  {
    id:"q500",domain:5,subdomain:"5.1",service:"Amazon Bedrock",difficulty:"hard",
    question:"A security audit finds that an Amazon Bedrock-powered application stores conversation history containing customer PII in an unencrypted DynamoDB table. The PII is used to personalize responses. Which remediation steps should be prioritized?",
    options:[{key:"A",text:"Enable DynamoDB encryption at rest with KMS, implement data minimization (store only necessary PII), enforce access controls with fine-grained IAM policies, and enable CloudTrail logging for audit trails"},{key:"B",text:"Move all data to S3 and apply S3 Object Lock"},{key:"C",text:"Delete the conversation history immediately and rebuild the personalization feature without any storage"},{key:"D",text:"Apply HTTPS to all API calls accessing the DynamoDB table"}],
    answer:"A",
    explanation:"A comprehensive remediation requires: (1) Enable AWS KMS encryption at rest for DynamoDB, (2) Apply data minimization — store only the minimum PII needed for personalization, (3) Implement fine-grained IAM to restrict which services/roles can read PII, (4) Enable CloudTrail and DynamoDB Streams for audit logging, (5) Consider Bedrock Guardrails to prevent sensitive data in prompts. HTTPS alone (option D) only addresses transit, not storage."
  }
];
