import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DebtRelief = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#f9c65d] via-[#f8d899] to-white">
      <div className="text-center px-6">
        <h1 className="mb-4 text-4xl md:text-5xl font-bold text-[#3E3E3E]">
          Mesa Group Consulting
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Debt Solutions & Financial Freedom
        </p>
        <Link to="/debt-relief">
          <Button 
            size="lg"
            className="bg-[#bb9446] hover:bg-[#a08139] text-white text-lg font-semibold px-8 py-6"
          >
            Explore Debt Relief Program
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DebtRelief;
