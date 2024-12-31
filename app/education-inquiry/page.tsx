"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Section from "@/components/ui/Section";
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { useState } from "react";
import FormField from "@/components/form/FormField";
import RadioGroup from "@/components/form/RadioGroup";
import { formatPhoneNumber } from "@/utils/format";

const formSchema = z.object({
  name: z.string().min(1, "성함을 입력해주세요"),
  organization: z.string().min(1, "기관명을 입력해주세요"),
  phoneNumber: z
    .string()
    .min(1, "연락처를 입력해주세요")
    .transform((val) => val.replace(/[^0-9-]/g, ""))
    .refine((val) => /^010-\d{3,4}-\d{4}$/.test(val), {
      message: "올바른 연락처 형식이 아닙니다",
    }),
  budget: z.enum(
    ["50만원 미만", "50만원 이상 ~ 300만원 미만", "300만원 이상"],
    {
      errorMap: () => ({ message: "교육 예산을 선택해주세요" }),
    }
  ),
  target: z.enum(
    ["청소년/학교/센터", "청년/사회초년생/대학생", "일반/기관/기업"],
    {
      errorMap: () => ({ message: "교육 대상을 선택해주세요" }),
    }
  ),
  details: z.string().min(1, "상세 내용을 입력해주세요"),
  agreement: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집/이용 동의는 필수입니다",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const EDUCATION_BUDGETS = [
  "50만원 미만",
  "50만원 이상 ~ 300만원 미만",
  "300만원 이상",
];
const EDUCATION_TARGETS = [
  "청소년/학교/센터",
  "청년/사회초년생/대학생",
  "일반/기관/기업",
];

export default function EducationInquiry() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      organization: "",
      phoneNumber: "",
      budget: undefined,
      target: undefined,
      details: "",
      agreement: false,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/education-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("문의 전송에 실패했습니다.");
      }

      // 성공 처리 (예: 알림 표시, 페이지 이동 등)
      alert("문의가 성공적으로 전송되었습니다.");
    } catch (error) {
      console.error("Error:", error);
      alert("문의 전송 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Section background="gradient-primary" className="py-24">
        <div className="max-w-3xl mx-auto">
          <Typography.H1 className="text-center text-foreground mb-6">
            교육 문의하기
          </Typography.H1>
          <div className="text-center mb-12 space-y-2">
            <Typography.P className="text-lg font-medium">
              금융역량을 강화하는 최고의 파트너
            </Typography.P>
            <Typography.P className="text-foreground/80">
              세심한 사전 협의를 통해 꼭 맞는 프로그램을 제공합니다.
              <br />
              체계적이고 실질적인 금융 역량을 통해 지속 가능한 성장을
              약속합니다.
            </Typography.P>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-8 bg-background/95 backdrop-blur rounded-lg p-8 shadow-lg"
          >
            <FormField label="이름" name="name" required errors={errors}>
              <input
                {...register("name")}
                type="text"
                className="w-full px-4 py-2 border rounded-md bg-background"
              />
            </FormField>
            <FormField
              label="기관명"
              name="organization"
              required
              errors={errors}
            >
              <input
                {...register("organization")}
                type="text"
                className="w-full px-4 py-2 border rounded-md bg-background"
              />
            </FormField>
            <FormField
              label="연락처"
              name="phoneNumber"
              required
              errors={errors}
            >
              <input
                {...register("phoneNumber", {
                  onChange: (e) => {
                    const formattedNumber = formatPhoneNumber(e.target.value);
                    setValue("phoneNumber", formattedNumber, {
                      shouldValidate: true,
                    });
                  },
                })}
                type="tel"
                placeholder="010-0000-0000"
                maxLength={13}
                className="w-full px-4 py-2 border rounded-md bg-background"
              />
            </FormField>
            <FormField label="교육 예산" name="budget" required errors={errors}>
              <RadioGroup
                options={EDUCATION_BUDGETS}
                name="budget"
                register={register}
              />
            </FormField>
            <FormField label="교육 대상" name="target" required errors={errors}>
              <RadioGroup
                options={EDUCATION_TARGETS}
                name="target"
                register={register}
              />
            </FormField>
            <FormField
              label="상세 내용"
              name="details"
              required
              errors={errors}
            >
              <textarea
                {...register("details")}
                placeholder={`- 교육장소:\n- 교육일/시간:\n- 교육주제:`}
                rows={6}
                className="w-full px-4 py-2 border rounded-md bg-background resize-none"
              />
            </FormField>
            <FormField
              label="개인정보 수집 및 이용 동의"
              name="agreement"
              required
              errors={errors}
            >
              <input
                {...register("agreement")}
                type="checkbox"
                className="mt-1"
              />
            </FormField>
            <Button
              type="submit"
              isLoading={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90"
            >
              문의하기
            </Button>
          </form>
        </div>
      </Section>
    </main>
  );
}
