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
  // Scene 01: Fade In (Taylor and Jordan simultaneously)
  ///////////////////////////////////////////////////////////////////////////////////////////
  timeline
    .add({
      targets:  ['#s02-loading'],
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
    targets: ['#s02-loading'],    
    opacity: [0, 1],
    duration: 1000,
    easing: 'linear',
    begin: () => {
      console.log(`Timeline Item ${itemNumber++}: Fading inJordan and Taylor (Scene 02)`);
      document.getElementById('s02-loading').setAttribute('visible', true);      
    }
  })
  .add({
  targets: '#scenario-assets-topic-group-2',
  opacity: [0, 1],
  duration: 10, // Instant change
  easing: 'linear',
  complete: () => {
  
  document.getElementById('scenario-assets-topic-group-2').setAttribute('opacity', 0);
  document.getElementById('scenario-assets-topic-group-2').setAttribute('visible', false);   
  
  document.querySelector('.scenario-ui-prompt-button-area').style.display = "none";
  document.querySelector('.scenario-ui-prompt-button-area').style.opacity = 0;
  document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
  document.querySelector('.scenario-ui-prompt-speech.left').style.opacity = 0;
  document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
  document.querySelector('.scenario-ui-prompt-speech.right').style.opacity = 0;
  
  
  document.getElementById('s02-speech-lt').setAttribute('opacity', 0);
  document.getElementById('s02-speech-rt').setAttribute('opacity', 0);
  document.getElementById('s02s01-Jordan').setAttribute('opacity', 0);
  document.getElementById('s02s01-Taylor-sitting').setAttribute('opacity', 0);
  document.getElementById('s02s02-Jordan').setAttribute('opacity', 0);
  document.getElementById('s02s02-Taylor-sitting').setAttribute('opacity', 0);
  document.getElementById('s02s03-Jordan').setAttribute('opacity', 0);
  document.getElementById('s02s03-Taylor-sitting').setAttribute('opacity', 0);
  document.getElementById('s02s04-Jordan').setAttribute('opacity', 0);
  document.getElementById('s02s04-Taylor').setAttribute('opacity', 0);
  document.getElementById('s02s05-Jordan').setAttribute('opacity', 0);
  document.getElementById('s02s05-Taylor').setAttribute('opacity', 0);
  document.getElementById('s02s06-Jordan').setAttribute('opacity', 0);
  document.getElementById('s02s06-Taylor').setAttribute('opacity', 0);
  document.getElementById('s02s07-Jordan').setAttribute('opacity', 0);
  document.getElementById('s02s07-Taylor').setAttribute('opacity', 0);
  document.getElementById('s02s08-Jordan').setAttribute('opacity', 0);
  document.getElementById('s02-desk-pc').setAttribute('opacity', 0);
  document.getElementById('s02-floor').setAttribute('opacity', 0);
  document.getElementById('s02-Furniture-01').setAttribute('opacity', 0);
  document.getElementById('s02-Furniture-02').setAttribute('opacity', 0);
  document.getElementById('s02-phone').setAttribute('opacity', 0);
  document.getElementById('s02-whiteboard').setAttribute('opacity', 0);
  document.getElementById('s02-speech-lt').setAttribute('visible', false);
  document.getElementById('s02-speech-rt').setAttribute('visible', false);
  document.getElementById('s02s01-Jordan').setAttribute('visible', false);
  document.getElementById('s02s01-Taylor-sitting').setAttribute('visible', false);
  document.getElementById('s02s02-Jordan').setAttribute('visible', false);
  document.getElementById('s02s02-Taylor-sitting').setAttribute('visible', false);
  document.getElementById('s02s03-Jordan').setAttribute('visible', false);
  document.getElementById('s02s03-Taylor-sitting').setAttribute('visible', false);
  document.getElementById('s02s04-Jordan').setAttribute('visible', false);
  document.getElementById('s02s04-Taylor').setAttribute('visible', false);
  document.getElementById('s02s05-Jordan').setAttribute('visible', false);
  document.getElementById('s02s05-Taylor').setAttribute('visible', false);
  document.getElementById('s02s06-Jordan').setAttribute('visible', false);
  document.getElementById('s02s06-Taylor').setAttribute('visible', false);
  document.getElementById('s02s07-Jordan').setAttribute('visible', false);
  document.getElementById('s02s07-Taylor').setAttribute('visible', false);
  document.getElementById('s02s08-Jordan').setAttribute('visible', false);
  document.getElementById('s02-desk-pc').setAttribute('visible', false);
  document.getElementById('s02-floor').setAttribute('visible', false);
  document.getElementById('s02-Furniture-01').setAttribute('visible', false);
  document.getElementById('s02-Furniture-02').setAttribute('visible', false);
  document.getElementById('s02-phone').setAttribute('visible', false);
  document.getElementById('s02-whiteboard').setAttribute('visible', false);
  document.getElementById('s02-background').setAttribute('visible', false);    
  
  document.getElementById('s02-background').setAttribute('opacity', 0);
  document.getElementById('s02-background').setAttribute('visible', false);   
  
  
  console.log(`Timeline Item ${itemNumber++}: Setting vis/opacity of assets.`);
  },
  error: (error) => {
  console.error(`Timeline Item ${itemNumber} Error: Setting vis/opacity of assets failed -`, error);
  }  
  })
  
  .add({
  targets: '#s02-loading',
  opacity: [1, 0],
  duration: 1000, // Instant change
  easing: 'linear',
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Setting left/right profile pictures`);        
  
  document.getElementById('name-content-left').textContent = "Jordan";
  document.getElementById('name-content-right').textContent = "Taylor";
  document.querySelector('#scenario .scenario-ui-prompt-speech.left img').setAttribute('src', getTopicLeftProfileImage(2));
  document.querySelector('#scenario .scenario-ui-prompt-speech.right img').setAttribute('src', getTopicRightProfileImage(2));
  
  
  },
  complete: () => {
  document.getElementById('scenario-assets-topic-group-2').setAttribute('opacity', 1);
  document.getElementById('scenario-assets-topic-group-2').setAttribute('visible', true);  
  document.getElementById('s02-loading').setAttribute('visible', false);  
  },
  error: (error) => {
  console.error(`Timeline Item ${itemNumber} Error: Setting left/right profile pictures failed -`, error);
  }
  })
  .add({
  targets: ['#s02-background'],
  opacity: [0, 1],
  duration: 1000,
  easing: 'linear',
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading inJordan and Taylor (Scene 02)`);
  document.getElementById('s02-background').setAttribute('visible', true);  
  }
  })
  
  .add({
  targets: ['#s02s01-Taylor-sitting','#s02-desk-pc'],
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeInOutQuad',
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading in Taylor (Scene 01)`);
  document.getElementById('s02s01-Taylor-sitting').setAttribute('visible', true);
  document.getElementById('s02-desk-pc').setAttribute('visible', true);
  }
  })
    .add({
      targets: '#s02s01-Jordan',
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in Jordan (Scene 01)`);
        document.getElementById('s02s01-Jordan').setAttribute('visible', true);
      }
    })
    
  .add({
  targets: ['#s02s01-Jordan', '#s02s01-Taylor-sitting'],
  opacity: [1, 0],
  duration: 1000,
  easing: 'linear',
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading out Jordan and Taylor (Scene 01)`);
  },
  complete: () => {
  document.getElementById('s02s01-Jordan').setAttribute('visible', false);
  document.getElementById('s02s01-Taylor-sitting').setAttribute('visible', false);                  
  }
  })
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  // Scene 02: Fade In (Taylor and Jordan simultaneously)
  /////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  
  .add({
  targets: ['#s02s02-Taylor-sitting'],
  opacity: [0, 1],
  duration: 1000,
  easing: 'linear',
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading in Taylor and Jordan (Scene 02)`);
  document.getElementById('s02s02-Taylor-sitting').setAttribute('visible', true);
  document.getElementById('s02s02-Jordan').setAttribute('visible', true);
  }
  },"-=1000")
  
  .add({
    targets: ['#s02s02-Jordan'],
    opacity: [0, 1],
    position: ['-0.8 0 -0.6', '-0.370 0.1 0'],  
    duration: 3000,
    easing: 'linear',
    begin: () => {
    console.log(`Timeline Item ${itemNumber++}: Fading in Taylor and Jordan (Scene 02)`);
    document.getElementById('s02s02-Jordan').setAttribute('visible', true);
    }
    })
  
  .add({
      targets: ['#s02s02-Jordan', '#s02s02-Taylor-sitting'],
      opacity: [1, 0],
      duration: 1000,
      easing: 'linear',
      begin: () => {
      console.log(`Timeline Item ${itemNumber++}: Fading out Jordan and Taylor (Scene 03)`);
      },
      complete: () => {
      document.getElementById('s02s02-Jordan').setAttribute('visible', false);
      document.getElementById('s02s02-Taylor-sitting').setAttribute('visible', false);
      }
      })  

  .add({
  targets: ['#s02s03-Jordan', '#s02s03-Taylor-sitting'],
  opacity: [0, 1],
  duration: 1000,
  easing: 'linear',
  begin: () => {                
  console.log(`Timeline Item ${itemNumber++}: Fading in Taylor and Jordan (Scene 03)`);
  document.getElementById('s02s03-Jordan').setAttribute('visible', true);
  document.getElementById('s02s03-Taylor-sitting').setAttribute('visible', true);
  }           
  },"-=1000")
  .add({
  targets: ['#s02-speech-rt', '.scenario-ui-prompt-speech.right'],
  opacity: [0, 1],
  duration: 1000,
  easing: 'linear',
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading in left speech bubble and Jordan's speech UI (Scene 03)`);
  document.getElementById('text-content-right').textContent = "Hi Jordan! What's going on...? You look upset.";
  document.querySelector('.scenario-ui-prompt-speech.right').style.display = "flex";
  document.getElementById('s02-speech-rt').setAttribute('visible', true);
  }
  })
  .add(addPause(3))
  .add({
    targets: ['#s02s03-Jordan', '#s02s03-Taylor-sitting','.scenario-ui-prompt-speech.left','.scenario-ui-prompt-speech.right',
        '#s02-speech-lt','#s02-speech-rt'],
    opacity: [1, 0],
    duration: 1000,
    easing: 'linear',
    begin: () => {
    console.log(`Timeline Item ${itemNumber++}: Fading out Jordan and Taylor (Scene 03)`);
    },
    complete: () => {
    document.getElementById('s02s03-Jordan').setAttribute('visible', false);
    document.getElementById('s02s03-Taylor-sitting').setAttribute('visible', false);
    document.getElementById('s02-speech-rt').setAttribute('visible', false);
    document.getElementById('s02-speech-lt').setAttribute('visible', false);
    document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
    document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
    }
    })  

    .add({
      targets: ['#s02s04-Jordan', '#s02s04-Taylor'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {                
      console.log(`Timeline Item ${itemNumber++}: Fading in Taylor and Jordan (Scene 03)`);
        document.getElementById('s02s04-Jordan').setAttribute('visible', true);
        document.getElementById('s02s04-Taylor').setAttribute('visible', true);
      }           
      },"-=1000")

    .add({
    targets: ['#s02-speech-lt', '.scenario-ui-prompt-speech.left'],
    opacity: [0, 1],
    duration: 1000,
    easing: 'linear',
    begin: () => {
    console.log(`Timeline Item ${itemNumber++}: Fading in right speech bubble and Taylor's speech UI (Scene 03)`);
    document.getElementById('text-content-left').textContent = "Someone made a fake account pretending to be me and is posting mean stuff.";
    document.getElementById('s02-speech-lt').setAttribute('visible', true);
    document.querySelector('.scenario-ui-prompt-speech.left').style.display = "flex";
    }
    })
  
  .add({
  targets: ['#s02s04-Jordan', '#s02s04-Taylor','.scenario-ui-prompt-speech.left','.scenario-ui-prompt-speech.right',
      '#s02-speech-lt','#s02-speech-rt'],
  opacity: [1, 0],
  duration: 1000,
  easing: 'linear',
  delay:3000,                  
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading out Jordan and Taylor (Scene 03)`);
  },
  complete: () => {
  document.getElementById('s02s04-Jordan').setAttribute('visible', false);
  document.getElementById('s02s04-Taylor').setAttribute('visible', false);
  document.getElementById('s02-speech-lt').setAttribute('visible', false);
  document.getElementById('s02-speech-rt').setAttribute('visible', false);
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
  targets: ['#s02s05-Jordan', '#s02s05-Taylor'],
  opacity: [0, 1],
  duration: 1000,
  easing: 'linear',
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading in Jordan and Taylor (Scene 04)`);
  document.getElementById('s02s05-Jordan').setAttribute('visible', true);
  document.getElementById('s02s05-Taylor').setAttribute('visible', true);
  }
  },"-=1000")
  .add({
  targets: ['#s02-speech-rt', '.scenario-ui-prompt-speech.right'],
  opacity: [0, 1],
  duration: 1000,
  easing: 'linear',
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading in right speech bubble and Taylor's speech UI (Scene 03)`);
  document.getElementById('text-content-right').textContent = "That’s awful. Have you told anyone?";
  document.getElementById('s02-speech-rt').setAttribute('visible', true);
  document.querySelector('.scenario-ui-prompt-speech.right').style.display = "flex";
  }
  })
  .add({
    targets: ['#s02s05-Jordan', '#s02s05-Taylor','.scenario-ui-prompt-speech.right','#s02-speech-rt'],
    opacity: [1, 0],
    duration: 1000,
    easing: 'linear',
    delay:3000,                  
    begin: () => {
    console.log(`Timeline Item ${itemNumber++}: Fading out Jordan and Taylor (Scene 03)`);
    },
    complete: () => {
    document.getElementById('s02s05-Jordan').setAttribute('visible', false);
    document.getElementById('s02s05-Taylor').setAttribute('visible', false);
    document.getElementById('s02-speech-rt').setAttribute('visible', false);
    document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
    }
    })     
    .add({
      targets: ['#s02s06-Jordan', '#s02s06-Taylor'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {
      console.log(`Timeline Item ${itemNumber++}: Fading in Jordan and Taylor (Scene 04)`);
      document.getElementById('s02s06-Jordan').setAttribute('visible', true);
      document.getElementById('s02s06-Taylor').setAttribute('visible', true);
      }
      },"-=1000")
      .add({
      targets: ['#s02-speech-lt', '.scenario-ui-prompt-speech.left'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {
      console.log(`Timeline Item ${itemNumber++}: Fading in right speech bubble and Taylor's speech UI (Scene 03)`);
      document.getElementById('text-content-right').textContent = "Not yet. I don’t want to make it worse.";
      document.getElementById('s02-speech-rt').setAttribute('visible', true);
      document.querySelector('.scenario-ui-prompt-speech.right').style.display = "flex";
      }
      })
      .add({
        targets: ['#s02s06-Jordan', '#s02s06-Taylor','.scenario-ui-prompt-speech.left','#s02-speech-lt'],
        opacity: [1, 0],
        duration: 1000,
        easing: 'linear',
        delay:3000,                  
        begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading out Jordan and Taylor (Scene 03)`);
        },
        complete: () => {
        document.getElementById('s02s06-Jordan').setAttribute('visible', false);
        document.getElementById('s02s06-Taylor').setAttribute('visible', false);
        document.getElementById('s02-speech-lt').setAttribute('visible', false);
        document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
        }
        }) 


        .add({
          targets: ['#s02s07-Jordan', '#s02s07-Taylor'],
          opacity: [0, 1],
          duration: 1000,
          easing: 'linear',
          begin: () => {
          console.log(`Timeline Item ${itemNumber++}: Fading in Jordan and Taylor (Scene 04)`);
          document.getElementById('s02s07-Jordan').setAttribute('visible', true);
          document.getElementById('s02s07-Taylor').setAttribute('visible', true);
          }
          },"-=1000")
          .add({
          targets: ['#s02-speech-rt', '.scenario-ui-prompt-speech.right'],
          opacity: [0, 1],
          duration: 1000,
          easing: 'linear',
          begin: () => {
          console.log(`Timeline Item ${itemNumber++}: Fading in right speech bubble and Taylor's speech UI (Scene 03)`);
          document.getElementById('text-content-right').textContent = "You should talk to a teacher or your parents. You can also report it to the platform and eSafety.”";
          document.getElementById('s02-speech-rt').setAttribute('visible', true);
          document.querySelector('.scenario-ui-prompt-speech.right').style.display = "flex";
          }
          })
          .add({
            targets: ['.scenario-ui-prompt-speech.right','#s02-speech-rt'],
            opacity: [1, 0],
            duration: 1000,
            easing: 'linear',
            delay:3000,                  
            begin: () => {
            console.log(`Timeline Item ${itemNumber++}: Fading out Jordan and Taylor (Scene 03)`);
            },
            complete: () => {
            document.getElementById('s02s07-Jordan').setAttribute('visible', false);
            document.getElementById('s02s07-Taylor').setAttribute('visible', false);
            document.getElementById('s02-speech-rt').setAttribute('visible', false);
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
  infoElement.innerHTML = `<h4>Moving on...</h4>
                            <p>If you experience a situation like Jordan's, it's best to get that fake account taken down and check that it has been done.</p>
                            <p>Select the continue button below to move on.</p>`;
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
  targets: ['#s02s06-Jordan', '#s02s06-Taylor','#s02-desk-pc','.scenario-ui-prompt-speech.left','.scenario-ui-prompt-speech.right','.scenario-ui-prompt-speech.info',
      '#s02-speech-lt','#s02-speech-rt','#s02-background'],
  opacity: [1, 0],
  duration: 1000,
  easing: 'linear',                  
  begin: () => {
  console.log(`Timeline Item ${itemNumber++}: Fading out Jordan and Taylor (Scene 03)`);
  },
  complete: () => {
  document.getElementById('s02s07-Jordan').setAttribute('visible', false);
  document.getElementById('s02s07-Taylor').setAttribute('visible', false);
  document.getElementById('s02-desk-pc').setAttribute('visible', false);
  document.getElementById('s02-speech-lt').setAttribute('visible', false);
  document.getElementById('s02-speech-rt').setAttribute('visible', false);
  document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
  document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
  document.querySelector('.scenario-ui-prompt-speech.info').style.display = "none";
  document.querySelector('.scenario-ui-prompt-button-area').style.display = "none";
  document.getElementById('scenario-assets-topic-group-2').setAttribute('opacity', 0);
  document.getElementById('scenario-assets-topic-group-2').setAttribute('visible', false);   
  
  document.getElementById('s02-background').setAttribute('opacity', 0);
  document.getElementById('s02-background').setAttribute('visible', false);   
  }   
  })
  }
  