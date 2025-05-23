import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AddOpportunityForm from "./AddOpportunityForm";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 px-4 py-3 md:px-14 sm:px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold text-volunteer-dark">
            <span className="text-blue-500">Volunteer</span> Hub
          </Link>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:opacity-80 transition-colors">
              Add Opportunity
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <AddOpportunityForm />
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
