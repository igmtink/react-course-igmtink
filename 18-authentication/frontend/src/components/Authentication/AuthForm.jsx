import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import { Button } from "../UI/IgmtInk";

const AuthForm = (props) => {
  // !(useSearchParams) is next to the (parameter) it is like (http://localhost:8080/auth?mode=login) the (auth) is a parameter
  const [searchParams] = useSearchParams();

  // !To get the (Query Parameter)
  const isLogin = searchParams.get("mode") === "login";

  const data = useActionData();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="flex justify-center w-full">
      <Form method="post" className="grid grid-cols-1 gap-4 w-full max-w-md">
        <h1 className="font-bold text-2xl">{isLogin ? "Log In" : "Sign Up"}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <div className="grid grid-cols-1 gap-2">
          <input
            className="w-full bg-neutral-900 p-2 rounded-md"
            name="email"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full bg-neutral-900 p-2 rounded-md"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-end w-full">
          <div className="grid grid-flow-col auto-cols-fr gap-2 max-w-sm">
            <div className="bg-neutral-900 hover:bg-neutral-800 rounded-md px-4 py-2">
              {/* !For setup (Query Parameter) */}
              <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
                {isLogin ? "Sign Up" : "Log In"}
              </Link>
            </div>

            <Button
              attr={{ disabled: isSubmitting }}
              className="bg-yellow-500 text-neutral-900 hover:bg-yellow-500/75"
            >
              {isSubmitting ? "Submitting..." : isLogin ? "Log In" : "Sign Up"}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AuthForm;
