import { useState } from "react";
import items from "../../data/drapesData";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Link from "next/link";
import Image from "next/image";

const DrapesGallery = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems = filter === "*"
  ? items
  : items.filter((item) => item?.category?.includes(filter));


  return (
    <div className="portfolio-gallery-three pt-30">
      <div className="container">
        {/* <ul className="style-none text-center isotop-menu-wrapper g-control-nav-two">
          <li
            className={filter === "*" ? "is-checked" : ""}
            onClick={() => setFilter("*")}
          >
            All
          </li>
          <li
            className={filter === "blinds" ? "is-checked" : ""}
            onClick={() => setFilter("blinds")}
          >
            Blinds
          </li>
          <li
            className={filter === "shutter" ? "is-checked" : ""}
            onClick={() => setFilter("shutter")}
          >
            Shutter
          </li>
          <li
            className={filter === "curtains" ? "is-checked" : ""}
            onClick={() => setFilter("curtains")}
          >
            Curtains
          </li>
          
        </ul> */}
        <div className="row pt-90 lg-pt-50">
          <Gallery>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 ${item.category}`}
              >
                <div className="portfolio-block-four mb-50">
                  <div className="img-meta position-relative">
                    <Image
                      width={410}
                      height={340}
                      src={item.image}
                      alt="gallary"
                      className="w-100"
                    />

                    <Item
                      original={item.image}
                      thumbnail={item.image}
                      width={410}
                      height={340}
                    >
                      {({ ref, open }) => (
                        <span
                          role="button"
                          title="Click for large view"
                          className="fancybox expend-btn d-flex align-items-center justify-content-center tran3s"
                          ref={ref}
                          onClick={open}
                        >
                          <i className="bi bi-plus-lg"></i>
                        </span>
                      )}
                    </Item>
                  </div>
                  <div className="title tran3s d-flex flex-column align-items-center">
                    <span className="pj-name tran3s fw-500">{item.name}</span>
                    <span className="tag">{item.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </Gallery>
        </div>
      </div>
    </div>
  );
};

export default DrapesGallery;
