import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Bell, Flag, Lock, LogOut, Shield, UserPlus } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-background pb-6">
      <div className="relative">
        <div className="aspect-[3/1] max-h-48 bg-muted overflow-hidden">
          <div className="w-full h-full bg-gray-200" />
        </div>

        <svg
          viewBox="0 0 400 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full translate-y-1/2 drop-shadow-[0_-5px_10px_rgba(0,0,0,0.05)]"
        >
          <path
            d="M0,50 
           L100,50 
           C150,50 150,10 200,10 
           C250,10 250,50 300,50 
           L400,50 
           L400,100 
           L0,100 
           Z"
            fill="white"
          />
        </svg>

        <Avatar className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-24 h-24 border-4 border-background shadow-lg">
          <AvatarImage src="https://github.com/identicons/cjeonguk.png" />
          <AvatarFallback>Identicon (cjeonguk)</AvatarFallback>
        </Avatar>
      </div>

      <div className="pt-16 px-6">
        <div className="text-center mb-8">
          <h1 className="text-xl font-semibold">John Doe</h1>
          <p className="text-muted-foreground mt-1">UX Designer & Developer</p>
          <p className="text-sm text-muted-foreground mt-1">
            Seoul, South Korea
          </p>
        </div>

        <div className="flex gap-3 mb-8">
          <Button className="flex-1">Edit Profile</Button>
          <Button variant="secondary" className="flex-1">
            Add friends
          </Button>
        </div>

        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start h-12 px-4">
            <Shield className="mr-3 h-5 w-5" />
            Security
          </Button>
          <Button variant="ghost" className="w-full justify-start h-12 px-4">
            <Bell className="mr-3 h-5 w-5" />
            Notification
          </Button>
          <Button variant="ghost" className="w-full justify-start h-12 px-4">
            <Lock className="mr-3 h-5 w-5" />
            Privacy
          </Button>
          <Button variant="ghost" className="w-full justify-start h-12 px-4">
            <Flag className="mr-3 h-5 w-5" />
            Report a Problem
          </Button>
          <Button variant="ghost" className="w-full justify-start h-12 px-4">
            <UserPlus className="mr-3 h-5 w-5" />
            Add Account
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start h-12 px-4 text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
}
