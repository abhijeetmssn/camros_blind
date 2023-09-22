import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import PortfolioTopTitle from "../../components/portfolio/PortfolioTopTitle";
import ShutterGallery from "../../components/portfolio/ShuttersGallery";
import Link from "next/link";
import CallToAction from "../../components/portfolio/CallToAction";

const PortfolioV2 = () => {
  const portfolioTitle = "Shutters";
  return (
    <>
      <Seo pageTitle="Camrose Blinds || Portfolio" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <PortfolioTopTitle title={portfolioTitle} />

      {/* <!-- 
        =============================================
        Portfolio Gallery Three
        ============================================== 
        --> */}
      <ShutterGallery />

      {/*
			=====================================================
				Fancy Short Banner Twelve
			=====================================================
			*/}
      <CallToAction />

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default PortfolioV2;
