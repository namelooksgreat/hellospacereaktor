import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";

interface TalentCardProps {
  id?: string;
  name?: string;
  profileImage?: string;
  skills?: string[];
  availability?: "Hourly" | "Full-time" | "Both";
  rating?: number;
  title?: string;
  location?: string;
  experience?: string;
  onClick?: () => void;
}

const TalentCard = ({
  id = "1",
  name = "Alex Johnson",
  profileImage = "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
  skills = ["React", "TypeScript", "Node.js"],
  availability = "Hourly",
  rating = 4.8,
  title = "Senior Frontend Developer",
  location = "San Francisco, CA",
  experience = "5+ years",
  onClick,
}: TalentCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Profile Image */}
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-corporate-peach/20">
            <img
              src={profileImage}
              alt={`${name}'s profile`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600 mb-1">{title}</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-corporate-teal fill-corporate-teal" />
                <span className="ml-1 text-sm font-medium">
                  {rating.toFixed(1)}
                </span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-600">{location}</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-600">{experience}</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-corporate-cream hover:bg-corporate-cream/80 text-corporate-blue border-none"
              >
                {skill}
              </Badge>
            ))}
          </div>

          {/* Availability Badge */}
          <div className="flex justify-between items-center">
            <Badge
              className={`${
                availability === "Hourly"
                  ? "bg-corporate-teal/10 text-corporate-teal"
                  : availability === "Full-time"
                    ? "bg-corporate-peach/10 text-corporate-peach"
                    : "bg-corporate-blue/10 text-corporate-blue"
              } 
                border-none px-2.5 py-0.5`}
            >
              {availability}
            </Badge>

            <Button
              onClick={onClick}
              className="bg-corporate-blue hover:bg-corporate-blue/90 text-white"
              size="sm"
            >
              Profili Görüntüle
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
