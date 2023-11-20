import "./styles.css";
import { Header, Footer, Hero } from "./components";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero
        title="Achieve Your Health and Fitness Goals with FitLife"
        subtitle="Your one-stop destination for personalized health and fitness solutions"
      />
      <Footer />
    </div>
  );
}
