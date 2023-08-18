const level1Strings = ["If you were to buy me a present, knowing nothing about me other than what I look like, what would it be?", "Think of your favorite brand of cereal. On the count of three, say your answers out loud.", "How many speeding tickets do you think I've gotten in my life?", "Think of your favorite childhood TV show of all time. On the count of three, say it out loud.", "Rate your dancing skills on a scale of 1-10. On the count of three, say your answers out loud.", "Do you think I've ever been fired from a job? If so, what for?", "What's the first thing you noticed about me?", "Do you think I've ever checked an ex's phone for evidence?", "Do I seem like a coffee or tea person? Sweetened or unsweetened?", "What does my phone wallpaper tell you about me?", "Close your eyes. What color is my shirt?", "What do you think I'm most likely to splurge on?", "As a child, what do you think I wanted to be?", "What do you think is the hardest part of what I do for a living?", 
                        "What does my Instagram tell you about me?", "Do I seem like more of a creative or analytical type? Explain.", "Maintain eye contact for thirty seconds. What did you notice?", "What fast food restaurant do you think I'm most likely to drive through? What's my order?", "What subject do you think I thrived in at school? Did I fail any?", "Do I seem like a cat or dog person?", "What do my shoes tell you about me?", "How likely am I to go camping? How high maintenance is my set up?", "What is my body language telling you right now?", "What was your first impression of me?", "Do you think plants thrive or die in my care? Explain.", "Do I remind you of anyone?", "What character would I play in a movie?", "What reality show do you think I'm most likely to binge watch? Explain.", "Finish the sentence: Just by looking at you I'd think _________.", "Do you think I'm usually early, on time, or late to events? Explain.", "What compliment do you think I hear the most?", "Do I seem like someone who would get a name tattooed on myself? Why or why not?", "What do you think my go to karaoke song is?", "Do you think I intimidate others? Why or why not?", "Do you think I was popular in school? Explain.", "If MySpace were still a thing, what would my profile song be?", "What about me intrigues you?", "Do you thinkI fall in love easily? Why or why not?", "Who do you think my celebrity crush is?", "What about me is most strange or unfamiliar to you?", "Do I look kind? Explain.", "Do I seem like a morning person or a night owl? Why?"];
const level2Strings = ["String 2A", "String 2B", "String 2C"];
const level3Strings = ["String 3A", "String 3B", "String 3C"];

function getRandomString(strings) {
  const randomIndex = Math.floor(Math.random() * strings.length);
  return strings[randomIndex];
}

function showRandomString(level, levelNum) {
  const randomString = getRandomString(level);
  document.body.innerHTML = `
    <div class="container">
      <h1>Level ${levelNum}</h1>
      <p>${randomString}</p>
      <button id="backBtn">Back</button>
    </div>
  `;

  const backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", () => {
    location.reload();
  });
}

document.getElementById("level1").addEventListener("click", () => {
  showRandomString(level1Strings, 1);
});

document.getElementById("level2").addEventListener("click", () => {
  showRandomString(level2Strings, 2);
});

document.getElementById("level3").addEventListener("click", () => {
  showRandomString(level3String, 3);
});
