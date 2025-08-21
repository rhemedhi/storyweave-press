import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif font-bold text-primary">Latest Articles</h2>
            <span className="text-muted-foreground">All Stories</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </section>

        <section className="mt-16 bg-secondary rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Stay Informed</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly insights on journalism, media trends, and the stories shaping our world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="px-6 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-serif font-bold mb-4">The Journal</h3>
              <p className="text-primary-foreground/80 mb-4">
                Independent journalism dedicated to uncovering truth and serving the public interest.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground">Politics</a></li>
                <li><a href="#" className="hover:text-primary-foreground">Environment</a></li>
                <li><a href="#" className="hover:text-primary-foreground">Technology</a></li>
                <li><a href="#" className="hover:text-primary-foreground">Investigation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground">Our Mission</a></li>
                <li><a href="#" className="hover:text-primary-foreground">Editorial Team</a></li>
                <li><a href="#" className="hover:text-primary-foreground">Contact</a></li>
                <li><a href="#" className="hover:text-primary-foreground">Ethics Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 The Journal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
