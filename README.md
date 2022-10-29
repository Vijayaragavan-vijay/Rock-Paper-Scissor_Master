# Rock-Paper-Scissor_Master

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer

### Screenshot
Mobile view:

![Mobile1](https://user-images.githubusercontent.com/95960286/198844019-2210212e-7d6e-475d-a5db-30b9706aad2b.png)

![mobile](https://user-images.githubusercontent.com/95960286/198844020-678a39ca-58b2-44eb-a7e8-14c59887b3fe.png)

Desktop view:

![desktop1](https://user-images.githubusercontent.com/95960286/198844045-cd65946b-ecb7-4d2b-8cbf-0d61f195a47e.png)

![desktop](https://user-images.githubusercontent.com/95960286/198844048-332d3b2d-ccd5-4e08-a2d6-21f9979c63ce.png)

### Links

- Solution URL: [solution](https://your-solution-url.com)
- Live Site URL: [live site](https://vijayrockpaperscissor.netlify.app/)



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```
    paper.addEventListener('click', (e) => {
    validate_variable = 1;
    showpaper(paper);
    let randomoption = calculation(paper);

    if (randomoption == 0) {
        print_Output.textContent = "DRAW";
    } else if (randomoption == 1) {
        print_Output.textContent = "YOU LOSE";
    } else {
        print_Output.textContent = "YOU WIN";
        score_value++;
        score.textContent = score_value;
    }
    rulesBtn.style.display = "none";

})

```

## Author

- Frontend Mentor - [Vijayaragavan](https://www.frontendmentor.io/profile/yourusername)
