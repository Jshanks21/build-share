type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({children, className= ""}: LayoutProps) => {
  return (
    <div className={`w-full h-auto inline-block z-0 bg-light dark:bg-dark p-8 sm:p-12 md:p-16 lg:p-32 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;