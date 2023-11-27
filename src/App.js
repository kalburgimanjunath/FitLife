import "./styles.css";
import { Header, Footer, Hero, Subscribe } from "./components";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero
        title="Achieve Your Health and Fitness Goals with FitLife"
        subtitle="Your one-stop destination for personalized health and fitness solutions"
      >
        <Subscribe />
      </Hero>
      <Hero
        title="Personalized Nutrition and Meal Plans"
        subtitle="Our comprehensive nutrition plan includes personalized meal recommendations and dietary guidelines tailored to your specific goals and preferences. Say goodbye to generic diets and hello to a plan that works for you."
      />
      <Hero
        title="State-of-the-Art Fitness Devices"
        subtitle="Enhance your fitness journey with our state-of-the-art devices designed to track your progress, increase productivity, and keep detailed records. Stay motivated and stay on track towards your goals."
      />
      <Hero
        title="Expert Coaching and Support"
        subtitle="Receive personalized one-to-one coaching sessions with experienced fitness professionals who will offer guidance and support throughout your fitness journey. Get the expertise you need to succeed."
      />
      <Hero title="I love the variety of exercises and the step-by-step instructional videos. FitLife keeps me motivated and helps me stay consistent with my workouts." />
      <Hero
        title="Start Your FitLife Journey Today."
        subtitle="“Joining FitLife was the best decision I made for my health. The personalized meal plans and the state-of-the-art devices have helped me achieve my fitness goals.” - Scarlett Wright"
      >
        <Subscribe />
      </Hero>
      <Footer />
    </div>
  );
}
