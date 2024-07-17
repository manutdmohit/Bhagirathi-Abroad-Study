import { sendVerificationEmail } from '@/helpers/sendVerificationEmail';

export async function POST(request: Request) {
  try {
    const { name, email, phone } = await request.json();

    // send verification email
    const emailResponse = await sendVerificationEmail(name, email, phone);

    if (!emailResponse.success) {
      return new Response(
        JSON.stringify({ success: false, message: emailResponse.message }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Message sent successfully.',
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Error sending message', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Error sending message',
      }),
      { status: 500 }
    );
  }
}
