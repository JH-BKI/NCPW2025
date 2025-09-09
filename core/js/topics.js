// Topic data for the learning app
const topicData = {
    topic_1: {
        title: 'Protecting Yourself Online',
        icon: '💻', // Can be emoji or image path like './assets/icons/topic1.png'
        videoUrl: 'https://player.vimeo.com/video/911432606', // Topic-specific video
        content: `
            <p>Catfishing is when someone creates a fake social media account to scam or trick you.</p>
            
            <p><strong>Signs of a catfish:</strong></p>
            <ol>
                <li>They ask lots of questions about you but avoid answering questions about themselves.</li>
                <li>They seem a bit too… perfect.</li>
                <li>They always have a reason why they can't meet up.</li>
                <li>They're not keen on video chats.</li>
                <li>Their stories don't quite add up.</li>
            </ol>
            
            <p>Let's continue to test your knowledge.</p>
        `,
        question: 'There are five signs of catfishing, below are three of these signs, select which three below',
        answers: [
            {text: 'They like to talk about themselves', correct: false},
            {text: 'They seem a bit too… perfect', correct: true},
            {text: 'They always have a reason why they can’t meet up', correct: true},
            {text: 'They like to do video chats so you can see who they are', correct: false},
            {text: 'Their stories don’t quite add up', correct: true}
        ],
        feedback: {
            perfect: 'Well done! Your answers are correct.',
            partial: 'Good try! Move on to the topic summary to review.'
        },
        summary: `
            <h3>Let's recap what you learned:</h3>
            
            <p><strong>The 5 signs of a catfish:</strong></p>
            <ol>
                <li>They ask lots of questions about you but avoid answering questions about themselves.</li>
                <li>They seem a bit too… perfect.</li>
                <li>They always have a reason why they can't meet up.</li>
                <li>They're not keen on video chats.</li>
                <li>Their stories don't quite add up.</li>
            </ol>
            
            <div class="highlight-message light-card">
                <p><strong>Always be careful about what you say and share online.</strong></p>
            </div>
            
            <p>Well done!</p>
            <p><i>Topic 1: Protecting Yourself Online</i> is complete.</p>
        `,
        targetImage: './assets/topic_1/s01-image-marker.png',
        leftProfileImage: './assets/topic_1/leftProfileImage.png',
        rightProfileImage: './assets/topic_1/rightProfileImage.png',
        
        // AR Assets with entity properties for Topic 1
        arAssets: {
            images: [
                // Speech bubbles
                { 
                    id: 's01-speech-lt', 
                    src: './assets/topic_1/s01-speech-left.png',
                    scale: '0.5 0.5 0.5',
                    position: '-0.125 1.125 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's01-speech-rt', 
                    src: './assets/topic_1/s01-speech-right.png',
                    scale: '0.5 0.5 0.5',
                    position: '0.125 1.125 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 01 characters
                { 
                    id: 's01s01-Alex', 
                    src: './assets/topic_1/s01-scene-01-Alex.png',
                    scale: '1 2 0.5',
                    position: '-1.25 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's01s01-Mia', 
                    src: './assets/topic_1/s01-scene-01-Mia.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 02 characters
                { 
                    id: 's01s02-Alex', 
                    src: './assets/topic_1/s01-scene-02-Alex.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's01s02-Mia', 
                    src: './assets/topic_1/s01-scene-02-Mia.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 03 characters
                { 
                    id: 's01s03-Alex', 
                    src: './assets/topic_1/s01-scene-03-Alex.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's01s03-Mia', 
                    src: './assets/topic_1/s01-scene-03-Mia.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 04 social media elements
                { 
                    id: 's01s04-post', 
                    src: './assets/topic_1/s01-scene-04-post.png',
                    scale: '1 1.5 0.5',
                    position: '-0 0 -0.5',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's01s04-heart', 
                    src: './assets/topic_1/s01-scene-04-heart.png',
                    scale: '0.5 0.5 0.5',
                    position: '-0 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's01s04-like', 
                    src: './assets/topic_1/s01-scene-04-like.png',
                    scale: '0.5 0.5 0.5',
                    position: '-0 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's01s04-share', 
                    src: './assets/topic_1/s01-scene-04-share.png',
                    scale: '0.5 0.5 0.5',
                    position: '-0 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's01s04-smile', 
                    src: './assets/topic_1/s01-scene-04-smile.png',
                    scale: '0.5 0.5 0.5',
                    position: '-0 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 05 characters
                { 
                    id: 's01s05-Alex', 
                    src: './assets/topic_1/s01-scene-05-Alex.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's01s05-Mia', 
                    src: './assets/topic_1/s01-scene-05-Mia.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 06 characters
                { 
                    id: 's01s06-Alex', 
                    src: './assets/topic_1/s01-scene-06-Alex.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's01s06-Mia', 
                    src: './assets/topic_1/s01-scene-06-Mia.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 07 characters
                { 
                    id: 's01s07-Alex', 
                    src: './assets/topic_1/s01-scene-07-Alex.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's01s07-Mia', 
                    src: './assets/topic_1/s01-scene-07-Mia.png',
                    scale: '1 2 0.5',
                    position: '0.25 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 08 action and status assets
                { 
                    id: 's01s08-profile', 
                    src: './assets/topic_1/s01-scene-08-profile.png',
                    scale: '1 1.5 0.5',
                    position: '-0 0 -0.5',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's01s08-random', 
                    src: './assets/topic_1/s01-scene-08-random.png',
                    scale: '0.5 0.5 0.5',
                    position: '-0 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's01-floor', 
                    src: './assets/topic_1/s01-floor.png',                // Floor
                    scale: '2 1 2',
                    position: '0 -0.5 0',
                    rotation: '-90 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                  id: 's01-background', 
                  src: './assets/topic_1/background.png',
                  scale: '8.5 2.2 1',
                  position: '0 0.75 -10',
                  rotation: '0 0 0',
                  visible: 'false',
                  opacity: '1',
                  material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                }
            ]
        }
    },
    topic_2: {
        title: 'Navigating Difficult Situations',
        icon: '💻', // Can be emoji or image path like './assets/icons/topic1.png'
        videoUrl: 'https://player.vimeo.com/video/720510220', // Topic-specific video
        content: `       
            <p><strong>Cyberbullying</strong></p>
            <p>Cyberbullying is when someone uses technology like phones, social media, gaming or messenger apps to hurt, embarrass or intimidate another person.</p>
            <p>It can happen in a lot of ways, including sending mean or threatening messages, posting hurtful comments or rumours online, sharing video or photos 
                  without permission, excluding someone from a chat or game on purpose or pretending to be someone else to cause harm.</p>
            <p>What can you do about it? Don’t respond, block and report, save any evidence , talk to a trusted adult and get help.</p>  
            <p>Further information can be found here <a href="https://www.esafety.gov.au/young-people" target="_blank">Young People | eSafety Commissioner</a></p>
            
            <p>Let's continue to test your knowledge.</p>
        `,
        question: 'How can you support a friend who’s experiencing online hate?',
        answers: [
            {text: 'Listen without judgment, encourage them to seek help, and report the abuse together if needed', correct: true},
            {text: 'Share the bullying post to show others', correct: false},
            {text: 'Tell them to just delete their account', correct: false}
        ],
        feedback: {
            perfect: 'Well done! Your answers are correct.',
            partial: 'Good try! Move on to the topic summary to review.'
        },
        summary: `
            <h3>Let's recap what you learned:</h3>
            
            <p>Cyberbullying happens when someone uses technology such as phones, social media, games, or messaging apps to deliberately hurt, embarrass, or intimidate others.</p>
            <p>It can involve:</p> 
            <ol>
                <li>Sending mean or threatening messages</li>
                <li>Spreading rumours</li>
                <li>Sharing photos or videos without consent</li>
                <li>Excluding people from online spaces</li>
                <li>Impersonating someone to cause harm</li>
            </ol>
            <p>If it happens, the best steps are not to respond, block and report the behaviour, keep evidence, and seek support from a trusted adult. </p>
            <p>More information is available from the <a href="https://www.esafety.gov.au/young-people" target="_blank">eSafety Commissioner’s website for young people</a>.</p>

            <div class="highlight-message light-card">
                <p><strong>Remember the bullying is a reflection of the bully not you. 
                <p>You are special, loved and amazing!</strong></p>
            </div>
            
            <p>Well done!</p>
            <p><i>Topic 2: Navigating Difficult Situations</i> is complete.</p>
        `,
        targetImage: './assets/topic_2/s02-image-marker.png',
        leftProfileImage: './assets/topic_2/leftProfileImage.png',
        rightProfileImage: './assets/topic_2/rightProfileImage.png',
        
        // AR Assets with entity properties for Topic 2
        arAssets: {
            images: [
                // Speech bubbles
                { 
                    id: 's02-speech-lt', 
                    src: './assets/topic_2/s02-speech-left.png',
                    scale: '0.5 0.5 0.5',
                    position: '-0.125 1.125 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's02-speech-rt', 
                    src: './assets/topic_2/s02-speech-right.png',
                    scale: '0.5 0.5 0.5',
                    position: '0.125 1.125 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 01 characters
                { 
                    id: 's02s01-Jordan', 
                    src: './assets/topic_2/s02-01-Jordan.png',
                    scale: '1 2 0.5',
                    position: '-1.25 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's02s01-Taylor-sitting', 
                    src: './assets/topic_2/s02-01-Taylor-sitting.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 02 characters
                { 
                    id: 's02s02-Jordan', 
                    src: './assets/topic_2/s02-02-Jordan.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's02s02-Taylor-sitting', 
                    src: './assets/topic_2/s02-02-Taylor-sitting.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 03 characters
                { 
                    id: 's02s03-Jordan', 
                    src: './assets/topic_2/s02-03-Jordan.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's02s03-Taylor-sitting', 
                    src: './assets/topic_2/s02-03-Taylor-sitting.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 04 characters
                { 
                    id: 's02s04-Jordan', 
                    src: './assets/topic_2/s02-04-Jordan.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's02s04-Taylor', 
                    src: './assets/topic_2/s02-04-Taylor.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 05 characters
                { 
                    id: 's02s05-Jordan', 
                    src: './assets/topic_2/s02-05-Jordan.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's02s05-Taylor', 
                    src: './assets/topic_2/s02-05-Taylor.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 06 characters
                { 
                    id: 's02s06-Jordan', 
                    src: './assets/topic_2/s02-06-Jordan.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's02s06-Taylor', 
                    src: './assets/topic_2/s02-06-Taylor.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 07 characters
                { 
                    id: 's02s07-Jordan', 
                    src: './assets/topic_2/s02-07-Jordan.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's02s07-Taylor', 
                    src: './assets/topic_2/s02-07-Taylor.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 08 characters
                { 
                    id: 's02s08-Jordan', 
                    src: './assets/topic_2/s02-08-Jordan.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Environment and props
                { 
                    id: 's02-desk-pc', 
                    src: './assets/topic_2/s02-desk-pc.png',
                    scale: '1.5 1 1',
                    position: '0 0 -0.5',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's02-phone', 
                    src: './assets/topic_2/s02-phone.png',
                    scale: '0.5 0.5 0.5',
                    position: '0.5 0.5 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's02-whiteboard', 
                    src: './assets/topic_2/s02-whiteboard.png',
                    scale: '1 1.5 0.5',
                    position: '0 1 -1.5',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's02-Furniture-01', 
                    src: './assets/topic_2/s02-Furniture-01.png',
                    scale: '1 1 1',
                    position: '-1 0 -0.5',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's02-Furniture-02', 
                    src: './assets/topic_2/s02-Furniture-02.png',
                    scale: '1 1 1',
                    position: '1 0 -0.5',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's02-floor', 
                    src: './assets/topic_2/s02-floor.png',
                    scale: '2 1 2',
                    position: '0 -0.5 0',
                    rotation: '-90 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                  id: 's02-background', 
                  src: './assets/topic_2/background.png',
                  scale: '0.5 0.5 0.5',
                  position: '0 0 -2',
                  rotation: '0 0 0',
                  visible: 'false',
                  opacity: '1',
                  material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                }
            ]
        }
    },
    topic_3: {
        title: 'Respectful Relationships Online',
        icon: '📊', // Can be emoji or image path
        videoUrl: 'https://player.vimeo.com/video/771882772', // Topic-specific video (placeholder)
        content: `       
        <p><strong>Boundaries</strong></p>
        <p>If you feel your relationship boundaries have been crossed, consider the four steps to reporting that behaviour:</p>
        
        <p><strong>Step One:</strong> Collect EvidenceThis can include things like screenshots, webpages, addresses (URLs) and account profiles or usernames. </p>
        <p><strong>Step Two:</strong> Report Harmful ContentIn some cases, you can report directly to the social media page or online service.
        If they don’t remove the content within 48 hours report to the safety commission.</p>
        <p><strong>Step Three:</strong> Prevent further Contact Use in- app functions to ignore, mute or block the other person and check your privacy settings. </p>
        <p><strong>Step Four:</strong> Get more helpFind counselling and support. The student services team at BKI offers student’s free and confidential counselling and can assist with online abuse issues.</p>
        
        <p>Let's continue to test your knowledge.</p>
    `,
    question: 'What does a respectful online relationship look like?',
    answers: [
        {text: 'Pressure to do something that makes you feel uncomfortable', correct: false},
        {text: 'Feeling like you can’t be your unique self', correct: false},
        {text: 'It involves mutual respect, consent, and feels safe', correct: true}
    ],
    feedback: {
        perfect: 'Well done! Your answers are correct.',
        partial: 'Good try! Move on to the topic summary to review.'
    },
    summary: `
        <h3>Let's recap what you learned:</h3>
        
        <p>Respectful relationships, especialy when online, involve mutual respect and setting boundaries.</p>
        <p>Reporting online abuse involves four key steps: first, collect evidence such as screenshots, web pages, URLs, and usernames; second, report the harmful content to the platform, and if it isn’t removed within 48 hours, escalate it to the eSafety Commissioner; third, prevent further contact by using in-app tools to block, mute, or adjust privacy settings; and finally, seek additional help through free and confidential counselling and support services, such as student support teams.</p>
        <p>More information is available from the <a href="https://www.esafety.gov.au/young-people" target="_blank">eSafety Commissioner’s website for young people</a>.</p>

        <div class="highlight-message light-card">
            <p><strong>There are many characteristics of a respectful, healthy relationship. No matter whether you are online or offline, relationships should be always be respectful.</strong></p>
        </div>        
        <p>Well done!</p>
        <p><i>Topic 3: Respectful Relationships Online</i> is complete.</p>
    `,
    targetImage: './assets/topic_3/s03-image-marker.png',
    leftProfileImage: './assets/topic_3/leftProfileImage.png',
    rightProfileImage: './assets/topic_3/rightProfileImage.png',
        
        // AR Assets with entity properties for Topic 3
        arAssets: {
            images: [
                // Speech bubbles
                { 
                    id: 's03-speech-lt', 
                    src: './assets/topic_3/s03-speech-left.png',
                    scale: '0.5 0.5 0.5',
                    position: '-0.125 1.25 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's03-speech-rt', 
                    src: './assets/topic_3/s03-speech-right.png',
                    scale: '0.5 0.5 0.5',
                    position: '0.125 1.25 -1.01',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 01 characters
                { 
                    id: 's03s01-Riley', 
                    src: './assets/topic_3/s03-01-riley.png',
                    scale: '1.5 1.5 1.5',
                    position: '-0.275 0 0',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's03s01-Sam', 
                    src: './assets/topic_3/s03-01-sam.png',
                    scale: '1.5 1.5 1.5',
                    position: '0.275 0 0',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 02 characters
                { 
                    id: 's03s02-Riley', 
                    src: './assets/topic_3/s03-02-riley.png',
                    scale: '1.5 1.5 1.5',
                    position: '0.275 0 0',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's03s02-Sam', 
                    src: './assets/topic_3/s03-02-sam.png',
                    scale: '1.5 1.5 1.5',
                    position: '0.275 0 0',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 03 characters
                { 
                    id: 's03s03-Riley', 
                    src: './assets/topic_3/s03-03-riley.png',
                    scale: '1.5 1.5 1.5',
                    position: '-0.275 0 0',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's03s03-Sam', 
                    src: './assets/topic_3/s03-03-sam.png',
                    scale: '1.5 1.5 1.5',
                    position: '0.275 0 0',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 04 characters
                { 
                    id: 's03s04-Riley', 
                    src: './assets/topic_3/s03-04-riley.png',
                    scale: '1.5 1.5 1.5',
                    position: '0.275 0 0',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's03s04-Sam', 
                    src: './assets/topic_3/s03-04-sam.png',
                    scale: '1.5 1.5 1.5',
                    position: '0.275 0 0',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 05 characters
                { 
                    id: 's03s05-Riley', 
                    src: './assets/topic_3/s03-05-riley.png',
                    scale: '1.5 1.5 1.5',
                    position: '-0.275 0 0',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's03s05-Sam', 
                    src: './assets/topic_3/s03-05-sam.png',
                    scale: '1.5 1.5 1.5',
                    position: '0.275 0 0',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 06 characters
                { 
                    id: 's03s06-Riley', 
                    src: './assets/topic_3/s03-06-riley.png',
                    scale: '1.5 1.5 1.5',
                    position: '-0.275 0 0',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's03s06-Sam', 
                    src: './assets/topic_3/s03-06-sam.png',
                    scale: '1.5 1.5 1.5',
                    position: '0.275 0 0',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Environment and props
                { 
                    id: 's03-desk', 
                    src: './assets/topic_3/s03-desk.png',
                    scale: '0.5 0.5 0.5',
                    position: '0 0 -0.5',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's03-printer', 
                    src: './assets/topic_3/s03-printer.png',
                    scale: '0.5 0.5 0.5',
                    position: '0.8 0.2 -0.8',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's03-plant', 
                    src: './assets/topic_3/s03-plant.png',
                    scale: '0.5 0.5 0.5',
                    position: '-0.8 0.2 -0.8',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's03-divider', 
                    src: './assets/topic_3/s03-divider.png',
                    scale: '0.5 0.5 0.5',
                    position: '0 0.5 -1.2',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                  id: 's03-background', 
                  src: './assets/topic_3/background.png',
                  scale: '0.5 0.5 0.5',
                  position: '0 0 -2',
                  rotation: '0 0 0',
                  visible: 'false',
                  opacity: '1',
                  material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
              }
            ]
        }
    },
    topic_4: {
        title: 'Seeking Help and Support',
        icon: '🔒', // Can be emoji or image path
        videoUrl: 'https://player.vimeo.com/video/720517222', // Topic-specific video (placeholder)
        content: `       
        <p><strong>Opening Up</strong></p>
        <p>Help is always available — don’t hesitate to reach out.</p>
        <p>When something goes wrong online, it's important to speak up and get help, but it might not be obvious what you can report or how to get help.</p>
        <p>Consider these four steps when reporting online abuse:</p>
        <p><strong>Step One:</strong> Collect EvidenceThis can include things like screenshots, webpages, addresses (URLs) and account profiles or usernames</p>
        <p><strong>Step Two:</strong> Report Harmful ContentIn some cases, you can report directly to the social media page or online service. If they don’t remove the content within 48 hours report to the <a href="https://www.esafety.gov.au/young-people" target="_blank">eSafety Commissioner</a>.</p>
        <p><strong>Step Three:</strong> Prevent further Contact Use in- app functions to ignore, mute or block the other person and check your privacy settings. </p>
        <p><strong>Step Four:</strong> Get more helpFind counselling and support. The student services team at BKI offers student’s free and confidential counselling and can assist with online abuse issues.</p>
        
        <p>Let's continue to test your knowledge.</p>
    `,
    question: 'Who can you talk to if something online makes you feel unsafe?',
    answers: [
        {text: 'A random person online', correct: false},
        {text: 'A trusted adult like a parent, teacher, or counsellor. You can also report issues to the eSafety Commissioner', correct: true},
        {text: 'No one — it’s better to keep it to yourself', correct: false}
    ],
    feedback: {
        perfect: 'Well done! Your answers are correct.',
        partial: 'Good try! Move on to the topic summary to review.'
    },
    summary: `
        <h3>Let's recap what you learned:</h3>
        
        <p>If something goes wrong online, it’s important to speak up and get support. Reporting online abuse involves four steps: collect evidence such as screenshots, web pages, or usernames; report harmful content to the platform, and if not removed within 48 hours, escalate it to the eSafety Commissioner; prevent further contact by blocking, muting, or adjusting privacy settings; and seek additional help through free, confidential counselling and support services, such as those offered by the BKI student services team.</p>
        <p>More information is available from the <a href="https://www.esafety.gov.au/young-people" target="_blank">eSafety Commissioner’s website for young people</a>.</p>

        <div class="highlight-message light-card">
            <p><strong>It’s important to call in other support - talk to a trusted adult like a parent, teacher or older sibling so they can help you work out what to do.</strong></p>
        </div>
        
        <p>Well done!</p>
        <p><i>Topic 4: Seeking Help and Support</i> is complete.</p>
    `,
    targetImage: './assets/topic_4/s04-image-marker.png',
    leftProfileImage: './assets/topic_4/leftProfileImage.png',
    rightProfileImage: './assets/topic_4/rightProfileImage.png',
        
        // AR Assets with entity properties for Topic 4
        arAssets: {
            images: [
                // Speech bubbles
                { 
                    id: 's04-speech-lt', 
                    src: './assets/topic_4/s04-speech-left.png',
                    scale: '0.5 0.5 0.5',
                    position: '-0.125 1.125 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's04-speech-rt', 
                    src: './assets/topic_4/s04-speech-right.png',
                    scale: '0.5 0.5 0.5',
                    position: '0.125 1.125 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 01 characters
                { 
                    id: 's04s01-Ella', 
                    src: './assets/topic_4/s04-01-ella.png',
                    scale: '1 2 0.5',
                    position: '-1.25 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 02 characters
                { 
                    id: 's04s02-Ella', 
                    src: './assets/topic_4/s04-02-ella.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's04s02-Liam', 
                    src: './assets/topic_4/s04-02-liam.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 03 characters
                { 
                    id: 's04s03-Ella', 
                    src: './assets/topic_4/s04-03-ella.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's04s03-Liam', 
                    src: './assets/topic_4/s04-03-liam.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 04 characters
                { 
                    id: 's04s04-Ella', 
                    src: './assets/topic_4/s04-04-ella.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's04s04-Liam', 
                    src: './assets/topic_4/s04-04-liam.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 05 characters
                { 
                    id: 's04s05-Ella', 
                    src: './assets/topic_4/s04-05-ella.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's04s05-Liam', 
                    src: './assets/topic_4/s04-05-liam.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 06 characters
                { 
                    id: 's04s06-Ella', 
                    src: './assets/topic_4/s04-06-ella.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's04s06-Liam', 
                    src: './assets/topic_4/s04-06-liam.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Scene 07 characters
                { 
                    id: 's04s07-Ella', 
                    src: './assets/topic_4/s04-07-ella.png',
                    scale: '1 2 0.5',
                    position: '-0.275 0 -1',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's04s07-Liam', 
                    src: './assets/topic_4/s04-07-liam.png',
                    scale: '1 2 0.5',
                    position: '0.375 0 -1.05',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                // Environment and props
                { 
                    id: 's04-couch', 
                    src: './assets/topic_4/s04-couch.png',
                    scale: '1.2 1 1',
                    position: '0 0 -0.5',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's04-windows', 
                    src: './assets/topic_4/s04-windows.png',
                    scale: '2 1.5 1',
                    position: '0 1.5 -2',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's04-floor', 
                    src: './assets/topic_4/s04-floor.png',
                    scale: '3 1 3',
                    position: '0 -0.5 0',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                    id: 's04-background-table', 
                    src: './assets/topic_4/s04-background-table.png',
                    scale: '1.5 1 1',
                    position: '0 0 -1.5',
                    rotation: '0 0 0',
                    visible: 'false',
                    opacity: '1',
                    material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                },
                { 
                  id: 's04-background', 
                  src: './assets/topic_4/background.png',
                  scale: '0.5 0.5 0.5',
                  position: '0 0 -2',
                  rotation: '0 0 0',
                  visible: 'false',
                  opacity: '1',
                  material: 'transparent: true; alphaTest: 0.5; depthWrite: true; blending: normal'
                }
            ]
        }
    }
};

// Helper functions for topic management
function getTopicInfo(topicId) {
  const topicKey = `topic_${topicId}`;
  return topicData[topicKey] || null;
}

function getTopicTitle(topicId) {
  const topic = getTopicInfo(topicId);
  return topic ? topic.title : 'Unknown Topic';
}

function getTopicContent(topicId) {
  const topic = getTopicInfo(topicId);
  return topic ? topic.content : '';
}

function getTopicQuestion(topicId) {
  const topic = getTopicInfo(topicId);
  return topic ? topic.question : 'No question available';
}

function getTopicAnswers(topicId) {
  const topic = getTopicInfo(topicId);
  return topic ? topic.answers : [];
}

function getTopicFeedback(topicId) {
  const topic = getTopicInfo(topicId);
  return topic ? topic.feedback : { perfect: '', partial: '' };
}

function getTopicSummary(topicId) {
  const topic = getTopicInfo(topicId);
  return topic ? topic.summary : '';
}

function getTopicIcon(topicId) {
  const topic = getTopicInfo(topicId);
  return topic ? topic.icon : '📚'; // Default icon if not found
}

function getTopicVideoUrl(topicId) {
  const topic = getTopicInfo(topicId);
  return topic ? topic.videoUrl : null; // Return null if not found - let it fail gracefully
}

function getTopicTargetImage(topicId) {
  const topic = getTopicInfo(topicId);
  return topic ? topic.targetImage : null; // Return null if not found
}

function getTopicLeftProfileImage(topicId) {
  const topic = getTopicInfo(topicId);
  return topic ? topic.leftProfileImage : null; // Return null if not found
}

function getTopicRightProfileImage(topicId) {
  const topic = getTopicInfo(topicId);
  return topic ? topic.rightProfileImage : null; // Return null if not found
}

// New helper function to get AR assets for a topic
function getTopicARAssets(topicId) {
  const topic = getTopicInfo(topicId);
  return topic && topic.arAssets ? topic.arAssets : null;
}

// New helper function to generate asset HTML
function generateTopicAssetHTML(topicId) {
  const assets = getTopicARAssets(topicId);
  if (!assets) {
    console.warn(`No AR assets found for topic ${topicId}`);
    return '<a-assets></a-assets>';
  }
  
  let assetHTML = '<a-assets>\n';
  
  // Load images
  if (assets.images) {
    assets.images.forEach(asset => {
      assetHTML += `    <img id="asset_${asset.id}" src="${asset.src}">\n`;
    });
  }
  
  // Load videos
  if (assets.videos) {
    assets.videos.forEach(asset => {
      assetHTML += `    <video id="asset_${asset.id}" src="${asset.src}" autoplay="false" loop="false"></video>\n`;
    });
  }
  
  // Load audio
  if (assets.audio) {
    assets.audio.forEach(asset => {
      assetHTML += `    <audio id="asset_${asset.id}" src="${asset.src}" preload="auto"></audio>\n`;
    });
  }
  
  // Load 3D models
  if (assets.models) {
    assets.models.forEach(asset => {
      assetHTML += `    <a-asset-item id="asset_${asset.id}" src="${asset.src}"></a-asset-item>\n`;
    });
  }
  
  assetHTML += '</a-assets>';
  return assetHTML;
}

// New helper function to generate entity HTML with properties
function generateTopicEntityHTML(topicId) {
  const assets = getTopicARAssets(topicId);
  if (!assets) {
    console.warn(`No AR assets found for topic ${topicId}`);
    return '';
  }
  
  let entityHTML = '';
  
  // Generate entities for images
  if (assets.images) {
    assets.images.forEach(asset => {
      entityHTML += `    <a-image id="${asset.id}" src="#asset_${asset.id}"`;
      if (asset.scale) entityHTML += ` scale="${asset.scale}"`;
      if (asset.position) entityHTML += ` position="${asset.position}"`;
      if (asset.rotation) entityHTML += ` rotation="${asset.rotation}"`;
      if (asset.visible) entityHTML += ` visible="${asset.visible}"`;
      if (asset.opacity) entityHTML += ` opacity="${asset.opacity}"`;
      if (asset.material) entityHTML += ` material="${asset.material}"`;
      entityHTML += `></a-image>\n`;
    });
  }
  
  // Generate entities for videos
  if (assets.videos) {
    assets.videos.forEach(asset => {
      entityHTML += `    <a-video id="${asset.id}" src="#asset_${asset.id}"`;
      if (asset.scale) entityHTML += ` scale="${asset.scale}"`;
      if (asset.position) entityHTML += ` position="${asset.position}"`;
      if (asset.rotation) entityHTML += ` rotation="${asset.rotation}"`;
      if (asset.visible) entityHTML += ` visible="${asset.visible}"`;
      if (asset.opacity) entityHTML += ` opacity="${asset.opacity}"`;
      if (asset.material) entityHTML += ` material="${asset.material}"`;
      entityHTML += `></a-video>\n`;
    });
  }
  
  // Generate entities for 3D models
  if (assets.models) {
    assets.models.forEach(asset => {
      entityHTML += `    <a-entity id="{asset.id}" gltf-model="#asset_${asset.id}"`;
      if (asset.scale) entityHTML += ` scale="${asset.scale}"`;
      if (asset.position) entityHTML += ` position="${asset.position}"`;
      if (asset.rotation) entityHTML += ` rotation="${asset.rotation}"`;
      if (asset.visible) entityHTML += ` visible="${asset.visible}"`;
      if (asset.opacity) entityHTML += ` opacity="${asset.opacity}"`;
      if (asset.material) entityHTML += ` material="${asset.material}"`;
      entityHTML += `></a-entity>\n`;
    });
  }
  
  return entityHTML;
}

// Debug function to inspect topic details
function debugTopic(topicId) {
  const topic = getTopicInfo(topicId);
  if (!topic) {
    console.log(`❌ Topic ${topicId} not found`);
    console.log('Available topics:', Object.keys(topicData));
    return;
  }
  
  console.log(`📚 Topic ${topicId} Details:`);
  console.log('Title:', topic.title);
  console.log('Icon:', topic.icon);
  console.log('Video URL:', topic.videoUrl);
  console.log('Content:', topic.content);
  console.log('Question:', topic.question);
  console.log('Answers:', topic.answers);
  console.log('Feedback:', topic.feedback);
  console.log('Summary:', topic.summary);
  console.log('Full topic object:', topic);
}

// Debug function to show currently selected/active topic
function debugCurrentTopic() {
  // Access the currentTopic variable from app.html
  if (typeof currentTopic !== 'undefined' && currentTopic) {
    console.log(`🎯 Current Topic: ${currentTopic}`);
    debugTopic(currentTopic);
  } else {
    console.log('❌ No current topic set (currentTopic is empty or undefined)');
    console.log('Available topics:', Object.keys(topicData));
    console.log('Try: debugTopic(1), debugTopic(2), debugTopic(3), or debugTopic(4)');
  }
}



// Make topicData and helper functions available globally
window.topicData = topicData;
window.getTopicInfo = getTopicInfo;
window.getTopicTitle = getTopicTitle;
window.getTopicContent = getTopicContent;
window.getTopicQuestion = getTopicQuestion;
window.getTopicAnswers = getTopicAnswers;
window.getTopicFeedback = getTopicFeedback;
window.getTopicSummary = getTopicSummary;
window.getTopicIcon = getTopicIcon;
window.getTopicVideoUrl = getTopicVideoUrl;
window.getTopicTargetImage = getTopicTargetImage;
window.getTopicLeftProfileImage = getTopicLeftProfileImage;
window.getTopicRightProfileImage = getTopicRightProfileImage;
window.getTopicARAssets = getTopicARAssets;
window.generateTopicAssetHTML = generateTopicAssetHTML;
window.generateTopicEntityHTML = generateTopicEntityHTML;
window.debugTopic = debugTopic;
window.debugCurrentTopic = debugCurrentTopic;

