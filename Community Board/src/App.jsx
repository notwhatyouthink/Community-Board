import './App.css';
import Card from './components/Card'

const events = [
  { title: "Tech Meetup Night", date: "Feb 5, 2026", time: "6:00 PM", location: "Downtown Tech Hub", description: "Monthly networking event for local developers and enthusiasts.", category: "Networking", link: "https://www.meetup.com" },
  { title: "React Workshop", date: "Feb 8, 2026", time: "10:00 AM", location: "City Library", description: "Hands-on workshop covering React hooks and state management.", category: "Workshop", link: "https://reactjs.org" },
  { title: "Hackathon 2026", date: "Feb 14, 2026", time: "9:00 AM", location: "Innovation Center", description: "24-hour hackathon open to all skill levels. Form a team and build something amazing!", category: "Event", link: "https://www.hackathon.com" },
  { title: "Python for Beginners", date: "Feb 18, 2026", time: "2:00 PM", location: "Community College", description: "Learn the basics of Python programming in this beginner-friendly session.", category: "Workshop", link: "https://www.python.org" },
  { title: "AI & Machine Learning Talk", date: "Feb 22, 2026", time: "5:00 PM", location: "Tech Hub Main Hall", description: "Industry experts discuss the latest trends and applications in AI.", category: "Talk", link: "https://www.ai.org" },
  { title: "Women in Tech Panel", date: "Mar 1, 2026", time: "4:00 PM", location: "City Conference Center", description: "Inspiring panel featuring successful women in the tech industry.", category: "Event", link: "https://www.womenintech.org" },
  { title: "Open Source Contribution Day", date: "Mar 5, 2026", time: "10:00 AM", location: "Coworking Space", description: "Come contribute to open source projects alongside fellow developers.", category: "Workshop", link: "https://www.opensource.org" },
  { title: "Database Design Bootcamp", date: "Mar 10, 2026", time: "1:00 PM", location: "Tech Training Center", description: "Deep dive into relational and NoSQL database design and optimization.", category: "Workshop", link: "https://www.database.org" },
  { title: "Startup Pitch Night", date: "Mar 15, 2026", time: "6:30 PM", location: "Innovation Center", description: "Entrepreneurs pitch their startup ideas to a panel of local investors.", category: "Event", link: "https://www.startup.com" },
  { title: "Cybersecurity Awareness Seminar", date: "Mar 20, 2026", time: "3:00 PM", location: "City Library", description: "Learn how to protect your personal and professional data from cyber threats.", category: "Talk", link: "https://www.cybersecurity.org" },
  { title: "Game Dev Jam", date: "Mar 25, 2026", time: "9:00 AM", location: "Gaming Lounge", description: "A weekend-long game development jam for indie game creators.", category: "Event", link: "https://www.gamedev.com" },
  { title: "Cloud Computing Basics", date: "Mar 28, 2026", time: "11:00 AM", location: "Tech Hub Room B", description: "An intro to cloud services with AWS, Azure, and Google Cloud.", category: "Workshop", link: "https://www.cloud.com" }
];

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>🖥️ Community Tech Board</h1>
        <p>Your go-to hub for local tech events, workshops, and networking opportunities.</p>
      </header>
      <div className="card-grid">
        {events.map((event, index) => (
          <Card
            key={index}
            title={event.title}
            date={event.date}
            time={event.time}
            location={event.location}
            description={event.description}
            category={event.category}
            link={event.link}
          />
        ))}
      </div>
    </div>
  )
}

export default App
