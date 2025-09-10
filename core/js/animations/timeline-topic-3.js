// Timeline Data for Scene 01
// This file contains all the anime.js timeline configuration

// Make the function globally available
window.createTimeline = function(timelineController) {
const { timeline, addPause } = timelineController;
let itemNumber = 1;

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// Scene 01: Fade In (Mia and Alex simultaneously)
///////////////////////////////////////////////////////////////////////////////////////////
timeline
  .add({
    targets:  ['#s03-loading'],
    opacity: [0, 0],
    duration: 10, // Instant change
    easing: 'linear',
  begin: () => {
    console.log(`Timeline Item ${itemNumber++}: First timeline node completed.`);
  },
  error: (error) => {
    console.error(`Timeline Item ${itemNumber} Error: First timeline node failed -`, error);
  }  
})
.add({
  targets: ['#s03-loading'],
  opacity: [0, 1],
  duration: 1000,
  easing: 'linear',
  begin: () => {
    console.log(`Timeline Item ${itemNumber++}: Fading inRiley and Sam (Scene 02)`);
    document.getElementById('s03-loading').setAttribute('visible', true);      
  }
})
.add({
targets: '#scenario-assets-topic-group-3',
opacity: [0, 1],
duration: 10, // Instant change
easing: 'linear',
complete: () => {

document.getElementById('scenario-assets-topic-group-3').setAttribute('opacity', 0);
document.getElementById('scenario-assets-topic-group-3').setAttribute('visible', false);   

document.querySelector('.scenario-ui-prompt-button-area').style.display = "none";
document.querySelector('.scenario-ui-prompt-button-area').style.opacity = 0;
document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
document.querySelector('.scenario-ui-prompt-speech.left').style.opacity = 0;
document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
document.querySelector('.scenario-ui-prompt-speech.right').style.opacity = 0;


document.getElementById('s03-speech-lt').setAttribute('opacity', 0);
document.getElementById('s03-speech-rt').setAttribute('opacity', 0);
document.getElementById('s03s01-Riley').setAttribute('opacity', 0);
document.getElementById('s03s01-Sam').setAttribute('opacity', 0);
document.getElementById('s03s02-Riley').setAttribute('opacity', 0);
document.getElementById('s03s02-Sam').setAttribute('opacity', 0);
document.getElementById('s03s03-Riley').setAttribute('opacity', 0);
document.getElementById('s03s03-Sam').setAttribute('opacity', 0);
document.getElementById('s03s04-Riley').setAttribute('opacity', 0);
document.getElementById('s03s04-Sam').setAttribute('opacity', 0);
document.getElementById('s03s05-Riley').setAttribute('opacity', 0);
document.getElementById('s03s05-Sam').setAttribute('opacity', 0);
document.getElementById('s03s06-Riley').setAttribute('opacity', 0);
document.getElementById('s03s06-Sam').setAttribute('opacity', 0);
document.getElementById('s03-desk').setAttribute('opacity', 0);
document.getElementById('s03-printer').setAttribute('opacity', 0);
document.getElementById('s03-plant').setAttribute('opacity', 0);
document.getElementById('s03-divider').setAttribute('opacity', 0);
document.getElementById('s03-speech-lt').setAttribute('visible', false);
document.getElementById('s03-speech-rt').setAttribute('visible', false);
document.getElementById('s03s01-Riley').setAttribute('visible', false);
document.getElementById('s03s01-Sam').setAttribute('visible', false);
document.getElementById('s03s02-Riley').setAttribute('visible', false);
document.getElementById('s03s02-Sam').setAttribute('visible', false);
document.getElementById('s03s03-Riley').setAttribute('visible', false);
document.getElementById('s03s03-Sam').setAttribute('visible', false);
document.getElementById('s03s04-Riley').setAttribute('visible', false);
document.getElementById('s03s04-Sam').setAttribute('visible', false);
document.getElementById('s03s05-Riley').setAttribute('visible', false);
document.getElementById('s03s05-Sam').setAttribute('visible', false);
document.getElementById('s03s06-Riley').setAttribute('visible', false);
document.getElementById('s03s06-Sam').setAttribute('visible', false);
document.getElementById('s03-desk').setAttribute('visible', false);
document.getElementById('s03-printer').setAttribute('visible', false);
document.getElementById('s03-plant').setAttribute('visible', false);
document.getElementById('s03-divider').setAttribute('visible', false);
document.getElementById('s03-background').setAttribute('visible', false);    

document.getElementById('s03-background').setAttribute('opacity', 0);
document.getElementById('s03-background').setAttribute('visible', false);   


console.log(`Timeline Item ${itemNumber++}: Setting vis/opacity of assets.`);
},
error: (error) => {
console.error(`Timeline Item ${itemNumber} Error: Setting vis/opacity of assets failed -`, error);
}  
})

.add({
targets: '#s03-loading',
opacity: [1, 0],
duration: 1000, // Instant change
easing: 'linear',
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Setting left/right profile pictures`);        

document.getElementById('name-content-left').textContent = "Riley";
document.getElementById('name-content-right').textContent = "Sam";
document.querySelector('#scenario .scenario-ui-prompt-speech.left img').setAttribute('src', getTopicLeftProfileImage(3));
document.querySelector('#scenario .scenario-ui-prompt-speech.right img').setAttribute('src', getTopicRightProfileImage(3));


},
complete: () => {
document.getElementById('scenario-assets-topic-group-3').setAttribute('opacity', 1);
document.getElementById('scenario-assets-topic-group-3').setAttribute('visible', true);  
document.getElementById('s03-loading').setAttribute('visible', false);  
},
error: (error) => {
console.error(`Timeline Item ${itemNumber} Error: Setting left/right profile pictures failed -`, error);
}
})
.add({
targets: ['#s03-background'],
opacity: [0, 1],
duration: 1000,
easing: 'linear',
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading inRiley and Sam (Scene 02)`);
document.getElementById('s03-background').setAttribute('visible', true);  
}
})

  .add({
    targets: '#s03s01-Riley',
    opacity: [0, 1],
    duration: 1000,
    easing: 'linear',
    begin: () => {
      console.log(`Timeline Item ${itemNumber++}: Fading in Riley (Scene 01)`);
      document.getElementById('s03s01-Riley').setAttribute('visible', true);
    }
  },"-=1000")



