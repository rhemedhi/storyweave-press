import { useParams } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { articles } from "@/data/articles";

const Article = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-serif mb-4">Article Not Found</h1>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Button 
          variant="ghost" 
          className="mb-8 -ml-4"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Button>

        <header className="mb-12">
          <div className="mb-4">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{article.publishDate}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {article.content ? (
            article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-foreground leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))
          ) : (
            <div className="text-muted-foreground text-center py-12">
              <p className="text-lg mb-4">Full article content coming soon...</p>
              <p>This is a preview of the article layout and design.</p>
            </div>
          )}
        </div>

        <footer className="mt-16 pt-8 border-t border-border">
          <div className="bg-secondary rounded-lg p-8">
            <h3 className="text-xl font-serif font-bold mb-4 text-primary">About the Author</h3>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-accent-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-primary">{article.author}</h4>
                <p className="text-muted-foreground">
                  Princess Grace Asare is a student journalist acquiring knowledge in observation and interview.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default Article;