import { getSession } from "@auth/express"

export function authSession(req: Request, res: Response, next: NextFunction) {
  res.locals.session = await getSession(req)
  next()
}

app.use(authSession)

// Now in your route
app.get("/", (req, res) => {
  const { session } = res.locals
  res.render("index", { user: session?.user })
})