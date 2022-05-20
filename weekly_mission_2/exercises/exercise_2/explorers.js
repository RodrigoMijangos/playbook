const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
];

function nombreYStackExplorers(){
    const list = explorers;
    let msg = "";
    list.forEach((explorer, index) => {
        msg += `${index}: ${explorer.name}\nStacks:\n`;
        explorer.stack.forEach( (stack, index) => {
            msg += `\t${index}: ${stack}\n`;
        });
    });
    return msg;
};

function newListFromMaps(){
    const list = explorers;
    const stacks = list.map(explorer => {
        return explorer.stack.map(stack => {return stack})
    });

    return stacks;
};

function explorersWithStack(stack){
    const list = explorers;
    return list.filter(explorer => 
        explorer.stack.includes(stack)
    );
}

function firstExplorerFrom(city){
    const list = explorers;
    return list.find(explorer => explorer.city == city);
}

function exercisesCompleted(){
    const list = explorers;
    return list.reduce((acc, explorer) => acc + explorer.exercises_completed, 0);
}

function verificationSomeFrontEnd(){
  const list = explorers;
  return list.some( explorer => explorer.missions.frontend.isFinished === true);
}

function verificationEveryOnBoarding(){
  const list = explorers;
  return list.every( explorer => explorer.missions.onboarding.isFinished === true );
}