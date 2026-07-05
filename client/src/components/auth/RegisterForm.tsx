import Input from "../ui/Input";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import RoutePaths from "../../routes/RoutePaths";

export default function RegisterForm() {
  return (
    <form className="space-y-5">

      <Input
        label="Full Name"
        placeholder="John Doe"
      />

      <Input
        label="Email"
        type="email"
        placeholder="john@example.com"
      />

      <Input
        label="Password"
        type="password"
        placeholder="Create password"
      />

      <Input
        label="Confirm Password"
        type="password"
        placeholder="Confirm password"
      />

      <Button type="submit">
        Create Account
      </Button>

      <p className="text-center text-gray-600">
        Already have an account?{" "}
        <Link
          to={RoutePaths.LOGIN}
          className="text-blue-700 font-semibold hover:underline"
        >
          Login
        </Link>
      </p>

    </form>
  );
}

