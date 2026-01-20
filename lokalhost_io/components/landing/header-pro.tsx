"use client";
import { useState, useEffect } from "react";

interface HeaderContent {
  text: string;
  productName: string;
  link: string;
}

export function HeaderPro() {
  const [content, setContent] = useState<HeaderContent>({
    text: "",
    productName: "",
    link: "",
  });

  useEffect(() => {
    const random = Math.random();
    if (random < 0.75) {
      setContent({
        text: "Built app fast",
        productName: "Shadify.ui",
        link: "#",
      });
    } else {
      setContent({
        text: "explore shadify templates",
        productName: "Shadify.ui Pro",
        link: "#",
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-end gap-1 flex-1">
      <div className="flex items-center justify-start md:justify-end gap-1 flex-1">
          
      </div>
    </div>
  );
}
