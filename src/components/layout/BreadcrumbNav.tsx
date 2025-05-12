
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbNavProps {
  title?: string;
  customPaths?: Array<{
    name: string;
    path: string;
    isCurrentPage?: boolean;
  }>;
}

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ title, customPaths }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  // Define page titles for different paths
  const pathTitles: Record<string, string> = {
    "about": "About Us",
    "contact": "Contact",
    "csr": "Corporate Social Responsibility",
    "partner": "Partner With Us",
    "careers": "Careers",
    "our-team": "Our Team",
    "faq": "Frequently Asked Questions",
  };

  // Generate structured data for breadcrumbs
  const generateBreadcrumbStructuredData = () => {
    const itemListElement = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://yugrowpharmacy.com"
      }
    ];

    let currentPath = '';
    
    if (customPaths) {
      customPaths.forEach((path, index) => {
        if (!path.isCurrentPage) {
          itemListElement.push({
            "@type": "ListItem",
            "position": index + 2,
            "name": path.name,
            "item": `https://yugrowpharmacy.com${path.path}`
          });
        } else {
          itemListElement.push({
            "@type": "ListItem",
            "position": index + 2,
            "name": path.name
          });
        }
      });
    } else {
      pathnames.forEach((name, index) => {
        currentPath += `/${name}`;
        
        const isLast = index === pathnames.length - 1;
        const pageTitle = pathTitles[name] || name.charAt(0).toUpperCase() + name.slice(1);
        
        if (isLast) {
          itemListElement.push({
            "@type": "ListItem",
            "position": index + 2,
            "name": title || pageTitle
          });
        } else {
          itemListElement.push({
            "@type": "ListItem",
            "position": index + 2,
            "name": pageTitle,
            "item": `https://yugrowpharmacy.com${currentPath}`
          });
        }
      });
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement
    };
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbStructuredData())}
        </script>
      </Helmet>
      
      <div className="container mx-auto px-4 py-3 md:py-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-[#FF7E3D] flex items-center">
                  <Home className="h-4 w-4 mr-1" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            <BreadcrumbSeparator />

            {customPaths ? (
              // Render custom paths
              customPaths.map((path, index) => (
                <React.Fragment key={path.path}>
                  <BreadcrumbItem>
                    {path.isCurrentPage ? (
                      <BreadcrumbPage className="text-gray-900 dark:text-white font-medium">
                        {path.name}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link to={path.path} className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-[#FF7E3D]">
                          {path.name}
                        </Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  
                  {index < customPaths.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))
            ) : (
              // Auto-generate from URL
              pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const pageTitle = pathTitles[name] || name.charAt(0).toUpperCase() + name.slice(1);
                const isLast = index === pathnames.length - 1;
                
                return (
                  <React.Fragment key={name}>
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage className="text-gray-900 dark:text-white font-medium">
                          {title || pageTitle}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link to={routeTo} className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-[#FF7E3D]">
                            {pageTitle}
                          </Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    
                    {!isLast && <BreadcrumbSeparator />}
                  </React.Fragment>
                );
              })
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </>
  );
};

export default BreadcrumbNav;
