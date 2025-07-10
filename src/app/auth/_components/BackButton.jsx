import Link from "next/link";
import BackIcon from "../../../../public/icons/BackIcon";

export default function BackButton() {
  return (
    <Link href="/" className="absolute top-10 left-5 lg:left-10">
      <BackIcon></BackIcon>
    </Link>
  );
}
