import Hero from "/src/Components/Hero";
import Hero_img from "/src/Components/Hero_img";

const App = () => {
  return (
    <div>
      <div className="absolute flex justify-center items-center left-50 -top-20 w-[75%] z-50">
        <Hero_img />
      </div>
      <Hero />
    </div>
  );
};

export default App;
