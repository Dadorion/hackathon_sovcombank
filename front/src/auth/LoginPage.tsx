import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export function LoginPage() {
  let navigate = useNavigate();
  let auth = useAuth();

  // let from = location.state?.from?.pathname || "/recruiter";
  const from = "/recruiter";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    if (
      !username.length ||
      !password.length ||
      username !== "admin" ||
      password !== "admin"
    )
      return;
    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }

  return (
    <div className="flex h-full items-center justify-center bg-[#1B378C] ">
      <div className="flex w-[500px] flex-col items-center justify-center gap-4 rounded-xl bg-white px-12 py-9">
        <p>You must log in to view the page at {from}</p>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col justify-start gap-3"
        >
          <label>
            Username:{" "}
            <input className="rounded-sm border" name="username" type="text" />
          </label>
          <label>
            Password:{" "}
            <input
              className="rounded-sm border"
              type="password"
              name="password"
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
