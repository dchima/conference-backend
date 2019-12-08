[![Reviewed by Hound](https://img.shields.io/badge/ESLint%20Reviewed%20by%20-HoundCI-d16ef5)](https://houndci.com)
[![Build Status](https://travis-ci.com/dchima/conference-backend.svg?branch=develop)](https://travis-ci.com/dchima/conference-backend)
[![Coverage Status](https://coveralls.io/repos/github/dchima/conference-backend/badge.svg?branch=develop)](https://coveralls.io/github/dchima/conference-backend?branch=develop)
[![Deployed on Heroku](https://img.shields.io/badge/Deployed%20on-Heroku-purple)](https://conference-talks.herokuapp.com/api/talks)
# conference-backend
backend of conference app
## Testing
```
- clone Repo
- cd and run `npm install`
- run `git checkout -b [testing-branch]` to begin work
- for testing run `npm test`
- for development run `npm start:dev`

Please make sure to populate the neccessary variables into your `.env` file to ensure seamless work.
Look at .env.sample file for variables needed.
```
## API Routes
### GET: *TALKS*
`https://conference-talks.herokuapp.com/api/talks`

<img width="1031" alt="Screenshot 2019-12-08 at 18 04 38" src="https://user-images.githubusercontent.com/37340699/70392996-d5006700-19e5-11ea-9cde-6120233c63c6.png">


### POST: *TALKS* 
`https://conference-talks.herokuapp.com/api/talks`

<img width="952" alt="Screenshot 2019-12-07 at 19 17 48" src="https://user-images.githubusercontent.com/37340699/70392922-fe6cc300-19e4-11ea-8f32-a8a11fb9791d.png">


### POST: *ATTENDEES*
`https://conference-talks.herokuapp.com/api/attendee`

<img width="924" alt="Screenshot 2019-12-08 at 18 05 03" src="https://user-images.githubusercontent.com/37340699/70392978-a84c4f80-19e5-11ea-9992-f2e36887635f.png">

### GET: *ATTENDEES*
`https://conference-talks.herokuapp.com/api/attendee`

<img width="1031" alt="Screenshot 2019-12-08 at 16 05 20" src="https://user-images.githubusercontent.com/37340699/70392962-7f2bbf00-19e5-11ea-8709-58fd96fbd75a.png">

### POST: *MATCH ATTENDEE TO TALK*
`https://conference-talks.herokuapp.com/api/attendee/attend?talkId=3&email=test@gmail.com`

<img width="924" alt="Screenshot 2019-12-08 at 18 05 44" src="https://user-images.githubusercontent.com/37340699/70392985-bd28e300-19e5-11ea-8280-0ba66e48c14e.png">

### DELETE: *TALKS*
`https://conference-talks.herokuapp.com/api/talks/:talkId`

