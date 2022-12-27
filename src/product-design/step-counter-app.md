---
title      : Step Counter App
date       : 2021-11-21
stats          : 
  - label      : Type
    value      : personal
  - label      : Platform
    value      : iOS
  - label      : Status
    value      : Published
excerpt    : An Apple watchOS and iOS step counter app which gives users a quick glance at their steps.
tryitLink  : https://apps.apple.com/us/app/duffy-steps-complication/id1207581673
feature : /images/projects/step-counter-app/feature.png
featureAlt : App screen designs on iPhone and Apple Watch for the step counter app.
mockups    : 
  - Apple watch showing a screen which shows steps walked so far, also showing the equivalents in miles and flights of stairs.
  - Apple watch showing a screen for reviewing the steps walked on each of the preview seven days.
  - iPhone showing a screen which shows steps walked so far, also showing the equivalents in miles and flights of stairs. It also shows the previous seven days.
  - iPhone showing a screen for learning about the trophies for meeting and exceeding multiples of goal steps.
roles      : ['UI Designer']
goal : The goal is to design an iOS and watchOS app which enables users to easily see how many steps they’ve walked during the day. They would not have to navigate several menus deep into the health app.
targetAudience : The user for Duffy is a health-conscious user, but they’re probably best described as lay persons of the fitness world. They may not be gym members or calorie counters, but they’re aware that they need to walk during the day. They need to know how much to walk, and steps are a simple metric for these users.
research : Research was performed by interviewing iOS Health app users to determine their pain points and delights while using that app. The research informed the information architecture of the app.
keyChallenges : The app should be fully usable from just the watchOS app. The user doesn’t really have to use the iOS app, except to install the watchOS app. Another key challenge was keeping the app’s information concentrated on as few screens as possible for a glanceable app.
personas   : 
- Persona card for Bruce who represents users who can easily navigate complexity but prefer something requiring less thought.
- Persona card for Tonya who represents users who want easy-to-see stats on their daily step progress.
initialConcept  : Sketches for the step counter app began as a collaborative meeting between the designer and developer.
initialConcepts : 
  - Original marker sketches for Apple watch app showing the home complication, today, previosu seven days, and goal setting screens.
  - Original market sketches for iPhone showing the about, how to change goal, home, and history screens.
usabilityText: Usability tests were performed by showing Figma mockups to potential friends and family to gain their initial impressions.
usabilities : 
  - Usability issues and insights from tester one regarding the app and a similar app used for comparison.
  - Usability issues and insights from testers two and three regarding the app and a similar app used for comparison.
conclusion : It’s a free app and you can get Duffy at the App Store for your Apple Watch and iPhone.
designFile : https://www.figma.com/file/Qx7rW9DLGHgGCmEcFkFwL0/Duffy?node-id=67%3A254
---

### Overview

Duffy is a free [iOS and Apple watchOS app](https://apps.apple.com/us/app/duffy-steps-complication/id1207581673) which just shows your steps walked. Apple’s Activity and Health apps display your steps, but they’re hidden beneath a plethora of other data and sequential interactions. Users wanted a way to easily see just their steps walked, without navigating through the other data offered by Apple’s stock apps.

### Scope and Constraints

Duffy is fully usable from just the watchOS app. The user doesn’t really have to use the iOS app, except to install the watchOS app. We borrowed a lot of cues from Apple’s stock apps because these users are familiar with these apps. Data is set using the Duffy watchOS app, but not the Duffy iOS app. Duffy presents minimal data, just enough for the fitness lay user to set their goals and browse through their past step counts if they choose.

### Target Audience

The user for Duffy is a health-conscious user, but they’re probably best described as lay persons of the fitness world. They may not be gym members or calorie counters, but they’re aware that they need to walk during the day. They need to know how much to walk, and steps are a simple metric for these users.

{% include 'personas.njk' %}

### Key Challenges

 We also needed to give users a way to track and improve their progress. As a way to reward the user for using tracking and goals, we gamified the steps by awarding trophies when the user hits goal milestones.

### Conclusion

It’s a free app and you can [get Duffy at the App Store](https://apps.apple.com/us/app/duffy-steps-complication/id1207581673) for your Apple Watch and iPhone. I worked with <a  href="http://www.bigbluefly.com/duffy">Patrick Rills, the developer of Duffy</a>. The app is updated with each new major and minor release of iOS and watchOS.
