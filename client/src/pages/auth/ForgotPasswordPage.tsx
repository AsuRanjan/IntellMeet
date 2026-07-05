import AuthLayout from "../../components/auth/AuthLayout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email to receive a reset link"
    >
      <form className="space-y-5">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <Button type="submit">
          Send Reset Link
        </Button>
      </form>
    </AuthLayout>
  );
}

