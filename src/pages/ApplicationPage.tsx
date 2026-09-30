import FormContainer from "../components/ApplicationPage/FormContainer";
import Header from "../components/ApplicationPage/Header";
import Hero from "../components/ApplicationPage/Hero";

function ApplicationPage() {
  return (
    <div className="font-robotoMono">
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

export default ApplicationPage;
