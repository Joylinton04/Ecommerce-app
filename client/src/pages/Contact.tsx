import { Phone, Send } from "lucide-react";
import location from "../assets/location.svg";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const formSchema = z.object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    subject: z
      .string()
      .min(3, { message: "Subject must be at least 3 characters." }),
    phone: z
      .string()
      .regex(/^\+?\d{10,15}$/, { message: "Invalid phone number." }),
    message: z
      .string()
      .min(10, { message: "Message must be at least 10 characters." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    },
  });

  function handleSubmit(data: z.infer<typeof formSchema>) {
    console.log("Form Data:", data);
  }

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-14 py-12">
      {/* section 1 */}
      <div className="mt-20 flex justify-center items-center font-body">
        <div className="xl:max-w-[1124px] flex gap-[2rem] ssm:flex-wrap ssm:flex-col-reverse">
          {/* contact info */}
          <div className="w-[45%] p-10 flex flex-col gap-6 ssm:w-full bg-black text-white rounded-2xl shadow-lg">
            {/* Heading */}
            <div className="text-[28px] font-bold font-Heading tracking-wide">
              Contact Information
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Bring the table win-win survival strategies and ensure proactive
              domination. At the end of the day, connect with us through
              multiple touchpoints in real time.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="flex gap-3 items-center">
                <div className="h-12 w-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <img
                    src={location}
                    alt="location"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <p className="text-gray-300 text-[15px]">
                  Kumasi, Ashanti Region
                </p>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-center">
                <div className="h-12 w-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <Send className="text-white" size={18} />
                </div>
                <p className="text-gray-300 text-[15px]">adujoy05@gmail.com</p>
              </div>

              {/* Phone */}
              <div className="flex gap-3 items-center">
                <div className="h-12 w-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={18} />
                </div>
                <p className="text-gray-300 text-[15px]">+233 54 357 6794</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-4">
              {[
                { icon: <Instagram size={18} />, label: "Instagram" },
                { icon: <Facebook size={18} />, label: "Facebook" },
                { icon: <Twitter size={18} />, label: "Twitter" },
                { icon: <LinkedIn size={18} />, label: "LinkedIn" },
              ].map((social, i) => (
                <div
                  key={i}
                  className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center 
                   text-black hover:bg-gray-200 hover:scale-110 transition-all cursor-pointer"
                  title={social.label}
                >
                  {social.icon}
                </div>
              ))}
            </div>
          </div>

          <div className="w-[50%] flex flex-col gap-4 ssm:w-full">
            <div className="w-max border-y-2 border-highl uppercase px-1 py-[0.1rem] text-xs">
              contact
            </div>
            <div className="text-[24px] font-bold font-Heading">
              Have a Question?
            </div>
            <Form {...form}>
              <form
                className="space-y-8"
                onSubmit={form.handleSubmit(handleSubmit)}
              >
                <div className="flex gap-4 flex-wrap">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-4 basis-[48%] mdd:basis-full">
                        <FormControl>
                          <Input
                            placeholder="Name"
                            {...field}
                            className="outline-none rounded-none border-black h-[50px] w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-4 basis-[48%] mdd:basis-full">
                        <FormControl>
                          <Input
                            placeholder="Email"
                            {...field}
                            type="email w-full"
                            className="outline-none rounded-none border-black h-[50px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-4 basis-[48%] mdd:basis-full">
                        <FormControl>
                          <Input
                            placeholder="Subject"
                            {...field}
                            className="outline-none rounded-none border-black h-[50px] w-full"
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
                      <FormItem className="flex flex-col gap-4 basis-[48%] mdd:basis-full">
                        <FormControl>
                          <Input
                            placeholder="Phone"
                            {...field}
                            className="outline-none rounded-none border-black h-[50px] w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-4">
                        <FormControl>
                          <Textarea
                            placeholder="Message"
                            {...field}
                            className="outline-none rounded-none border-black h-[150px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
