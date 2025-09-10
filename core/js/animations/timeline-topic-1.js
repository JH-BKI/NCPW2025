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
      targets: '#scenario-assets-topic-group-1',
      opacity: [0, 0],
      duration: 10, // Instant change
      easing: 'linear',
      complete: () => {
        document.getElementById('scenario-assets-topic-group-1').setAttribute('opacity', 0);
        document.getElementById('scenario-assets-topic-group-1').setAttribute('visible', false);   

        document.querySelector('.scenario-ui-prompt-button-area').style.display = "none";
        document.querySelector('.scenario-ui-prompt-button-area').setAttribute('opacity', 0);
        document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
        document.querySelector('.scenario-ui-prompt-speech.left').setAttribute('opacity', 0);
        document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
        document.querySelector('.scenario-ui-prompt-speech.right').setAttribute('opacity', 0);

        
        document.getElementById('s01-speech-lt').setAttribute('opacity', 0);
        document.getElementById('s01-speech-rt').setAttribute('opacity', 0);
        document.getElementById('s01s01-Alex').setAttribute('opacity', 0);
        document.getElementById('s01s01-Mia').setAttribute('opacity', 0);
        document.getElementById('s01s02-Alex').setAttribute('opacity', 0);
        document.getElementById('s01s02-Mia').setAttribute('opacity', 0);
        document.getElementById('s01s03-Alex').setAttribute('opacity', 0);
        document.getElementById('s01s03-Mia').setAttribute('opacity', 0);
        document.getElementById('s01s04-post').setAttribute('opacity', 0);
        document.getElementById('s01s04-heart').setAttribute('opacity', 0);
        document.getElementById('s01s04-like').setAttribute('opacity', 0);
        document.getElementById('s01s04-share').setAttribute('opacity', 0);
        document.getElementById('s01s04-smile').setAttribute('opacity', 0);
        document.getElementById('s01s05-Alex').setAttribute('opacity', 0);
        document.getElementById('s01s05-Mia').setAttribute('opacity', 0);
        document.getElementById('s01s06-Alex').setAttribute('opacity', 0);
        document.getElementById('s01s06-Mia').setAttribute('opacity', 0);
        document.getElementById('s01s07-Alex').setAttribute('opacity', 0);
        document.getElementById('s01s07-Mia').setAttribute('opacity', 0);
        document.getElementById('s01s08-profile').setAttribute('opacity', 0);
        document.getElementById('s01s08-random').setAttribute('opacity', 0);
        document.getElementById('s01-floor').setAttribute('opacity', 0);

        document.getElementById('s01-speech-lt').setAttribute('visible', false);
        document.getElementById('s01-speech-rt').setAttribute('visible', false);
        document.getElementById('s01s01-Alex').setAttribute('visible', false);
        document.getElementById('s01s01-Mia').setAttribute('visible', false);
        document.getElementById('s01s02-Alex').setAttribute('visible', false);
        document.getElementById('s01s02-Mia').setAttribute('visible', false);
        document.getElementById('s01s03-Alex').setAttribute('visible', false);    
        document.getElementById('s01s03-Mia').setAttribute('visible', false);
        document.getElementById('s01s04-post').setAttribute('visible', false);
        document.getElementById('s01s04-heart').setAttribute('visible', false);
        document.getElementById('s01s04-like').setAttribute('visible', false);
        document.getElementById('s01s04-share').setAttribute('visible', false);
        document.getElementById('s01s04-smile').setAttribute('visible', false);
        document.getElementById('s01s05-Alex').setAttribute('visible', false);
        document.getElementById('s01s05-Mia').setAttribute('visible', false);
        document.getElementById('s01s06-Alex').setAttribute('visible', false);  
        document.getElementById('s01s06-Mia').setAttribute('visible', false);
        document.getElementById('s01s07-Alex').setAttribute('visible', false);
        document.getElementById('s01s07-Mia').setAttribute('visible', false);
        document.getElementById('s01s08-profile').setAttribute('visible', false);
        document.getElementById('s01s08-random').setAttribute('visible', false);
        document.getElementById('s01-floor').setAttribute('visible', false);

        document.getElementById('s01-background').setAttribute('opacity', 0);
        document.getElementById('s01-background').setAttribute('visible', false);   

        console.log(`Timeline Item ${itemNumber++}: Setting vis/opacity of assets.`);
      },
      error: (error) => {
        console.error(`Timeline Item ${itemNumber} Error: Setting vis/opacity of assets failed -`, error);
      }  
    })
    // .add({
    //   targets: '#scenario-assets-topic-group-1',
    //   opacity: [1, 1],
    //   duration: 10, // Instant change
    //   easing: 'linear',
    //   begin: () => {
    //     console.log('scenario-assets-topic-group-1: opacity false?: '+document.getElementById('scenario-assets-topic-group-1').getAttribute('opacity'));
    //     console.log('scenario-assets-topic-group-1: visible true?: '+document.getElementById('scenario-assets-topic-group-1').getAttribute('visible'));
        
    //     document.getElementById('scenario-assets-topic-group-1').setAttribute('visible', true)

    //     console.log('scenario-assets-topic-group-1: opacity true?: '+document.getElementById('scenario-assets-topic-group-1').getAttribute('opacity'));
    //     console.log('scenario-assets-topic-group-1: visible true?: '+document.getElementById('scenario-assets-topic-group-1').getAttribute('visible'));

    //     console.log(`Timeline Item ${itemNumber++}: Setting visibility of scenario-assets-topic-group-1 `);
    //   },
    //   error: (error) => {
    //     console.error(`Timeline Item ${itemNumber} Error: Setting visibility of scenario-assets-topic-group-1 failed -`, error);
    //   }
    // })
    .add({
      targets: '#scenario',
      opacity: [1, 1],
      duration: 10, // Instant change
      easing: 'linear',
      begin: () => {
        document.getElementById('name-content-left').textContent = "Alex";
        document.getElementById('name-content-right').textContent = "Mia";
        document.querySelector('#scenario .scenario-ui-prompt-speech.left img').setAttribute('src', getTopicLeftProfileImage(1));
        document.querySelector('#scenario .scenario-ui-prompt-speech.right img').setAttribute('src', getTopicRightProfileImage(1));
        
        console.log(`Timeline Item ${itemNumber++}: Setting left/right profile pictures`);
      },
      error: (error) => {
        console.error(`Timeline Item ${itemNumber} Error: Setting left/right profile pictures failed -`, error);
      }
    })    
    .add({
      targets: ['#s01-background'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in Mia and Alex (Scene 01)`);
        document.getElementById('s01-background').setAttribute('visible', true);  
      }
    })
    .add({
      targets: ['#s01-loading'],
      opacity: [1, 0],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in Mia and Alex (Scene 02)`);
        document.getElementById('s01-loading').setAttribute('visible', false);
      },
      complete: () => {
        document.getElementById('scenario-assets-topic-group-1').setAttribute('opacity', 1);
        document.getElementById('scenario-assets-topic-group-1').setAttribute('visible', true);  
      }
    })
    .add({
      targets: '#s01s01-Mia',
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in Mia (Scene 01)`);
        document.getElementById('s01s01-Mia').setAttribute('visible', true);
      }
    })
    .add({
      targets: '#s01s01-Alex',
      opacity: [0, 1],
      position: ['-2.5 0 -2', '-0.45 0 -2'],
      duration: 1500,
      easing: 'easeInOutQuad',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in Alex and moving him from left to center (Scene 01)`);
        document.getElementById('s01s01-Alex').setAttribute('visible', true);
      }
    })
    .add({
      targets: ['#s01s01-Mia', '#s01s01-Alex'],
      opacity: [1, 0],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading out Mia and Alex (Scene 01)`);
      },
      complete: () => {
        document.getElementById('s01s01-Mia').setAttribute('visible', false);
        document.getElementById('s01s01-Alex').setAttribute('visible', false);                  
      }
    });

  ///////////////////////////////////////////////////////////////////////////////////////////
  // Scene 02: Fade In (Mia and Alex simultaneously)
  /////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////

  timeline
    .add({
      targets: '#text-content-left',
      opacity: [1, 1],
      duration: 10, // Instant change
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Setting Alex's speech text to "Hey Mia!"`);
        document.getElementById('text-content-left').textContent = "Hey Mia!";
      }
    })
    .add({
      targets: '#text-content-right',
      opacity: [1, 1],
      duration: 10, // Instant change
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Setting Mia's speech text to "Hi Alex!"`);
        document.getElementById('text-content-right').textContent = "Hi Alex!";
      }
    })
    .add({
      targets: ['#s01s02-Mia', '#s01s02-Alex'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in Mia and Alex (Scene 02)`);
        document.getElementById('s01s02-Mia').setAttribute('visible', true);
        document.getElementById('s01s02-Alex').setAttribute('visible', true);
      }
    },"-=1000")
    .add({
      targets: ['#s01-speech-lt', '.scenario-ui-prompt-speech.left'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in left speech bubble and Alex's speech UI (Scene 02)`);
        document.getElementById('s01-speech-lt').setAttribute('visible', true);
        document.querySelector('.scenario-ui-prompt-speech.left').style.display = "flex";
      }
    })
    .add({
      targets: ['#s01-speech-rt', '.scenario-ui-prompt-speech.right'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in right speech bubble and Mia's speech UI (Scene 02)`);
        document.getElementById('s01-speech-rt').setAttribute('visible', true);
        document.querySelector('.scenario-ui-prompt-speech.right').style.display = "flex";
      }
    })
    .add({
      targets: '.scenario-ui-prompt-button-area',
      opacity: [0, 1],
      duration: 500,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in continue button area (Scene 02)`);
        document.querySelector('.scenario-ui-prompt-button-area').style.display = "flex";
      }
    })               
    .add(addPause(3))
    .add({
      targets: ['.scenario-ui-prompt-button-area','.scenario-ui-prompt-speech.left','.scenario-ui-prompt-speech.right',
                '#s01-speech-lt','#s01-speech-rt','#s01s02-Mia', '#s01s02-Alex'],
      opacity: [1, 0],
      duration: 1000,
      easing: 'linear',                  
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading out button area and speech bubbles (Scene 02)`);
      },
      complete: () => {
        const buttonArea = document.querySelector('.scenario-ui-prompt-button-area');
        const speechLeft = document.querySelector('.scenario-ui-prompt-speech.left');
        const speechRight = document.querySelector('.scenario-ui-prompt-speech.right');
        
        if (buttonArea) buttonArea.style.display = "none";
        if (speechLeft) speechLeft.style.display = "none";
        if (speechRight) speechRight.style.display = "none";
        
        document.getElementById('s01-speech-lt').setAttribute('visible', false);
        document.getElementById('s01-speech-rt').setAttribute('visible', false);
        document.getElementById('s01s02-Mia').setAttribute('visible', false);
        document.getElementById('s01s02-Alex').setAttribute('visible', false);
      }
    });

  ///////////////////////////////////////////////////////////////////////////////////////////
  // Scene 03: Fade In (Mia and Alex simultaneously)
  /////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  
  timeline.add({
    targets: ['#s01s03-Mia', '#s01s03-Alex'],
    opacity: [0, 1],
    duration: 1000,
    easing: 'linear',
    begin: () => {                
      console.log(`Timeline Item ${itemNumber++}: Fading in Mia and Alex (Scene 03)`);
      document.getElementById('s01s03-Alex').setAttribute('visible', true);
      document.getElementById('s01s03-Mia').setAttribute('visible', true);
    }           
  },"-=1000")
    .add({
      targets: '#text-content-left',
      opacity: [1, 1],
      duration: 10, // Instant change
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Setting Alex's speech text about new phone and TAFE logo (Scene 03)`);
        document.getElementById('text-content-left').textContent = "I just got a new phone! I posted a selfie with it and my TAFE logo is showing.";
      }
    })
    .add({
      targets: ['#s01-speech-lt', '.scenario-ui-prompt-speech.left'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in left speech bubble and Alex's speech UI (Scene 03)`);
        document.querySelector('.scenario-ui-prompt-speech.left').style.display = "flex";
        document.getElementById('s01-speech-lt').setAttribute('visible', true);
      }
    })
    .add({
      targets: ['#s01-speech-lt','#s01s03-Mia', '#s01s03-Alex'],
      opacity: [1, 0],
      duration: 1000,
      easing: 'linear',
      delay: 3000,
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading out left speech bubble, Mia and Alex (Scene 03)`);
      },
      complete: () => {
        document.getElementById('s01-speech-lt').setAttribute('visible', false);
        document.getElementById('s01s03-Mia').setAttribute('visible', false);
        document.getElementById('s01s03-Alex').setAttribute('visible', false);
      }
    }) 
    .add({
      targets: '#s01s04-post',
      opacity: [0, 1],
      position: ['0.5 -0.5 -2', '0.5 0 -1.25'],
      rotation: ['0 0 0', '0 0 10'], // Spin while moving
      duration: 1000,
      easing: 'easeInOutQuad',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in social media post with spin and movement (Scene 03)`);
        document.getElementById('s01s04-post').setAttribute('visible', true);
      },
      complete: () => {
        console.log('Timeline: Starting social media reactions animations (Scene 03)');
        document.getElementById('s01s04-like').setAttribute('visible', true);
        document.getElementById('s01s04-heart').setAttribute('visible', true);
        document.getElementById('s01s04-share').setAttribute('visible', true);
        document.getElementById('s01s04-smile').setAttribute('visible', true);
        // Start a separate looping animation when this completes
        anime({
          targets: '#s01s04-post',
          rotation: ['0 0 10', '0 0 5'],
          duration: 5000,
          easing: 'linear',
          loop: 10,
          direction: 'alternate'
        });

        anime({
          targets: '#s01s04-like',
          opacity: [1, 0],
          position: ['-1 2.5 -3', '-1 -1.5 -3'],
          duration: 2000,
          easing: 'easeInOutQuad',
          loop: 10,
          direction: 'alternate'
        },"-=1000");

        anime({
          targets: '#s01s04-heart',
          opacity: [1, 0],
          position: ['0.5 2 -2.5', '0.5 -1.75 -2.5'],
          duration: 2500,
          easing: 'easeInOutQuad',
          loop: 10,
          direction: 'alternate'
        },"-=500");

        anime({
          targets: '#s01s04-share',
          opacity: [1, 0],
          position: ['-0.5 2 -3', '-0.5 -1.5 -3.5'],
          duration: 3000,
          easing: 'easeInOutQuad',
          loop: 10,
          direction: 'alternate'
        },"-=250");
        
        anime({
          targets: '#s01s04-smile',
          opacity: [1, 0],
          position: ['1.25 2 -2.25', '1.25 -1.5 -2.25'],
          duration: 2750,
          easing: 'easeInOutQuad',
          loop: 10,
          direction: 'alternate'
        },"-=750");
      },
      error: (error) => {
        console.error(`Timeline Item ${itemNumber} Error: Fading in social media post with spin and movement (Scene 03) failed -`, error);
      }
    },"-=1000")
    .add({
      targets: '.scenario-ui-prompt-button-area',
      opacity: [0, 1],
      duration: 500,
      easing: 'linear',
      delay: 3000,
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in continue button area (Scene 03)`);
        document.querySelector('.scenario-ui-prompt-button-area').style.display = "flex";
      }
    })               
    .add(addPause(5))
    .add({
      targets: ['.scenario-ui-prompt-button-area','.scenario-ui-prompt-speech.left','#s01s04-post','#s01s04-heart','#s01s04-like','#s01s04-share','#s01s04-smile'],
      opacity: [1, 0],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading out all social media elements (Scene 04)`);
      },
      complete: () => {
        const buttonArea = document.querySelector('.scenario-ui-prompt-button-area');
        const speechLeft = document.querySelector('.scenario-ui-prompt-speech.left');
        
        if (buttonArea) buttonArea.style.display = "none";
        if (speechLeft) speechLeft.style.display = "none";
        
        document.getElementById('s01s04-post').setAttribute('visible', false);
        document.getElementById('s01s04-like').setAttribute('visible', false);
        document.getElementById('s01s04-heart').setAttribute('visible', false);
        document.getElementById('s01s04-share').setAttribute('visible', false);
        document.getElementById('s01s04-smile').setAttribute('visible', false);
      },
      error: (error) => {
        console.error(`Timeline Item ${itemNumber} Error: Fading out all social media elements (Scene 04) failed -`, error);
      }
    });
                
  ///////////////////////////////////////////////////////////////////////////////////////////
  // Scene 05: Fade In (Mia and Alex simultaneously)
  /////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////

  timeline
    .add({
      targets: '#text-content-right',
      opacity: [1, 1],
      duration: 10, // Instant change
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Setting Mia's speech text about privacy concerns (Scene 05)`);
        document.getElementById('text-content-right').textContent = "Oh, you might want to take that down. People can figure out where you go to school from that.";
      },
      error: (error) => {
        console.error(`Timeline Item ${itemNumber} Error: Setting Mia's speech text about privacy concerns (Scene 05) failed -`, error);
      }
    })
    .add({
      targets: ['#s01s05-Mia', '#s01s05-Alex'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in Mia and Alex (Scene 05)`);
        document.getElementById('s01s05-Mia').setAttribute('visible', true);
        document.getElementById('s01s05-Alex').setAttribute('visible', true);
      },
      error: (error) => {
        console.error(`Timeline Item ${itemNumber} Error: Fading in Mia and Alex (Scene 05) failed -`, error);
      }
    },"-=1000")
    .add({
      targets: ['#s01-speech-rt', '.scenario-ui-prompt-speech.right'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in right speech bubble and Mia's speech UI (Scene 05)`);
        document.querySelector('.scenario-ui-prompt-speech.right').style.display = "flex";
        document.getElementById('s01-speech-rt').setAttribute('visible', true);
      },
      error: (error) => {
        console.error(`Timeline Item ${itemNumber} Error: Fading in right speech bubble and Mia's speech UI (Scene 05) failed -`, error);
      }
    })
    .add({
      targets: ['#s01-speech-rt', '.scenario-ui-prompt-speech.right','#s01s05-Mia', '#s01s05-Alex'],
      opacity: [1, 0],
      duration: 1000,
      easing: 'linear',
      delay: 3000,
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading out speech bubble right and Mia and Alex (Scene 05)`);
      },
      complete: () => {
        document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
        document.getElementById('s01-speech-rt').setAttribute('visible', false);
        document.getElementById('s01s05-Mia').setAttribute('visible', false);
        document.getElementById('s01s05-Alex').setAttribute('visible', false);
      },
      error: (error) => {
        console.error(`Timeline Item ${itemNumber} Error: Fading out speech bubble right and Mia and Alex (Scene 05) failed -`, error);
      }
    });  
              
  ///////////////////////////////////////////////////////////////////////////////////////////
  // Scene 06: Fade In (Mia and Alex simultaneously)
  /////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////

  timeline
    .add({
      targets: ['#s01s06-Mia', '#s01s06-Alex'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in Mia and Alex (Scene 06)`);
        document.getElementById('s01s06-Mia').setAttribute('visible', true);
        document.getElementById('s01s06-Alex').setAttribute('visible', true);
      },
      error: (error) => {
        console.error(`Timeline Item ${itemNumber} Error: Fading in Mia and Alex (Scene 06) failed -`, error);
      }
    },"-=1000")
    .add({
      targets: '#text-content-left',
      opacity: [1, 1],
      duration: 10, // Instant change
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Setting Alex's speech text about not thinking it's a big deal (Scene 06)`);
        document.getElementById('text-content-left').textContent = "Really? I didn't think it was a big deal.";
      },
      error: (error) => {
        console.error(`Timeline Item ${itemNumber} Error: Setting Alex's speech text about not thinking it's a big deal (Scene 06) failed -`, error);
      }
    })
    .add({
      targets: ['#s01-speech-lt', '.scenario-ui-prompt-speech.left'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in left speech bubble and Alex's speech UI (Scene 06)`);
        document.getElementById('s01-speech-lt').setAttribute('visible', true);
        document.querySelector('.scenario-ui-prompt-speech.left').style.display = "flex";
      },
      error: (error) => {
        console.error(`Timeline Item ${itemNumber} Error: Fading in left speech bubble and Alex's speech UI (Scene 06) failed -`, error);
      }
    })
    .add({
      targets: ['#s01-speech-lt', '.scenario-ui-prompt-speech.left','#s01s06-Mia', '#s01s06-Alex'],
      opacity: [1, 0],
      duration: 1000,
      easing: 'linear',
      delay: 3000,
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading out Mia and Alex (Scene 06)`);
      },
      complete: () => {
        document.getElementById('s01-speech-lt').setAttribute('visible', false);
        document.getElementById('s01s06-Mia').setAttribute('visible', false);
        document.getElementById('s01s06-Alex').setAttribute('visible', false);
        document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
      },
      error: (error) => {
        console.error(`Timeline Item ${itemNumber} Error: Fading out Mia and Alex (Scene 06) failed -`, error);
      }
    });
              
  ///////////////////////////////////////////////////////////////////////////////////////////
  // Scene 07: Fade In (Mia and Alex simultaneously)
  /////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////

  timeline
    .add({
      targets: ['#s01s07-Mia', '#s01s07-Alex'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in Mia and Alex (Scene 07)`);
        document.getElementById('s01s07-Mia').setAttribute('visible', true);
        document.getElementById('s01s07-Alex').setAttribute('visible', true);
      },
      error: (error) => {
        console.error(`Timeline Item ${itemNumber} Error: Fading in Mia and Alex (Scene 07) failed -`, error);
      }
    },"-=1000")
    .add({
      targets: '#text-content-right',
      opacity: [1, 1],
      duration: 10, // Instant change
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Setting Mia's speech text about privacy and safety (Scene 07)`);
        document.getElementById('text-content-right').textContent = "It can be. It's safer to keep stuff like your school and location private.";
      },
      error: (error) => {
        console.error(`Timeline Item ${itemNumber} Error: Setting Mia's speech text about privacy and safety (Scene 07) failed -`, error);
      }
    })
    .add({
      targets: ['#s01-speech-rt', '.scenario-ui-prompt-speech.right'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading in right speech bubble and Mia's speech UI (Scene 07)`);
        document.getElementById('s01-speech-rt').setAttribute('visible', true);
        document.querySelector('.scenario-ui-prompt-speech.right').style.display = "flex";
      },
      error: (error) => {
        console.error(`Timeline Item ${itemNumber} Error: Fading in right speech bubble and Mia's speech UI (Scene 07) failed -`, error);
      }
    })
    .add({
      targets: ['#s01-speech-rt', '.scenario-ui-prompt-speech.right'],
      opacity: [1, 0],
      duration: 1000,
      easing: 'linear',
      delay: 5000,      
      complete: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading out Mia and Alex (Scene 07)`);
        document.getElementById('s01-speech-rt').setAttribute('visible', false);
        document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
      },
      error: (error) => {
        console.error(`Timeline Item ${itemNumber} Error: Fading out Mia and Alex (Scene 07) failed -`, error);
      }
    }).add(addPause(3));

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
      delay: 2000,
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Setting the general info (Scene 07)`);
        const infoElement = document.querySelector('.scenario-ui-prompt-speech.info');
            infoElement.innerHTML = `<p>How can you help and support your friends and family to protect themselves against harmful content?</p>
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
      targets: ['.scenario-ui-prompt-button-area','.scenario-ui-prompt-speech.left','.scenario-ui-prompt-speech.info','#s01-background'],
      opacity: [1, 0],
      duration: 1000,
      easing: 'linear',
      begin: () => {
        console.log(`Timeline Item ${itemNumber++}: Fading out button area and speech bubble (Scene 08)`);
      },
      complete: () => {
        document.getElementById('s01-speech-lt').setAttribute('visible', false);
        document.getElementById('s01-speech-rt').setAttribute('visible', false);
        document.querySelector('.scenario-ui-prompt-speech.left').style.display = "none";
        document.querySelector('.scenario-ui-prompt-speech.right').style.display = "none";
        document.querySelector('.scenario-ui-prompt-speech.info').style.display = "none";
        document.querySelector('.scenario-ui-prompt-button-area').style.display = "none";
        document.getElementById('scenario-assets-topic-group-1').setAttribute('opacity', 0);
        document.getElementById('scenario-assets-topic-group-1').setAttribute('visible', false);   

        document.getElementById('s01-background').setAttribute('opacity', 0);
        document.getElementById('s01-background').setAttribute('visible', false);   
      }   
    });
}
