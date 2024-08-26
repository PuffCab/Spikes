export default function CharactersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <footer>This is the footer ONLY for the the Characters Components</footer>
    </>
  );
}
