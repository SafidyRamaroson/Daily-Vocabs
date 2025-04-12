import { Logo } from "@/components/atoms";
import Link from "next/link";


function Brand(){
    return(
    <Link href="/" aria-label="VestiGo" title="VestiGo" className="inline-flex items-center">
      <Logo />
      <span className="ml-2 text-xl font-bold tracking-wide text-green-500 uppercase">
        Daily Vocabs
      </span>
    </Link>
    )
}

export {  Brand }