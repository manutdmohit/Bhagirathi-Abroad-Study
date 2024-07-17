'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(1, { message: 'Phone is required' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const router = useRouter();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof contactSchema>) => {
    console.log('Form submitted:', data);

    // Reset the form fields to their initial values
    form.reset();

    alert('Thank you for contacting us');

    router.push('/');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
      <div className="w-full h-64 md:h-auto ml-2 mr-2 md:ml-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14021.1575691107!2d81.1187379!3d28.5310201!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a20d55cc73966d%3A0x6792791c0a76fa59!2sBhagirathi%20Abroad%20Study!5e0!3m2!1sen!2snp!4v1721188238621!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>Fill the form to reach out to us</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              className="flex flex-col gap-4"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@doe.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Phone" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Send Message</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