.add({
targets: '#s03s01-Sam',
opacity: [0, 1],
duration: 1500,
easing: 'easeInOutQuad',
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading in Sam (Scene 01)`);
document.getElementById('s03s01-Sam').setAttribute('visible', true);
}
})
.add({
targets: ['#s03s01-Riley', '#s03s01-Sam'],
opacity: [1, 0],
duration: 1000,
easing: 'linear',
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading out Riley and Sam (Scene 01)`);
},
complete: () => {
document.getElementById('s03s01-Riley').setAttribute('visible', false);
document.getElementById('s03s01-Sam').setAttribute('visible', false);                  
}
})

///////////////////////////////////////////////////////////////////////////////////////////
// Scene 02: Fade In (Mia and Alex simultaneously)
/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

.add({
targets: ['#s03s02-Sam','#s03s02-Riley'],
opacity: [0, 1],
duration: 1000,
easing: 'linear',
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading in Mia and Alex (Scene 02)`);
document.getElementById('s03s02-Sam').setAttribute('visible', true);
}
},"-=1000")
.add({
targets: ['#s03-speech-rt', '.scenario-ui-prompt-speech.right'],
opacity: [0, 1],
duration: 1000,
easing: 'linear',
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading in right speech bubble and Mia's speech UI (Scene 02)`);
document.getElementById('text-content-right').textContent = "Ugghhh... Not again!";
document.getElementById('s03-speech-rt').setAttribute('visible', true);
document.querySelector('.scenario-ui-prompt-speech.right').style.display = "flex";
}
})
.add({
  targets: ['#s03s02-Riley'],
  position: ['-0.6 0.1 -2.5', '-0.225 0 0'],  
  duration: 3000,
  easing: 'linear',
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading in Mia and Alex (Scene 02)`);
  document.getElementById('s03s02-Riley').setAttribute('visible', true);
  }
  })
.add({
targets: '.scenario-ui-prompt-button-area',
opacity: [0, 1],
duration: 1000,
easing: 'linear',
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading in continue button area (Scene 02)`);
document.querySelector('.scenario-ui-prompt-button-area').style.display = "flex";
}
}).add(addPause(3))

