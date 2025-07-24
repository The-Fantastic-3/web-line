"use server";
import Image from "next/image";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useState } from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icon";
import { PhoneIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import DefaultLayout from "@/layouts/default";
import Loading from "@/components/Loading";
import useAxios from "axios-hooks";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Login = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loginForm, setLoginForm] = useState({
    phone: "",
    password: "",
  });

  const [{ data, error }, executeLogin] = useAxios(
    {
      url: `/auth/login`,
      method: "POST",
    },
    { manual: true },
  );

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await executeLogin({
        data: {
          phone: loginForm.phone.replace(/-/g, ""),
          password: loginForm.password,
        },
      });
      localStorage.setItem("access_token", response.data.access_token);
      Cookies.set("access_token", response.data.access_token);
      router.push(`/${router.query.shop_id}/${router.query.liff_id}/admin`);
    } catch (err) {
      console.error("Login failed:", err);
    }
    setLoginForm({ phone: "", password: "" });
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  setTimeout(() => {
    setLoading(false);
    setTimeout(() => setLoading(false), 500);
  }, 2000);

  return (
    <DefaultLayout>
      <div className="flex h-screen w-full flex-col items-center gap-8 px-5">
        <Loading isLoading={loading} />
        <section className="mt-10 flex flex-col items-center">
          <Image
            src="/Queuely-logo.svg"
            alt="Queuely Logo"
            width={150}
            height={150}
          />
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold">Queuely</h1>
            <p className="text-sm text-neutral-400">
              ระบบจองคิวร้านค้าผ่าน LINE OA
            </p>
          </div>
        </section>
        <section className="w-full">
          <h2 className="text-deeper-grey w-full text-xl font-semibold">
            เข้าสู่ระบบ
          </h2>
          <p className="text-sm text-neutral-400">
            กรอกเบอร์โทรศัพท์ที่ลงทะเบียนและรหัสผ่าน
          </p>
          <Form className="w-full space-y-2 pt-5" onSubmit={login}>
            <Input
              isRequired
              value={loginForm.phone}
              onChange={(e) =>
                setLoginForm({ ...loginForm, phone: e.target.value })
              }
              startContent={<PhoneIcon className="text-default-400 size-4" />}
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
                <LockClosedIcon className="text-default-400 size-5" />
              }
              endContent={
                <button
                  aria-label="toggle password visibility"
                  className="focus:outline-hidden"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-default-400 size-5" />
                  ) : (
                    <EyeFilledIcon className="text-default-400 size-5" />
                  )}
                </button>
              }
              name="password"
              placeholder="รหัสผ่าน"
              type={isVisible ? "text" : "password"}
            />
            <p className="w-full text-xs text-red-500">
              {error ? error?.response?.data?.message : null}
            </p>
            <Button
              type="submit"
              className="bg-primary-700 w-full text-white"
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
