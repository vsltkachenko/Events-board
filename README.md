# Events Board

The frontend is created on React, the backend on Node.js (Express). MongoDB is used as a database.  

## Description

This Application is an event board. It is possible to add a new event and save it in the database.  
Events can be sorted by creation date, name, event date, organizer. A participant can register for a separate event.  
On the participants' page, it is possible to search for them by name and e-mail.

## Installation

1. Clone this repository - `https://github.com/vsltkachenko/events-board.git`.

### Backend

1. Change directory

```shell
cd server/
```

2. Install dependencies - `npm install`.
3. Rename `.env.example` file inside `/server` to `.env` and configurate file.
4. Run backend - `npm run start`.

### Frontend

1. Change directory

```shell
cd client/
```

2. Install dependencies - `npm install`.
3. Rename `.env.example` file inside `/client` to `.env` and configurate file.
4. Build production code `npm run build`.
5. Run `npm run preview` to run frontend in preview mode.

> **NOTE:** I'm hosting this site (frontend) on [Vercel](https://events-board-snowy.vercel.app). The backend is hosted on Render.com.

## Screenshots

### Main Page

![Screenshot #1](https://raw.githubusercontent.com/vsltkachenko/events-board/main/screenshots/1.jpg)

### Event registration Page

![Screenshot #2](https://raw.githubusercontent.com/vsltkachenko/events-board/main/screenshots/2.jpg)

### Participants Page

![Screenshot #3](https://raw.githubusercontent.com/vsltkachenko/events-board/main/screenshots/3.jpg)
