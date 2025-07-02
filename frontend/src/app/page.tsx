import Header from "../components/header/header";
import Footer from "../components/footer/footer"

export default function Home() {
  return (
    <div className="">
      <Header/>
        <main>
          <h1>NutriLeve</h1>
          <p>Comidas saudáveis & Gostosas que cabem certinho na sua dieta! </p>
        </main>
        <Footer/>
    </div>
  );
}
