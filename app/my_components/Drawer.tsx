import * as React from "react";
import Link from "next/link";
import { Logs } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { LogIn } from "lucide-react";
import { auth } from "@/auth";
import Logout from "./Logout";

export async function DrawerDemo() {
  const session = await auth();

  return (
    <Drawer>
      <DrawerTrigger>
        <Logs />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="font-sans text-2xl">IIT KIRBA</DrawerTitle>
            <DrawerDescription>
              Lets get rid from the google drive link
            </DrawerDescription>
          </DrawerHeader>
        </div>
        <div className="flex flex-col items-center gap-2 font-sans text-[14px] text-nav-text px-16 mt-8 ">
          <Link
            className="bg-secondary py-2 w-full flex justify-center rounded-md"
            href="/"
          >
            Home
          </Link>
          <Link
            className="bg-secondary py-2 w-full flex justify-center rounded-md"
            href="/profile"
          >
            Your Profile
          </Link>
          <Link
            className="bg-secondary py-2 w-full flex justify-center rounded-md"
            href="/pyqs"
          >
            Pyqs
          </Link>
          <Link
            className="bg-secondary py-2 w-full flex justify-center rounded-md"
            href="/notes"
          >
            Notes
          </Link>
          <Link
            className="bg-secondary py-2 w-full flex justify-center rounded-md"
            href="/analytics"
          >
            Analytics
          </Link>
        </div>
        <DrawerFooter className="w-full flex justify-center items-center  mt-5">
          <DrawerClose
            asChild
            className="flex justify-center hover:text-destructive"
          >
            {session?.user ? (
              <Logout />
            ) : (
              <Link className="flex gap-2" href="/sign-in">
                Sign in <LogIn />
              </Link>
            )}
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
