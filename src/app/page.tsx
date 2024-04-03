import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "./components/ui/button";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <section className="py-20 mx-auto text-center flex-col flex items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your Market Place for high-quality
          <span className="text-blue-600"> digital assests.</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to Z-Store. Every assests from our plateform is verified by
          our team to ensure our higest quality standard
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href={"/products"} className={buttonVariants()}>
            Browse Trending{" "}
          </Link>
          <Button variant={"ghost"}>Our Quality Promise &rarr;</Button>
        </div>
      </section>
      {/* Todo:List Product here  */}
    </MaxWidthWrapper>
  );
}
