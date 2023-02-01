import { useSession, signIn, signOut } from "next-auth/react"

export default function CamperVanPage() {
  const { data: session, status } = useSession()
  const userName = session?.user.name

  if (status === "loading") {
    return <p>waiting...</p>
  }

  if (status === "authenticated") {
    return (
      <div className={`flex flex-col text-center min-h-screen justify-center m-auto gap-4 bg-black`}>
        <div>
          <p className="text-white font-bold text-3xl">Welcome to your account! {userName}</p>
        </div>
        <div>
          <button className={`bg-white py-2 px-9 mt-10 rounded-3xl`} onClick={() => signOut()}>
            Sign out
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-black`}>
      <div className={`flex flex-col text-center min-h-screen justify-center m-auto gap-4 max-w-max`}>
        <p className="font-bold text-white">Welcome to Unknown.</p>
        <div className={`flex justify-center items-center gap-4 bg-white py-2 px-9 rounded-3xl`}>
          <h6 className={`w-5`}>
            <img src="/github.svg" alt="" />
          </h6>
          <button onClick={() => signIn("github")}>Sign in with Github</button>
        </div>

        <div className={`flex justify-center items-center gap-4 bg-white py-2 px-9 rounded-3xl`}>
          <h6 className={`w-5`}>
            <img src="/google.svg" alt="" />
          </h6>
          <button onClick={() => signIn("google")}>Sign in with Google</button>
        </div>
      </div>
    </div>
  )
}
