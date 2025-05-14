import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Code } from "lucide-react"

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center border-b">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-sky-600 text-white p-2 rounded-lg">
            <Code size={20} />
          </div>
          <h1 className="text-xl font-bold text-sky-700">Gopilot</h1>
        </Link>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-sky-800 mb-6 text-center">Bem-vindo de Volta</h2>

          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="joao@exemplo.com" />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>

            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-sm text-sky-600 hover:underline">
                Esqueceu a senha?
              </Link>
            </div>

            <Button className="w-full bg-sky-600 hover:bg-sky-700" asChild>
              <Link href="/dashboard">Entrar</Link>
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Ou continue com</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                Google
              </Button>
              <Button variant="outline" className="w-full">
                GitHub
              </Button>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Não tem uma conta?{" "}
                <Link href="/register" className="text-sky-600 hover:underline font-medium">
                  Cadastre-se
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
