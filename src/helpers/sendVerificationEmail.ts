import { resend } from '@/lib/resend';
import VerificationEmail from '../../emails/VerificationEmail';

export async function sendVerificationEmail(
  name: string,
  email: string,
  phone: string
) {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'baspl202477@gmail.com',
      subject: 'Contact Details',
      react: VerificationEmail({ name, email, phone }),
    });

    return {
      success: true,
      message: 'Verification email sent successfully',
    };
  } catch (emailError) {
    console.error('Error sending verification email', emailError);

    return {
      success: false,
      message: 'Failed to send verification email',
    };
  }
}
