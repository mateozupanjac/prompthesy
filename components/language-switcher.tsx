"use client";
import { Button } from "@heroui/button"
import { useState } from "react";

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<'EN' | 'HR'>('EN');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'HR' : 'EN');
  };

  return (
    <Button
      variant="light"
      size="sm"
      onClick={toggleLanguage}
      className="px-2 text-sm font-medium min-w-12"
      aria-label={`Switch to ${language === 'EN' ? 'Croatian' : 'English'}`}
    >
      {language}
    </Button>
  );
}