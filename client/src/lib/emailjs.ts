// EmailJS Configuration
// Note: In production, these should be environment variables

export const EMAILJS_SERVICE_ID = 'service_academix';
export const EMAILJS_TEMPLATE_ID = 'template_academix';
export const EMAILJS_PUBLIC_KEY = 'your_public_key_here';

export interface EmailParams {
  to_email: string;
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (params: EmailParams): Promise<boolean> => {
  try {
    // For now, we'll use a simple fetch-based approach
    // In production, you would use EmailJS SDK
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          to_email: params.to_email,
          from_name: params.from_name,
          from_email: params.from_email,
          subject: params.subject,
          message: params.message,
        },
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
};
