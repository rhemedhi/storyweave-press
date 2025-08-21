import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/princessgrace.jpg";
// import heroImage from "@/assets/princess-grace-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-fill bg-center bg-no-repeat"
        // className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/princessgrace.jpg)` }}
      />
      <div className="absolute inset-0 bg-primary/60" />
      
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
          Stories That Matter
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
          Independent journalism bringing you the most important stories of our time
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" className="text-lg px-8 py-3">
            Read Latest Stories
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;