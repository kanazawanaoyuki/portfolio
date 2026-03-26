"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { SectionTitle } from "@/components/ui/SectionTitle";
import styles from "@/components/sections/Sections.module.css";

type ContactValues = {
  name: string;
  email: string;
  message: string;
};

type ContactErrors = Partial<ContactValues>;

const initialValues: ContactValues = {
  name: "",
  email: "",
  message: ""
};

const validate = (values: ContactValues): ContactErrors => {
  const errors: ContactErrors = {};

  if (!values.name.trim()) errors.name = "お名前を入力してください。";
  if (!values.email.trim()) {
    errors.email = "メールアドレスを入力してください。";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "メールアドレスの形式が不正です。";
  }

  if (values.message.trim().length < 10) {
    errors.message = "お問い合わせ内容は10文字以上で入力してください。";
  }

  return errors;
};

export function ContactSection() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <SectionTitle title="Contact" subtitle="フォームUI（送信処理なし）" />
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <Input
          label="お名前"
          name="name"
          value={values.name}
          error={errors.name}
          onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
        />
        <Input
          label="メールアドレス"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
        />
        <Textarea
          label="お問い合わせ内容"
          name="message"
          value={values.message}
          error={errors.message}
          onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
        />
        <div className={styles.formActions}>
          <Button type="submit">送信する</Button>
          {submitted ? <p className={styles.success}>送信ありがとうございました。（デモ表示）</p> : null}
        </div>
      </form>
    </section>
  );
}
