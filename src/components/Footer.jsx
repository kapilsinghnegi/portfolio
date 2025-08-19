export default function Footer() {
  return (
    <footer id="footer" className="relative bg-secondary/30 text-foreground py-4 z-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Kapil Singh Negi. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
