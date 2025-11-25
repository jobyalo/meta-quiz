// Meta Certification Quiz: WhatsApp Business Platform - Extended Version
// Format: Multiple Choice | Scoring Sheet Included

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswers: string[]; // support multiple correct answers for multiple select
  topics: string[];
}

const baseQuestions: Question[] = [
  {
    id: 1,
    question: "Which action is mandatory before launching a Click-to-WhatsApp Ads?",
    options: [
      "Add 5 phone numbers to your WABA",
      "Link a Facebook Page to a WhatsApp Business Number",
      "Request advanced access to the Graph API",
      "Set up Facebook Pay"
    ],
    correctAnswers: ["Link a Facebook Page to a WhatsApp Business Number"],
    topics: ["CTWA Ads"]
  },
  {
    id: 2,
    question: "What is a reason you might not be able to recreate a deleted template with the same name?",
    options: [
      "Deleted templates cannot be used again for 30 days",
      "The template still exists in cache",
      "You must reverify the template ID",
      "The WABA must be reverified"
    ],
    correctAnswers: ["Deleted templates cannot be used again for 30 days"],
    topics: ["Message Templates"]
  },
  {
    id: 3,
    question: "Which of the following are best practices for short-term campaign messages? (Choose two.)",
    options: [
      "Use a utility category",
      "Use marketing category",
      "Set time_to_live to 2 hours",
      "Use session messages only"
    ],
    correctAnswers: ["Use marketing category", "Set time_to_live to 2 hours"],
    topics: ["Message Templates"]
  },
  {
    id: 4,
    question: "Which change will most likely cause a UTILITY template to be rejected?",
    options: [
      "Lack of footer",
      "Includes 'limited time offer' wording",
      "Contains a button",
      "Has too many curly brackets"
    ],
    correctAnswers: ["Includes 'limited time offer' wording"],
    topics: ["Message Templates"]
  },
  {
    id: 5,
    question: "What are two recommended security measures a partner can implement to secure a webhook server? (Choose two.)",
    options: [
      "Periodically get IP addresses of Meta's servers and update your firewall",
      "Validate the signature of webhook request using your App Secret",
      "Validate the WhatsApp Business Account ID inside the payload",
      "Check the timestamp and ensure it is sent within 10 seconds"
    ],
    correctAnswers: ["Validate the signature of webhook request using your App Secret","Periodically get IP addresses of Meta's servers and update your firewall"],
    topics: ["Webhooks"]
  },
  {
    id: 6,
    question: "What are likely causes of missing Click-to-WhatsApp Ads in webhook payload? (Choose two.)",
    options: [
      "User came from Instagram Web",
      "Ad misconfigured",
      "Wrong access token",
      "Template TTL expired"
    ],
    correctAnswers: ["User came from Instagram Web", "Ad misconfigured"],
    topics: ["CTWA Ads", "Webhooks"]
  },
  {
    id: 7,
    question: "What format is used for Cloud API webhook payloads?",
    options: ["XML", "JSON", "CSV", "YAML"],
    correctAnswers: ["JSON"],
    topics: ["Webhooks"]
  },
  {
    id: 8,
    question: "If a template is created with marketing content but marked as UTILITY, what is the likely result?",
    options: [
      "Approved with warning",
      "Approved but recategorized",
      "Rejected for category mismatch",
      "Silently accepted"
    ],
    correctAnswers: ["Rejected for category mismatch"],
    topics: ["Message Templates"]
  },
  {
    id: 9,
    question: "How many business-initiated messages can an unverified business send daily?",
    options: ["100", "250", "1000", "Unlimited"],
    correctAnswers: ["250"],
    topics: ["Phone Number & WABA Management"]
  },
  {
    id: 10,
    question: "A client sent an authentication template with Time-to-Live of 2 minutes to a user at time T. At the time, the user is unfortunately not in internet range. At T+3 minutes, the user finally comes back online. Which two of the following describe the outcome?",
    options: [
      "A message sent webhook is received",
      "Webhook returns 131026",
      "Message is dropped without a failure webhook",
      "A message delivered webhook is received"
    ],
    correctAnswers: ["A message sent webhook is received", "Message is dropped without a failure webhook"],
    topics: ["Message Quality & Delivery"]
  },
  {
    id: 11,
    question: "Which of the following APIs is used to get analytics data for a WhatsApp Business account?",
    options: ["Graph API", "Insights API", "Conversation Analytics API", "WhatsApp Events API"],
    correctAnswers: ["Graph API"],
    topics: ["Message Quality & Delivery"]
  },
  {
    id: 12,
    question: "What step is required to authenticate your phone number during embedded signup?",
    options: ["QR scan", "Meta review", "Voice or SMS verification", "OAuth login"],
    correctAnswers: ["Voice or SMS verification"],
    topics: ["Embedded Signup"]
  },
  {
    id: 13,
    question: "After embedded signup, what parameter appears in the response body?",
    options: ["URL", "Code", "Business ID", "Access Token"],
    correctAnswers: ["Code"],
    topics: ["Embedded Signup"]
  },
  {
    id: 14,
    question: "What status can be returned by the template status webhook?",
    options: ["Approved", "Processing", "Queued", "Running"],
    correctAnswers: ["Approved"],
    topics: ["Webhooks", "Message Templates"]
  },
  {
    id: 15,
    question: "What is the initial phone number registration limit per WABA?",
    options: ["2", "5", "10", "20"],
    correctAnswers: ["2"],
    topics: ["Phone Number & WABA Management"]
  },
  {
    id: 16,
    question: "Which field in the webhook payload identifies the template’s approval status?",
    options: ["quality_status", "template_status", "message_status", "review_status"],
    correctAnswers: ["template_status"],
    topics: ["Webhooks", "Message Templates"]
  },
  {
    id: 17,
    question: "Which button type copies a code to the user’s clipboard?",
    options: ["Quick Reply", "Copy Code", "One-Tap", "Coupon"],
    correctAnswers: ["Copy Code"],
    topics: ["Message Templates"]
  },
  {
    id: 18,
    question: "Which metric is used most to assess template quality?",
    options: ["Delivery rate", "Bounce rate", "Read rate", "Error count"],
    correctAnswers: ["Read rate"],
    topics: ["Message Templates"]
  },
  {
    id: 19,
    question: "What permission is required to manage WABA templates via API?",
    options: ["business_management", "whatsapp_business_management", "template_editor", "meta_editor"],
    correctAnswers: ["whatsapp_business_management"],
    topics: ["Phone Number & WABA Management"]
  },
  {
    id: 20,
    question: "Which of the following are valid reasons a template is rejected? (Choose two)",
    options: ["Includes emojis in body", "Missing required parameters", "Violates WhatsApp Policy", "Button text is under 10 chars"],
    correctAnswers: ["Missing required parameters", "Violates WhatsApp Policy"],
    topics: ["Message Templates"]
  },
  {
    id: 21,
    question: "A client's WhatsApp Business phone number is configured to send high throughput of messages (1000 messages per second). The client is planning for a marketing campaign during the holidays and is expecting a 40% response rate from its target user base. How many webhooks should the partner's server be equippide to process in this scenario?",
    options: ["3300", "3400", "400", "4400"],
    correctAnswers: ["3400"],
    topics: ["Message Quality & Delivery", "Webhooks"]
  },
  {
    id: 22,
    question: "What two features enable forms inside WhatsApp for appointment booking? (Choose two.)",
    options: ["Click to WhatsApp Ads", "WhatsApp Flows", "Conversions API", "Conversation Analytics API"],
    correctAnswers: ["Click to WhatsApp Ads", "WhatsApp Flows"],
    topics: ["Flows", "CTWA Ads"]
  },
  {
    id: 23,
    question: "A partner has configured a webhook server and has also subscribed the webhook to the WhatsApp Business Account of the client. The webhook has been subscribed to the 'messages and message_template_status_update' fields. What two event notification types does the webhook server receive? (Choose two)",
    options: [
     "When the business receives messages",
     "When a user deletes a message",
     "When a template's status changes to approved",
     "When a template's quality rating is changed",
    ],
    correctAnswers: ["When the business receives messages","When a template's status changes to approved"],
    topics: ["Webhooks"]
  },
  {
    id: 24,
    question: "As part of WhatsApp Business Platform integration, which two of the following are best practices for creating your webhook server?",
    options: [
     "Always send 200 OK and do any processing logic asynchronously",
     "Log any incoming webhooks for auditability",
     "Start developing after app review has passed",
     "Ensure the required processing is done before sending a 200 OK."
    ],
    correctAnswers: ["Always send 200 OK and do any processing logic asynchronously", "Log any incoming webhooks for auditability"],
    topics: ["Webhooks"]
  },
  {
    id: 25,
    question: "A coffee shop only sells iced and hot latte with 3 variants of milk: regular milk, low fat milk, and oat milk. They would like to use the WhatsApp Catalog to show all possible combinations and variations of the latte. How would the partner help to configure this?",
    options: [
     "1 item (latte) with 2 sets of variants",
     "3 items (latte with regular milk, low fat milk, and oat milk), each with 1 variant (hot or iced)",
     "2 items (hot and iced latter), each with 1 variant of milk",
     "6 items for each variation"
    ],
    correctAnswers: ["6 items for each variation"],
    topics: ["CTWA Ads"] 
  },
  {
    id: 26,
    question: "A medical clinic wants to generate awarensess on Facebook of their new way to book appointments using WhatsApp. This new method enables the users to book appointments withing a WhatsApp conversation. The necessary information to be collected are the patient's name, phone number and appointment time for the booking in a user friendly way through form that pop-up in the WhatsApp conversation. With which two features can a partner integrate in order to achieve this? (Choose two.)",
    options: [
     "Click to Whatsapp Ads",
     "WhatsApp Flows",
     "Conversions API",
     "ConversationAnalytics API"
    ],
    correctAnswers: ["Click to Whatsapp Ads","WhatsApp Flows"],
    topics: ["Flows", "CTWA Ads"]
  },
  {
    id: 27,
    question: "A bank would like to use WhatsApp to have an automated account opening experience and comes to a partner for their bot capability. The data required to open accounts include [Name, Address, Passport number, Salary range]. Howeever, the security team comes back with data sharing issue taht they are not comfortable sharing these sensitive data of the customer to the partner company. What is the bes path forward for the partner?",
    options: [
      "Ask these information using WhatsApp Flows and configure data channel to the bank's endpoint",
      "Send users a registration link on the bak's website since it is hosted by the bank",
      "Undergo ISO & SOC certification for the partner platform to boost confidence",
      "Advise that this is not possible since webhooks are configured to the partner's endpoint in Cloud API"
    ],
    correctAnswers: ["Ask these information using WhatsApp Flows and configure data channel to the bank's endpoint"],
    topics: ["Flows"]
  },
  {
    id: 28,
    question: "What are potential consequences of a low-quality template rating?",
    options: [
      "Reduced delivery rate",
      "Message sending paused",
      "Permanent WABA suspension",
      "Loss of business verification"
    ],
    correctAnswers: ["Reduced delivery rate", "Message sending paused"],
    topics: ["Message Templates"]
  },
  {
    id: 29,
    question: "Which quality rating tiers does WhatsApp assign to template performance?",
    options: ["Excellent, Good, Fair", "High, Medium, Low", "Gold, Silver, Bronze", "Safe, Warning, Critical"],
    correctAnswers: ["High, Medium, Low"],
    topics: ["Message Templates"]
  },
  {
    id: 30,
    question: "What does error 131047 mean in WhatsApp webhook logs?",
    options: [
      "TTL expired before delivery",
      "Message failed due to policy violation",
      "Recipient blocked the business",
      "Too many messages queued"
    ],
    correctAnswers: ["Recipient blocked the business"],
    topics: ["Message Quality & Delivery"]
  },
  {
    id: 31,
    question: "Which of the following are acceptable opt-in channels? (Choose two)",
    options: [
      "SMS reply with opt-in",
      "User agrees via website form",
      "Cold call via WhatsApp",
      "Auto-enroll existing CRM users"
    ],
    correctAnswers: ["SMS reply with opt-in", "User agrees via website form"],
    topics: ["Opt-in & User Consent"]
  },
  {
    id: 32,
    question: "Which practice ensures compliance with WhatsApp user protection policies?",
    options: [
      "Avoid sending broadcast messages without opt-in",
      "Store user messages indefinitely",
      "Forward PII to CRM partners",
      "Use template marketing only during work hours"
    ],
    correctAnswers: ["Avoid sending broadcast messages without opt-in"],
    topics: ["Opt-in & User Consent"]
  },
  {
    id: 33,
    question: "Which statement best describes the difference between Cloud API and On-Premise API hosting?",
    options: [
      "Cloud API requires private servers for hosting",
      "On-Premise API is managed entirely by Meta",
      "Cloud API is hosted by Meta, On-Premise API is self-hosted",
      "There is no difference in hosting requirements"
    ],
    correctAnswers: ["Cloud API is hosted by Meta, On-Premise API is self-hosted"],
    topics: ["Cloud vs On-Prem Hosting"]
  },
  {
    id: 34,
    question: "What does Meta require before a Display Name becomes visible on WhatsApp?",
    options: [
      "Verified Business Status and approved display name",
      "Embedded signup completion only",
      "Only WABA creation",
      "Display name review is optional"
    ],
    correctAnswers: ["Verified Business Status and approved display name"],
    topics: ["Phone Number & WABA Management"]
  },
  {
    id: 35,
    question: "Which of the following is NOT a valid reason for WhatsApp Business Account template rejection?",
    options: [
      "Message personalization",
      "Policy violation",
      "Mismatched category",
      "Low engagement"
    ],
    correctAnswers: ["Low engagement"],
    topics: ["Message Templates"]
  },
  {
    id: 36,
    question: "Which of the following is a tool for monitoring delivery and error status of WhatsApp messages?",
    options: [
      "Template Manager UI",
      "Business Manager Roles",
      "Webhook delivery logs",
      "Access Token Generator"
    ],
    correctAnswers: ["Webhook delivery logs"],
    topics: ["Webhooks"]
  },
  {
    id: 37,
    question: "When using WhatsApp Business Platform for e-commerce, which setup allows sending product listings via messages?",
    options: [
      "Template with media placeholder",
      "Interactive message with product catalog",
      "Session message with coupon",
      "Business Profile update"
    ],
    correctAnswers: ["Interactive message with product catalog"],
    topics: ["Flows"]
  },
  {
    id: 38,
    question: "Which user action most directly provides valid opt-in for WhatsApp communication?",
    options: [
      "Reading a business message",
      "Tapping a 'Send Message' CTA on website",
      "Clicking on a Facebook post",
      "Following a brand on Instagram"
    ],
    correctAnswers: ["Tapping a 'Send Message' CTA on website"],
    topics: ["Opt-in & User Consent"]
  },
  {
    id: 39,
    question: "A business owner receives a high colume of customer inquiries, but they also want to connect personally with customers for other types of less common personal requests. What would you recommend?",
    options: [
      "Offer a mix of agent and chatbot support",
      "Offer agent only support",
      "Offer automated chatbot support"
    ],
    correctAnswers: ["Offer a mix of agent and chatbot support"],
    topics: ["Flows"]
  },
  {
    id: 40,
    question: "If you work for an organization that already uses Meta Business Suite but you don't have access, what should you do?",
    options: [
      "Get someone with admin acess invite you to join",
      "Create an additional account on Meta Business Suite",
      "Ask someone with admin access for the password"
    ],
    correctAnswers: ["Get someone with admin acess invite you to join"],
    topics: ["Meta Business Suite"]
  },
  {
    id: 41,
    question: "A client owns their own campaigns and billing for their account. In Meta Business Suite, how should you gain access to their assets?",
    options: [
      "Add their ad account",
      "Request access to their ad account",
      "Create a new ad account for them"
    ],
    correctAnswers: ["Request access to their ad account"],
    topics: ["Meta Business Suite"]
  },
  {
    id: 42,
    question: "What is the correct order of steps when setting up an app?",
    options: [
      "Create a developer account, add apps to your business portafolio and then configure an app",
      "Add apps to your business portofolio, create a developer account and then configure an app",
      "Create a developer account, configure an app and then add apps to your business portafolio"
    ], 
    correctAnswers: ["Create a developer account, configure an app and then add apps to your business portafolio"],
    topics: ["Meta Business Suite"]
  },
  {
    id: 43,
    question: "What is the main benefit of migrating a phone number during embedded signup compared to programmatic migration?",
    options: [
      "It can use custom API calls",
      "It can only be initiated by the partner, not the customer",
      "It involves manual generation of all required assets",
      "It automatically grants ownership of all necessary"
    ],
    correctAnswers: ["It automatically grants ownership of all necessary"],
    topics: ["Embedded Signup"]
  },
  {
    id: 44,
    question: "What is the primary function of webhooks in the context of the WhatsApp Business Platform?",
    options: [
      "To automatically respond to incoming messages",
      "To send HTTP notifications when specific events occur", 
      "To encrypt messages sent via WhatsApp",
      "To store messages for data analysis"
    ],
    correctAnswers: ["To send HTTP notifications when specific events occur"],
    topics: ["Webhooks"]
  },
  {
    id: 45,
    question: "Which webhook events are available for the WhatsApp Business Platform? (Choose two.)",
    options: [
      "Only incoming message status webhooks",
      "Only outgoing message status webhooks: sent, delivered, read", 
      "Both incoming message and outgoing message status webhooks",
      "Account update webhooks"
    ],
    correctAnswers: ["Both incoming message and outgoing message status webhooks","Account update webhooks"],
    topics: ["Webhooks"]
  },
  {
    id: 46,
    question: "You're a partner who has signed up for the WhatsApp Business API through the embedded signup flow. Your want to set up payments for your client's WhatsApp business account. Which of the following steps do you need to take first?",
    options: [
      "Retrieve the credit line ID for your business",
      "Attach your credit line to the client's WhatsApp business account",
      "Verify that your credit line was shared with the client's business",
      "Revoke the credit sharing record"
    ],
    correctAnswers: ["Retrieve the credit line ID for your business"],
    topics: ["Payments"]
  },
  {
    id: 47,
    question: "What is the purpose of the whatsapp_business_management permission in the business management API?",
    options: [
      "To set up the session logging option for your embedded signup script", 
      "To subscribe to the needed webhooks at an app level", 
      "To do everything related to the WhatsApp Business Account"
    ],
    correctAnswers: ["To do everything related to the WhatsApp Business Account"],
    topics: ["Embedded Signup"]
  },
  {
    id: 48,
    question: "When is your app ready to submit for review?",
    options: [
      "As soon as you start building your app", 
      "After you request only the permissions you need", 
      "Once you have pictures of your app UI",
      "Before you do business verification"
    ],
    correctAnswers: ["After you request only the permissions you need"],
    topics: ["Meta Business Suite"]
  }
];

