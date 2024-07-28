import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative h-screen w-full">
      <div className="absolute size-full">
        <Image src="image wtw" alt="background" fill className="size-full" />
      </div>
      {children}
    </main>
  );
}