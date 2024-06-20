import Link from "next/link";

export default function ButtonAddExperiment() {
  return(
    <Link
    href="/dashboard"
    className="py-2 px-3 flex rounded-xl bg-blue-400 hover:bg-blue-800 md:text-xl sm:text-sm justify-center items-center"
  >
    Add Experiment
  </Link>
  )
}