export const questions: Question[] = shuffle(baseQuestions).slice(0, 20);

function shuffle(array: Question[]): Question[] {
  return [...array].sort(() => Math.random() - 0.5);
}

// Shuffle options for a single question
export function shuffleQuestionOptions(question: Question): Question {
  const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
  return {
    ...question,
    options: shuffledOptions
  };
}

// Shuffle options for all questions
export function getQuestionsWithShuffledOptions(): Question[] {
  return questions.map(q => shuffleQuestionOptions(q));
}

// Simple scoring function
type AnswerSubmission = { [questionId: number]: string[] };

export function calculateScore(submission: AnswerSubmission): number {
  let score = 0;
  questions.forEach(q => {
    const submitted = submission[q.id] || [];
    const correct = q.correctAnswers;
    const isCorrect =
      submitted.length === correct.length &&
      submitted.every(ans => correct.includes(ans));
    if (isCorrect) score++;
  });
  return score;
}

export function getTotalScore(): number {
  return questions.length;
}

export function getTopicsSummary(): { topic: string; count: number }[] {
  const topicsMap: { [topic: string]: number } = {};
  
  questions.forEach(q => {
    q.topics.forEach(topic => {
      topicsMap[topic] = (topicsMap[topic] || 0) + 1;
    });
  });
  
  return Object.entries(topicsMap)
    .map(([topic, count]) => ({ topic, count }))
    .sort((a, b) => b.count - a.count);
}
