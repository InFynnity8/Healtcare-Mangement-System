import PatientForm from "@/components/foms/PatientForm";
import PassKeyModal from "@/components/PassKeyModal";
import Image from "next/image";
import Link from "next/link";


export default function Home( {searchParams}: SearchParamProps ) {

  const isAmin = searchParams.admin === 'true';

  return (
    <div className="flex h-screen max-h-screen">
      {isAmin && <PassKeyModal/>}
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-6 h-10 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular mt-10 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePulse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        width={1000}
        height={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
