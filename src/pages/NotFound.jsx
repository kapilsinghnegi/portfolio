import { LuArrowLeft } from "react-icons/lu";
import ThemeToggle from "../components/ThemeToggle";

const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <h1 className="text-5xl sm:text-6xl font-bold text-foreground">404</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-muted mt-2 transition-colors duration-300">
        Page Not Found
      </h2>
      <p className="text-muted-foreground text-sm sm:text-base mt-2 transition-colors duration-300">
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="mt-6 px-2 py-1 text-sm sm:text-base sm:px-4 sm:py-2 bg-blue-500 text-primary-foreground rounded hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2 "
      >
        <LuArrowLeft /> Go to Home
      </a>
    </div>
  );
};

export default NotFound;
