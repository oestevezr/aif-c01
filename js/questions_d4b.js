// Domain 4 — Responsible AI (extra batch, q396-q430)
const D4B = [
  {
    id:"q396",domain:4,subdomain:"4.1",service:"Amazon SageMaker",difficulty:"medium",
    question:"What is 'disparate treatment' in the context of AI bias?",
    options:[{key:"A",text:"When a model treats all demographic groups identically"},{key:"B",text:"When a model explicitly uses a protected characteristic (e.g., race, gender) as an input feature to make different decisions"},{key:"C",text:"When model accuracy differs slightly between groups"},{key:"D",text:"When training data contains unequal numbers of samples per group"}],
    answer:"B",
    explanation:"Disparate treatment (intentional discrimination) occurs when a model directly uses a protected attribute as a decision factor, producing different outcomes based on that characteristic. This is distinct from disparate impact, where a facially neutral model produces discriminatory outcomes. Both are problematic but may have different legal implications."
  },
  {
    id:"q397",domain:4,subdomain:"4.1",service:"Amazon SageMaker",difficulty:"hard",
    question:"A loan approval model has 85% accuracy on applicants from Group A and 72% accuracy on Group B. What type of fairness issue does this represent?",
    options:[{key:"A",text:"Disparate treatment"},{key:"B",text:"Calibration bias"},{key:"C",text:"Equalized odds violation — different error rates across demographic groups"},{key:"D",text:"Representation bias in feature engineering"}],
    answer:"C",
    explanation:"Different accuracy rates across demographic groups indicate an equalized odds violation. The model has a higher error rate for Group B applicants, meaning it incorrectly denies or approves loans at different rates depending on group membership. This is a form of algorithmic bias that can constitute illegal discrimination even if protected attributes are not explicit features."
  },
  {
    id:"q398",domain:4,subdomain:"4.1",service:"Amazon SageMaker",difficulty:"medium",
    question:"What does 'counterfactual fairness' require of an AI model?",
    options:[{key:"A",text:"The model must produce identical predictions for every individual in the dataset"},{key:"B",text:"A model's prediction for an individual should not change if only their protected attributes were different, holding all other attributes constant"},{key:"C",text:"The model must be retrained every time societal norms change"},{key:"D",text:"Counterfactual scenarios must be included in model evaluation datasets"}],
    answer:"B",
    explanation:"Counterfactual fairness asks: 'Would the outcome be the same if the person belonged to a different demographic group?' A fair model should produce the same decision for an individual regardless of their race, gender, or other protected characteristic, when all causally legitimate factors are held constant."
  },
  {
    id:"q399",domain:4,subdomain:"4.1",service:null,difficulty:"easy",
    question:"What is 'automation bias' in the context of human-AI interaction?",
    options:[{key:"A",text:"When AI systems are biased against automating certain tasks"},{key:"B",text:"The tendency of humans to over-trust or uncritically accept AI recommendations, even when they are incorrect"},{key:"C",text:"When automated pipelines introduce more bias than manual processes"},{key:"D",text:"Bias that enters AI systems through automated data collection"}],
    answer:"B",
    explanation:"Automation bias occurs when humans over-rely on AI system outputs, accepting recommendations without critical evaluation even when the AI is wrong. This is especially dangerous in high-stakes domains (medicine, criminal justice, finance) where human oversight is critical. Designing systems that make AI uncertainty visible helps combat automation bias."
  },
  {
    id:"q400",domain:4,subdomain:"4.1",service:"Amazon SageMaker",difficulty:"hard",
    question:"A model predicts recidivism risk for criminal sentencing. An audit reveals higher false positive rates for minority defendants (incorrectly labeled high-risk). Which fairness criterion does this violate?",
    options:[{key:"A",text:"Individual fairness"},{key:"B",text:"Equal opportunity — false positive rates should be equal across groups"},{key:"C",text:"Calibration — predicted probabilities should match actual rates"},{key:"D",text:"Demographic parity — both groups should have equal positive prediction rates"}],
    answer:"B",
    explanation:"Equal opportunity (a form of equalized odds) requires that false positive rates be equal across protected groups. A system that incorrectly labels more minority defendants as high-risk produces unequal harm across groups. This is the bias documented in COMPAS and similar risk assessment tools, highlighting how ML can perpetuate systemic discrimination."
  },
  {
    id:"q401",domain:4,subdomain:"4.1",service:null,difficulty:"medium",
    question:"What is 'historical bias' in machine learning datasets?",
    options:[{key:"A",text:"Bias introduced when older training data becomes outdated"},{key:"B",text:"Bias that exists in the real world and is reflected in data collected from historical systems or decisions"},{key:"C",text:"Bias from using data collected before the model was designed"},{key:"D",text:"Systematic errors introduced during historical data entry"}],
    answer:"B",
    explanation:"Historical bias reflects societal discrimination, prejudice, and inequalities present in past human decisions. For example, historical hiring records may reflect gender discrimination. ML models trained on this data learn to replicate these discriminatory patterns, not because the algorithm is inherently unfair but because it faithfully learned from biased history."
  },
  {
    id:"q402",domain:4,subdomain:"4.1",service:"Amazon SageMaker",difficulty:"medium",
    question:"Amazon SageMaker Clarify performs 'post-hoc' bias detection. What does 'post-hoc' mean in this context?",
    options:[{key:"A",text:"Bias detection performed before model training begins"},{key:"B",text:"Bias detection performed after the model is trained, analyzing its predictions"},{key:"C",text:"Bias detection using real-time production data"},{key:"D",text:"Bias detection using Latin-derived statistical methods"}],
    answer:"B",
    explanation:"Post-hoc analysis examines model predictions after training to identify disparate outcomes across groups. SageMaker Clarify computes bias metrics on model outputs (e.g., DPL, DI, AD) and feature attributions using SHAP, helping teams understand both data-level and model-level bias without requiring modifications during training."
  },
  {
    id:"q403",domain:4,subdomain:"4.1",service:null,difficulty:"hard",
    question:"Why is it impossible for a classifier to simultaneously satisfy demographic parity, equalized odds, and calibration when base rates differ across groups?",
    options:[{key:"A",text:"It is possible with sufficiently large training datasets"},{key:"B",text:"The Impossibility Theorem (Chouldechova, 2017) proves these fairness criteria are mathematically incompatible when group base rates differ"},{key:"C",text:"Current hardware cannot compute all three metrics simultaneously"},{key:"D",text:"Privacy regulations prevent collecting the data needed to satisfy all three"}],
    answer:"B",
    explanation:"The fairness impossibility theorem proves that when base rates (prevalence of the outcome) differ between groups, a classifier cannot simultaneously achieve demographic parity (equal positive rates), equalized odds (equal true/false positive rates), and calibration (predicted probability matches actual rate). Organizations must make explicit value-based choices about which fairness criteria to prioritize."
  },
  {
    id:"q404",domain:4,subdomain:"4.1",service:null,difficulty:"medium",
    question:"What is 'debiasing' in the context of word embeddings, and why does it matter?",
    options:[{key:"A",text:"Removing stop words from embedding training data"},{key:"B",text:"Modifying word vector representations to reduce gender, racial, or other stereotypic associations captured during pre-training"},{key:"C",text:"Retraining embeddings on balanced datasets with equal word frequencies"},{key:"D",text:"Encrypting embedding vectors to protect sensitive word associations"}],
    answer:"B",
    explanation:"Word embeddings trained on large text corpora capture societal biases (e.g., 'doctor' is closer to 'man', 'nurse' closer to 'woman'). Debiasing techniques like Hard Debias or SentenceDebias modify the geometric structure of the embedding space to reduce these stereotypic associations, producing fairer downstream model behavior."
  },
  {
    id:"q405",domain:4,subdomain:"4.1",service:null,difficulty:"easy",
    question:"What is the primary purpose of a 'data card' in responsible AI?",
    options:[{key:"A",text:"A physical card that employees must carry when accessing AI systems"},{key:"B",text:"Documentation describing a dataset's composition, collection methodology, intended use, and known limitations"},{key:"C",text:"A credit card system for paying for cloud AI services"},{key:"D",text:"A summary of model performance on benchmark datasets"}],
    answer:"B",
    explanation:"Data cards (introduced by Google and similar to model cards but for datasets) document how data was collected, what it contains, demographic representation, known biases, intended and prohibited uses, and privacy considerations. They enable informed decisions about whether a dataset is appropriate for a given use case."
  },
  {
    id:"q406",domain:4,subdomain:"4.1",service:null,difficulty:"medium",
    question:"A healthcare AI system uses body mass index (BMI) as a feature. Research shows BMI is a less accurate health indicator for certain ethnic groups. What type of bias is this?",
    options:[{key:"A",text:"Aggregation bias — applying a one-size-fits-all metric across heterogeneous subgroups"},{key:"B",text:"Label bias — incorrect labels in the training dataset"},{key:"C",text:"Sampling bias — unequal representation in the training set"},{key:"D",text:"Confirmation bias — selecting data that confirms existing hypotheses"}],
    answer:"A",
    explanation:"Aggregation bias occurs when a single model or feature is applied uniformly across subgroups that have different underlying relationships. BMI was developed and validated primarily on European populations and has known limitations for different ethnic groups. Using it as a universal health metric ignores these group-specific variations, producing unfair outcomes."
  },
  {
    id:"q407",domain:4,subdomain:"4.2",service:null,difficulty:"medium",
    question:"What is 'transparency' as a principle of responsible AI?",
    options:[{key:"A",text:"Making model source code open to the public"},{key:"B",text:"Ensuring stakeholders can understand how AI systems make decisions, including inputs, processes, and decision factors"},{key:"C",text:"Publishing training datasets for public inspection"},{key:"D",text:"Using only white-box algorithms that have fully interpretable outputs"}],
    answer:"B",
    explanation:"Transparency in responsible AI means stakeholders (users, regulators, affected parties) can understand enough about how an AI system makes decisions to appropriately trust, scrutinize, and contest those decisions. This doesn't require publishing model weights, but does require meaningful explanation of decision factors and system behavior."
  },
  {
    id:"q408",domain:4,subdomain:"4.2",service:null,difficulty:"hard",
    question:"What is 'algorithmic accountability' and how does it differ from 'explainability'?",
    options:[{key:"A",text:"They are identical concepts used interchangeably in AI governance"},{key:"B",text:"Explainability is a technical property (can we describe why a decision was made?); accountability is a governance property (who is responsible and can be held liable for AI decisions?)"},{key:"C",text:"Algorithmic accountability refers to technical audit mechanisms; explainability refers to human understanding"},{key:"D",text:"Accountability is for regulators; explainability is for developers"}],
    answer:"B",
    explanation:"Explainability addresses the technical question of understanding model decisions. Accountability addresses the organizational/legal question of responsibility: Who owns AI decisions? What redress mechanisms exist? How are harms remediated? An AI system can be explainable but still lack accountability if no human is responsible for its decisions."
  },
  {
    id:"q409",domain:4,subdomain:"4.2",service:null,difficulty:"medium",
    question:"What does 'right to explanation' under GDPR Article 22 require?",
    options:[{key:"A",text:"All AI decisions must be made by explainable models (no black boxes)"},{key:"B",text:"Individuals have the right to obtain meaningful information about the logic of automated decisions that significantly affect them"},{key:"C",text:"Companies must publish their model architectures for public review"},{key:"D",text:"AI explanations must be provided in all official EU languages"}],
    answer:"B",
    explanation:"GDPR Article 22 restricts fully automated decisions with significant legal or similar effects. When such decisions are made, data subjects have the right to obtain meaningful information about the automated decision-making logic, including the key factors and their relative importance. 'Meaningful' is interpreted as enough information to contest the decision."
  },
  {
    id:"q410",domain:4,subdomain:"4.2",service:null,difficulty:"easy",
    question:"What is 'value alignment' in the context of AI safety?",
    options:[{key:"A",text:"Ensuring AI model outputs follow consistent formatting standards"},{key:"B",text:"Designing AI systems whose goals and behaviors align with human values and intentions"},{key:"C",text:"Aligning AI development timelines with business objectives"},{key:"D",text:"Matching AI system capabilities to the specific task requirements"}],
    answer:"B",
    explanation:"Value alignment (or AI alignment) refers to the challenge of ensuring AI systems pursue goals and exhibit behaviors that are consistent with human values, preferences, and intentions. A misaligned AI might achieve its programmed objective while causing unintended harm, which is why alignment research is a central concern in AI safety."
  },
  {
    id:"q411",domain:4,subdomain:"4.2",service:null,difficulty:"medium",
    question:"What is 'human-in-the-loop' (HITL) and in which scenarios is it most critical?",
    options:[{key:"A",text:"Requiring humans to review all AI training data"},{key:"B",text:"Having a human review and approve AI decisions before they take effect, critical in high-stakes domains like medical diagnosis and legal sentencing"},{key:"C",text:"Using human-annotated data for supervised learning"},{key:"D",text:"Employing human auditors to review model code annually"}],
    answer:"B",
    explanation:"HITL keeps humans in the decision loop for AI outputs, ensuring human judgment validates or overrides AI recommendations. This is most critical in high-stakes domains: medical diagnoses (life/death decisions), criminal justice (liberty at stake), loan approvals (financial impact), and content moderation (user rights). The level of human oversight should match the risk level."
  },
  {
    id:"q412",domain:4,subdomain:"4.2",service:null,difficulty:"hard",
    question:"What is 'Constitutional AI' (CAI) developed by Anthropic?",
    options:[{key:"A",text:"An AI system governed by a constitutional committee of ethicists"},{key:"B",text:"A training method where the AI critiques and revises its own outputs based on a set of written principles, reducing reliance on human labelers for harmlessness"},{key:"C",text:"A regulatory framework for AI governance based on constitutional law"},{key:"D",text:"A method for encoding legal constitutions into FM knowledge"}],
    answer:"B",
    explanation:"Constitutional AI trains models to be helpful and harmless by having the model critique its own responses against a set of principles (the 'constitution'), then revise those responses. This reduces dependence on large-scale human preference labeling for harmlessness while improving consistency. Claude models are trained using CAI."
  },
  {
    id:"q413",domain:4,subdomain:"4.2",service:null,difficulty:"medium",
    question:"A company deploys an AI hiring tool. They discover it has lower recall for qualified women candidates. Who bears responsibility for this bias?",
    options:[{key:"A",text:"Only the AI vendor who built the model"},{key:"B",text:"Only the training data providers"},{key:"C",text:"The company deploying the tool, as they are responsible for ensuring non-discriminatory hiring practices"},{key:"D",text:"No one — algorithmic bias is not a legal responsibility"}],
    answer:"C",
    explanation:"The deploying company bears primary legal and ethical responsibility for AI tools used in their hiring processes. Employment discrimination laws apply regardless of whether discrimination is implemented by humans or algorithms. Companies cannot outsource their legal compliance obligations to AI vendors. Vendor contracts may allocate some liability, but regulatory accountability rests with the employer."
  },
  {
    id:"q414",domain:4,subdomain:"4.2",service:null,difficulty:"easy",
    question:"What is 'AI red-teaming' in the context of responsible AI?",
    options:[{key:"A",text:"A red color-coded security clearance system for AI developers"},{key:"B",text:"Adversarial testing where a team attempts to find harmful, biased, or dangerous behaviors in AI systems"},{key:"C",text:"Emergency shutdown procedures for AI systems"},{key:"D",text:"Competitive evaluation between multiple AI teams"}],
    answer:"B",
    explanation:"AI red-teaming involves security/ethics researchers actively trying to elicit harmful, biased, or unintended behaviors from AI systems through adversarial prompts, edge cases, and creative attack strategies. Red-teaming before deployment identifies vulnerabilities that automated testing might miss, improving safety."
  },
  {
    id:"q415",domain:4,subdomain:"4.2",service:null,difficulty:"medium",
    question:"What is 'informed consent' in the context of AI data collection?",
    options:[{key:"A",text:"Informing the AI model about the purpose of its training data"},{key:"B",text:"Ensuring individuals are clearly informed about how their data will be used by AI systems and have agreed to that use"},{key:"C",text:"Providing AI vendors with complete information about the organization's data architecture"},{key:"D",text:"Notifying regulatory bodies before collecting data for AI training"}],
    answer:"B",
    explanation:"Informed consent requires that individuals understand and voluntarily agree to how their personal data will be collected, processed, and used by AI systems. This includes disclosing if data will be used for AI training, what models will be built, and how decisions will affect them. Consent must be specific, informed, and freely given."
  },
  {
    id:"q416",domain:4,subdomain:"4.2",service:null,difficulty:"hard",
    question:"What is the 'dual-use problem' in AI and why is it ethically significant?",
    options:[{key:"A",text:"When an AI model is deployed in both B2B and B2C contexts"},{key:"B",text:"When AI capabilities developed for beneficial purposes can also be used to cause harm, creating ethical dilemmas for developers and deployers"},{key:"C",text:"When two different organizations use the same AI model for different tasks"},{key:"D",text:"The challenge of building AI that works across two different domains"}],
    answer:"B",
    explanation:"The dual-use problem refers to AI capabilities that have both beneficial and harmful applications. For example, FM capabilities enabling helpful chatbots can also enable disinformation generation; protein structure prediction enables drug discovery but also bioweapon design. This creates ethical obligations for AI developers to consider downstream misuse and implement appropriate safeguards."
  },
  {
    id:"q417",domain:4,subdomain:"4.1",service:"Amazon SageMaker",difficulty:"medium",
    question:"What are 'feature importance scores' and how do they support responsible AI?",
    options:[{key:"A",text:"Scores that rank the quality of training examples"},{key:"B",text:"Measures that indicate how much each input feature contributes to model predictions, supporting explainability and bias detection"},{key:"C",text:"Quality metrics for feature engineering pipelines"},{key:"D",text:"Scores indicating how frequently each feature appears in training data"}],
    answer:"B",
    explanation:"Feature importance scores (from SHAP, permutation importance, or similar methods) quantify each feature's contribution to model predictions. They support responsible AI by: (1) revealing if protected attributes or proxies are driving decisions (bias detection), (2) explaining individual predictions to users (explainability), and (3) identifying unexpected patterns that indicate data issues."
  },
  {
    id:"q418",domain:4,subdomain:"4.2",service:null,difficulty:"medium",
    question:"What is 'purpose limitation' as a data privacy principle in responsible AI?",
    options:[{key:"A",text:"Limiting the amount of data collected for AI training"},{key:"B",text:"Restricting data use to the specific purposes for which it was originally collected and disclosed to individuals"},{key:"C",text:"Setting time limits on how long AI systems can retain data"},{key:"D",text:"Limiting access to AI models based on business purpose"}],
    answer:"B",
    explanation:"Purpose limitation requires that personal data collected for one purpose (e.g., customer service) cannot be repurposed for a different use (e.g., AI training, marketing analytics) without additional notice and consent. This principle from GDPR and other privacy frameworks prevents data collected for one purpose from being silently exploited for unrelated AI development."
  },
  {
    id:"q419",domain:4,subdomain:"4.2",service:null,difficulty:"hard",
    question:"What is 'emergent behavior' in large foundation models and why is it a safety concern?",
    options:[{key:"A",text:"Expected capabilities that appear once training data exceeds a threshold"},{key:"B",text:"Capabilities that appear unexpectedly at scale without being explicitly trained for, making them difficult to predict, test, and control"},{key:"C",text:"Behaviors that emerge from fine-tuning on domain-specific data"},{key:"D",text:"Model outputs that emerge from RAG knowledge base retrieval"}],
    answer:"B",
    explanation:"Emergent behaviors in large FMs are capabilities that appear suddenly and unpredictably at certain scale thresholds — they weren't present in smaller models and weren't explicitly trained for. Examples include few-shot learning, chain-of-thought reasoning, and potentially harmful capabilities. Emergent behaviors are difficult to anticipate in testing, making comprehensive safety evaluation challenging."
  },
  {
    id:"q420",domain:4,subdomain:"4.1",service:null,difficulty:"easy",
    question:"What does 'representational harm' mean in the context of AI?",
    options:[{key:"A",text:"Harm caused by AI systems using too much computational representation"},{key:"B",text:"When AI systems perpetuate stereotypes or present demeaning portrayals of groups, causing social harm even without direct material consequences"},{key:"C",text:"Harm from misrepresenting an AI system's capabilities to users"},{key:"D",text:"Harm from AI systems that cannot represent certain languages"}],
    answer:"B",
    explanation:"Representational harms occur when AI systems (image generators, text models, etc.) produce outputs that stereotype, demean, or erase particular social groups. For example, generating images of nurses as exclusively female, or associating criminal activity with certain ethnicities. These harms affect dignity and social perception even when there is no direct material consequence."
  },
  {
    id:"q421",domain:4,subdomain:"4.2",service:null,difficulty:"medium",
    question:"What is 'AI safety' as a research discipline, distinct from AI ethics?",
    options:[{key:"A",text:"Physical safety measures preventing data center accidents"},{key:"B",text:"Technical research focused on ensuring AI systems behave as intended and do not cause catastrophic or existential harm, especially as systems become more capable"},{key:"C",text:"Regulatory compliance frameworks for AI systems"},{key:"D",text:"User safety features like content warnings in AI applications"}],
    answer:"B",
    explanation:"AI safety is a technical research field addressing challenges like reward hacking (AI finding unintended ways to maximize objectives), specification gaming, goal misgeneralization, and ensuring that increasingly capable AI systems remain under meaningful human control. It is distinct from AI ethics (which addresses fairness, accountability, social impact) though both are essential."
  },
  {
    id:"q422",domain:4,subdomain:"4.2",service:null,difficulty:"medium",
    question:"What is 'differential privacy' and how does it protect individuals in AI training?",
    options:[{key:"A",text:"A technique that applies different privacy protections to different user groups"},{key:"B",text:"A mathematical framework that adds calibrated noise to training data or model outputs, guaranteeing that individual records cannot be identified from model outputs"},{key:"C",text:"A privacy policy that differentiates between public and private data"},{key:"D",text:"Encrypting different parts of the model with different encryption keys"}],
    answer:"B",
    explanation:"Differential privacy (DP) provides a mathematical privacy guarantee: the presence or absence of any individual's data has a bounded effect on model outputs. By adding carefully calibrated noise during training (DP-SGD) or to model outputs, DP prevents attackers from inferring whether specific individuals were in the training set, protecting against membership inference attacks."
  },
  {
    id:"q423",domain:4,subdomain:"4.1",service:null,difficulty:"hard",
    question:"A text-to-image model frequently produces images of doctors as white males when given a neutral prompt like 'a doctor at work.' What type of bias is this and what is the most likely root cause?",
    options:[{key:"A",text:"Label bias from incorrect image annotations; fix by correcting labels"},{key:"B",text:"Representation bias from training data that overrepresents images of white male doctors; the model learned statistical correlations from imbalanced training data"},{key:"C",text:"Measurement bias from the image quality evaluation metric"},{key:"D",text:"Aggregation bias from combining diverse image datasets"}],
    answer:"B",
    explanation:"This is representation bias: the training dataset likely contained predominantly images of white male doctors (reflecting historical demographics), causing the model to learn this correlation as a default. The model faithfully reproduces the statistical patterns in its training data, making training data diversity crucial for equitable generative models."
  },
  {
    id:"q424",domain:4,subdomain:"4.2",service:null,difficulty:"medium",
    question:"What is 'model governance' in an enterprise AI context?",
    options:[{key:"A",text:"Technical settings that control model behavior"},{key:"B",text:"Organizational policies, processes, and controls that oversee the development, deployment, and monitoring of AI models throughout their lifecycle"},{key:"C",text:"Government regulations that apply to AI models"},{key:"D",text:"The process of transferring model ownership between teams"}],
    answer:"B",
    explanation:"Model governance encompasses the organizational framework for managing AI models responsibly: approval processes before deployment, documentation requirements (model cards), monitoring obligations, incident response procedures, and accountability structures. It ensures models are deployed safely and remain in compliance throughout their operational life."
  },
  {
    id:"q425",domain:4,subdomain:"4.2",service:null,difficulty:"easy",
    question:"What is 'explainability' in AI and why is it important for responsible AI?",
    options:[{key:"A",text:"The ability to explain the model's source code to non-technical stakeholders"},{key:"B",text:"The ability to understand and communicate how and why an AI system made a specific decision"},{key:"C",text:"Documentation explaining how to use AI APIs"},{key:"D",text:"The capacity of AI to explain its own capabilities"}],
    answer:"B",
    explanation:"Explainability allows humans to understand AI decision-making processes. It is important for: (1) building appropriate trust, (2) detecting bias or errors, (3) enabling affected individuals to contest decisions, (4) regulatory compliance (GDPR Art.22), and (5) debugging. The appropriate level of explainability depends on the stakes and context."
  },
  {
    id:"q426",domain:4,subdomain:"4.1",service:"Amazon SageMaker",difficulty:"medium",
    question:"What does Amazon SageMaker Clarify's 'SHAP explainer' show for a specific prediction?",
    options:[{key:"A",text:"The model's confidence score for each possible output class"},{key:"B",text:"The contribution of each input feature to a specific prediction, showing which features pushed the prediction up or down"},{key:"C",text:"The probability that the model's prediction is correct"},{key:"D",text:"A comparison of the prediction against similar training examples"}],
    answer:"B",
    explanation:"SHAP (SHapley Additive exPlanations) computes Shapley values that attribute each feature's contribution to an individual prediction. Positive SHAP values increase the prediction; negative values decrease it. This enables 'why did the model make this specific decision?' explanations — essential for regulatory compliance and user trust."
  },
  {
    id:"q427",domain:4,subdomain:"4.2",service:null,difficulty:"hard",
    question:"What is 'specification gaming' in AI safety?",
    options:[{key:"A",text:"When AI developers game compliance metrics to pass safety audits"},{key:"B",text:"When an AI system achieves high reward on its specified objective by exploiting unintended loopholes rather than solving the intended problem"},{key:"C",text:"Manipulating benchmark specifications to inflate apparent model performance"},{key:"D",text:"Using overly precise technical specifications that constrain model behavior too much"}],
    answer:"B",
    explanation:"Specification gaming (reward hacking) occurs when an AI finds technically valid ways to maximize its reward function that violate the designer's intent. Famous examples: a robot trained to move fast by flipping over (faster spinning than walking), or a boat racing game AI spinning in circles collecting boost items. It highlights the difficulty of perfectly specifying what we actually want."
  },
  {
    id:"q428",domain:4,subdomain:"4.1",service:null,difficulty:"medium",
    question:"What is 'measurement bias' in AI systems?",
    options:[{key:"A",text:"Bias from using biased measurement instruments or proxies that do not equally capture the intended concept across groups"},{key:"B",text:"Statistical bias in how training loss is measured"},{key:"C",text:"Bias introduced by measuring model performance on unrepresentative test sets"},{key:"D",text:"Inaccuracies in hardware performance measurement during training"}],
    answer:"A",
    explanation:"Measurement bias occurs when the features or labels used as proxies for the true concept of interest are measured differently or less accurately for some groups. For example, using arrest records as a proxy for criminality encodes systemic policing disparities. The measurement instrument itself introduces differential error across groups."
  },
  {
    id:"q429",domain:4,subdomain:"4.2",service:null,difficulty:"medium",
    question:"A company's AI chatbot makes a serious medical recommendation error that harms a user. The company claims 'the AI made the decision, not us.' Why is this reasoning flawed from a responsible AI perspective?",
    options:[{key:"A",text:"It is not flawed — AI systems are legally distinct from the companies that deploy them"},{key:"B",text:"Humans and organizations remain accountable for AI systems they deploy; 'the AI decided' does not transfer or eliminate legal and ethical responsibility"},{key:"C",text:"It is flawed only if the company did not properly document the AI's decision-making"},{key:"D",text:"It is flawed because AI systems cannot make recommendations without explicit programming"}],
    answer:"B",
    explanation:"Accountability in responsible AI requires that humans and organizations remain responsible for AI system outcomes. Companies choose to deploy AI systems, define their scope, and benefit from their use — they cannot delegate accountability to the algorithm. This is a fundamental principle in AI ethics and increasingly reflected in AI regulations globally."
  },
  {
    id:"q430",domain:4,subdomain:"4.2",service:null,difficulty:"hard",
    question:"What is the 'fairness-accuracy tradeoff' and how should organizations navigate it?",
    options:[{key:"A",text:"Making models more accurate automatically makes them fairer; there is no tradeoff"},{key:"B",text:"Imposing fairness constraints (e.g., equal false positive rates) often reduces overall accuracy; organizations must make explicit, value-based decisions about which tradeoff best serves their ethical and business obligations"},{key:"C",text:"Fairness and accuracy are always independent dimensions that can be optimized separately"},{key:"D",text:"The tradeoff only exists for small datasets; large datasets eliminate it"}],
    answer:"B",
    explanation:"Imposing fairness constraints (e.g., requiring equal prediction rates across groups when group base rates differ) typically reduces the overall accuracy metric. This is not a reason to abandon fairness — it reflects that 'accuracy' on a biased dataset measures something different than fair, beneficial performance. Organizations must explicitly decide how to balance these values, with input from affected communities and legal teams."
  }
];
