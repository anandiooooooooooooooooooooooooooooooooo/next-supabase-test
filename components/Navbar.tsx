"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Navbar = () => {
  const pathname = usePathname();
  const isAuthPage =
    pathname === "/auth/login" || pathname === "/auth/register";

  return (
    <div className="fixed top-0 left-0 w-full bg-[#FAF8F4] shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href={"/"}>
          <span className="text-xl font-bold">Jamim</span>
        </Link>

        <div className="flex items-center gap-4">
          {!isAuthPage && (
            <>
              <Button variant="link">Menu 1</Button>
              <Button variant="link">Menu 2</Button>
              <Button variant="link">Menu 3</Button>
            </>
          )}

          <Link href="/auth/login">
            <Button className="bg-black text-white px-4 rounded-2xl hover:bg-opacity-70">
              <b>Login</b>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
