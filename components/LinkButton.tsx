import Link from "next/link";

const LinkButton = ({ path, label }: { path: string; label: string }) => {
  return (
    <div className="flex justify-center pb-10">
      <Link href={path} type="primary" className="border p-1.5 rounded">
        {label}
      </Link>
    </div>
  );
};

export default LinkButton;
