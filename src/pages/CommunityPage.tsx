import Header from "../components/ApplicationPage/Header";
import FormContainer from "../components/CommunityPage/FormContainer";

import Hero from "../components/CommunityPage/Hero";
import Footer from "../components/Footer";

function CommunityPage() {
  return (
    <div className="font-robotoMono flex flex-col ">
      <div
        className="flex flex-col gap-10 bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage: "url('/application_page_hero_bg.png')",
        }}
      >
        <Header />
        <Hero />
      </div>
      <FormContainer/>
      <Footer/>
    </div>
  );
}

export default CommunityPage;
