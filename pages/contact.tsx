import Layout from "@/components/Layout";
import MaskedPhoneInput from "@/components/MaskedPhoneInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PiSpinnerBall } from "react-icons/pi";

const schema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  phone: z
    .string()
    .regex(
      /^\(\d{3}\) \d{3}-\d{4}$/,
      "Invalid phone number format. Expected format: (000) 000-0000",
    )
    .optional()
    .or(z.literal("")),
  email: z.string().email(),
  message: z.string(),
});

type FormFields = z.infer<typeof schema>;

export default function Contact() {
  const notify = () =>
    toast.success("🥳 Your message has been sent!", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

  const {
    register,
    handleSubmit,
    // watch,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    notify();
    console.log(data);
    reset();
  };

  // watch input value by passing the name of it
  // console.log(watch("firstname"));
  // Object.keys(errors).length !== 0 && console.log(errors);

  return (
    <>
      <Layout>
        <main className="container mx-auto px-8">
          <div className="divider block w-full py-14"></div>
          <div className="md:flex md:justify-between">
            <div className="mb-12 w-full md:mb-0 md:w-1/2">
              <h1 className="mb-8 text-6xl md:mb-12">Contact</h1>
              <p className="mb-4 text-2xl md:mb-12">
                Hunter Marvel <br />
                <i>Photography</i>
              </p>
              <address>
                123 Wallingford Dr
                <br />
                Houston, TX 77042
                <br />
                Email: <a href="mailto:jim@example.com">info@mysite.com</a>
                <br />
                Phone:<a href="tel:+14155550132">+1 (123) 456-7890</a>
              </address>
            </div>
            <div className="w-full md:w-1/2">
              {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-2 gap-8"
              >
                <div className="col-span-2 md:col-span-1">
                  <label className="mb-2 inline-block" htmlFor="firstname">
                    First Name
                  </label>
                  <br />
                  <input
                    className="w-full border-2 border-b-2 border-black border-b-white bg-black p-4 outline-white hover:border-2 hover:border-white focus:border-2 focus:border-white"
                    type="text"
                    id="firstname"
                    placeholder="Your Name"
                    {...register("firstname")}
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="mb-2 inline-block" htmlFor="lastname">
                    Last Name
                  </label>
                  <br />
                  <input
                    className="w-full border-2 border-b-2 border-black border-b-white bg-black p-4 outline-white hover:border-2 hover:border-white focus:border-2 focus:border-white"
                    type="text"
                    id="lastname"
                    placeholder="Your Last Name"
                    {...register("lastname")}
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="mb-2 inline-block" htmlFor="email">
                    Email
                  </label>
                  <br />
                  <input
                    className={`w-full border-2 border-b-2 border-black border-b-white p-4 outline-white hover:border-2 hover:border-white focus:border-2 focus:border-white ${errors.email ? "bg-red-900" : "bg-black "} `}
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    {...register("email")}
                    required
                  />
                  {errors.email && (
                    <p className="mt-4 text-red-500" role="alert">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="mb-2 inline-block" htmlFor="phone">
                    Phone
                  </label>
                  <br />
                  <MaskedPhoneInput
                    name="phone"
                    control={control}
                    classes={`w-full border-2 border-b-2 border-black border-b-white p-4 outline-white hover:border-2 hover:border-white focus:border-2 focus:border-white ${errors.phone ? "bg-red-900" : "bg-black "}`}
                  />
                  {errors.phone && (
                    <path className="mt-4 text-red-500">
                      {errors.phone?.message}
                    </path>
                  )}
                </div>
                {/* <div>
                  <label className="mb-2 inline-block" htmlFor="phone">
                    Phone
                  </label>
                  <br />
                  <input
                    className="w-full border-2 border-b-2 border-black border-b-white bg-black p-4 outline-white hover:border-2 hover:border-white focus:border-2 focus:border-white"
                    type="tel"
                    id="phone"
                    placeholder="2223334444"
                    inputMode="numeric"
                    autoComplete="tel"
                    {...register("phone")}
                    maxLength={14}
                    onChange={(e) => {
                      maskPhone(e);
                    }}
                  />
                  {errors.phone && (
                    <p className="mt-4 text-red-500" role="alert">
                      {errors.phone?.message}
                    </p>
                  )}
                </div> */}
                <div className="col-span-2">
                  <label className="mb-2 inline-block " htmlFor="message">
                    Send us a message...
                  </label>
                  <br />
                  <textarea
                    className="max-h-60 min-h-40 w-full border-2 border-b-2 border-black border-b-white bg-black p-4 outline-white hover:border-2 hover:border-white focus:border-2 focus:border-white"
                    placeholder=""
                    id="message"
                    {...register("message")}
                  />
                </div>
                {/* <div>
                  <label className="mb-2 inline-block" htmlFor="lastname">Phone</label> <br />
                  <input className="text-black" type="text" id="lastname" {...register("lastname")} />
                </div> */}

                {/* include validation with required or other standard HTML validation rules */}
                {/* <input {...register("exampleRequired", { required: true })} /> */}
                {/* errors will return when field validation fails  */}
                {/* {errors.exampleRequired && <span>This field is required</span>} */}

                <button
                  type="submit"
                  className="col-start-2 cursor-pointer border border-white px-8 py-4 transition hover:bg-white hover:text-black"
                  disabled={isSubmitting ? true : false}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <PiSpinnerBall className="mr-2 inline-block animate-spin text-2xl" />{" "}
                      Submitting...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className="divider block w-full py-10"></div>
          <ToastContainer />
        </main>
      </Layout>
    </>
  );
}
