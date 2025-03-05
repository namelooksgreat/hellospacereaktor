import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Calculator, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "./ui/dialog";
import QuickPriceCalculator from "./QuickPriceCalculator";

interface PriceCalculatorDialogProps {
  triggerClassName?: string;
  buttonText?: string;
}

const PriceCalculatorDialog = ({
  triggerClassName = "",
  buttonText = "Hızlı Fiyat Hesaplama",
}: PriceCalculatorDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll to top when dialog opens
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className={`bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white shadow-lg shadow-corporate-teal/20 group ${triggerClassName}`}
        >
          <span className="flex items-center">
            <Calculator className="mr-2 h-5 w-5" />
            {buttonText}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent
        ref={dialogRef}
        className={`${isMobile ? "w-[98vw] max-h-[90vh] overflow-y-auto" : "max-w-4xl max-h-[90vh] overflow-y-auto"} p-0 border-none bg-transparent shadow-none scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent`}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="relative">
          <DialogClose className="absolute top-3 right-3 md:top-6 md:right-6 z-50 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-gradient-to-r from-corporate-teal/90 to-corporate-teal/70 border border-white/20 shadow-lg hover:shadow-corporate-teal/20 hover:scale-105 text-white transition-all duration-300">
            <X className="h-4 w-4 md:h-5 md:w-5" />
            <span className="sr-only">Kapat</span>
          </DialogClose>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-1 shadow-2xl">
            <QuickPriceCalculator />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PriceCalculatorDialog;
