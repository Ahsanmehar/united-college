import { Link } from "react-router-dom";
import TechIcon from "./TechIcon";

const Breadcrumb = ({ pageName, description, detailPage, url }) => {
  return (
    <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-8/12 lg:w-7/12">
            <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
              <h1 className="mb-5 text-2xl font-semibold text-black sm:text-3xl">
                {detailPage ? detailPage : pageName}
              </h1>
              <p className="font-medium leading-relaxed text-text">
                {description}
              </p>
            </div>
          </div>
          <div className="w-full md:w-4/12 lg:w-5/12">
            <div className="text-end">
              <ul className="flex items-center md:justify-end">
                <li className="flex items-center">
                  <Link
                    to="/"
                    className="flex items-center gap-1 pr-1 font-medium text-text group"
                  >
                    <TechIcon
                      name="house"
                      className="w-5 h-5 text-text group-hover:text-secondary"
                    />
                    <span className="group-hover:text-secondary">
                      Home
                    </span>
                  </Link>

                  <span className="mx-2 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-text"></span>
                </li>
                <li className="flex items-center">
                  <Link
                    to={url}
                    className={`pr-1 font-medium ${
                      detailPage
                        ? "hover:text-secondary"
                        : "text-secondary"
                    }`}
                  >
                    {pageName}
                  </Link>
                  {detailPage && (
                    <span className="mx-2 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-text"></span>
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
    </section>
  );
};

export default Breadcrumb;
