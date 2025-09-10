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
  // Scene 01: Fade In (Ella and Liam simultaneously)
  ///////////////////////////////////////////////////////////////////////////////////////////
  timeline
    .add({
      targets:  ['#s04-loading'],
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
    targets: ['#s04-loading'],
    opacity: [0, 1],
    duration: 1000,
    easing: 'linear',
    begin: () => {
      console.log(`Timeline Item ${itemNumber++}: Fading inElla and Liam (Scene 02)`);
      document.getElementById('s04-loading').setAttribute('visible', true);      
    }
  })
  .add({
  targets: '#scenario-assets-topic-group-4',
  opacity: [0, 1],
  duration: 10, // Instant change
  easing: 'linear',
  complete: () => {
  
  document.getElementById('scenario-assets-topic-group-4').setAttribute('opacity', 0);
  document.getElementById('scenario-assets-topic-group-4').setAttribute('visible', false);   
  
  document.querySelector('.scenario-ui-prompt-button-area').style.display = "none";
  document.querySelector('.scenario-ui-prompt-button-area').style.opacity = 0;
  document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
  document.querySelector('.scenario-ui-prompt-speech.left').style.opacity = 0;
  document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
  document.querySelector('.scenario-ui-prompt-speech.right').style.opacity = 0;
  
  
  document.getElementById('s04-speech-lt').setAttribute('opacity', 0);
  document.getElementById('s04-speech-rt').setAttribute('opacity', 0);
  document.getElementById('s04s01-Ella').setAttribute('opacity', 0);
  document.getElementById('s04s02-Ella').setAttribute('opacity', 0);
  document.getElementById('s04s02-Liam').setAttribute('opacity', 0);
  document.getElementById('s04s03-Ella').setAttribute('opacity', 0);
  document.getElementById('s04s03-Liam').setAttribute('opacity', 0);
  document.getElementById('s04s04-Ella').setAttribute('opacity', 0);
  document.getElementById('s04s04-Liam').setAttribute('opacity', 0);
  document.getElementById('s04s05-Ella').setAttribute('opacity', 0);
  document.getElementById('s04s05-Liam').setAttribute('opacity', 0);
  document.getElementById('s04s06-Ella').setAttribute('opacity', 0);
  document.getElementById('s04s06-Liam').setAttribute('opacity', 0);
  document.getElementById('s04s07-Ella').setAttribute('opacity', 0);
  document.getElementById('s04s07-Liam').setAttribute('opacity', 0);
  document.getElementById('s04-couch').setAttribute('opacity', 0);
  document.getElementById('s04-speech-lt').setAttribute('visible', false);
  document.getElementById('s04-speech-rt').setAttribute('visible', false);
  document.getElementById('s04s01-Ella').setAttribute('visible', false);
  document.getElementById('s04s02-Ella').setAttribute('visible', false);
  document.getElementById('s04s02-Liam').setAttribute('visible', false);
  document.getElementById('s04s03-Ella').setAttribute('visible', false);
  document.getElementById('s04s03-Liam').setAttribute('visible', false);
  document.getElementById('s04s04-Ella').setAttribute('visible', false);
  document.getElementById('s04s04-Liam').setAttribute('visible', false);
  document.getElementById('s04s05-Ella').setAttribute('visible', false);
  document.getElementById('s04s05-Liam').setAttribute('visible', false);
  document.getElementById('s04s06-Ella').setAttribute('visible', false);
  document.getElementById('s04s06-Liam').setAttribute('visible', false);
  document.getElementById('s04s07-Ella').setAttribute('visible', false);
  document.getElementById('s04s07-Liam').setAttribute('visible', false);
  document.getElementById('s04-couch').setAttribute('visible', false);
  document.getElementById('s04-background').setAttribute('visible', false);    
  
  document.getElementById('s04-background').setAttribute('opacity', 0);
  document.getElementById('s04-background').setAttribute('visible', false);   
  
  
  console.log(`Timeline Item ${itemNumber++}: Setting vis/opacity of assets.`);
  },
  error: (error) => {
  console.error(`Timeline Item ${itemNumber} Error: Setting vis/opacity of assets failed -`, error);
  }  
  })
  
  .add({
  targets: '#s04-loading',
  opacity: [1, 0],
  duration: 1000, // Instant change
  easing: 'linear',
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Setting left/right profile pictures`);        
  
  document.getElementById('name-content-left').textContent = "Ella";
  document.getElementById('name-content-right').textContent = "Liam";
  document.querySelector('#scenario .scenario-ui-prompt-speech.left img').setAttribute('src', getTopicLeftProfileImage(4));
  document.querySelector('#scenario .scenario-ui-prompt-speech.right img').setAttribute('src', getTopicRightProfileImage(4));
  
  
  },
  complete: () => {
  document.getElementById('scenario-assets-topic-group-4').setAttribute('opacity', 1);
  document.getElementById('scenario-assets-topic-group-4').setAttribute('visible', true);  
  document.getElementById('s04-loading').setAttribute('visible', false);  
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
  console.log(`Timeline Item ${itemNumber++}: Fading inElla and Liam (Scene 02)`);
  document.getElementById('s04-background').setAttribute('visible', true);  
  }
  })
  
    .add({
      targets: ['#s04s01-Ella','#s04-couch'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in Ella (Scene 01)`);
        document.getElementById('s04s01-Ella').setAttribute('visible', true);
        document.getElementById('s04-couch').setAttribute('visible', true);
        document.getElementById('s04-speech-lt').setAttribute('opacity', 0);
        document.getElementById('s04-speech-rt').setAttribute('opacity', 0);
        document.querySelector('.scenario-ui-prompt-speech.left').style.opacity = 0;
        document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
        document.querySelector('.scenario-ui-prompt-speech.right').style.opacity = 0;
        document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
            
      }
    },"-=1000")
  
  

  .add({
  targets: ['#s04s01-Ella'],
  opacity: [1, 0],
  duration: 1000,
  easing: 'linear',
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading out Ella and Liam (Scene 01)`);
  },
  complete: () => {
  document.getElementById('s04s01-Ella').setAttribute('visible', false);

  }
  })
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  // Scene 02: Fade In (Ella and Liam simultaneously)
  /////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  
  .add({
  targets: ['#s04s02-Liam','#s04s02-Ella'],
  opacity: [0, 1],
  duration: 1000,
  easing: 'linear',
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading in Ella and Liam (Scene 02)`);
    document.getElementById('s04s02-Liam').setAttribute('visible', true);
    document.getElementById('s04s02-Ella').setAttribute('visible', true);
  }
  },"-=1000")
  .add({
  targets: ['#s04-speech-rt', '.scenario-ui-prompt-speech.right'],
  opacity: [0, 1],
  duration: 1000,
  easing: 'linear',
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading in right speech bubble and Ella's speech UI (Scene 02)`);
  document.getElementById('text-content-right').textContent = "Hi Ella! How are you?";
  document.getElementById('s04-speech-rt').setAttribute('visible', true);
  document.querySelector('.scenario-ui-prompt-speech.right').style.display = "flex";
  }
  })

  .add({
  targets: ['#s04s02-Ella', '#s04s02-Liam','#s04-speech-rt', '.scenario-ui-prompt-speech.right'],
  opacity: [1, 0],
  duration: 1000,
  easing: 'linear',     
  delay:3000,             
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading out button area and speech bubbles (Scene 02)`);
  },
  complete: () => {

  document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
  document.getElementById('s04-speech-rt').setAttribute('visible', false);
  document.getElementById('s04s02-Ella').setAttribute('visible', false);
  document.getElementById('s04s02-Liam').setAttribute('visible', false);
  }
  })
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  // Scene 03: Fade In (Ella and Liam simultaneously)
  /////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  
  .add({
  targets: ['#s04s03-Ella', '#s04s03-Liam'],
  opacity: [0, 1],
  duration: 1000,
  easing: 'linear',
  begin: () => {                
  console.log(`Timeline Item ${itemNumber++}: Fading in Ella and Liam (Scene 03)`);
  document.getElementById('s04s03-Ella').setAttribute('visible', true);
  document.getElementById('s04s03-Liam').setAttribute('visible', true);
  }           
  },"-=1000")
  .add({
  targets: ['#s04-speech-rt', '.scenario-ui-prompt-speech.right'],
  opacity: [0, 1],
  duration: 1000,
  easing: 'linear',
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading in right speech bubble and Ella's speech UI (Scene 03)`);
  document.getElementById('text-content-right').textContent = "Ella? Is everything ok?";
  document.querySelector('.scenario-ui-prompt-speech.right').style.display = "flex";
  document.getElementById('s04-speech-rt').setAttribute('visible', true);
  }
  })
   
  .add({
  targets: ['#s04s03-Ella', '#s04s03-Liam','.scenario-ui-prompt-speech.right',
      '#s04-speech-rt'],
  opacity: [1, 0],
  duration: 1000,
  easing: 'linear',
  delay:3000,                  
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading out Ella and Liam (Scene 03)`);
  },
  complete: () => {
  document.getElementById('s04s03-Ella').setAttribute('visible', false);
  document.getElementById('s04s03-Liam').setAttribute('visible', false);
  document.getElementById('s04-speech-rt').setAttribute('visible', false);
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
  targets: ['#s04s04-Ella', '#s04s04-Liam'],
  opacity: [0, 1],
  duration: 1000,
  easing: 'linear',
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading in Ella and Liam (Scene 04)`);
  document.getElementById('s04s04-Ella').setAttribute('visible', true);
  document.getElementById('s04s04-Liam').setAttribute('visible', true);
  }
  },"-=1000")
  .add({
  targets: ['#s04-speech-lt', '.scenario-ui-prompt-speech.left'],
  opacity: [0, 1],
  duration: 1000,
  easing: 'linear',
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading in left speech bubble and Ella's speech UI (Scene 03)`);
  document.getElementById('text-content-left').textContent = "I saw something really upsetting online last night and now I can’t stop thinking about it.";
  document.getElementById('s04-speech-lt').setAttribute('visible', true);
  document.querySelector('.scenario-ui-prompt-speech.left').style.display = "flex";
  }
  })
  
  .add({
    targets: ['#s04s04-Ella', '#s04s04-Liam','.scenario-ui-prompt-speech.left',
        '#s04-speech-lt'],
    opacity: [1, 0],
    duration: 1000,
    easing: 'linear',
    delay:3000,                  
    begin: () => {
    console.log(`Timeline Item ${itemNumber++}: Fading out Ella and Liam (Scene 03)`);
    },
    complete: () => {
    document.getElementById('s04s04-Ella').setAttribute('visible', false);
    document.getElementById('s04s04-Liam').setAttribute('visible', false);
    document.getElementById('s04-speech-lt').setAttribute('visible', false);
    document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
    }
    })  
  ///////////////////////////////////////////////////////////////////////////////////////////
  // Scene 05: 
  /////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  
  .add({
    targets: ['#s04s05-Ella', '#s04s05-Liam'],
    opacity: [0, 1],
    duration: 1000,
    easing: 'linear',
    begin: () => {
    console.log(`Timeline Item ${itemNumber++}: Fading in Ella and Liam (Scene 04)`);
    document.getElementById('s04s04-Ella').setAttribute('visible', true);
    document.getElementById('s04s04-Liam').setAttribute('visible', true);
    }
    },"-=1000")
    .add({
    targets: ['#s04-speech-rt', '.scenario-ui-prompt-speech.right'],
    opacity: [0, 1],
    duration: 1000,
    easing: 'linear',
    begin: () => {
    console.log(`Timeline Item ${itemNumber++}: Fading in right speech bubble and Ella's speech UI (Scene 03)`);
    document.getElementById('text-content-right').textContent = "That sounds really tough. Have you talked to anyone?";
    document.getElementById('s04-speech-rt').setAttribute('visible', true);
    document.querySelector('.scenario-ui-prompt-speech.right').style.display = "flex";
    }
    })
    
    .add({
      targets: ['#s04s05-Ella', '#s04s05-Liam','.scenario-ui-prompt-speech.right',
          '#s04-speech-rt'],
      opacity: [1, 0],
      duration: 1000,
      easing: 'linear',
      delay:3000,                  
      begin: () => {
      console.log(`Timeline Item ${itemNumber++}: Fading out Ella and Liam (Scene 03)`);
      },
      complete: () => {
      document.getElementById('s04s05-Ella').setAttribute('visible', false);
      document.getElementById('s04s05-Liam').setAttribute('visible', false);
      document.getElementById('s04-speech-rt').setAttribute('visible', false);
      document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
      }
      })  




      .add({
        targets: ['#s04s06-Ella', '#s04s06-Liam'],
        opacity: [0, 1],
        duration: 1000,
        easing: 'linear',
        begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in Ella and Liam (Scene 04)`);
        document.getElementById('s04s06-Ella').setAttribute('visible', true);
        document.getElementById('s04s06-Liam').setAttribute('visible', true);
        }
        },"-=1000")
        .add({
          targets: ['#s04-speech-lt', '.scenario-ui-prompt-speech.left'],
        opacity: [0, 1],
        duration: 1000,
        easing: 'linear',
        begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in left speech bubble and Ella's speech UI (Scene 03)`);
        document.getElementById('text-content-left').textContent = "No, I don’t want to bother anyone.";
        document.getElementById('s04-speech-lt').setAttribute('visible', true);
        document.querySelector('.scenario-ui-prompt-speech.left').style.display = "flex";
        }
        })
        
        .add({
          targets: ['#s04s06-Ella', '#s04s06-Liam','.scenario-ui-prompt-speech.left',
              '#s04-speech-lt'],
          opacity: [1, 0],
          duration: 1000,
          easing: 'linear',
          delay:3000,                  
          begin: () => {
          console.log(`Timeline Item ${itemNumber++}: Fading out Ella and Liam (Scene 03)`);
          },
          complete: () => {
          document.getElementById('s04s06-Ella').setAttribute('visible', false);
          document.getElementById('s04s06-Liam').setAttribute('visible', false);
          document.getElementById('s04-speech-lt').setAttribute('visible', false);
          document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
          }
          })  
          .add({
            targets: ['#s04s07-Ella', '#s04s07-Liam'],
            opacity: [0, 1],
            duration: 1000,
            easing: 'linear',
            begin: () => {
            console.log(`Timeline Item ${itemNumber++}: Fading in Ella and Liam (Scene 04)`);
            document.getElementById('s04s07-Ella').setAttribute('visible', true);
            document.getElementById('s04s07-Liam').setAttribute('visible', true);
            }
            },"-=1000")
            .add({
              targets: ['#s04-speech-rt', '.scenario-ui-prompt-speech.right'],
            opacity: [0, 1],
            duration: 1000,
            easing: 'linear',
            begin: () => {
            console.log(`Timeline Item ${itemNumber++}: Fading in right speech bubble and Ella's speech UI (Scene 03)`);
            document.getElementById('text-content-right').textContent = "You’re not bothering anyone. You should talk to a teacher or your parents. There’s also help on the eSafety site.";
            document.getElementById('s04-speech-rt').setAttribute('visible', true);
            document.querySelector('.scenario-ui-prompt-speech.right').style.display = "flex";
            }
            })
            
            .add({
              targets: ['.scenario-ui-prompt-speech.right',
                  '#s04-speech-rt'],
              opacity: [1, 0],
              duration: 1000,
              easing: 'linear',
              delay:3000,                  
              begin: () => {
              console.log(`Timeline Item ${itemNumber++}: Fading out Ella and Liam (Scene 03)`);
              },
              complete: () => {
              document.getElementById('s04-speech-rt').setAttribute('visible', false);
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
  infoElement.innerHTML = `
  <p>How can you help and support your friends and family to protect themselves against harmful content?</p>
  <ul><li>Encourage open conversations and emotional support.</li>
 <li>Normalize asking for help.</li>
 <li>Share resources like school counsellors and the eSafety Commissioner.</li></ul>
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
  targets: ['#s04s06-Ella', '#s04s06-Liam','.scenario-ui-prompt-speech.left','.scenario-ui-prompt-speech.right','.scenario-ui-prompt-speech.info',
      '#s04-speech-lt','#s04-speech-rt','#s04-background'],
  opacity: [1, 0],
  duration: 1000,
  easing: 'linear',                  
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading out Ella and Liam (Scene 03)`);
  },
  complete: () => {
  document.getElementById('s04s06-Ella').setAttribute('visible', false);
  document.getElementById('s04s06-Liam').setAttribute('visible', false);
  document.getElementById('s04-speech-lt').setAttribute('visible', false);
  document.getElementById('s04-speech-rt').setAttribute('visible', false);
  document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
  document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
  document.querySelector('.scenario-ui-prompt-speech.info').style.display = "none";
  document.querySelector('.scenario-ui-prompt-button-area').style.display = "none";
  document.getElementById('scenario-assets-topic-group-4').setAttribute('opacity', 0);
  document.getElementById('scenario-assets-topic-group-4').setAttribute('visible', false);   
  
  document.getElementById('s04-background').setAttribute('opacity', 0);
  document.getElementById('s04-background').setAttribute('visible', false);   
  }   
  })
  }
  