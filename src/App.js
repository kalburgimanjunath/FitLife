import "./styles.css";
import { Header, Footer, Hero, Subscribe, Avatar } from "./components";
export default function App() {
  return (
    <div className="App container mx-auto px-8">
      <Header />
      <Hero
        title="Achieve Your Health and Fitness Goals with FitLife"
        subtitle="Your one-stop destination for personalized health and fitness solutions"
      >
        <Subscribe />
        <div>
          <Avatar
            title="“FitLife has transformed my approach to fitness. The personalized nutrition plan and the support from the coaches have been invaluable.”"
            subtitle={"Lucy Hernandez"}
          />
        </div>
      </Hero>
      <div className="rounded-lg border-1 m-4 ">
        <img
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1521805103424-d8f8430e8933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDEwNjE5MDd8&ixlib=rb-4.0.3&q=80&w=1080"
        />
      </div>
      <Hero
        title="Personalized Nutrition and Meal Plans"
        subtitle="Our comprehensive nutrition plan includes personalized meal recommendations and dietary guidelines tailored to your specific goals and preferences. Say goodbye to generic diets and hello to a plan that works for you."
      />
      <div className="rounded-lg border-1 m-4 ">
        <img
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDEwNjE5MDd8&ixlib=rb-4.0.3&q=80&w=1080"
        />
      </div>

      <Hero
        title="State-of-the-Art Fitness Devices"
        subtitle="Enhance your fitness journey with our state-of-the-art devices designed to track your progress, increase productivity, and keep detailed records. Stay motivated and stay on track towards your goals."
      />
      <div className="rounded-lg border-1 m-4 ">
        <img
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1502904550040-7534597429ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDEwNjE5MDd8&ixlib=rb-4.0.3&q=80&w=1080"
        />
      </div>

      <Hero
        title="Expert Coaching and Support"
        subtitle="Receive personalized one-to-one coaching sessions with experienced fitness professionals who will offer guidance and support throughout your fitness journey. Get the expertise you need to succeed."
      />
      <div className="rounded-lg border-1 m-4 ">
        <img
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDEwNjE5MDd8&ixlib=rb-4.0.3&q=80&w=1080"
        />
      </div>
      <div className="bg-gray-300 justify-center pt-20 pb-20 text-white">
        <Hero title="I love the variety of exercises and the step-by-step instructional videos. FitLife keeps me motivated and helps me stay consistent with my workouts.">
          <Avatar title="Lillian Clark" />
        </Hero>
      </div>

      <div className="border-2 rounded-lg mt-4 p-4">
        <Hero
          title="Start Your FitLife Journey Today."
          subtitle="“Joining FitLife was the best decision I made for my health. The personalized meal plans and the state-of-the-art devices have helped me achieve my fitness goals.” - Scarlett Wright"
        >
          <Subscribe />
        </Hero>
      </div>
      <Footer />
    </div>
  );
}
