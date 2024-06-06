import Link from "next/link";

export default function ButtonRegister() {
  return(
    <Link
    href="/getstarted"
    className="py-2 px-3 flex rounded-md bg-gray-200 hover:bg-gray-500 text-xl"
  >
    Register
  </Link>
  )
}
