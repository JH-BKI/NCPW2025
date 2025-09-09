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
    targets: '#scenario',
    opacity: [1, 1],
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
    targets: '#scenario-assets-topic-group-4',
    opacity: [0, 0],
    duration: 10, // Instant change
    easing: 'linear',
    complete: () => {

      document.getElementById('scenario-assets-topic-group-4').setAttribute('opacity', 0);
      document.getElementById('scenario-assets-topic-group-4').setAttribute('visible', false);   

      document.querySelector('.scenario-ui-prompt-button-area').style.display = "none";
      document.querySelector('.scenario-ui-prompt-button-area').setAttribute('opacity', 0);
      document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
      document.querySelector('.scenario-ui-prompt-speech.left').setAttribute('opacity', 0);
      document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
      document.querySelector('.scenario-ui-prompt-speech.right').setAttribute('opacity', 0);


      // document.getElementById('s03-speech-lt').setAttribute('opacity', 0);
      // document.getElementById('s03-speech-rt').setAttribute('opacity', 0);
      // document.getElementById('s03s01-Riley').setAttribute('opacity', 0);
      // document.getElementById('s03s01-Sam').setAttribute('opacity', 0);
      // document.getElementById('s03s02-Riley').setAttribute('opacity', 0);
      // document.getElementById('s03s02-Sam').setAttribute('opacity', 0);
      // document.getElementById('s03s03-Riley').setAttribute('opacity', 0);
      // document.getElementById('s03s03-Sam').setAttribute('opacity', 0);
      // document.getElementById('s03s04-Riley').setAttribute('opacity', 0);
      // document.getElementById('s03s04-Sam').setAttribute('opacity', 0);
      // document.getElementById('s03s05-Riley').setAttribute('opacity', 0);
      // document.getElementById('s03s05-Sam').setAttribute('opacity', 0);
      // document.getElementById('s03s06-Riley').setAttribute('opacity', 0);
      // document.getElementById('s03s06-Sam').setAttribute('opacity', 0);
      // document.getElementById('s03-desk').setAttribute('opacity', 0);
      // document.getElementById('s03-printer').setAttribute('opacity', 0);
      // document.getElementById('s03-plant').setAttribute('opacity', 0);

      // document.getElementById('s03-divider').setAttribute('visible', false);    
      // document.getElementById('s03-speech-lt').setAttribute('visible', false);
      // document.getElementById('s03-speech-rt').setAttribute('visible', false);
      // document.getElementById('s03s01-Riley').setAttribute('visible', false);
      // document.getElementById('s03s01-Sam').setAttribute('visible', false);
      // document.getElementById('s03s02-Riley').setAttribute('visible', false);
      // document.getElementById('s03s02-Sam').setAttribute('visible', false);
      // document.getElementById('s03s03-Riley').setAttribute('visible', false);
      // document.getElementById('s03s03-Sam').setAttribute('visible', false);
      // document.getElementById('s03s04-Riley').setAttribute('visible', false);
      // document.getElementById('s03s04-Sam').setAttribute('visible', false);
      // document.getElementById('s03s05-Riley').setAttribute('visible', false);
      // document.getElementById('s03s05-Sam').setAttribute('visible', false);
      // document.getElementById('s03s06-Riley').setAttribute('visible', false);
      // document.getElementById('s03s06-Sam').setAttribute('visible', false);
      // document.getElementById('s03-desk').setAttribute('visible', false);
      // document.getElementById('s03-printer').setAttribute('visible', false);
      // document.getElementById('s03-plant').setAttribute('visible', false);
      // document.getElementById('s03-divider').setAttribute('visible', false);

      document.getElementById('s04-background').setAttribute('opacity', 0);
      document.getElementById('s04-background').setAttribute('visible', false);   

      console.log(`Timeline Item ${itemNumber++}: Setting vis/opacity of assets.`);
    },
    error: (error) => {
      console.error(`Timeline Item ${itemNumber} Error: Setting vis/opacity of assets failed -`, error);
    }  
  })

  .add({
    targets: '#scenario',
    opacity: [1, 1],
    duration: 10, // Instant change
    easing: 'linear',
    begin: () => {

      // document.getElementById('name-content-left').textContent = "Riley";
      // document.getElementById('name-content-right').textContent = "Sam";
      document.querySelector('#scenario .scenario-ui-prompt-speech.left img').setAttribute('src', getTopicLeftProfileImage(4));
      document.querySelector('#scenario .scenario-ui-prompt-speech.right img').setAttribute('src', getTopicRightProfileImage(4));
      

      console.log(`Timeline Item ${itemNumber++}: Setting left/right profile pictures`);
    },
    error: (error) => {
      console.error(`Timeline Item ${itemNumber} Error: Setting left/right profile pictures failed -`, error);
    }
  })
      .add({
      targets: ['#s04-background'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in Ella and Liam (Scene 04)`);
        document.getElementById('s04-background').setAttribute('visible', true);  
      }
    })
  .add({
    targets: ['#s04-loading'],
    opacity: [1, 0],
    duration: 1000,
    easing: 'linear',
    begin: () => {
      console.log(`Timeline Item ${itemNumber++}: Fading in Ella and Liam (Scene 04)`);
      document.getElementById('s04-loading').setAttribute('visible', false);      
    },
    complete: () => {
      document.getElementById('scenario-assets-topic-group-4').setAttribute('opacity', 1);
      document.getElementById('scenario-assets-topic-group-4').setAttribute('visible', true);  
    }
  })

  ///////////////////////////////////////////////////////////////////////////////////////////
  // Scene 08: Fade In 
  /////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////

  timeline
           
    .add({
      targets: '.scenario-ui-prompt-speech.info',
      opacity: [0, 1],
      duration: 1000, // Instant change
      easing: 'linear',
      delay: 5000,
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Setting the general info (Scene 07)`);
        const infoElement = document.querySelector('.scenario-ui-prompt-speech.info');
        if (infoElement) {
            infoElement.innerHTML = `<h4>Moving on...</h4><p><h1>Adding soon! Not available just yet.</h1></p>`;
        } else {
            console.warn('Element .scenario-ui-prompt-speech.info not found');
        }
        if (infoElement) {
            infoElement.style.display = "block";
        }
      },
      error: (error) => {
        console.error(`Timeline Item ${itemNumber} Error: Topic 4 general info (Scene 07) failed -`, error);
      }
    })
    .add({
      targets: '.scenario-ui-prompt-button-area',
      opacity: [0, 1],
      duration: 500,
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
      targets: ['.scenario-ui-prompt-button-area','.scenario-ui-prompt-speech.left','.scenario-ui-prompt-speech.info','#s04-background'],
      opacity: [1, 0],
      duration: 500,
      easing: 'linear',
      delay: 500,
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading out button area and speech bubble (Scene 08)`);
      },
      complete: () => {
        document.getElementById('s02-speech-lt').setAttribute('visible', false);
        document.getElementById('s02-speech-rt').setAttribute('visible', false);
        document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
        document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
        document.querySelector('.scenario-ui-prompt-speech.info').style.display = "none";
        document.querySelector('.scenario-ui-prompt-button-area').style.display = "none";
        document.getElementById('scenario-assets-topic-group-4').setAttribute('opacity', 0);
        document.getElementById('scenario-assets-topic-group-4').setAttribute('visible', false);   

        document.getElementById('s04-background').setAttribute('opacity', 0);
        document.getElementById('s04-background').setAttribute('visible', false);   
      }   
    });
}
