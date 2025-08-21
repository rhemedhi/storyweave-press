import { Calendar, Clock, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  image?: string;
  featured?: boolean;
}

const ArticleCard = ({ 
  id,
  title, 
  excerpt, 
  author, 
  publishDate, 
  readTime, 
  category, 
  image,
  featured = false 
}: ArticleCardProps) => {
  return (
    <Link to={`/article/${id}`}>
      <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-card-hover ${featured ? 'col-span-1 md:col-span-2' : ''}`}>
      <CardContent className="p-0">
        {image && (
          <div className="aspect-video overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              {category}
            </span>
          </div>
          
          <h3 className={`font-serif font-bold text-primary group-hover:text-accent transition-colors duration-200 ${featured ? 'text-2xl mb-4' : 'text-xl mb-3'}`}>
            {title}
          </h3>
          
          <p className={`text-muted-foreground leading-relaxed ${featured ? 'text-base mb-4' : 'text-sm mb-4'}`}>
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{publishDate}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    </Link>
  );
};

export default ArticleCard;