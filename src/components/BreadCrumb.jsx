import { Link } from "react-router-dom";

const Breadcrumb = ({
  pageName,
  description,
  detailPage,
  url,
  showHeader = false,
  backgroundImage = null,
  overlay = true,
}) => {
  return (
    <section
      className="relative z-10 overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      {backgroundImage && overlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-secondary/50 z-0" />
      )}

      <div className="container relative z-10 h-full">
        <div className="flex flex-col h-[500px] justify-end pb-10">
          <div className="flex flex-wrap justify-between items-end w-full">
            {showHeader && (
              <div className="w-full lg:w-7/12">
                <div className="max-w-[600px]">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent drop-shadow-lg leading-tight">
                    {detailPage ? detailPage : pageName}
                  </h1>
                  <p className="text-base md:text-lg text-gray-200 max-w-[500px] leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            )}
            <div className={`w-full`}>
              <div >
                <ul
                  className={`flex items-center ${
                    showHeader ? "justify-end" : "justify-start"
                  } flex-wrap gap-2`}
                >
                  <li className="flex items-center">
                    <Link
                      to="/"
                      className="flex items-center gap-2 pr-2 font-medium text-white group hover:text-secondary transition-colors"
                    >
                     
                      <span>Home</span>
                    </Link>
                    <span className="mx-1 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-white"></span>
                  </li>
                  <li className="flex items-center">
                    <Link
                      to={url}
                      className={`pr-2 font-medium ${
                        detailPage
                          ? "text-white hover:text-secondary"
                          : "text-secondary"
                      } transition-colors`}
                    >
                      {pageName}
                    </Link>
                    {detailPage && (
                      <span className="mx-1 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-white"></span>
                    )}
                  </li>
                  {detailPage && (
                    <li className="text-base font-medium text-secondary whitespace-nowrap">
                      {detailPage}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
