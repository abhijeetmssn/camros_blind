const AddressInfo = () => {
  const addresses = [
    {
      icon: "/images/icon/icon_37.svg",
      title: "Our Address",
      address: "UNIT 8 7210 46AVE CAMROSE ALBERTA T4V 5C4",
    },
    {
      icon: "/images/icon/icon_38.svg",
      title: "Contact Info",
      address: "Give us call at\n236 808 5063",
    },
  ];

  return (
    <>
      {addresses.map((address, i) => (
        <div className="col-md-6 d-flex" key={i}>
          <div className="address-block-one">
            <div className="icon position-absolute">
              <img src={address.icon} alt="icon" className="lazy-img" />
            </div>
            <div className="text-meta">
              <h4 className="title">{address.title}</h4>
              <p className="fs-18">{address.address}</p>
            </div>
            {/* /.text-meta */}
          </div>
        </div>
      ))}
    </>
  );
};

export default AddressInfo;
