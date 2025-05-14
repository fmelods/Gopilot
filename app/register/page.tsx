"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Code } from "lucide-react"

export default function Register() {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

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
          {/* Progress indicator */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              {["Conta", "Experiência", "Objetivos", "Finalizar"].map((label, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 
                      ${
                        i + 1 < step
                          ? "bg-green-500 text-white"
                          : i + 1 === step
                            ? "bg-sky-600 text-white"
                            : "bg-gray-200 text-gray-500"
                      }`}
                  >
                    {i + 1 < step ? "✓" : i + 1}
                  </div>
                  <span className="text-xs text-gray-500">{label}</span>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 h-1 rounded-full">
              <div
                className="bg-sky-600 h-1 rounded-full transition-all duration-300"
                style={{ width: `${(step - 1) * 33.33}%` }}
              ></div>
            </div>
          </div>

          {step === 1 && (
            <>
              <h2 className="text-2xl font-bold text-sky-800 mb-6">Crie Sua Conta</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="João Silva" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="joao@exemplo.com" />
                </div>
                <div>
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <div>
                  <Label htmlFor="confirm-password">Confirmar Senha</Label>
                  <Input id="confirm-password" type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full bg-sky-600 hover:bg-sky-700" onClick={nextStep}>
                  Continuar
                </Button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-2xl font-bold text-sky-800 mb-6">Sua Experiência</h2>
              <div className="space-y-4">
                <div>
                  <Label>Experiência em Programação</Label>
                  <RadioGroup defaultValue="beginner" className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="beginner" id="beginner" />
                      <Label htmlFor="beginner">Iniciante (Novo em programação)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="intermediate" id="intermediate" />
                      <Label htmlFor="intermediate">Intermediário (Alguma experiência em programação)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="advanced" id="advanced" />
                      <Label htmlFor="advanced">Avançado (Programador experiente)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Experiência com Go</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione sua experiência com Go" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Nenhuma (Iniciante completo)</SelectItem>
                      <SelectItem value="basics">Básico (Familiarizado com a sintaxe)</SelectItem>
                      <SelectItem value="intermediate">Intermediário (Construiu pequenos projetos)</SelectItem>
                      <SelectItem value="advanced">Avançado (Experiência profissional)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Tópicos Desafiadores (Selecione todos que se aplicam)</Label>
                  <div className="mt-2 space-y-2">
                    {[
                      "Concorrência",
                      "Interfaces",
                      "Goroutines",
                      "Tratamento de Erros",
                      "Gerenciamento de Memória",
                    ].map((topic) => (
                      <div key={topic} className="flex items-center space-x-2">
                        <Checkbox id={topic.toLowerCase()} />
                        <Label htmlFor={topic.toLowerCase()}>{topic}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" onClick={prevStep}>
                    <ArrowLeft className="mr-2" size={16} />
                    Voltar
                  </Button>
                  <Button className="flex-1 bg-sky-600 hover:bg-sky-700" onClick={nextStep}>
                    Continuar
                  </Button>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-2xl font-bold text-sky-800 mb-6">Seus Objetivos</h2>
              <div className="space-y-4">
                <div>
                  <Label>Objetivo Principal</Label>
                  <RadioGroup defaultValue="job" className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="job" id="job" />
                      <Label htmlFor="job">Conseguir um emprego como desenvolvedor Go</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="project" id="project" />
                      <Label htmlFor="project">Construir um projeto específico</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="skill" id="skill" />
                      <Label htmlFor="skill">Aprender uma nova habilidade</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="certification" id="certification" />
                      <Label htmlFor="certification">Obter certificação</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Compromisso de Tempo de Aprendizado</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione seu compromisso de tempo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casual">Casual (1-2 horas/semana)</SelectItem>
                      <SelectItem value="regular">Regular (3-5 horas/semana)</SelectItem>
                      <SelectItem value="dedicated">Dedicado (5-10 horas/semana)</SelectItem>
                      <SelectItem value="intensive">Intensivo (10+ horas/semana)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Áreas de Interesse (Selecione todas que se aplicam)</Label>
                  <div className="mt-2 space-y-2">
                    {[
                      "Desenvolvimento Web",
                      "Microsserviços",
                      "Aplicações CLI",
                      "Processamento de Dados",
                      "DevOps",
                      "Desenvolvimento de Jogos",
                    ].map((area) => (
                      <div key={area} className="flex items-center space-x-2">
                        <Checkbox id={area.toLowerCase().replace(/\s+/g, "-")} />
                        <Label htmlFor={area.toLowerCase().replace(/\s+/g, "-")}>{area}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" onClick={prevStep}>
                    <ArrowLeft className="mr-2" size={16} />
                    Voltar
                  </Button>
                  <Button className="flex-1 bg-sky-600 hover:bg-sky-700" onClick={nextStep}>
                    Continuar
                  </Button>
                </div>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <h2 className="text-2xl font-bold text-sky-800 mb-6">Pronto para Começar!</h2>
              <div className="text-center space-y-4">
                <div className="bg-sky-100 text-sky-800 p-4 rounded-lg mb-6">
                  <p className="font-medium">Sua trilha de aprendizado personalizada está pronta!</p>
                  <p className="text-sm mt-2">
                    Com base no seu perfil, criamos um roteiro personalizado para ajudá-lo a dominar a programação Go.
                  </p>
                </div>

                <div className="py-4">
                  <div className="w-24 h-24 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code size={48} />
                  </div>
                  <p className="text-gray-600">Sua jornada para se tornar um especialista em Go começa agora!</p>
                </div>

                <Button className="w-full bg-sky-600 hover:bg-sky-700" asChild>
                  <Link href="/dashboard">Começar a Aprender</Link>
                </Button>

                <p className="text-xs text-gray-500 mt-4">
                  Ao clicar em "Começar a Aprender", você concorda com nossos Termos de Serviço e Política de
                  Privacidade.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
