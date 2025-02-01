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
                "fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
                !isOpen
                    ? "transition-[opacity,transform] translate-y-8 opacity-0"
                    : "transition-[opacity,transform] translate-y-0 opacity-100",
                hide && "hidden"
            )}
        >
            <div className="dark:bg-card bg-background rounded-md m-3 border border-border shadow-lg">
                <div className="grid gap-2">
                    <div className="border-b border-border h-14 flex items-center justify-between p-4">
                        <h1 className="text-lg font-medium">Datenschutz-Einwilligung</h1>
                        <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm font-normal text-start">
                            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                            Diese Cookies helfen uns dabei, die Website-Nutzung zu analysieren und unsere Dienste zu verbessern.
                            <br />
                            <br />
                            <span className="text-xs">
                                Mit Klick auf "
                                <span className="font-medium opacity-80">
                                    Akzeptieren
                                </span>
                                " stimmen Sie der Verwendung von Cookies gemäß unserer Datenschutzerklärung zu.
                            </span>
                            <br />
                            <a href="/datenschutz" className="text-xs underline">
                                Mehr erfahren
                            </a>
                        </p>
                    </div>
                    <div className="flex gap-2 p-4 py-5 border-t border-border dark:bg-background/20">
                        <Button onClick={accept} className="w-full">
                            Akzeptieren
                        </Button>
                        <Button
                            onClick={decline}
                            className="w-full"
                            variant="secondary"
                        >
                            Ablehnen
                        </Button>
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
