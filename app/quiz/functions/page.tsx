"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, CheckCircle, XCircle, Award } from "lucide-react"

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 1,
      question: "Qual palavra-chave é usada para definir uma função em Go?",
      options: [
        { id: "a", text: "function" },
        { id: "b", text: "func" },
        { id: "c", text: "def" },
        { id: "d", text: "method" },
      ],
      correctAnswer: "b",
    },
    {
      id: 2,
      question: "Uma função Go pode retornar múltiplos valores?",
      options: [
        { id: "a", text: "Sim, qualquer número de valores" },
        { id: "b", text: "Não, apenas um valor por função" },
        { id: "c", text: "Sim, mas apenas se forem do mesmo tipo" },
        { id: "d", text: "Sim, mas apenas dois valores no máximo" },
      ],
      correctAnswer: "a",
    },
    {
      id: 3,
      question: "O que é um closure em Go?",
      options: [
        { id: "a", text: "Uma forma de fechar uma função e impedir chamadas adicionais" },
        { id: "b", text: "Uma função que retorna outra função" },
        { id: "c", text: "Uma função que pode acessar variáveis de seu escopo externo" },
        { id: "d", text: "Uma função sem parâmetros" },
      ],
      correctAnswer: "c",
    },
    {
      id: 4,
      question: "Qual das seguintes é uma declaração de função válida em Go?",
      options: [
        { id: "a", text: "function add(a, b int) int { return a + b }" },
        { id: "b", text: "func add(a int, b int) { return a + b }" },
        { id: "c", text: "func add(a, b int) int { return a + b }" },
        { id: "d", text: "def add(a, b int) int { return a + b }" },
      ],
      correctAnswer: "c",
    },
    {
      id: 5,
      question: "Qual é a forma idiomática de lidar com erros em funções Go?",
      options: [
        { id: "a", text: "Usar blocos try/catch" },
        { id: "b", text: "Retornar um erro como o último valor de retorno" },
        { id: "c", text: "Usar panic() e recover()" },
        { id: "d", text: "Lançar exceções" },
      ],
      correctAnswer: "b",
    },
  ]

  const handleAnswerSelect = (answerId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questions[currentQuestion].id]: answerId,
    })
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let correctCount = 0
    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctCount++
      }
    })
    return correctCount
  }

  const score = calculateScore()
  const percentage = (score / questions.length) * 100

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-sky-600 text-white p-4">
        <div className="flex items-center justify-between">
          <Link href="/lesson" className="flex items-center gap-2">
            <ArrowLeft size={20} />
            <h1 className="font-medium">Quiz de Funções</h1>
          </Link>
        </div>
        {!showResults && (
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1">
              <span>
                Questão {currentQuestion + 1} de {questions.length}
              </span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-1" />
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 pb-20">
        {!showResults ? (
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-xl font-bold text-sky-800 mb-6">{questions[currentQuestion].question}</h2>

            <RadioGroup
              value={selectedAnswers[questions[currentQuestion].id] || ""}
              onValueChange={handleAnswerSelect}
              className="space-y-4"
            >
              {questions[currentQuestion].options.map((option) => (
                <div key={option.id} className="flex items-center space-x-2 border p-3 rounded-lg">
                  <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                  <Label htmlFor={`option-${option.id}`} className="flex-1 cursor-pointer">
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={handlePrevQuestion} disabled={currentQuestion === 0}>
                Anterior
              </Button>
              <Button
                className="bg-sky-600 hover:bg-sky-700"
                onClick={handleNextQuestion}
                disabled={!selectedAnswers[questions[currentQuestion].id]}
              >
                {currentQuestion < questions.length - 1 ? "Próximo" : "Finalizar Quiz"}
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg border p-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center p-4 bg-sky-50 rounded-full mb-4">
                <Award size={40} className="text-sky-600" />
              </div>
              <h2 className="text-2xl font-bold text-sky-800">Resultados do Quiz</h2>
              <p className="text-gray-600">
                Você acertou {score} de {questions.length} ({Math.round(percentage)}%)
              </p>

              <div className="mt-4 mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-gray-500">Pontuação</span>
                  <span className="text-xs text-gray-500">{Math.round(percentage)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${percentage >= 70 ? "bg-green-500" : "bg-amber-500"}`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>

              {percentage >= 70 ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 text-green-600 mb-2">
                    <CheckCircle size={20} />
                    <h3 className="font-bold">Parabéns!</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Você passou no quiz! Você tem um bom entendimento de funções em Go.
                  </p>
                </div>
              ) : (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 text-amber-600 mb-2">
                    <XCircle size={20} />
                    <h3 className="font-bold">Quase lá!</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Você pode querer revisar a lição sobre funções novamente para melhorar seu entendimento.
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-gray-700 border-b pb-2">Revise Suas Respostas</h3>

              {questions.map((question, index) => (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <div
                      className={`mt-1 flex-shrink-0 ${selectedAnswers[question.id] === question.correctAnswer ? "text-green-500" : "text-red-500"}`}
                    >
                      {selectedAnswers[question.id] === question.correctAnswer ? (
                        <CheckCircle size={16} />
                      ) : (
                        <XCircle size={16} />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Questão {index + 1}: {question.question}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Sua resposta:{" "}
                        {question.options.find((o) => o.id === selectedAnswers[question.id])?.text || "Não respondida"}
                      </p>
                      {selectedAnswers[question.id] !== question.correctAnswer && (
                        <p className="text-sm text-green-600 mt-1">
                          Resposta correta: {question.options.find((o) => o.id === question.correctAnswer)?.text}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <Button variant="outline" asChild>
                <Link href="/lesson">Voltar para a Lição</Link>
              </Button>
              <Button className="bg-sky-600 hover:bg-sky-700" asChild>
                <Link href="/dashboard">Continuar Aprendendo</Link>
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
