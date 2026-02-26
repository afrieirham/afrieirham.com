interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return <div className="max-w-md mx-auto py-8 sm:py-16 px-6">{children}</div>;
}
