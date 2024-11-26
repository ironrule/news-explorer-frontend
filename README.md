# Final Project: News Explorer Frontend

### Overview

- Intro
- Figma
- Images
- Forms
- Future Plans

**Intro**

This project allows users to search for articles and save them to their profile based on interests. I have also connected the NewsAPI from https://newsapi.org/ and implemented the search features. Bookmarking is available on the front end but is not persistent through reloads. This functionality is for the future project of the back end.

The user's Saved Articles page will contain their articles as well as a list of keywords at the top, and a count of the number of articles currently saved for the user. I have added functionality to add the searched term to the article so that when each article is saved, you can see that the search term is available on the article card. Bookmarking and deleting of articles is fully functional using actual data from the API and can be easily adjusted for the backend project.

**Hosted Site**

The site is currently self-hosted on my server at the following address:

- [Link to the self-hosted project site](https://news.onelastcup.com/)

You can review the site in DevTools and inspect each element, as well as change page sizes to see how it will look on different devices. As we were given 3 designs in Figma, some of the different sizes had to be styled based on what looked or worked best for the screen size.

**Figma**

- [Link to the project on Figma](https://www.figma.com/file/3ottwMEhlBt95Dbn8dw1NH/Your-Final-Project?type=design&node-id=0-1&mode=design&t=oyzC3t94nnIJJuPY-0)

After loading this design, I was able to export the necessary images for my project. This Figma design gave us a mockup of the site for small devices of 320 pixel width screens, tablet screen width of 768 pixels, and a standard desktop width of 1440 pixels.

**Images**

Below are links to the images of my site while viewing in DevTools to see the different sizes and how the site changes to adapt to them.

- [Desktop Screenshot](./Readme/Desktop.png)

- [Desktop Login Modal](./Readme/LoginModal.png)

- [Desktop Article Card](./Readme/ArticleCard.png)

- [Saved Articles Function](./Readme/SavedArticles.png)

- [Mobile Site 320 pixel width](./Readme/MobileSite.png)

- [Mobile Menu](./Readme/MobileMenu.png)

- [Mobile Menu Logged In](./Readme/MobileMenuLoggedIn.png)

**Forms**

I have added form validation and Javascript controls to limit what can be entered to the input fields. These use the browser API to present the messages based on the set limits for each input field, and validate upon submission.

**Future Plans**

Future plans for my project are to build the back-end server to allow users to log in and save articles and data. Currently for testing purposes, a user can log in with any username and password and retrieve articles from the NewsAPI and can save articles which will reset upon site reload.
