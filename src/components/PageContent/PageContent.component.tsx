import React from 'react';

interface PageContentProps {
  children: React.ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default PageContent;
