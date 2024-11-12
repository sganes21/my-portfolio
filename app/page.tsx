import Image from "next/image";
import { socialLinks } from "./config";


export default function Page() {
  return (
    <section>
      <a>
      <div className="profile-photo-container">
        <Image
          src="/photos/santosh.jpg"
          alt="Profile photo"
          className="rounded-full block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 "
          unoptimized
          width={350}
          height={350}
          priority
        />
        </div>
      </a>
      

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        About
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
       <p> Hello! I am a technical lead with over 15 experience in medical device development, biology, software/systems engineering, and cybersecurity.  </p>
       <p> I am passionate about tackling complex problems in the healthcare domain, and guiding teams to building great products that assist people to lead happy and fulfilling lives.  </p>
       <p> Closer to home, my interests include playing music, exercising, and being silly. </p>
      </div>
    </section>
  );
}
