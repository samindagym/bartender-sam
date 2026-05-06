export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-black border border-white/10 ${className}`}>
      <img 
        src="/logo.png" 
        alt="Sam The Bartender Logo" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  );
}
