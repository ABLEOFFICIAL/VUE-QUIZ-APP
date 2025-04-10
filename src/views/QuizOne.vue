<template>
  <div>
    <div class="header">
      <div>
        <h2>Lesson 1.1</h2>
      </div>
      <div class="level">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
    </div>
    <div class="display-block">
      <div class="display" v-if="quizes[currentQuizIndex]">
        <h2 class="question">{{ quizes[currentQuizIndex].question }}</h2>
        <!-- cards containers -->
        <div class="options">
          <div
            class="main"
            v-for="option in quizes[currentQuizIndex].options"
            :key="option.id"
            @click="toggleFlip(option)"
          >
            <div class="main-card" :class="{ flipped: option.flip }">
              <!-- each front card -->
              <div class="front">
                <h2>{{ option.name }}</h2>
              </div>
              <div v-if="option.flip" class="back">
                <h2>{{ option.descriptionTitle }}</h2>
                <p class="description">{{ option.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <button @click="goToNext()">{{ button }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      button: "Next",
      clickedOptions: [],
      correctAnswer: [],
      currentQuizIndex: 0,
      quizes: [
        {
          question: "Tap to discover states of matter",
          options: [
            {
              id: 1,
              name: "Solid",
              image: "../assets/solid.png",
              descriptionTitle: "Solid",
              description:
                "A solid is characterized by its definite shape and volume.",
              flip: false,
              correct: true,
            },
            {
              id: 2,
              name: "liquid",
              image: "../assets/solid.png",
              descriptionTitle: "liquid",
              description:
                "A solid is characterized by its definite shape and volume.",
              flip: false,
              correct: true,
            },
            {
              id: 3,
              name: "gas",
              image: "../assets/solid.png",
              descriptionTitle: "gas",
              description:
                "A solid is characterized by its definite shape and volume.",
              flip: false,
              correct: true,
            },
            {
              id: 4,
              name: "lightening",
              image: "../assets/solid.png",
              descriptionTitle: "lightening",
              description:
                "A solid is characterized by its definite shape and volume.",
              flip: false,
              correct: false,
            },
          ],
        },
        {
          question: "Which of these are renewable sources of energy?",
          options: [
            {
              id: 1,
              name: "Solar",
              image: "../assets/solar.png",
              descriptionTitle: "Solar Energy",
              description:
                "Solar energy is harnessed from the sun and is renewable.",
              flip: false,
              correct: true,
            },
            {
              id: 2,
              name: "Wind",
              image: "../assets/wind.png",
              descriptionTitle: "Wind Energy",
              description:
                "Wind energy is renewable and is captured using turbines.",
              flip: false,
              correct: true,
            },
            {
              id: 3,
              name: "Coal",
              image: "../assets/coal.png",
              descriptionTitle: "Coal",
              description: "Coal is a fossil fuel and is not renewable.",
              flip: false,
              correct: false,
            },
            {
              id: 4,
              name: "Hydropower",
              image: "../assets/hydro.png",
              descriptionTitle: "Hydropower",
              description:
                "Hydropower uses moving water to generate electricity and is renewable.",
              flip: false,
              correct: true,
            },
          ],
        },
        {
          question: "Select the parts of a plant",
          options: [
            {
              id: 1,
              name: "Leaf",
              image: "../assets/leaf.png",
              descriptionTitle: "Leaf",
              description: "The leaf is where photosynthesis takes place.",
              flip: false,
              correct: true,
            },
            {
              id: 2,
              name: "Root",
              image: "../assets/root.png",
              descriptionTitle: "Root",
              description:
                "Roots anchor the plant and absorb water and nutrients.",
              flip: false,
              correct: true,
            },
            {
              id: 3,
              name: "Flower",
              image: "../assets/flower.png",
              descriptionTitle: "Flower",
              description: "The flower is the reproductive part of the plant.",
              flip: false,
              correct: true,
            },
            {
              id: 4,
              name: "Rock",
              image: "../assets/rock.png",
              descriptionTitle: "Rock",
              description: "A rock is not a part of a plant.",
              flip: false,
              correct: false,
            },
          ],
        },
        {
          question: "Tap to discover planets in our solar system",
          options: [
            {
              id: 1,
              name: "Mars",
              image: "../assets/mars.png",
              descriptionTitle: "Mars",
              description:
                "Mars is the fourth planet from the Sun, known as the Red Planet.",
              flip: false,
              correct: true,
            },
            {
              id: 2,
              name: "Venus",
              image: "../assets/venus.png",
              descriptionTitle: "Venus",
              description:
                "Venus is the second planet from the Sun and is similar in size to Earth.",
              flip: false,
              correct: true,
            },
            {
              id: 3,
              name: "Pluto",
              image: "../assets/pluto.png",
              descriptionTitle: "Pluto",
              description:
                "Pluto is a dwarf planet, not officially one of the main planets.",
              flip: false,
              correct: false,
            },
            {
              id: 4,
              name: "Jupiter",
              image: "../assets/jupiter.png",
              descriptionTitle: "Jupiter",
              description: "Jupiter is the largest planet in the solar system.",
              flip: false,
              correct: true,
            },
          ],
        },
      ],
    };
  },
  methods: {
    // store(option) {
    //   // push clicked option to the clickedOptions array
    //
    //   console.log(this.clickedOptions);
    // },
    toggleFlip(option) {
      option.flip = !option.flip;
      // run a store function to save the clicked option
      this.clickedOptions.push(option);
      console.log(option.flip);
      console.log(this.clickedOptions);
    },
    goToNext() {
      const quiz = this.quizes[this.currentQuizIndex];
      const filterCorrect = quiz.options.filter((option) => option.correct);
      this.correctAnswer.push(filterCorrect);
      // Get ids of clicked options
      const clickedIds = this.clickedOptions.map((opt) => opt.id);

      // Get ids of correct answers
      const correctIds = filterCorrect.map((opt) => opt.id);
      // checks if clicked options are correct
      const isCorrect = correctIds.every((id) => clickedIds.includes(id));

      if (isCorrect) {
        console.log("correct answer");
      } else {
        console.log("wrong answer");
      }
      // this.$emit("next");
      // console.log(this.correctAnswer);
      this.currentQuizIndex++;
      this.clickedOptions = []; // Clear previous clicked options
      if (this.currentQuizIndex < this.quizes.length - 1) {
        this.currentQuizIndex++;
      } else {
        console.log("End of quiz");
      }
    },
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 95%;
  margin-inline: auto;
  height: 10%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 10px;
  border-bottom: 1px solid #ccc;
  z-index: 1000;
}
span {
  display: inline-block;
  width: 10px;
  height: 4px;
  background-color: #ccc;
  border-radius: 5px;
  margin-right: 5px;
}
.display {
  height: 70vh;
}
.display-block {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  height: 100%;
  margin-top: 30%;
}
.question {
  text-align: center;
  width: 80%;
  margin-inline: auto;
}
.options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 90%;
  margin-inline: auto;
  gap: 20px;
}
/* .option {
    background-color: #ff6600;
    color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
  } */
.main {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.main-card {
  position: absolute;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.6s ease;
}
.front {
  position: absolute;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: purple;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.front h2 {
  font-size: 20px;
  font-weight: 700;
}
.back {
  position: absolute;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: purple;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
}
.description {
  text-align: center;
  width: 80%;
  margin-inline: auto;
}
button {
  background-color: #16157c;
  color: white;
  padding: 1.2rem 4rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  margin-inline: auto;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}
.flipped {
  transform: rotateY(180deg);
}
</style>
