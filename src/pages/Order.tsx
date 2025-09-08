import ProductTitle from "@/components/ProductTitle";
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

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email("Please enter a valid email address."),
  street: z.string().min(2, {
    message: "Street must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  region: z.string().min(2, {
    message: "Region must be at least 2 characters.",
  }),
  postalCode: z
    .string()
    .min(4, { message: "Postal code must be at least 4 digits." })
    .regex(/^\d+$/, { message: "Postal code must be numbers only." }),
  phone: z
    .string()
    .length(10, { message: "Phone number must be exactly 10 digits." })
    .regex(/^\d+$/, { message: "Phone number must contain only digits." }),
});

const Order = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city: "",
      region: "",
      postalCode: undefined,
      phone: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="max-w-[1440px] mx-auto px-24 *:py-12 mdd:px-6 font-body min-h-screen relative">
      <div className="flex justify-between items-center gap-6 ssm:flex-wrap">
        <div className="flex flex-col gap-6">
          <ProductTitle title="Delivery Information" />
          <div className="mt-12 ssm:mt-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="first name" {...field} className="ssm:text-sm"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Last Name */}
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="last name" {...field} className="ssm:text-sm"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email (full width) */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Email address"
                            className="ssm:text-sm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Street full width */}
                  <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormControl>
                          <Input type="text" placeholder="Street" {...field} className="ssm:text-sm"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* City and region */}
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="text" placeholder="City" {...field} className="ssm:text-sm"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="region"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="text" placeholder="Region" {...field} className="ssm:text-sm"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Phone and postal code */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="tel" placeholder="Phone" {...field} className="ssm:text-sm"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="postalCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Postal Code" {...field} className="ssm:text-sm"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="mt-6 w-full md:w-auto">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-6 px-6">
          <div className="flex items-center gap-4">
            <h1>
              CART <span className="font-bold">TOTALS</span>
            </h1>
            <div className="bg-[#252525] w-[50.81px] h-[2px]"></div>
          </div>
          <div className="flex justify-between items-center pb-2 border-b">
            <h1>Subtotal</h1>
            <p>$60.00</p>
          </div>
          <div className="flex justify-between items-center pb-2 border-b">
            <h1>Shipping Free</h1>
            <p>$10.00</p>
          </div>
          <Button className="bg-black text-white rounded-full px-8 py-3 hover:bg-orange-600 transition-all w-[262px]">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Order;
