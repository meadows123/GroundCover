// EmailJS Configuration
// Replace these with your actual EmailJS credentials from your dashboard

export const emailjsConfig = {
  serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID (e.g., 'service_abc123')
  templateId: 'YOUR_TEMPLATE_ID', // Replace with your contact form template ID (e.g., 'template_xyz789')
  surveyTemplateId: 'template_survey', // This will be your survey template ID
  publicKey: 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key (e.g., 'abcdef123456')
};

// To get these credentials and set up survey emails:
// 1. Go to https://www.emailjs.com/
// 2. Sign up and verify your email
// 3. Add Gmail service (connect groundcovergardencare@gmail.com)
// 4. Create two email templates:
//    a) Contact form template (existing)
//    b) Survey template (new - see template below)
// 5. Get public key from Account → General

/* 
SURVEY EMAIL TEMPLATE (Create this in EmailJS as 'template_survey'):
Copy and paste this template in EmailJS dashboard:

Subject: New Customer Survey - {{customer_name}} ({{overall_rating}})

---
🌟 NEW CUSTOMER SURVEY SUBMISSION 🌟

📋 CUSTOMER DETAILS:
• Name: {{customer_name}}
• Email: {{customer_email}}
• Phone: {{customer_phone}}
• Location: {{customer_location}}
• Project Type: {{project_type}}
• Submission Date: {{submission_date}}

⭐ RATINGS SUMMARY:
{{rating_summary}}

📊 DETAILED RATINGS:
• Overall Experience: {{overall_rating}}
• Service Quality: {{service_rating}}
• Work Quality: {{quality_rating}}
• Communication: {{communication_rating}}
• Value for Money: {{value_rating}}

💬 CUSTOMER FEEDBACK:

📝 Detailed Review:
{{detailed_review}}

👍 What They Liked Best:
{{best_aspects}}

🔧 Suggestions for Improvement:
{{improvements}}

🤝 Would Recommend: {{would_recommend}}
⏰ Project Completion: {{project_completion}}

---
This survey was submitted via the GroundCover website.
Reply to {{customer_email}} to follow up with this customer.
*/