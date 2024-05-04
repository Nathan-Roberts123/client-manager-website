import Link from "next/link";
import { Button } from "../../components/ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold tracking-tight">Client Master</h2>
      <div className="flex gap-2">
        <Button className="rounded-md">
          <Link href={`${process.env.WEBAPP_LINK}`}>Get Started</Link>
        </Button>
        <Button variant="secondary" className="rounded-md">
          <Link href={`${process.env.GITHUB_WEBAPP_LINK}`}>GitHub</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
