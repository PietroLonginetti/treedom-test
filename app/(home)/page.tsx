"use client";

import { useApi } from "@/lib/providers/api.provider";
import Form from "@/lib/components/Form";
import Spinner from "@/lib/components/Spinner";
import { Step } from "@/lib/entities/glabal.entities";
import { useFormValidation } from "@/lib/hooks/useFormValidation";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const { loading, error } = useApi();
  const { stepValidation } = useFormValidation();

  const [step, setStep] = useState<Step | undefined>(Step.FIRST);

  const validateStep = async (submitData?: Partial<Record<string, any>>) => {
    if (step == Step.FIRST) {
      const data = await stepValidation(step, submitData);
      console.log("First step res. data: ", data);
      if (data?.success) setStep(Step.SECOND);
    }
    if (step == Step.SECOND) {
      const data = await stepValidation(step, submitData);
      console.log("Second step res. data: ", data);
      if (data?.success) setStep(Step.THIRD);
    }
    if (step == Step.THIRD) {
      const data = await stepValidation(step, submitData);
      console.log("Third step res. data: ", data);
      if (data?.success) {
        setStep(undefined);
        alert("🎉 YOU WIN! 🎉");
      }
    }
  };

  useEffect(() => {
    // Auto scroll on mobile viewport
    if (step && step > Step.FIRST) {
      containerRef.current?.scrollTo({
        left:
          (containerRef.current.clientWidth - 32) *
          (step === Step.THIRD ? 2 : 1),
        behavior: "smooth",
      });
    }
  }, [step]);

  const containerRef = useRef<any>(null);

  return (
    <main className="relative h-screen p-2 sm:p-8 flex flex-col gap-4 bg-[#f1f1f1]">
      {/* Header */}
      <h1 className="text-[24px] md:text-[40px]">🌳 Treedom Test App 🌳</h1>

      {/* Body */}
      <div
        ref={containerRef}
        className="border border-gray flex-1 rounded flex md:flex-col p-8 gap-8 bg-white overflow-x-scroll"
      >
        <Form
          step={Step.FIRST}
          onValidate={validateStep}
          disabled={step !== Step.FIRST}
        />
        <Form
          step={Step.SECOND}
          onValidate={validateStep}
          disabled={step !== Step.SECOND}
        />
        <Form
          step={Step.THIRD}
          onValidate={validateStep}
          disabled={step !== Step.THIRD}
        />
      </div>
      {!step && (
        <div className="w-full text-[40px] md:text-[80px] animate-bounce whitespace-nowrap">
          🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉
        </div>
      )}

      {loading && (
        <div className="absolute top-0 left-0 bg-white h-full w-full opacity-80 flex flex-col items-center justify-center gap-2">
          <Spinner />
          <span className="text-xs text-[#3758F9] opacity-50">Caricamento</span>
        </div>
      )}

      {/* Footer */}
      <div className="flex flex-row items-center justify-between">
        {/* error messages */}
        <div className="text-[red]">{error}</div>
      </div>
    </main>
  );
}
