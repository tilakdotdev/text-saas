import { itemVariants } from "@/common/constants/defaultValues";
import { MotionDiv } from "@/components/common/FramerMotion";
import { Badge } from "@/components/ui/badge";
import { ImageIcon, FileText } from "lucide-react";

interface UploadHeaderProps {
  mode: "text" | "image";
}

export default function UploadHeader({ mode }: UploadHeaderProps) {
  const icon =
    mode === "text" ? (
      <FileText className="mr-2 h-12 w-12 animate-pulse text-main-600" />
    ) : (
      <ImageIcon className="mr-2 h-12 w-12 animate-pulse text-main-600" />
    );

  const mainTitle =
    mode === "text" ? "Upload Text-based PDFs" : "Upload Image-based PDFs";

  const subtitle =
    mode === "text"
      ? "Upload your PDF with selectable text. We'll analyze and summarize it using AI! ✨"
      : "Upload scanned or image-based PDFs. We'll perform OCR and extract content! 🖼️✨";

  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <MotionDiv
        viewport={{ once: true }}
        variants={itemVariants}
        className="animate-gradient-x group relative overflow-hidden rounded-full bg-linear-to-r from-main-200 via-main-500 to-main-800 p-[1px]"
      >
        <Badge
          variant={"secondary"}
          className="relative rounded-full bg-white px-6 py-2 text-base font-medium transition-colors group-hover:bg-gray-50"
        >
          {icon}
          <p className="text-base">
            {mode === "text"
              ? "AI-Powered Text Extraction"
              : "AI-Powered OCR Processing"}
          </p>
        </Badge>
      </MotionDiv>

      <MotionDiv
        viewport={{ once: true }}
        variants={itemVariants}
        className="text-3xl font-bold tracking-tighter text-gray-900 capitalize sm:text-4xl"
      >
        Start Uploading{" "}
        <span className="relative inline-block">
          <span className="relative z-10 px-2">{mainTitle}</span>{" "}
          <span
            className="animate-rotate absolute inset-0 rounded-lg bg-main-200/50"
            aria-hidden="true"
          ></span>
        </span>
      </MotionDiv>

      <MotionDiv
        viewport={{ once: true }}
        variants={itemVariants}
        className="mt-2 max-w-2xl text-center text-xl leading-8 text-gray-600"
      >
        <p>{subtitle}</p>
      </MotionDiv>
    </div>
  );
}
