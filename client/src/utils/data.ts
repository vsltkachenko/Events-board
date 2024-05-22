export function getData(n: number) {
  const data = []

  for (let i = 0; i < n; i++) {
    const event = {
      _id: generateRandomId(),
      title: generateRandomTitle(),
      description: generateRandomDescription(),
      eventdate: generateRandomDate(),
      organizer: generateRandomName(),
      participants: [
        {
          _id: generateRandomId(),
          name: generateRandomName(),
          email: generateRandomEmail(),
          birthday: generateRandomDate(),
          source: generateRandomSource(),
          createdAt: generateRandomDate(),
          updatedAt: generateRandomDate(),
          __v: 0,
        },
      ],
      createdAt: generateRandomDate(),
      updatedAt: generateRandomDate(),
      __v: 0,
    }
    data.push(event)
  }

  return data
}

export function getPaticipants(n: number) {
  const participants = []
  for (let i = 0; i < n; i++) {
    const participant = {
      name: generateRandomName(),
      email: generateRandomEmail(),
      birthday: generateRandomDate(),
      source: generateRandomSource(),
    }
    participants.push(participant)
  }
  return participants
}

function generateRandomId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  )
}

function generateRandomTitle() {
  const titles = ["Food", "Meeting", "Party", "Conference", "Workshop"]
  return titles[Math.floor(Math.random() * titles.length)]
}

function generateRandomDescription() {
  return "Description " + Math.random().toString(36).substring(2, 15)
}

function generateRandomDate() {
  const year = 2024
  const month = Math.floor(Math.random() * 12) + 1
  const day = Math.floor(Math.random() * 28) + 1
  return `${day < 10 ? "0" + day : day}.${month < 10 ? "0" + month : month}.${year}`
}

function generateRandomName() {
  const names = ["Oleg", "Mykola", "Ivan", "Petro", "Anna", "Kateryna"]
  return names[Math.floor(Math.random() * names.length)]
}

function generateRandomEmail() {
  return Math.random().toString(36).substring(2, 7) + "@ukr.net"
}

function generateRandomSource() {
  const sources = ["friends", "social", "myself"]
  return sources[Math.floor(Math.random() * sources.length)]
}
