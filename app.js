require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS as view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Profile data
const profileData = {
  name: "Farell Kresnanda",
  title: "IT Student | Network & Cybersecurity Enthusiast",
  location: "Kota Depok",
  email: "kresnandaf@gmail.com",
  phone: "+6282124873745",
  about: "Saya adalah mahasiswa aktif tingkat tiga yang sedang menjalani perkullahan di Program Studi SI Teknologi Informasi di Telkom University. Saya memiliki minat dan ketertarikan di dunia IT, terutama di bidang jaringan dan cybersecurity.",
  experiences: [
    {
      position: "Research and Development's DevOps",
      period: "April 2025 – Saat Ini",
      organization: "Central Computer Improvement • Organisasi",
      description: "Terlibat dalam proyek proyek di dalam CCI RnD di bidang DevOps, seperti setup dan pemeliharaan server serta mendeplov web app yang mengimplementasikan CI/CD ke public.",
      skills: ["DevOps", "CI/CD", "Server Management"]
    },
    {
      position: "Kepala Divisi Network",
      period: "November 2024 – Saat Ini",
      organization: "Central Computer Improvement • Organisasi",
      description: "Menjalankan program study group yang memperlajari bukan hanya ilmu jaringan dasar, tetapi juga ilmu jaringan yang akan di implementasikan di dalam dunia industri.",
      skills: ["Networking", "Team Leadership", "Training"]
    },
    {
      position: "Anggota Divisi Network",
      period: "December 2023–Oktober 2024",
      organization: "Central Computer Improvement • Organisasi",
      description: "Menjadi anggota study group yang memperlajari dasar – dasar jaringan seperti infrastruktur jaringan.",
      skills: ["Networking Fundamentals", "Cisco Devices"]
    }
  ],
  education: [
    {
      institution: "Telkom University",
      degree: "SI • Teknologi Informasi • IPK 3.81"
    },
    {
      institution: "SMKN I CIBINONG",
      degree: "SMA/SMK • Teknik Komputer Jaringan • Nilai rata-rata: 86.99",
      graduation: "Juni 2022"
    }
  ],
  social: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/farell-kresnanda-2b0a1b1b6/', icon: 'fab fa-linkedin' },
    { name: 'GitHub', url: 'https://github.com/farellkresnanda', icon: 'fab fa-github' },
  ],
  skills: {
    hard: [
      "DevOps", 
      "Linux", 
      "Administrasi Server", 
      "Virtualisasi",
      "Keterampilan dasar jaringan", 
      "Perangkat keras Cisco (router, switch)",
      "Desain dan arsitektur jaringan", 
      "Penulisan laporan"
    ],
    soft: [
      "Adaptabilitas", 
      "Problem-solving", 
      "Mendengarkan aktif",
      "Keterampilan mangiemen konflik", 
      "Komitmen", 
      "Kerjasama Tim"
    ]
  }
};

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: `${profileData.name} - About Me`,
    profile: profileData,
    activeSection: 'about',
  });
});

app.get('/experience', (req, res) => {
  res.render('index', {
    title: `${profileData.name} - Experience`,
    profile: profileData,
    activeSection: 'experience',
  });
});

app.get('/education', (req, res) => {
  res.render('index', {
    title: `${profileData.name} - Education`,
    profile: profileData,
    activeSection: 'education',  
  });
});

app.get('/skills', (req, res) => {
  res.render('index', {
    title: `${profileData.name} - Skills`,
    profile: profileData,
    activeSection: 'skills', 
  });
});

// Start server
const PORT = process.env.PORT;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});