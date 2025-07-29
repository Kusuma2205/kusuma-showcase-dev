const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Kusuma
          </h3>
        </div>
        <p className="text-primary-foreground/80">
          &copy; 2025 Kusuma. All rights reserved.
        </p>
        <p className="text-primary-foreground/60 text-sm mt-2">
          Built with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;