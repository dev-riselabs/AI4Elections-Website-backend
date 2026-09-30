import FormContainer from "../components/CommunityPage/FormContainer";
import Header from "../components/CommunityPage/Header";
import Hero from "../components/CommunityPage/Hero";

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
    </div>
  );
}

export default CommunityPage;