.add({
targets: ['.scenario-ui-prompt-button-area','.scenario-ui-prompt-speech.left','.scenario-ui-prompt-speech.right',
    '#s03-speech-lt','#s03-speech-rt','#s03s02-Riley', '#s03s02-Sam'],
opacity: [1, 0],
duration: 1000,
easing: 'linear',                  
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading out button area and speech bubbles (Scene 02)`);
},
complete: () => {
document.querySelector('.scenario-ui-prompt-button-area').style.display = "none";
document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";

document.getElementById('s03-speech-lt').setAttribute('visible', false);
document.getElementById('s03-speech-rt').setAttribute('visible', false);
document.getElementById('s03s02-Riley').setAttribute('visible', false);
document.getElementById('s03s02-Sam').setAttribute('visible', false);
}
})

///////////////////////////////////////////////////////////////////////////////////////////
// Scene 03: Fade In (Mia and Alex simultaneously)
/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

.add({
targets: ['#s03s03-Riley', '#s03s03-Sam'],
opacity: [0, 1],
duration: 1000,
easing: 'linear',
begin: () => {                
console.log(`Timeline Item ${itemNumber++}: Fading in Mia and Alex (Scene 03)`);
document.getElementById('s03s03-Riley').setAttribute('visible', true);
document.getElementById('s03s03-Sam').setAttribute('visible', true);
}           
},"-=1000")
.add({
targets: ['#s03-speech-lt', '.scenario-ui-prompt-speech.left'],
opacity: [0, 1],
duration: 1000,
easing: 'linear',
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading in left speech bubble and Riley's speech UI (Scene 03)`);
document.getElementById('text-content-left').textContent = "Hi Sam! What's going on...? You look upset.";
document.querySelector('.scenario-ui-prompt-speech.left').style.display = "flex";
document.getElementById('s03-speech-lt').setAttribute('visible', true);
}
})
.add({
targets: ['#s03-speech-rt', '.scenario-ui-prompt-speech.right'],
opacity: [0, 1],
duration: 1000,
easing: 'linear',
delay:1000,    
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading in right speech bubble and Sam's speech UI (Scene 03)`);
document.getElementById('text-content-right').textContent = "Hey Riley. Yeah...";
document.getElementById('s03-speech-rt').setAttribute('visible', true);
document.querySelector('.scenario-ui-prompt-speech.right').style.display = "flex";
}
})

.add({
targets: ['#s03s03-Riley', '#s03s03-Sam','.scenario-ui-prompt-speech.left','.scenario-ui-prompt-speech.right',
    '#s03-speech-lt','#s03-speech-rt'],
opacity: [1, 0],
duration: 1000,
easing: 'linear',
delay:3000,                  
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading out Riley and Sam (Scene 03)`);
},
complete: () => {
document.getElementById('s03s03-Riley').setAttribute('visible', false);
document.getElementById('s03s03-Sam').setAttribute('visible', false);
document.getElementById('s03-speech-lt').setAttribute('visible', false);
document.getElementById('s03-speech-rt').setAttribute('visible', false);
document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
}
})    
///////////////////////////////////////////////////////////////////////////////////////////
// Scene 04: 
/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
.add({
targets: ['#s03s04-Riley', '#s03s04-Sam'],
opacity: [0, 1],
duration: 1000,
easing: 'linear',
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading in Riley and Sam (Scene 04)`);
document.getElementById('s03s04-Riley').setAttribute('visible', true);
document.getElementById('s03s04-Sam').setAttribute('visible', true);
}
},"-=1000")
.add({
targets: ['#s03-speech-rt', '.scenario-ui-prompt-speech.right'],
opacity: [0, 1],
duration: 1000,
easing: 'linear',
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading in right speech bubble and Sam's speech UI (Scene 03)`);
document.getElementById('text-content-right').textContent = "My friend keeps asking me to send pics I’m not comfortable with.";
document.getElementById('s03-speech-rt').setAttribute('visible', true);
document.querySelector('.scenario-ui-prompt-speech.right').style.display = "flex";
}
})

