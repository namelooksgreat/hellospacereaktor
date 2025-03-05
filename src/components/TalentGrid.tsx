import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import TalentCard from "./TalentCard";

interface Talent {
  id: string;
  name: string;
  profileImage: string;
  skills: string[];
  availability: "Hourly" | "Full-time" | "Both";
  rating: number;
  title: string;
  location: string;
  experience: string;
}

interface TalentGridProps {
  talents?: Talent[];
  itemsPerPage?: number;
  title?: string;
  subtitle?: string;
}

const TalentGrid = ({
  talents = [
    {
      id: "1",
      name: "Alex Johnson",
      profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      skills: ["React", "TypeScript", "Node.js"],
      availability: "Hourly",
      rating: 4.8,
      title: "Senior Frontend Developer",
      location: "San Francisco, CA",
      experience: "5+ years",
    },
    {
      id: "2",
      name: "Sarah Williams",
      profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      skills: ["UI/UX Design", "Figma", "Adobe XD"],
      availability: "Full-time",
      rating: 4.9,
      title: "Product Designer",
      location: "New York, NY",
      experience: "6+ years",
    },
    {
      id: "3",
      name: "Michael Chen",
      profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      skills: ["Python", "Django", "Machine Learning"],
      availability: "Both",
      rating: 4.7,
      title: "ML Engineer",
      location: "Austin, TX",
      experience: "4+ years",
    },
    {
      id: "4",
      name: "Emily Rodriguez",
      profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      skills: ["JavaScript", "Vue.js", "CSS"],
      availability: "Hourly",
      rating: 4.5,
      title: "Frontend Developer",
      location: "Chicago, IL",
      experience: "3+ years",
    },
    {
      id: "5",
      name: "David Kim",
      profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      skills: ["Mobile Development", "React Native", "Swift"],
      availability: "Full-time",
      rating: 4.6,
      title: "Mobile Developer",
      location: "Seattle, WA",
      experience: "5+ years",
    },
    {
      id: "6",
      name: "Jessica Lee",
      profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=jessica",
      skills: ["Graphic Design", "Illustration", "Branding"],
      availability: "Hourly",
      rating: 4.9,
      title: "Creative Designer",
      location: "Los Angeles, CA",
      experience: "7+ years",
    },
  ],
  itemsPerPage = 6,
  title = "En İyi Geliştiriciler",
  subtitle = "Dünya çapında önceden değerlendirilmiş yetenek havuzumuza göz atın",
}: TalentGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(talents.length / itemsPerPage);

  // Get current talents
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTalents = talents.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-corporate-teal/10 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-corporate-blue flex items-center">
            <Sparkles className="h-5 w-5 mr-2 text-corporate-teal" />
            {title}
          </h2>
          <p className="text-gray-500">{subtitle}</p>
        </div>
        <Button
          variant="outline"
          className="mt-4 md:mt-0 flex items-center gap-2 border-corporate-teal/30 text-corporate-teal hover:bg-corporate-teal/10 rounded-full"
        >
          Tüm Geliştiricileri Görüntüle <ArrowUpRight size={16} />
        </Button>
      </div>

      {/* Talent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentTalents.map((talent) => (
          <TalentCard
            key={talent.id}
            id={talent.id}
            name={talent.name}
            profileImage={talent.profileImage}
            skills={talent.skills}
            availability={talent.availability}
            rating={talent.rating}
            title={talent.title}
            location={talent.location}
            experience={talent.experience}
            onClick={() => console.log(`View profile of ${talent.name}`)}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevPage}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="h-10 w-10 rounded-full border-corporate-blue/20 text-corporate-blue hover:bg-corporate-blue/5"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={`h-10 w-10 rounded-full ${currentPage === page ? "bg-corporate-blue hover:bg-corporate-blue/90" : "border-corporate-blue/20 text-corporate-blue hover:bg-corporate-blue/5"}`}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextPage}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="h-10 w-10 rounded-full border-corporate-blue/20 text-corporate-blue hover:bg-corporate-blue/5"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default TalentGrid;
