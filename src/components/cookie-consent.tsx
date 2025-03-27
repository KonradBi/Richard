"use client"

import { CookieIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CookieConsentProps {
  variant?: "default" | "small";
  demo?: boolean;
  onAcceptCallback?: () => void;
  onDeclineCallback?: () => void;
}

const CookieConsent = ({
    variant = "default",
    demo = false,
    onAcceptCallback = () => {},
    onDeclineCallback = () => {},
}: CookieConsentProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hide, setHide] = useState(false);

    const accept = () => {
        setIsOpen(false);
        document.cookie =
            "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; SameSite=Strict; Secure";
        setTimeout(() => {
            setHide(true);
        }, 700);
        onAcceptCallback();
    };

    const decline = () => {
        setIsOpen(false);
        document.cookie = 
            "cookieConsent=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; SameSite=Strict; Secure";
        setTimeout(() => {
            setHide(true);
        }, 700);
        onDeclineCallback();
    };

    useEffect(() => {
        try {
            setIsOpen(true);
            if (document.cookie.includes("cookieConsent=true")) {
                if (!demo) {
                    setIsOpen(false);
                    setTimeout(() => {
                        setHide(true);
                    }, 700);
                }
            }
        } catch (e) {
            console.error("Cookie consent error:", e);
        }
    }, [demo]);

    return variant !== "small" ? (
        <div
            className={cn(
                "fixed z-[200] bottom-0 left-0 right-0 w-full duration-700 bg-white/95 backdrop-blur-sm border-t border-nature-sand/20 shadow-lg",
                !isOpen
                    ? "transition-[opacity,transform] translate-y-8 opacity-0"
                    : "transition-[opacity,transform] translate-y-0 opacity-100",
                hide && "hidden"
            )}
        >
            <div className="container mx-auto">
                <div className="py-4 px-4 md:px-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <CookieIcon className="h-5 w-5 flex-shrink-0 text-nature-teal" />
                            <div className="space-y-1">
                                <h1 className="text-sm font-medium text-nature-darkBrown">Datenschutz-Einwilligung</h1>
                                <p className="text-sm text-nature-darkBrown/80">
                                    Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                                    <a href="/datenschutz" className="ml-1 text-nature-teal hover:text-nature-teal/80 underline underline-offset-4 transition-colors">
                                        Mehr erfahren
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 md:flex-shrink-0">
                            <Button
                                onClick={decline}
                                variant="outline"
                                className="flex-1 md:flex-none bg-transparent hover:bg-gray-50 border-gray-300 text-gray-700"
                            >
                                Ablehnen
                            </Button>
                            <Button 
                                onClick={accept}
                                className="flex-1 md:flex-none bg-nature-teal hover:bg-nature-teal/90 text-white"
                            >
                                Akzeptieren
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div
            className={cn(
                "fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
                !isOpen
                    ? "transition-[opacity,transform] translate-y-8 opacity-0"
                    : "transition-[opacity,transform] translate-y-0 opacity-100",
                hide && "hidden"
            )}
        >
            <div className="m-3 dark:bg-card bg-background border border-border rounded-lg">
                <div className="flex items-center justify-between p-3">
                    <h1 className="text-lg font-medium">Datenschutz-Einwilligung</h1>
                    <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
                </div>
                <div className="p-3 -mt-2">
                    <p className="text-sm text-left text-muted-foreground">
                        Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                        Für weitere Informationen lesen Sie bitte unsere Datenschutzerklärung.
                    </p>
                </div>
                <div className="p-3 flex items-center gap-2 mt-2 border-t">
                    <Button
                        onClick={accept}
                        className="w-full h-9 rounded-full"
                    >
                        Akzeptieren
                    </Button>
                    <Button
                        onClick={decline}
                        className="w-full h-9 rounded-full"
                        variant="outline"
                    >
                        Ablehnen
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CookieConsent;
