// Domain 3 — Foundation Model Applications (extra batch, q291-q360)
const D3B = [
  {
    id:"q291",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"medium",
    question:"A company needs to process 100-page legal documents and generate summaries. Which FM capability is most critical for this use case?",
    options:[{key:"A",text:"Large context window support"},{key:"B",text:"High token generation speed"},{key:"C",text:"Multi-language support"},{key:"D",text:"Low temperature settings"}],
    answer:"A",
    explanation:"Long-document summarization requires FMs with large context windows so the entire document (or large chunks) can be processed in a single inference call. Models like Claude on Bedrock support up to 200K tokens, making them ideal for lengthy legal documents."
  },
  {
    id:"q292",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"easy",
    question:"What is 'throughput' in the context of FM deployment on Amazon Bedrock?",
    options:[{key:"A",text:"The accuracy of model responses"},{key:"B",text:"The number of tokens processed per second"},{key:"C",text:"The size of the model in parameters"},{key:"D",text:"The number of training steps performed"}],
    answer:"B",
    explanation:"Throughput refers to the number of tokens (input + output) processed per second by the model. Higher throughput allows more requests to be handled simultaneously, which is critical for production workloads with many concurrent users."
  },
  {
    id:"q293",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"medium",
    question:"An e-commerce company wants to generate product descriptions from images. Which type of foundation model is best suited?",
    options:[{key:"A",text:"Text-only language model"},{key:"B",text:"Multimodal model accepting image and text inputs"},{key:"C",text:"Embedding-only model"},{key:"D",text:"Audio transcription model"}],
    answer:"B",
    explanation:"Multimodal FMs can accept both image and text inputs and generate text outputs. Models like Claude 3 or Amazon Titan Multimodal can analyze product images and produce descriptive text, making them ideal for automated product description generation."
  },
  {
    id:"q294",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"hard",
    question:"A team evaluates two FMs: Model A has 7B parameters and 4K context window; Model B has 70B parameters and 128K context window. For a chatbot handling short customer queries (< 500 tokens), which model should they prefer and why?",
    options:[{key:"A",text:"Model B — more parameters always means better quality"},{key:"B",text:"Model A — sufficient capacity for short queries with lower cost and latency"},{key:"C",text:"Model B — large context window improves short query accuracy"},{key:"D",text:"Model A — smaller models are always more accurate on specific tasks"}],
    answer:"B",
    explanation:"For short queries under 500 tokens, Model A's 4K context window is more than sufficient. Using Model B would incur significantly higher inference costs and latency without meaningful quality improvement for simple queries. Right-sizing the model to the task is a key cost-optimization principle."
  },
  {
    id:"q295",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"medium",
    question:"What does 'on-demand throughput' mean for Amazon Bedrock models?",
    options:[{key:"A",text:"You pay a fixed monthly fee for unlimited model access"},{key:"B",text:"You pay per token with no upfront commitment, sharing capacity with other users"},{key:"C",text:"Capacity is reserved exclusively for your account"},{key:"D",text:"Model weights are downloaded to your VPC"}],
    answer:"B",
    explanation:"On-demand throughput in Bedrock means you pay per input/output token with no upfront commitment. Capacity is shared across users and subject to service quotas. This is ideal for variable or unpredictable workloads."
  },
  {
    id:"q296",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is Provisioned Throughput in Amazon Bedrock?",
    options:[{key:"A",text:"A feature that provisions EC2 instances to host FM models"},{key:"B",text:"Reserved model units that guarantee dedicated processing capacity for your workload"},{key:"C",text:"A queue that batches requests to improve cost efficiency"},{key:"D",text:"Automatic scaling of model replicas based on demand"}],
    answer:"B",
    explanation:"Provisioned Throughput allows you to purchase dedicated model units (MUs) that reserve processing capacity for your account. This ensures consistent performance (low latency, no throttling) for high-volume production workloads, at a committed hourly cost."
  },
  {
    id:"q297",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"easy",
    question:"Which Amazon Bedrock feature allows you to select the best model for a request based on performance and cost without changing application code?",
    options:[{key:"A",text:"Bedrock Guardrails"},{key:"B",text:"Cross-region inference"},{key:"C",text:"Intelligent Prompt Routing"},{key:"D",text:"Bedrock Model Evaluation"}],
    answer:"C",
    explanation:"Amazon Bedrock Intelligent Prompt Routing automatically routes requests to the most cost-effective model that can handle the complexity of the request, helping optimize both cost and quality without manual model selection logic in application code."
  },
  {
    id:"q298",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"medium",
    question:"A startup has sporadic traffic peaks during business hours and minimal traffic overnight. Which Bedrock throughput option is most cost-effective?",
    options:[{key:"A",text:"Provisioned Throughput with 24/7 reserved units"},{key:"B",text:"On-demand throughput paying per token"},{key:"C",text:"Self-hosted models on dedicated EC2 instances"},{key:"D",text:"Batch inference with fixed daily processing windows"}],
    answer:"B",
    explanation:"On-demand throughput is most cost-effective for variable or unpredictable workloads because you only pay for tokens actually processed. Provisioned Throughput requires paying for reserved capacity even during idle overnight periods, making it uneconomical for sporadic usage."
  },
  {
    id:"q299",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"hard",
    question:"A model card for an FM includes a section called 'Out-of-scope use cases.' What is the purpose of this section?",
    options:[{key:"A",text:"To list the training datasets used by the model"},{key:"B",text:"To document use cases where the model is expected to underperform or should not be used"},{key:"C",text:"To describe the hardware requirements for running the model"},{key:"D",text:"To list the languages the model cannot understand"}],
    answer:"B",
    explanation:"Model cards document both intended use cases and out-of-scope use cases. The out-of-scope section explicitly identifies scenarios where the model is likely to produce poor results or where using it would be inappropriate (e.g., medical diagnosis, legal advice), helping users avoid misapplication."
  },
  {
    id:"q300",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is 'cross-region inference' in Amazon Bedrock?",
    options:[{key:"A",text:"Replicating model weights across AWS regions for disaster recovery"},{key:"B",text:"Automatically routing inference requests to available capacity in different AWS regions"},{key:"C",text:"Training models simultaneously in multiple regions"},{key:"D",text:"Synchronizing user prompts across regional endpoints"}],
    answer:"B",
    explanation:"Cross-region inference allows Bedrock to automatically route inference requests to regions with available capacity when the primary region is throttled or at capacity. This improves availability and throughput for high-volume applications during demand spikes."
  },
  {
    id:"q301",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"easy",
    question:"Which metric directly measures how much it costs to process a given volume of text with an FM?",
    options:[{key:"A",text:"Model accuracy on benchmark datasets"},{key:"B",text:"Price per input/output token"},{key:"C",text:"Training FLOPS (floating-point operations)"},{key:"D",text:"Context window size"}],
    answer:"B",
    explanation:"Inference cost for FMs is measured in price per input token and price per output token. Understanding token pricing allows teams to estimate and control costs based on expected usage volume."
  },
  {
    id:"q302",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"medium",
    question:"An FM has a context window of 8,192 tokens. A user sends a conversation history containing 9,000 tokens. What typically happens?",
    options:[{key:"A",text:"The model automatically summarizes the conversation to fit"},{key:"B",text:"The request fails or the model truncates the input to fit within the context window"},{key:"C",text:"The model extends its context window dynamically"},{key:"D",text:"The model uses its training memory to recall earlier context"}],
    answer:"B",
    explanation:"If the input exceeds the model's context window, the API typically returns an error or the implementation must truncate the input (usually removing older messages) before sending. Models do not dynamically extend their context windows — the limit is fixed by the model architecture."
  },
  {
    id:"q303",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"hard",
    question:"A company builds a customer service bot. They compare two models: Model X (specialized, fine-tuned on customer service data) vs Model Y (general-purpose FM). Under which condition would Model X likely outperform Model Y?",
    options:[{key:"A",text:"When the queries are highly varied and cover many unrelated topics"},{key:"B",text:"When the queries are domain-specific and follow patterns similar to the fine-tuning data"},{key:"C",text:"When low latency is more important than accuracy"},{key:"D",text:"When the model needs to handle multiple languages simultaneously"}],
    answer:"B",
    explanation:"Specialized fine-tuned models excel when queries match the patterns and vocabulary they were trained on. For narrow, domain-specific tasks (e.g., handling product return inquiries), a fine-tuned model will outperform a general-purpose FM. However, for broad or unexpected queries, the general FM may handle edge cases better."
  },
  {
    id:"q304",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is 'tokenization' and why does it matter for FM cost estimation?",
    options:[{key:"A",text:"Converting text to embeddings for similarity search; affects retrieval speed"},{key:"B",text:"Breaking text into subword units for model processing; determines how many tokens are charged"},{key:"C",text:"Encrypting prompts before sending to the model; affects security costs"},{key:"D",text:"Splitting documents into chunks for RAG; affects database storage costs"}],
    answer:"B",
    explanation:"Tokenization breaks text into subword units (tokens) that the model processes. Since FM APIs charge per token, understanding tokenization is essential for cost estimation. Generally, 1 token ≈ 0.75 English words, so a 1000-word document is approximately 1333 tokens."
  },
  {
    id:"q305",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"easy",
    question:"Which Amazon Bedrock model family is developed by Anthropic?",
    options:[{key:"A",text:"Amazon Titan"},{key:"B",text:"Claude"},{key:"C",text:"Llama"},{key:"D",text:"Mistral"}],
    answer:"B",
    explanation:"Claude models (Claude 3 Haiku, Sonnet, Opus, and newer versions) are developed by Anthropic and available through Amazon Bedrock. Amazon Titan is AWS's own model family, Llama is from Meta, and Mistral is from Mistral AI — all also available on Bedrock."
  },
  {
    id:"q306",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"medium",
    question:"A developer needs to choose between Claude 3 Haiku and Claude 3 Opus for a high-volume classification task with millions of daily requests. Which model should they choose and why?",
    options:[{key:"A",text:"Claude 3 Opus — higher accuracy always justifies the cost"},{key:"B",text:"Claude 3 Haiku — faster and significantly cheaper, sufficient for simple classification"},{key:"C",text:"Neither — classification requires a dedicated ML model"},{key:"D",text:"Claude 3 Sonnet — always the best balance for any task"}],
    answer:"B",
    explanation:"For simple, high-volume classification tasks, Claude 3 Haiku is the right choice. It is significantly cheaper and faster than Opus, and for well-defined classification tasks, the quality difference is minimal. Matching model capability to task complexity is a key optimization strategy."
  },
  {
    id:"q307",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"hard",
    question:"What is 'speculative decoding' and how does it benefit FM inference?",
    options:[{key:"A",text:"Pre-generating answers before questions are asked using prediction models"},{key:"B",text:"Using a small draft model to propose tokens that a larger model then verifies, reducing generation time"},{key:"C",text:"Caching common prompts to avoid repeated inference"},{key:"D",text:"Generating multiple response candidates and selecting the best one"}],
    answer:"B",
    explanation:"Speculative decoding uses a small, fast 'draft' model to propose several tokens, which a larger target model then verifies in a single forward pass. This reduces the number of sequential generation steps for the large model, significantly improving throughput and latency without sacrificing output quality."
  },
  {
    id:"q308",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"medium",
    question:"A media company needs a model that can analyze video frames and generate descriptions. Which capability does this require?",
    options:[{key:"A",text:"Audio-to-text transcription"},{key:"B",text:"Vision capabilities (image understanding) in a multimodal FM"},{key:"C",text:"Sequence-to-sequence translation"},{key:"D",text:"Named entity recognition"}],
    answer:"B",
    explanation:"Analyzing video frames and generating descriptions requires a multimodal FM with vision capabilities — the ability to understand image content. Video frames are images; the model must process visual information and produce natural language descriptions based on what it 'sees' in each frame."
  },
  {
    id:"q309",domain:3,subdomain:"3.2",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is 'function calling' (also called 'tool use') in the context of LLMs?",
    options:[{key:"A",text:"The model calling Python functions during training"},{key:"B",text:"The ability to invoke external APIs or tools based on the model's analysis of the user request"},{key:"C",text:"A method to call multiple language models in sequence"},{key:"D",text:"Logging function names in model outputs for debugging"}],
    answer:"B",
    explanation:"Function calling (tool use) allows LLMs to identify when an external tool or API should be invoked and generate the appropriate function call parameters. The application then executes the function and returns results to the model, enabling dynamic data retrieval and action execution."
  },
  {
    id:"q310",domain:3,subdomain:"3.2",service:"Amazon Bedrock",difficulty:"hard",
    question:"A developer implements a ReAct (Reasoning + Acting) prompting pattern. What does this pattern involve?",
    options:[{key:"A",text:"The model only reasons about the question without taking actions"},{key:"B",text:"Interleaving reasoning steps with action steps, where the model thinks, acts, and observes results iteratively"},{key:"C",text:"Using two models: one for reasoning, one for acting"},{key:"D",text:"A technique where the model reacts to user emotional tone"}],
    answer:"B",
    explanation:"ReAct interleaves reasoning traces (Thought) with action steps (Action) and observations (Observation) in an iterative loop. The model reasons about what to do, takes an action (e.g., calling a tool), receives an observation, and continues reasoning until it reaches a final answer. This enables complex multi-step problem-solving."
  },
  {
    id:"q311",domain:3,subdomain:"3.2",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is 'prompt chaining' and when should it be used?",
    options:[{key:"A",text:"Connecting multiple models in a pipeline where each model's output feeds the next"},{key:"B",text:"Breaking complex tasks into a sequence of simpler prompts where the output of one becomes the input of the next"},{key:"C",text:"Caching prompt templates for reuse across multiple applications"},{key:"D",text:"Linking user queries to document chunks in RAG"}],
    answer:"B",
    explanation:"Prompt chaining decomposes complex tasks into smaller steps, where each prompt handles one part of the task and passes its output to the next prompt. This improves reliability and quality for multi-step reasoning tasks that would be too complex for a single prompt."
  },
  {
    id:"q312",domain:3,subdomain:"3.2",service:"Amazon Bedrock",difficulty:"easy",
    question:"What does 'zero-shot prompting' mean?",
    options:[{key:"A",text:"Providing zero context or instructions to the model"},{key:"B",text:"Asking the model to perform a task without providing any examples of the desired output"},{key:"C",text:"Using no system prompt and only a user message"},{key:"D",text:"Running the model with temperature set to 0"}],
    answer:"B",
    explanation:"Zero-shot prompting means asking the model to complete a task relying solely on its pre-trained knowledge, without providing any examples. For example: 'Translate this text to French: Hello world.' No example translations are given."
  },
  {
    id:"q313",domain:3,subdomain:"3.2",service:"Amazon Bedrock",difficulty:"medium",
    question:"A developer wants to ensure an FM always outputs valid JSON. Which prompt engineering technique best achieves this?",
    options:[{key:"A",text:"Increasing the temperature parameter"},{key:"B",text:"Instructing the model to output JSON and providing an example JSON schema in the prompt"},{key:"C",text:"Using a larger model with more parameters"},{key:"D",text:"Reducing the max token limit"}],
    answer:"B",
    explanation:"Specifying the output format explicitly in the prompt and providing a JSON schema example significantly improves structured output reliability. Many modern FMs also support 'JSON mode' or constrained decoding that forces valid JSON output."
  },
  {
    id:"q314",domain:3,subdomain:"3.2",service:"Amazon Bedrock",difficulty:"hard",
    question:"What is 'meta-prompting' or 'self-refinement prompting'?",
    options:[{key:"A",text:"Using one model to generate prompts for another model"},{key:"B",text:"A technique where the model critiques and refines its own initial response through iterative self-evaluation"},{key:"C",text:"Automatically generating system prompts from user intent"},{key:"D",text:"Storing prompts in a database for reuse"}],
    answer:"B",
    explanation:"Self-refinement (or reflexion) prompting asks the model to generate an initial response, then evaluate that response for errors or improvements, and produce a revised, better answer. This iterative self-critique often improves output quality for complex tasks without requiring external feedback."
  },
  {
    id:"q315",domain:3,subdomain:"3.2",service:"Amazon Bedrock",difficulty:"medium",
    question:"A system prompt sets strict rules for an AI assistant: 'You are a customer service agent. Only discuss topics related to our products. Never discuss competitors.' What type of control does this represent?",
    options:[{key:"A",text:"Fine-tuning constraint"},{key:"B",text:"Behavioral guardrail implemented through prompt engineering"},{key:"C",text:"Hardware-level access control"},{key:"D",text:"IAM permission boundary"}],
    answer:"B",
    explanation:"System prompts are a primary prompt engineering technique for establishing behavioral constraints. By clearly defining the agent's role, scope, and restrictions in the system prompt, developers can guide FM behavior without modifying model weights. This is a software-level guardrail."
  },
  {
    id:"q316",domain:3,subdomain:"3.2",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is the difference between 'temperature' and 'top-p' sampling parameters?",
    options:[{key:"A",text:"Temperature controls output length; top-p controls creativity"},{key:"B",text:"Temperature scales the probability distribution of tokens; top-p limits sampling to the smallest set of tokens whose cumulative probability meets threshold p"},{key:"C",text:"Temperature is for training; top-p is for inference"},{key:"D",text:"They are identical parameters with different names"}],
    answer:"B",
    explanation:"Temperature scales the softmax distribution (higher = more uniform = more random; lower = more peaked = more deterministic). Top-p (nucleus sampling) selects from the minimum set of tokens whose cumulative probability ≥ p, dynamically adjusting vocabulary at each step. Both control output randomness but via different mechanisms."
  },
  {
    id:"q317",domain:3,subdomain:"3.2",service:"Amazon Bedrock",difficulty:"hard",
    question:"What is 'prompt injection' and how can it be mitigated?",
    options:[{key:"A",text:"Adding too many tokens to the prompt; mitigated by reducing prompt length"},{key:"B",text:"Malicious user input that overrides system instructions; mitigated by input validation, separating instructions from data, and Bedrock Guardrails"},{key:"C",text:"Injecting SQL commands into prompts; mitigated by database firewalls"},{key:"D",text:"Providing conflicting instructions in few-shot examples; mitigated by consistent examples"}],
    answer:"B",
    explanation:"Prompt injection occurs when malicious content in user input (or retrieved documents in RAG) overrides system-level instructions, potentially causing the model to ignore safety rules or reveal confidential information. Mitigations include input sanitization, clearly separating system instructions from user content, using Bedrock Guardrails, and avoiding concatenating untrusted content directly into prompts."
  },
  {
    id:"q318",domain:3,subdomain:"3.2",service:"Amazon Bedrock",difficulty:"medium",
    question:"A developer sets max_tokens=50 for a summarization task on 5-page documents. What problem will this cause?",
    options:[{key:"A",text:"The model will refuse to process the document"},{key:"B",text:"Summaries will be truncated mid-sentence, producing incomplete outputs"},{key:"C",text:"The model will use less compute, reducing cost"},{key:"D",text:"The model will automatically increase max_tokens to complete the response"}],
    answer:"B",
    explanation:"max_tokens sets the maximum output length. For document summarization of 5-page documents, 50 tokens (~37 words) is far too short. The model will cut off output abruptly at the token limit, producing truncated, incomplete summaries. This parameter must be set appropriately for the expected output length."
  },
  {
    id:"q319",domain:3,subdomain:"3.2",service:"Amazon Bedrock",difficulty:"easy",
    question:"What is 'few-shot prompting'?",
    options:[{key:"A",text:"Training the model on a small dataset"},{key:"B",text:"Including a small number of input-output examples in the prompt to demonstrate the desired behavior"},{key:"C",text:"Running inference with minimal compute resources"},{key:"D",text:"Using prompts with fewer than 10 words"}],
    answer:"B",
    explanation:"Few-shot prompting includes 2-10 examples of the desired input-output behavior directly in the prompt. These examples guide the model to follow the demonstrated pattern without modifying model weights, making it a powerful technique for adapting model behavior at inference time."
  },
  {
    id:"q320",domain:3,subdomain:"3.2",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is 'role prompting' and what benefit does it provide?",
    options:[{key:"A",text:"Assigning IAM roles to control model access"},{key:"B",text:"Instructing the model to adopt a specific persona or expertise, improving response style and domain focus"},{key:"C",text:"Rotating between multiple models for load balancing"},{key:"D",text:"Defining database roles for RAG knowledge bases"}],
    answer:"B",
    explanation:"Role prompting (e.g., 'You are an expert cybersecurity analyst') frames the model's perspective and activates relevant knowledge patterns. This improves response quality, tone consistency, and domain appropriateness, making it a simple but effective prompt engineering technique."
  },
  {
    id:"q321",domain:3,subdomain:"3.2",service:"Amazon Bedrock",difficulty:"hard",
    question:"A RAG pipeline retrieves 5 document chunks and inserts them into the prompt. A user asks a question, but the retrieved chunks are not relevant to the question. What is this failure mode called?",
    options:[{key:"A",text:"Model hallucination"},{key:"B",text:"Context poisoning or retrieval failure leading to grounded but incorrect responses"},{key:"C",text:"Prompt injection"},{key:"D",text:"Token overflow"}],
    answer:"B",
    explanation:"When irrelevant chunks are retrieved and inserted into context, the model may generate responses 'grounded' in the wrong documents, producing incorrect answers that appear confident and factual. This is a retrieval failure (not a hallucination in the traditional sense) and can be mitigated by improving embedding quality, reranking, and adding relevance thresholds."
  },
  {
    id:"q322",domain:3,subdomain:"3.2",service:"Amazon Bedrock",difficulty:"medium",
    question:"What does 'stop sequence' parameter control in FM inference?",
    options:[{key:"A",text:"The sequence of models in a pipeline"},{key:"B",text:"A specific string or token that, when generated, causes the model to stop producing output"},{key:"C",text:"The order in which few-shot examples are presented"},{key:"D",text:"The maximum number of iterations in an agent loop"}],
    answer:"B",
    explanation:"Stop sequences are strings that signal the model to stop generating when they appear in the output. For example, setting stop=['###'] tells the model to stop output when it generates '###'. This is useful for structured generation where you need to capture only a specific portion of the model's response."
  },
  {
    id:"q323",domain:3,subdomain:"3.3",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is 'continued pre-training' as a model customization technique?",
    options:[{key:"A",text:"Restarting the training process from scratch with new data"},{key:"B",text:"Further training a pre-trained FM on domain-specific unlabeled text to improve domain knowledge"},{key:"C",text:"Fine-tuning on labeled question-answer pairs"},{key:"D",text:"Training only the model's embedding layer on new vocabulary"}],
    answer:"B",
    explanation:"Continued pre-training (CPT) extends the pre-training phase on large amounts of domain-specific text (e.g., medical literature, legal documents, code). Unlike supervised fine-tuning, CPT uses unlabeled data with the same self-supervised objective, adapting the model's internal knowledge to the domain."
  },
  {
    id:"q324",domain:3,subdomain:"3.3",service:"Amazon Bedrock",difficulty:"hard",
    question:"What is 'knowledge distillation' in the context of FM customization?",
    options:[{key:"A",text:"Extracting knowledge from RAG documents into a vector database"},{key:"B",text:"Training a smaller 'student' model to mimic the outputs of a larger 'teacher' model"},{key:"C",text:"Summarizing training data before fine-tuning"},{key:"D",text:"Transferring model weights between cloud regions"}],
    answer:"B",
    explanation:"Knowledge distillation trains a smaller, more efficient 'student' model to replicate the behavior of a larger 'teacher' model. The student learns from the teacher's output probabilities (soft targets) rather than hard labels, capturing more information. This produces compact models that maintain much of the teacher's quality."
  },
  {
    id:"q325",domain:3,subdomain:"3.3",service:"Amazon Bedrock",difficulty:"medium",
    question:"A team uses synthetic data for fine-tuning because their domain has limited labeled examples. What is the primary risk of using synthetic data?",
    options:[{key:"A",text:"Synthetic data always causes the model to forget its pre-training"},{key:"B",text:"If the synthetic data generator has biases or errors, those flaws will be amplified in the fine-tuned model"},{key:"C",text:"Synthetic data cannot be used in Bedrock's fine-tuning API"},{key:"D",text:"Synthetic data always reduces model accuracy below baseline"}],
    answer:"B",
    explanation:"Synthetic data generated by another model or simulation may contain systematic errors or biases. When used for fine-tuning, these flaws can be learned and amplified by the model. Quality control, human review of synthetic samples, and diversity checks are essential before using synthetic data for training."
  },
  {
    id:"q326",domain:3,subdomain:"3.3",service:"Amazon Bedrock",difficulty:"hard",
    question:"What is 'prefix tuning' as a parameter-efficient fine-tuning technique?",
    options:[{key:"A",text:"Adding a trainable prefix to input tokens that guides model behavior without modifying original weights"},{key:"B",text:"Fine-tuning only the first layers of the transformer"},{key:"C",text:"Prepending domain-specific text to every inference prompt"},{key:"D",text:"Training only the tokenizer on domain vocabulary"}],
    answer:"A",
    explanation:"Prefix tuning prepends a sequence of trainable continuous vectors (the 'prefix') to each transformer layer's key-value pairs. Only the prefix parameters are updated during training, while the original model weights remain frozen. This achieves efficient adaptation with a very small number of trainable parameters."
  },
  {
    id:"q327",domain:3,subdomain:"3.3",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is 'instruction tuning' and how does it differ from standard supervised fine-tuning?",
    options:[{key:"A",text:"They are identical — instruction tuning is just another name for supervised fine-tuning"},{key:"B",text:"Instruction tuning fine-tunes on diverse instruction-following examples, improving the model's ability to follow varied task instructions rather than excelling at one specific task"},{key:"C",text:"Instruction tuning only updates the model's vocabulary layer"},{key:"D",text:"Instruction tuning uses unlabeled data while supervised fine-tuning uses labeled data"}],
    answer:"B",
    explanation:"Instruction tuning (used to create models like Llama-Instruct or GPT-3.5/4) trains on thousands of diverse instruction-response pairs across many task types. This produces a model that follows natural language instructions well for any task. Standard SFT typically focuses on one specific task (e.g., sentiment classification)."
  },
  {
    id:"q328",domain:3,subdomain:"3.3",service:"Amazon Bedrock",difficulty:"hard",
    question:"A fine-tuned model performs well on training data but poorly on new queries. The team increases the training data size but performance does not improve. What is the most likely problem?",
    options:[{key:"A",text:"The learning rate is too low"},{key:"B",text:"Catastrophic forgetting of pre-trained knowledge due to overfitting on the fine-tuning dataset"},{key:"C",text:"The model architecture is too small for the dataset"},{key:"D",text:"The fine-tuning epochs are set too low"}],
    answer:"B",
    explanation:"If the model overfits to the fine-tuning data distribution, it loses generalization ability. Additionally, excessive fine-tuning can cause catastrophic forgetting, where the model loses pre-trained capabilities. Solutions include regularization, early stopping, using PEFT methods that preserve pre-trained weights, and ensuring fine-tuning data diversity."
  },
  {
    id:"q329",domain:3,subdomain:"3.3",service:"Amazon Bedrock",difficulty:"medium",
    question:"What format does Amazon Bedrock require for fine-tuning training data?",
    options:[{key:"A",text:"CSV files with question and answer columns"},{key:"B",text:"JSONL (JSON Lines) files with prompt-completion pairs stored in Amazon S3"},{key:"C",text:"XML files uploaded directly to the Bedrock console"},{key:"D",text:"Python pickle files containing tokenized sequences"}],
    answer:"B",
    explanation:"Amazon Bedrock fine-tuning requires training data in JSONL format (one JSON object per line with 'prompt' and 'completion' fields or the chat messages format) stored in an Amazon S3 bucket. Bedrock then reads the data directly from S3 for the fine-tuning job."
  },
  {
    id:"q330",domain:3,subdomain:"3.3",service:"Amazon Bedrock",difficulty:"easy",
    question:"What is 'catastrophic forgetting' in the context of fine-tuning language models?",
    options:[{key:"A",text:"When a model loses its fine-tuning when moved to a different hardware"},{key:"B",text:"When fine-tuning on new data causes the model to lose previously learned knowledge and capabilities"},{key:"C",text:"When the model forgets context from earlier in a long conversation"},{key:"D",text:"When training data is accidentally deleted during the fine-tuning process"}],
    answer:"B",
    explanation:"Catastrophic forgetting occurs when a neural network forgets previously learned information while learning new information. For LLMs, aggressive fine-tuning on a narrow dataset can cause the model to lose general capabilities it had after pre-training. PEFT methods like LoRA help mitigate this by keeping original weights frozen."
  },
  {
    id:"q331",domain:3,subdomain:"3.3",service:"Amazon Bedrock",difficulty:"medium",
    question:"Which quantization format significantly reduces model memory footprint while keeping most of the model's quality?",
    options:[{key:"A",text:"FP64 (64-bit floating point)"},{key:"B",text:"INT8 or INT4 quantization"},{key:"C",text:"FP32 (32-bit floating point)"},{key:"D",text:"FP128 (128-bit floating point)"}],
    answer:"B",
    explanation:"Quantization reduces model weights from FP32 (4 bytes/weight) to INT8 (1 byte) or INT4 (0.5 bytes), dramatically reducing memory requirements. A 70B parameter model at FP32 requires ~280GB; at INT4 it requires ~35GB, enabling deployment on fewer GPUs with acceptable quality degradation."
  },
  {
    id:"q332",domain:3,subdomain:"3.3",service:"Amazon Bedrock",difficulty:"hard",
    question:"What is the key advantage of Direct Preference Optimization (DPO) over RLHF for aligning FM outputs with human preferences?",
    options:[{key:"A",text:"DPO requires more training data than RLHF"},{key:"B",text:"DPO eliminates the need for a separate reward model and reinforcement learning, directly optimizing from preference data"},{key:"C",text:"DPO can only align text models while RLHF works for any modality"},{key:"D",text:"DPO always produces better alignment than RLHF regardless of dataset quality"}],
    answer:"B",
    explanation:"RLHF requires training a separate reward model from preference data, then using RL (typically PPO) to optimize the LM against the reward model — a complex, unstable process. DPO reformulates the alignment objective to directly optimize from preference pairs without a reward model or RL, making training simpler, more stable, and computationally cheaper."
  },
  {
    id:"q333",domain:3,subdomain:"3.4",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is 'A/B testing' in the context of deploying foundation models?",
    options:[{key:"A",text:"Testing two versions of a prompt on the same model"},{key:"B",text:"Routing a percentage of live traffic to two different models and comparing their performance metrics"},{key:"C",text:"Running automated benchmark tests against a standard dataset"},{key:"D",text:"Comparing model responses on test set A and test set B"}],
    answer:"B",
    explanation:"A/B testing in model deployment routes a fraction of real user traffic to both a baseline model (A) and a new model (B), comparing business metrics (user satisfaction, task completion rate, etc.) under real conditions. This validates that a new model performs better in production before full rollout."
  },
  {
    id:"q334",domain:3,subdomain:"3.4",service:"Amazon Bedrock",difficulty:"hard",
    question:"What is a 'shadow deployment' strategy for FM evaluation?",
    options:[{key:"A",text:"Running a model in a private subnet with no internet access"},{key:"B",text:"Routing 100% of requests to the production model, while also sending copies to a new model for comparison, without showing new model responses to users"},{key:"C",text:"Deploying a model without informing end users"},{key:"D",text:"Creating a model replica in a different AWS region for disaster recovery"}],
    answer:"B",
    explanation:"Shadow deployment sends all traffic to both the current production model and the new model simultaneously. The new model's responses are logged and analyzed but not shown to users. This allows real-traffic evaluation of the new model with zero user impact before making any production switch."
  },
  {
    id:"q335",domain:3,subdomain:"3.4",service:"Amazon Bedrock",difficulty:"medium",
    question:"What does 'BLEU score' measure in NLP model evaluation?",
    options:[{key:"A",text:"The semantic similarity between two text embeddings"},{key:"B",text:"The overlap of n-grams between model-generated text and reference text"},{key:"C",text:"The average confidence score of model predictions"},{key:"D",text:"The diversity of vocabulary in generated text"}],
    answer:"B",
    explanation:"BLEU (Bilingual Evaluation Understudy) measures n-gram precision between generated text and one or more reference texts. Originally designed for machine translation, it is widely used for summarization and generation evaluation. High BLEU indicates high lexical overlap with references but does not capture semantic meaning well."
  },
  {
    id:"q336",domain:3,subdomain:"3.4",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is 'groundedness' as an FM evaluation metric for RAG systems?",
    options:[{key:"A",text:"Whether the model stayed within its context window"},{key:"B",text:"The degree to which model responses are factually supported by the retrieved source documents"},{key:"C",text:"Whether the model completed the user's task successfully"},{key:"D",text:"The consistency of responses across multiple identical queries"}],
    answer:"B",
    explanation:"Groundedness measures whether FM outputs in a RAG system are supported by the retrieved context documents. A grounded response can be traced back to specific passages in the source material. Low groundedness indicates the model is 'hallucinating' information not present in the retrieved documents."
  },
  {
    id:"q337",domain:3,subdomain:"3.4",service:"Amazon Bedrock",difficulty:"easy",
    question:"What is Amazon Bedrock Model Evaluation used for?",
    options:[{key:"A",text:"Training custom models on proprietary datasets"},{key:"B",text:"Comparing and evaluating FM outputs using automated metrics and human reviewers"},{key:"C",text:"Monitoring model performance after deployment in production"},{key:"D",text:"Generating synthetic training data for fine-tuning"}],
    answer:"B",
    explanation:"Amazon Bedrock Model Evaluation allows you to evaluate and compare FM outputs using built-in automated metrics (accuracy, ROUGE, etc.) and/or human review workflows. It helps select the right model for your use case by systematically comparing responses across a test dataset."
  },
  {
    id:"q338",domain:3,subdomain:"3.4",service:"Amazon SageMaker",difficulty:"hard",
    question:"What is 'canary deployment' and how does it differ from A/B testing for FM rollout?",
    options:[{key:"A",text:"Canary sends 100% traffic to new model; A/B splits traffic evenly"},{key:"B",text:"Canary gradually increases traffic to the new model (e.g., 5% → 25% → 100%) while monitoring for issues; A/B maintains a stable split for comparison experiments"},{key:"C",text:"They are identical strategies with different names"},{key:"D",text:"Canary is for model training; A/B is for model inference"}],
    answer:"B",
    explanation:"Canary deployment progressively shifts traffic from the old model to the new one (e.g., 5%, then 25%, then 100%), with automatic rollback triggers if error rates or latency exceed thresholds. A/B testing maintains a stable traffic split to compare models for statistical significance. Canary minimizes risk during rollout; A/B enables controlled experiments."
  },
  {
    id:"q339",domain:3,subdomain:"3.4",service:"Amazon SageMaker",difficulty:"medium",
    question:"What is 'latency P99' in the context of FM deployment performance monitoring?",
    options:[{key:"A",text:"The average response time for 99 consecutive requests"},{key:"B",text:"The response time below which 99% of requests are completed (the 99th percentile latency)"},{key:"C",text:"The time it takes the model to process the first 99 tokens"},{key:"D",text:"A 99-second timeout for inference requests"}],
    answer:"B",
    explanation:"P99 latency (99th percentile) represents the response time that 99% of requests complete within. It captures tail latency — the slowest 1% of requests — which often represents worst-case user experience. Monitoring P99 is critical for SLA compliance because average latency can hide problematic outliers."
  },
  {
    id:"q340",domain:3,subdomain:"3.4",service:"Amazon Bedrock",difficulty:"medium",
    question:"What does 'ROUGE-L' measure in text generation evaluation?",
    options:[{key:"A",text:"The number of unique words in generated text"},{key:"B",text:"The longest common subsequence between generated and reference text, measuring fluency"},{key:"C",text:"The recall of unigrams in generated text compared to reference"},{key:"D",text:"The embedding similarity between generated and reference text"}],
    answer:"B",
    explanation:"ROUGE-L measures the longest common subsequence (LCS) between generated and reference text. Unlike ROUGE-N which counts n-gram matches, ROUGE-L captures sentence-level structure and word order, making it more sensitive to fluency and coherence of the generated text."
  },
  {
    id:"q341",domain:3,subdomain:"3.4",service:"Amazon Bedrock",difficulty:"hard",
    question:"A team uses 'LLM-as-judge' for evaluating FM outputs. What is a key limitation of this approach?",
    options:[{key:"A",text:"LLMs cannot evaluate text longer than 100 words"},{key:"B",text:"The judge model may inherit biases, prefer verbose outputs, or favor responses similar to its own style"},{key:"C",text:"LLM-as-judge requires labeled ground truth data to function"},{key:"D",text:"This approach is only valid for code generation tasks"}],
    answer:"B",
    explanation:"LLM-as-judge uses an FM to score or rank other FMs' outputs. Key limitations include: the judge model has its own biases (e.g., preferring longer responses), may favor outputs from similar model families, and can be inconsistent. Calibration with human judgments and using multiple judge models helps mitigate these issues."
  },
  {
    id:"q342",domain:3,subdomain:"3.4",service:"Amazon SageMaker",difficulty:"medium",
    question:"What is 'model drift' and how should production FM deployments handle it?",
    options:[{key:"A",text:"When model weights change unexpectedly due to hardware errors; handle with checksums"},{key:"B",text:"When input data distribution shifts from training distribution, degrading model performance; handle with continuous monitoring and retraining triggers"},{key:"C",text:"When a model migrates between AWS regions; handle with cross-region replication"},{key:"D",text:"When fine-tuning data drifts from user expectations; handle with more training data"}],
    answer:"B",
    explanation:"Model drift (specifically data/concept drift) occurs when the real-world data distribution changes over time, causing model performance to degrade. For FM deployments, monitoring response quality metrics, user feedback, and business KPIs over time helps detect drift. SageMaker Model Monitor can automate drift detection and trigger retraining or prompt updates."
  },
  {
    id:"q343",domain:3,subdomain:"3.4",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is 'BERTScore' and why is it preferred over BLEU for evaluating semantic quality?",
    options:[{key:"A",text:"BERTScore measures token count; BLEU measures embedding similarity"},{key:"B",text:"BERTScore uses contextual embeddings to measure semantic similarity, capturing meaning even when different words are used; BLEU only measures exact n-gram overlap"},{key:"C",text:"BERTScore is faster to compute than BLEU"},{key:"D",text:"BERTScore measures grammatical correctness while BLEU measures factual accuracy"}],
    answer:"B",
    explanation:"BERTScore computes token-level cosine similarity between contextual embeddings (from BERT or similar models) of candidate and reference texts. This captures semantic equivalence even when different words express the same meaning, making it more robust than BLEU's exact n-gram matching for evaluating generated text quality."
  },
  {
    id:"q344",domain:3,subdomain:"3.4",service:"Amazon SageMaker",difficulty:"hard",
    question:"An FM is deployed behind an Amazon SageMaker real-time endpoint. Response times are increasing as traffic grows. Which SageMaker feature enables automatic capacity management to address this?",
    options:[{key:"A",text:"SageMaker Autopilot"},{key:"B",text:"Application Auto Scaling for SageMaker endpoints"},{key:"C",text:"SageMaker Clarify"},{key:"D",text:"SageMaker Feature Store"}],
    answer:"B",
    explanation:"Application Auto Scaling integrated with SageMaker endpoints automatically adjusts the number of instances behind an endpoint based on CloudWatch metrics (e.g., invocations per instance, latency). This maintains performance during traffic spikes without manual intervention."
  },
  {
    id:"q345",domain:3,subdomain:"3.4",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is 'answer relevancy' as an evaluation metric in RAG systems?",
    options:[{key:"A",text:"Whether the retrieved documents are relevant to the query"},{key:"B",text:"Whether the model's final answer is relevant and directly addresses the user's question"},{key:"C",text:"The relevance of source document metadata to the query"},{key:"D",text:"The number of relevant documents retrieved by the vector store"}],
    answer:"B",
    explanation:"Answer relevancy measures whether the FM's response actually addresses what the user asked. Even when responses are grounded in retrieved documents, they may be tangential or miss the main question. Answer relevancy and groundedness together provide a complete picture of RAG system quality."
  },
  {
    id:"q346",domain:3,subdomain:"3.4",service:"Amazon Bedrock",difficulty:"hard",
    question:"A team wants to evaluate whether their FM-based customer service bot is hallucinating. They have no ground truth answers. Which evaluation approach can they use?",
    options:[{key:"A",text:"BLEU score comparison against competitor model outputs"},{key:"B",text:"LLM-as-judge with a separate FM evaluating groundedness relative to retrieved context"},{key:"C",text:"Perplexity measurement of the generated responses"},{key:"D",text:"Exact match accuracy against a holdout test set"}],
    answer:"B",
    explanation:"Without ground truth answers, traditional metrics like exact match or BLEU cannot measure hallucination. LLM-as-judge can evaluate whether responses are supported by the retrieved context (groundedness), identifying potential hallucinations. Combined with human spot-checking, this provides practical hallucination detection without labeled ground truth."
  },
  {
    id:"q347",domain:3,subdomain:"3.4",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is 'task decomposition' in the context of evaluating FM performance?",
    options:[{key:"A",text:"Breaking the model architecture into separate evaluation components"},{key:"B",text:"Splitting a complex benchmark into subtask evaluations to identify specific capability gaps"},{key:"C",text:"Distributing evaluation compute across multiple GPUs"},{key:"D",text:"Separating training and evaluation datasets by task type"}],
    answer:"B",
    explanation:"Task decomposition in evaluation means breaking complex tasks (e.g., 'answer medical questions') into specific sub-capabilities (retrieval accuracy, reasoning correctness, factual accuracy, format compliance). This reveals exactly where a model fails, enabling targeted improvements rather than chasing a single aggregate metric."
  },
  {
    id:"q348",domain:3,subdomain:"3.4",service:"Amazon SageMaker",difficulty:"easy",
    question:"What is the purpose of Amazon SageMaker Model Registry?",
    options:[{key:"A",text:"Storing training datasets for ML experiments"},{key:"B",text:"Cataloging and versioning trained models with approval workflows for production deployment"},{key:"C",text:"Monitoring model performance in real-time"},{key:"D",text:"Generating synthetic data for model evaluation"}],
    answer:"B",
    explanation:"SageMaker Model Registry provides a central catalog for registering, versioning, and managing ML models. It includes approval workflows (pending, approved, rejected) that gate production deployment, enabling MLOps governance and ensuring only validated models reach production."
  },
  {
    id:"q349",domain:3,subdomain:"3.4",service:"Amazon Bedrock",difficulty:"medium",
    question:"An FM evaluation shows high ROUGE scores but poor user satisfaction ratings. What does this indicate?",
    options:[{key:"A",text:"ROUGE is unreliable and should be replaced with BLEU"},{key:"B",text:"The model generates text that lexically matches references but fails on practical dimensions like helpfulness, coherence, or accuracy"},{key:"C",text:"User satisfaction ratings are inherently biased and should be ignored"},{key:"D",text:"The evaluation dataset is too large for ROUGE to work correctly"}],
    answer:"B",
    explanation:"This discrepancy reveals a fundamental limitation of reference-based metrics like ROUGE: high lexical overlap does not guarantee useful, accurate, or satisfying responses. The model may match surface patterns without truly understanding or addressing user needs. Human evaluation remains essential for assessing real-world value."
  },
  {
    id:"q350",domain:3,subdomain:"3.4",service:"Amazon Bedrock",difficulty:"hard",
    question:"What is 'context recall' in RAG evaluation and why does it matter?",
    options:[{key:"A",text:"How well the model remembers information from the beginning of a long conversation"},{key:"B",text:"The fraction of ground-truth answer components that can be found in the retrieved context documents"},{key:"C",text:"The percentage of retrieved documents that the model references in its response"},{key:"D",text:"How quickly the model retrieves context from the vector database"}],
    answer:"B",
    explanation:"Context recall measures whether the retrieval step fetches documents containing the information needed to answer the question correctly. Low context recall means the vector search is missing relevant documents, causing the FM to generate incomplete or incorrect answers even if it reasons correctly from available context."
  },
  {
    id:"q351",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is an 'inference profile' in Amazon Bedrock?",
    options:[{key:"A",text:"A user profile that stores prompt history for personalization"},{key:"B",text:"A configuration that manages cross-region routing and cost tracking for model invocations"},{key:"C",text:"A security profile defining which users can invoke specific models"},{key:"D",text:"A benchmark profile showing model performance across task types"}],
    answer:"B",
    explanation:"Inference profiles in Amazon Bedrock allow cross-region inference by grouping model deployments across regions. They enable Bedrock to route requests to available capacity across regions, provide cost allocation tags for cost tracking by project or team, and improve resilience."
  },
  {
    id:"q352",domain:3,subdomain:"3.2",service:"Amazon Bedrock",difficulty:"hard",
    question:"What is 'Tree of Thoughts' (ToT) prompting and when is it most beneficial?",
    options:[{key:"A",text:"A technique that generates a tree-structured outline before writing long content"},{key:"B",text:"A framework where the model explores multiple reasoning paths in parallel, evaluates them, and selects the best path for complex problem-solving"},{key:"C",text:"A hierarchical prompt structure organizing instructions by importance"},{key:"D",text:"A method of connecting multiple agent nodes in a decision tree"}],
    answer:"B",
    explanation:"Tree of Thoughts extends Chain of Thought by having the model generate and evaluate multiple reasoning paths (thoughts) at each step, exploring a tree of possibilities. The model can backtrack and try alternative paths. ToT is most beneficial for complex tasks requiring strategic planning, mathematical reasoning, or creative problem-solving where multiple approaches should be considered."
  },
  {
    id:"q353",domain:3,subdomain:"3.3",service:"Amazon Bedrock",difficulty:"medium",
    question:"How many labeled examples are typically needed for effective LoRA fine-tuning of an FM?",
    options:[{key:"A",text:"Millions of examples, same as pre-training"},{key:"B",text:"Hundreds to thousands of high-quality examples are often sufficient"},{key:"C",text:"Exactly 10,000 examples — Bedrock requires this minimum"},{key:"D",text:"No labeled examples — LoRA uses unsupervised learning only"}],
    answer:"B",
    explanation:"LoRA's efficiency means that hundreds to a few thousand high-quality examples can produce meaningful adaptation. Quality matters more than quantity: a curated set of 500-5,000 representative examples often outperforms a noisy dataset of 100,000 examples. This makes fine-tuning accessible even for teams without massive labeled datasets."
  },
  {
    id:"q354",domain:3,subdomain:"3.4",service:"Amazon SageMaker",difficulty:"medium",
    question:"What is 'SageMaker Model Monitor' primarily used for?",
    options:[{key:"A",text:"Monitoring training job resource utilization"},{key:"B",text:"Continuously monitoring deployed model inputs and outputs to detect data quality issues, model quality drift, and bias drift"},{key:"C",text:"Monitoring FM prompt injection attempts in real time"},{key:"D",text:"Tracking model version history and approval status"}],
    answer:"B",
    explanation:"SageMaker Model Monitor continuously analyzes production inference requests and responses against baseline statistics established during training. It detects data quality issues (missing features, type violations), model quality drift (accuracy degradation), and bias drift (changing feature attributions), alerting teams to performance problems before they impact users significantly."
  },
  {
    id:"q355",domain:3,subdomain:"3.2",service:"Amazon Bedrock",difficulty:"medium",
    question:"A developer wants to prevent the FM from generating responses about competitor products. Which is the most robust implementation approach?",
    options:[{key:"A",text:"Only mention this restriction in the user message for each request"},{key:"B",text:"Use Amazon Bedrock Guardrails with a denied topics policy specifying competitor products"},{key:"C",text:"Post-process responses with string matching to remove competitor mentions"},{key:"D",text:"Use a lower temperature to reduce unexpected outputs"}],
    answer:"B",
    explanation:"Bedrock Guardrails with denied topics provides the most robust protection. It uses ML classifiers to detect and block on-topic content rather than brittle string matching. Unlike system prompt restrictions (which can be overridden by sophisticated prompts), Guardrails operates as a separate layer independent of the model's instruction following."
  },
  {
    id:"q356",domain:3,subdomain:"3.1",service:"Amazon Bedrock",difficulty:"easy",
    question:"Which Amazon Bedrock foundation model family specializes in generating and understanding code?",
    options:[{key:"A",text:"Amazon Titan Text Lite"},{key:"B",text:"Meta Llama Code or CodeWhisperer"},{key:"C",text:"Anthropic Claude Haiku"},{key:"D",text:"Amazon Nova Micro"}],
    answer:"B",
    explanation:"Meta's Llama family includes Code Llama variants optimized for code generation and understanding. AWS also offers Amazon CodeWhisperer (now Amazon Q Developer) for code assistance. When the primary use case involves code, code-specialized models typically outperform general-purpose FMs."
  },
  {
    id:"q357",domain:3,subdomain:"3.3",service:"Amazon Bedrock",difficulty:"hard",
    question:"What is 'IA3' (Infused Adapter by Inhibiting and Amplifying Inner Activations) as a PEFT technique?",
    options:[{key:"A",text:"A technique that adds adapters between every third transformer layer"},{key:"B",text:"A PEFT method that learns rescaling vectors applied to keys, values, and feed-forward activations, requiring even fewer parameters than LoRA"},{key:"C",text:"A method for infusing domain knowledge into adapter modules"},{key:"D",text:"An approach for multi-task fine-tuning with shared adapter networks"}],
    answer:"B",
    explanation:"IA3 injects learned rescaling vectors into specific positions in the transformer (keys, values, and feed-forward network activations). Only these tiny vectors are trained, resulting in even fewer trainable parameters than LoRA. IA3 shows strong performance on few-shot tasks while keeping inference overhead minimal."
  },
  {
    id:"q358",domain:3,subdomain:"3.2",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is 'self-consistency' prompting and how does it improve FM output quality?",
    options:[{key:"A",text:"Ensuring the prompt is internally consistent with no contradictions"},{key:"B",text:"Generating multiple reasoning paths with Chain of Thought, then selecting the most common final answer across paths"},{key:"C",text:"Checking that the model's response is consistent with previous responses in a conversation"},{key:"D",text:"Validating that all few-shot examples have consistent formatting"}],
    answer:"B",
    explanation:"Self-consistency generates multiple independent Chain of Thought reasoning paths (with higher temperature) for the same question and selects the answer that appears most frequently across all paths. This ensemble approach is especially effective for mathematical and logical reasoning, as different valid reasoning paths often converge on the correct answer."
  },
  {
    id:"q359",domain:3,subdomain:"3.4",service:"Amazon Bedrock",difficulty:"medium",
    question:"What is 'faithfulness' as a dimension in RAG evaluation frameworks like RAGAS?",
    options:[{key:"A",text:"Whether the FM follows the format specified in the prompt"},{key:"B",text:"Whether all claims in the generated answer are supported by the retrieved context"},{key:"C",text:"Whether the user's query is faithfully interpreted by the retrieval system"},{key:"D",text:"Whether the evaluation metrics are aligned with human preferences"}],
    answer:"B",
    explanation:"In RAGAS and similar RAG evaluation frameworks, 'faithfulness' (equivalent to groundedness) measures whether every factual claim in the generated answer can be inferred from the retrieved context documents. A faithful response makes no claims beyond what the context supports."
  },
  {
    id:"q360",domain:3,subdomain:"3.3",service:"Amazon Bedrock",difficulty:"hard",
    question:"A company wants to use Amazon Bedrock fine-tuning but has confidentiality concerns about their training data. What security feature does Bedrock provide to address this?",
    options:[{key:"A",text:"Training data is automatically anonymized before the fine-tuning job begins"},{key:"B",text:"Customer training data is never shared with model providers; it remains within AWS and the customer's account"},{key:"C",text:"Training data is encrypted in transit but stored in plaintext in Bedrock's managed storage"},{key:"D",text:"Customers must grant Anthropic or other model providers direct access to S3 training data"}],
    answer:"B",
    explanation:"Amazon Bedrock fine-tuning maintains strict data isolation: your training data stored in S3 never leaves your AWS account and is never shared with the underlying model providers (Anthropic, Meta, etc.). The fine-tuned model weights are also private to your account, protecting both training data and customized model IP."
  }
];
