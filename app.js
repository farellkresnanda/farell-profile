require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Profile Data
// Profile Data
const profileData = {
    name: "Farell Kresnanda",
    title: "DevOps & Network Specialist",
    location: "Kota Depok",
    email: "kresnandaf@gmail.com",
    phone: "+6282124873745",
    about: "Saya adalah mahasiswa aktif tingkat tiga yang sedang menjalani perkuliahan di Program Studi SI Teknologi Informasi di Telkom University. Saya memiliki minat dan ketertarikan di dunia IT, terutama di bidang jaringan dan cybersecurity. Saya memiliki pemahaman dasar mengenai konsep jaringan, pengelolaan operating system berbasis Linux, serta pemahaman dasar tentang pengoperasian server. Sedang mengembangkan keahlian saya melalui proyek organisasi terutama di bidang jaringan. Berkomitmen untuk terus mengembangkan diri sendiri dan juga lingkungan sekitar serta menciptakan sistem informasi yang andal.",
    experiences: [
        {
            role: "Research and Development's DevOps",
            period: "April 2025 - Sekarang",
            organization: "Central Computer Improvement",
            description: "Terlibat dalam proyek-proyek di dalam CCI RnD di bidang DevOps, seperti setup dan pemeliharaan server serta mendeploy web app yang mengimplementasikan CI/CD ke public."
        },
        {
            role: "Kepala Divisi Network",
            period: "November 2024 - Sekarang",
            organization: "Central Computer Improvement",
            description: "Menjalankan program study group yang mempelajari bukan hanya ilmu jaringan dasar, tetapi juga ilmu jaringan yang akan diimplementasikan di dalam dunia industri."
        },
        {
            role: "Anggota Divisi Network",
            period: "Desember 2023 - Oktober 2024",
            organization: "Central Computer Improvement",
            description: "Menjadi anggota study group yang mempelajari dasar-dasar jaringan seperti infrastruktur jaringan."
        }
    ],
    education: [
        {
            institution: "Telkom University",
            degree: "S1 Teknologi Informasi",
            period: "2022 - Sekarang",
            details: "IPK 3.81"
        },
        {
            institution: "SMKN 1 CIBINONG",
            degree: "Teknik Komputer Jaringan",
            period: "2019 - 2022",
            details: "Nilai rata-rata: 86.99"
        }
    ],
    skills: {
        hard: [
            { name: "DevOps", level: 80 },
            { name: "Linux", level: 85 },
            { name: "Administrasi Server", level: 75 },
            { name: "Virtualisasi", level: 70 },
            { name: "Jaringan Komputer", level: 85 },
            { name: "Perangkat Cisco", level: 75 },
            { name: "Desain Jaringan", level: 70 },
            { name: "Penulisan Laporan", level: 80 }
        ],
        soft: [
            "Adaptabilitas",
            "Problem-solving",
            "Mendengarkan aktif",
            "Manajemen konflik",
            "Komitmen",
            "Kerjasama Tim"
        ]
    },
    projects: [
        {
            title: "Implementasi CI/CD Pipeline",
            description: "Setup dan pemeliharaan server serta mendeploy web app dengan implementasi CI/CD",
            image: "devops.jpg",
            organization: "Central Computer Improvement"
        },
        {
            title: "Program Study Group Jaringan",
            description: "Mengembangkan materi dan memimpin study group tentang jaringan komputer",
            image: "network.jpg",
            organization: "Central Computer Improvement"
        }
    ],
    certifications: [
        {
            name: "Cisco Networking Basics",
            issuer: "Cisco Networking Academy",
            year: 2023
        }
    ],
    socialLinks: [
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/farell-kresnanda"
        },
        {
            platform: "GitHub",
            url: "https://github.com/farellkresnanda"
        }
    ]
};

// Routes
app.get('/', (req, res) => res.render('home', { profile: profileData }));
app.get('/about', (req, res) => res.render('about', { profile: profileData }));
app.get('/experience', (req, res) => res.render('experience', { profile: profileData }));
app.get('/education', (req, res) => res.render('education', { profile: profileData }));
app.get('/projects', (req, res) => res.render('projects', { profile: profileData }));
app.get('/contact', (req, res) => res.render('contact', { profile: profileData }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));