import companyLogo from "@/../public/assets/icons/companyLogo.png";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <div>
        <Image src={companyLogo} className="logoCompanyImage" />
      </div>
    </main>
  );
}
