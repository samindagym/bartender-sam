import * as React from "react";
import { motion } from "framer-motion";
import { Plus, User } from "lucide-react";
import { StoryViewer } from "./ui/story-viewer";
import { cn } from "../lib/utils";

function AddStoryButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center gap-2 group cursor-pointer shrink-0"
      )}
      aria-label="Add your story"
    >
      <div className="relative">
        <div className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] rounded-full p-1">
          <div
            className={cn(
              "w-full h-full rounded-full flex items-center justify-center",
              "border-2 border-dashed border-white/20",
              "bg-white/5 transition-all duration-200",
              "group-hover:border-white/40 group-hover:bg-white/10"
            )}
          >
            <User className="w-7 h-7 text-white/50" />
          </div>
        </div>
        <motion.div
          className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center shadow-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-4 h-4 text-white" strokeWidth={2.5} />
        </motion.div>
      </div>
      <span className="text-xs md:text-sm font-medium text-white/80 truncate max-w-[80px] md:max-w-[110px] mt-1">
        My Story
      </span>
    </button>
  );
}

const users = [
  {
    id: "cocktails",
    username: "Art & Mixologie",
    avatar: "/story-images/cocktails/classic-mojito.webp",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    stories: [
      { id: "c-1", type: "image" as const, src: "/story-images/cocktails/Bahama-mama.webp" },
      { id: "c-2", type: "image" as const, src: "/story-images/cocktails/Blue-mojito.webp" },
      { id: "c-3", type: "image" as const, src: "/story-images/cocktails/Bora-bora.webp" },
      { id: "c-4", type: "image" as const, src: "/story-images/cocktails/Florida2.webp" },
      { id: "c-5", type: "image" as const, src: "/story-images/cocktails/Rio.webp" },
    ],
  },
  {
    id: "coffee",
    username: "Coffee Craft",
    avatar: "/story-images/Coffee/Coffe-collection.webp",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    stories: [
      { id: "cf-1", type: "image" as const, src: "/story-images/Coffee/Frapocino.webp" },
      { id: "cf-2", type: "image" as const, src: "/story-images/Coffee/cappucino1.webp" },
      { id: "cf-3", type: "image" as const, src: "/story-images/Coffee/cappucino2.webp" },
      { id: "cf-4", type: "image" as const, src: "/story-images/Coffee/capucino3.webp" },
    ],
  },
  {
    id: "milkshakes",
    username: "Gourmet Shakes",
    avatar: "/story-images/Milkshakes/Milkshake-oreo.webp",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    stories: [
      { id: "m-1", type: "image" as const, src: "/story-images/Milkshakes/Milkshake-oreo.webp" },
      { id: "m-2", type: "image" as const, src: "/story-images/Milkshakes/Milkshake-strawberry.webp" },
    ],
  },
  {
    id: "workplace",
    username: "L'Atelier",
    avatar: "/story-images/Workplace-tools/Workplace-table.webp",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    stories: [
      { id: "w-1", type: "image" as const, src: "/story-images/Workplace-tools/Tools-1.webp" },
      { id: "w-2", type: "image" as const, src: "/story-images/Workplace-tools/Tools-2.webp" },
      { id: "w-3", type: "image" as const, src: "/story-images/Workplace-tools/Workplace-table.webp" },
    ],
  },
  {
    id: "certificat",
    username: "Expertise",
    avatar: "/story-images/certificat/Art.webp",
    timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    stories: [
      { id: "cert-1", type: "image" as const, src: "/story-images/certificat/Art.webp" },
      { id: "cert-2", type: "image" as const, src: "/story-images/certificat/Image-028_19_36_29.webp" },
    ],
  },
];

export default function Gallery({ onBookingClick }: { onBookingClick: () => void }) {
  return (
    <section className="py-24 relative bg-transparent" id="gallery">
      {/* Blenders */}
      <div className="section-divider-top" />
      <div className="section-divider-bottom" />
      
      <div className="container mx-auto px-6">
        <div className="mb-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">
            TAKE A LOOK AT OUR <span className="gradient-text">STORY.</span>
          </h2>
          <p className="text-white/40 max-w-md">Real moments from behind the bar. Check out my latest crafts and events.</p>
        </div>
        
        <div className="w-full max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex gap-4 md:gap-8 justify-start md:justify-center overflow-x-auto snap-x snap-mandatory py-8 px-4 md:px-0 [&::-webkit-scrollbar]:hidden md:[&::-webkit-scrollbar]:block md:[&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-brand-orange/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-brand-orange/40"
          >
            <motion.div
              className="snap-start shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <AddStoryButton onClick={onBookingClick} />
            </motion.div>
            {users.map((user, index) => (
              <motion.div
                key={user.username}
                className="snap-start shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 1) * 0.1, duration: 0.5, type: "spring" }}
              >
                <StoryViewer
                  stories={user.stories}
                  username={user.username}
                  avatar={user.avatar}
                  timestamp={user.timestamp}
                  onStoryView={() => {}}
                  onAllStoriesViewed={() => {}}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
