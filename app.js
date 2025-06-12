require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, '/public')));
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'http') {
    return res.redirect(301, 'https://' + req.headers.host + req.url);
  }
  next();
});


// Set up EJS as view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('trust proxy', true);


// Profile data (from your CV)
const profileData = {
  name: "Farell Kresnanda",
  location: "Kota Depok",
  email: "kresnandaf@gmail.com",
  phone: "+6282124873745",
  about: "Saya adalah mahasiswa aktif tingkat tiga yang sedang menjalani perkullahan di Program Studi SI Teknologi Informasi di Telkom University. Saya memiliki minat dan ketertarikan di dunia IT, terutama di bidang jaringan dan cybersecurity.",
  experiences: [
    {
      position: "Research and Development's DevOps",
      period: "April 2025 – Saat Ini",
      organization: "Central Computer Improvement • Organisasi",
      description: "Terlibat dalam proyek proyek di dalam CCI RnD di bidang DevOps, seperti setup dan pemeliharaan server serta mendeplov web app yang mengimplementasikan CI/CD ke public."
    },
    {
      position: "Kepala Divisi Network",
      period: "November 2024 – Saat Ini",
      organization: "Central Computer Improvement • Organisasi",
      description: "Menjalankan program study group yang memperlajari bukan hanya ilmu jaringan dasar, tetapi juga ilmu jaringan yang akan di implementasikan di dalam dunia industri."
    },
    {
      position: "Anggota Divisi Network",
      period: "December 2023–Oktober 2024",
      organization: "Central Computer Improvement • Organisasi",
      description: "Menjadi anggota study group yang memperlajari dasar – dasar jaringan seperti infrastruktur jaringan."
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
  skills: {
    hard: [
      "DevOps", "Linux", "Administrasi Server", "Virtualisasi", 
      "Keterampilan dasar jaringan", "Perangkat keras Cisco (router, switch)", 
      "Desain dan arsitektur jaringan", "Penulisan laporan"
    ],
    soft: [
      "Adaptabilitas", "Problem-solving", "Mendengarkan aktif", 
      "Keterampilan mangiemen konflik", "Komitmen", "Kerjasama Tim"
    ]
  }
};

// Routes
app.get('/profile', (req, res) => {  // Perbaiki rute menjadi /profile
  res.render('index', { 
    title: `${profileData.name} - Profile`, 
    profile: profileData,
    activeSection: 'about'
  });
});

app.get('/profile/:section', (req, res) => {  // Perbaiki rute menjadi /profile/:section
  const section = req.params.section;
  res.render('index', { 
    title: `${profileData.name} - ${section.charAt(0).toUpperCase() + section.slice(1)}`, 
    profile: profileData,
    activeSection: section
  });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

