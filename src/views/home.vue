<template>
  <div class="fixed flex-col flex top-0 items-center justify-start left-0 h-screen w-screen">
    <div class="flex  w-full shadow-md bg-green-700 justify-center items-center text-white p-5 text-4xl font-bold">
      Quiz App
    </div>
    <div v-if="isVisible2" class="flex flex-1 flex-col w-full h-full px-3 justify-center items-center">
      <div class="flex text-3xl font-semibold items-center">
        <p class="max-w-[400px] sm:max-w-[700px]"> Welcome to this <span class="ml-2 text-green-700 font-bold">Quiz App</span>. Keep your brain fresh by answering some quick questions</p>
      </div>
      <button @click="isVisible = true, isVisible2= false, loadQuiz()" class="flex bg-green-700 shadow-2xl hover:bg-green-600 text-white font-semibold py-4 px-8 mt-[80px]">Start Quiz</button>
    </div>
    <div v-if="isVisible4" class="flex flex-1 flex-col w-full h-full justify-center items-center">
      <div class="flex text-3xl font-semibold items-center flex-col">
        <p class="max-w-[400px] sm:max-w-[700px]">The quiz is over</p>
        <p class="mt-6 text-[25px]">You had {{ score }} correct out of {{ contents.length }}</p>
      </div>
      <button @click="isVisible = true, isVisible2= false, loadQuiz()" class="flex bg-green-700 shadow-2xl hover:bg-green-600 text-white font-semibold py-4 px-8 mt-[80px]">Start Another Quiz</button>
    </div>
    <div v-if="isVisible" class=" flex flex-1 sm:w-[600px] justify-center w-full px-4 py-5 items-start">
      <div class=" h-full flex cursor-pointer flex-col bg-white w-full shadow-inner border rounded-md">
        <div class="flex w-full text-green-700 font-bold text-2xl justify-center px-4 py-5 shadow-sm">Question {{ questionprops.Qno + 1 }}</div>
        <div class="flex w-full font-semibold text-left text-xl justify-start px-8 py-5 min-h-[180px]">{{ questionprops.question }}</div>
        <div class="grid gap-y-3 px-4 mb-4 sm:gap-x-3">
          <div  :class="answer === questionprops.answers.a ? 'bg-blue-200' : 'bg-gray-50'" @click="answer = questionprops.answers.a" class=" bg-gray-50 flex py-2 px-2 text-xl font-semibold shadow-sm shadow-black rounded-md">
            <span>A.</span>
            <span class="pl-4">{{ questionprops.answers.a }}</span>
          </div>
          <div :class="answer === questionprops.answers.b ? 'bg-blue-200' : 'bg-gray-50'" @click="answer = questionprops.answers.b" class=" bg-gray-50 flex py-2 px-2 text-xl font-semibold shadow-sm shadow-black rounded-md">
            <span>B.</span>
            <span class="pl-4">{{ questionprops.answers.b }}</span>
          </div>
          <div :class="answer === questionprops.answers.c ? 'bg-blue-200' : 'bg-gray-50'"  @click="answer = questionprops.answers.c" class=" bg-gray-50 flex py-2 px-2 text-xl font-semibold shadow-sm shadow-black rounded-md">
            <span>C.</span>
            <span class="pl-4">{{ questionprops.answers.c }}</span>
          </div>
          <div :class="answer === questionprops.answers.d ? 'bg-blue-200' : 'bg-gray-50'" @click="answer = questionprops.answers.d" class=" bg-gray-50 flex py-2 px-2 text-xl font-semibold shadow-sm shadow-black rounded-md">
            <span>D.</span>
            <span class="pl-4">{{ questionprops.answers.d }}</span>
          </div>
        </div>
        <p v-if="declaration.correct" class="text-xl font-semibold text-green-700 w-full px-7 text-left">Correct!!!</p>
        <p v-if="declaration.wrong" class="text-xl font-semibold text-red-700 w-full px-7 text-left">Wrong!!!</p>
        <button v-if="isVisible3" @click="isVisible3=false, checkAnswer()" class="flex items-center text-white py-2 mt-6 hover:bg-green-600 border-none hover:border-none font-semibold active:border-none focus:border-none justify-center bg-green-700 mx-4">Check</button>
        <button @click="isVisible3=true, nextQuestion()" v-else class="flex items-center text-white py-2 mt-6 hover:bg-green-600 border-none hover:border-none font-semibold active:border-none focus:border-none justify-center bg-green-700 mx-4">Next</button>
      </div>
    </div>
  </div>
</template>
<script>
import {ref} from 'vue'
export default {
  data(){
    return {
      score: 0,
      isVisible: false, isVisible2: true, answer: '', isVisible3: true, isVisible4: false,
      questionprops:{
        Qno: -1,
        question: null,
        answers:{
          a: null, b: null, c: null, d: null
        },
        correctAnswer: null,
        colorChanger: false
      },
      contents: [
        {
          question : "What is Biology?",
          answers : {
            a : 'The study of food',
            b : 'The study of life',
            c : 'The study of tiredness',
            d : 'The study of nature',
          },
          correctAnswer: 'The study of life',
          colorChanger: false,
        },
        {
          question : "Who is the head of a internal family?",
          answers : {
            a : 'The father',
            b : 'The mother',
            c : 'The child',
            d : 'The grandpa',
          },
          correctAnswer: 'The father',
          colorChanger: false,
        },
        {
          question : "Which anime series has been the highest popular for a real longest time?",
          answers : {
            a : 'One Piece',
            b : 'High School DXD',
            c : 'To Love Ru',
            d : 'Naruto',
          },
          correctAnswer: 'One Piece',
          colorChanger: false,
        },
        {
          question : "What is the favourite food of a dog?",
          answers : {
            a : 'Banana',
            b : 'Bones',
            c : 'Meat and fish',
            d : 'guavas',
          },
          correctAnswer: 'Meat and fish',
          colorChanger: false,
        },
        {
          question : "Who is your dad to the family?",
          answers : {
            a : 'The head of the family',
            b : 'A carpenter',
            c : 'The junk',
            d : 'The ashawo',
          },
          correctAnswer: 'The head of the family',
          colorChanger: false,
        },
      ],
      declaration:{
        correct: false,
        wrong: false
      }
    }
  },
  methods:{
    loadQuiz(){
      this.questionprops.Qno += 1
      this.questionprops.question = this.contents[this.questionprops.Qno].question
      this.questionprops.answers.a = this.contents[this.questionprops.Qno].answers.a
      this.questionprops.answers.b = this.contents[this.questionprops.Qno].answers.b
      this.questionprops.answers.c = this.contents[this.questionprops.Qno].answers.c
      this.questionprops.answers.d = this.contents[this.questionprops.Qno].answers.d
      this.questionprops.correctAnswer = this.contents[this.questionprops.Qno].correctAnswer
      
    },
    nextQuestion(){
      this.declaration.correct = false
      this.declaration.wrong = false
      if(this.questionprops.Qno + 1 >= this.contents.length){
        this.isVisible4 = true
        this.isVisible = false
        this.questionprops.Qno = -1
      }
      this.loadQuiz()
    },
    checkAnswer(){
      if (this.answer === this.questionprops.correctAnswer){
        this.declaration.correct = true
        this.score++
      }else{
        this.declaration.wrong = true
      }
    }
  }
  
}

</script>