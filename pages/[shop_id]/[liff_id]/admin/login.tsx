import Image from "next/image";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useEffect, useState } from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icon";
import { PhoneIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import DefaultLayout from "@/layouts/default";
import Loading from "@/components/Loading";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loginForm, setLoginForm] = useState({
    phone: "",
    password: "",
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  setTimeout(() => {
    setLoading(false);
    setTimeout(() => setLoading(false), 500);
  }, 2000);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginForm.phone = loginForm.phone.replace(/\D/g, "");
    setLoginForm({ phone: "", password: "" });
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-8 items-center w-full h-screen px-5">
        <Loading isLoading={loading} />
        <section className="flex flex-col items-center mt-10">
          <Image
            src="/Queuely-logo.svg"
            alt="Queuely Logo"
            width={150}
            height={150}
          />
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold">
              Queue<span className="text-primary-700">ly</span>
            </h1>
            <p className="text-neutral-400 text-sm">
              ระบบจองคิวร้านค้าผ่าน LINE OA
            </p>
          </div>
        </section>
        <section className="w-full">
          <h2 className="text-xl font-semibold text-deeper-grey w-full">
            เข้าสู่ระบบ
          </h2>
          <p className="text-sm text-neutral-400">
            กรอกเบอร์โทรศัพท์ที่ลงทะเบียนและรหัสผ่าน
          </p>
          <Form className="w-full space-y-2 pt-5" onSubmit={onSubmit}>
            <Input
              isRequired
              value={loginForm.phone}
              onChange={(e) =>
                setLoginForm({ ...loginForm, phone: e.target.value })
              }
              startContent={<PhoneIcon className="size-4 text-default-400" />}
              errorMessage="โปรดกรอกเบอร์โทรศัพท์ที่ลงทะเบียน"
              name="phone"
              placeholder="เบอร์โทรศัพท์"
              type="tel"
              size="lg"
              pattern="^\d{3}-\d{3}-\d{4}$"
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                let digits = input.value.replace(/\D/g, "").slice(0, 10);
                let formatted = digits;
                if (digits.length > 6) {
                  formatted = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
                } else if (digits.length > 3) {
                  formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`;
                }
                input.value = formatted;
              }}
            />
            <Input
              isRequired
              size="lg"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
              errorMessage="โปรดกรอกรหัสผ่าน"
              startContent={
                <LockClosedIcon className="size-5 text-default-400" />
              }
              endContent={
                <button
                  aria-label="toggle password visibility"
                  className="focus:outline-hidden"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="size-5 text-default-400" />
                  ) : (
                    <EyeFilledIcon className="size-5 text-default-400" />
                  )}
                </button>
              }
              name="password"
              placeholder="รหัสผ่าน"
              type={isVisible ? "text" : "password"}
            />
            <div className="w-full flex justify-end">
              <Button
                type="button"
                variant="light"
                className="w-fit underline text-neutral-400"
                size="sm"
              >
                หากลืมรหัสผ่าน?
              </Button>
            </div>
            <Button
              type="submit"
              className="w-full bg-primary-700 text-white"
              size="lg"
            >
              เข้าสู่ระบบ
            </Button>
          </Form>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Login;