.add({
targets: ['#s03s04-Riley', '#s03s04-Sam'],
opacity: [1, 0],
duration: 1000,
easing: 'linear', 
delay:3000,                     
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading out button area and speech bubbles (Scene 02)`);
},
complete: () => {
document.getElementById('s03s04-Riley').setAttribute('visible', false);
document.getElementById('s03s04-Sam').setAttribute('visible', false);
}
})
///////////////////////////////////////////////////////////////////////////////////////////
// Scene 05: 
/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
.add({
targets: ['#s03s05-Riley', '#s03s05-Sam'],
opacity: [0, 1],
duration: 1000,
easing: 'linear',
begin: () => {                
console.log(`Timeline Item ${itemNumber++}: Fading in Mia and Alex (Scene 03)`);
document.getElementById('s03s05-Riley').setAttribute('visible', true);
document.getElementById('s03s05-Sam').setAttribute('visible', true);
}           
},"-=1000")
.add({
targets: ['#s03-speech-lt', '.scenario-ui-prompt-speech.left'],
opacity: [0, 1],
duration: 1000,
easing: 'linear',
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading in left speech bubble and Riley's speech UI (Scene 03)`);
document.getElementById('text-content-left').textContent = "That’s not okay. You don’t have to do anything you’re not comfortable with.";
document.querySelector('.scenario-ui-prompt-speech.left').style.display = "flex";
document.getElementById('s03-speech-lt').setAttribute('visible', true);
}
})
.add(addPause(3))
.add({
targets: ['#s03s05-Riley', '#s03s05-Sam','.scenario-ui-prompt-speech.left','.scenario-ui-prompt-speech.right',
    '#s03-speech-lt','#s03-speech-rt'],
opacity: [1, 0],
duration: 1000,
easing: 'linear',    
delay:3000,                  
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading out Riley and Sam (Scene 03)`);
},
complete: () => {
document.getElementById('s03s05-Riley').setAttribute('visible', false);
document.getElementById('s03s05-Sam').setAttribute('visible', false);
document.getElementById('s03-speech-lt').setAttribute('visible', false);
document.getElementById('s03-speech-rt').setAttribute('visible', false);
document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
}
})    
.add({
targets: ['#s03s06-Riley', '#s03s06-Sam'],
opacity: [0, 1],
duration: 1000,
easing: 'linear',
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading in Riley and Sam (Scene 06)`);
document.getElementById('s03s06-Riley').setAttribute('visible', true);
document.getElementById('s03s06-Sam').setAttribute('visible', true);
}
},"-=1000")
.add({
targets: ['#s03-speech-rt', '.scenario-ui-prompt-speech.right'],
opacity: [0, 1],
duration: 1000,
easing: 'linear',
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading in right speech bubble and Sam's speech UI (Scene 03)`);
document.getElementById('text-content-right').textContent = "I’m worried they’ll get mad.";
document.getElementById('s03-speech-rt').setAttribute('visible', true);
document.querySelector('.scenario-ui-prompt-speech.right').style.display = "flex";
}
})
.add({
targets: ['#s03-speech-lt', '.scenario-ui-prompt-speech.left'],
opacity: [0, 1],
duration: 1000,
easing: 'linear',
delay:3000,
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading in left speech bubble and Riley's speech UI (Scene 03)`);
document.getElementById('text-content-left').textContent = "Real friends respect boundaries. You should block them and talk to someone you trust.";
document.querySelector('.scenario-ui-prompt-speech.left').style.display = "flex";
document.getElementById('s03-speech-lt').setAttribute('visible', true);
}
})

.add({
targets: ['.scenario-ui-prompt-speech.left','.scenario-ui-prompt-speech.right',
    '#s03-speech-lt','#s03-speech-rt'],
opacity: [1, 0],
duration: 1000,
easing: 'linear', 
delay:3000,                  
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading out Riley and Sam (Scene 03)`);
},
complete: () => {
document.getElementById('s03-speech-lt').setAttribute('visible', false);
document.getElementById('s03-speech-rt').setAttribute('visible', false);
document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
}
})  
///////////////////////////////////////////////////////////////////////////////////////////
// Scene 08: Fade In 
/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////



.add({
targets: '.scenario-ui-prompt-speech.info',
opacity: [0, 1],
duration: 1000, // Instant change
easing: 'linear',
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Setting the general info (Scene 07)`);
const infoElement = document.querySelector('.scenario-ui-prompt-speech.info');
infoElement.innerHTML = `<p>Now you have seen the conversation between Riley and Sam, let's find out more about having respectful relationships.</p>
                         <p>Let's continue on.</p>`;
infoElement.style.display = "block";
},
error: (error) => {
console.error(`Timeline Item ${itemNumber} Error: Setting Mia's speech text about privacy and safety (Scene 07) failed -`, error);
}
})
.add({
targets: '.scenario-ui-prompt-button-area',
opacity: [0, 1],
duration: 1000,
easing: 'linear',
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading in continue button area (Scene 08)`);
document.querySelector('.scenario-ui-prompt-button-area').style.display = "flex";
},
error: (error) => {
console.error(`Timeline Item ${itemNumber} Error: Fading in continue button area (Scene 08) failed -`, error);
}
}) 
.add(addPause(0))
.add({
targets: ['#s03s06-Riley', '#s03s06-Sam','.scenario-ui-prompt-speech.left','.scenario-ui-prompt-speech.right','.scenario-ui-prompt-speech.info',
    '#s03-speech-lt','#s03-speech-rt','#s03-background'],
opacity: [1, 0],
duration: 1000,
easing: 'linear',                  
begin: () => {
console.log(`Timeline Item ${itemNumber++}: Fading out Riley and Sam (Scene 03)`);
},
complete: () => {
document.getElementById('s03s06-Riley').setAttribute('visible', false);
document.getElementById('s03s06-Sam').setAttribute('visible', false);
document.getElementById('s03-speech-lt').setAttribute('visible', false);
document.getElementById('s03-speech-rt').setAttribute('visible', false);
document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
document.querySelector('.scenario-ui-prompt-speech.info').style.display = "none";
document.querySelector('.scenario-ui-prompt-button-area').style.display = "none";
document.getElementById('scenario-assets-topic-group-3').setAttribute('opacity', 0);
document.getElementById('scenario-assets-topic-group-3').setAttribute('visible', false);   

document.getElementById('s03-background').setAttribute('opacity', 0);
document.getElementById('s03-background').setAttribute('visible', false);   
}   
})
}
