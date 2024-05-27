    document.addEventListener('DOMContentLoaded', function() {
        const courses = {
    'Computer_Science': {
        'description': 'It studies how computers work and how to solve problems with technology. It lets you create software, develop apps, and work on exciting projects like AI, making a real impact.',
        'schools': [
            'University of the Philippines Diliman - Quezon City',
            'De La Salle University - Manila City',
            'Ateneo de Manila University - Quezon City',
            'University of Santo Tomas - Manila City',
            'University of San Carlos - Cebu City'
        ],
        'careers': [
            'Quality Assurance Specialist',
            'Research and Development Computing Professional',
            'Software Engineer',
            'Software Support Specialist',
            'System Analyst'
        ]
    },
    'Information_Technology': {
        'description': 'It teaches you how to use computers to store and manage information. You\'ll learn how to set up networks, keep information secure, and solve tech issues.',
        'schools': [
            'University of the Philippines Diliman - Quezon City',
            'De La Salle University - Manila City',
            'Ateneo de Manila University - Quezon City',
            'University of Santo Tomas - Manila City',
            'Mapua University - Manila City'
        ],
        'careers': [
            'Applications and Web Developer',
            'Information Security Administrator',
            'IT Audit Assistant',
            'Network Engineer',
            'Systems Integration Personnel'
        ]
    },
    'Computer_Engineering': {
        'description': 'It is about building and designing computer systems. You\'ll learn how to create hardware and software, like computer chips and programs, to make computers work better.',
        'schools': [
            'De La Salle University - Manila City',
            'University of the Philippines Diliman - Quezon City',
            'Mapua University - Manila City',
            'Ateneo de Manila University - Quezon City',
            'Polytechnic University of the Philippines - Manila City'
        ],
        'careers': [
            'Computer Software Engineer',
            'Computer System Analysts',
            'Computer and Information Systems Manager',
            'Software Application Developer',
            'Software Systems Developer'
        ]
    },
    'Information_Science': {
        'description': 'It is about understanding how information is organized, stored, and used. You\'ll learn how to manage data effectively and use technology to find, analyze, and share information.',
        'schools': [
            'De La Salle University - Manila City',
            'University of the Philippines Diliman - Quezon City',
            'Ateneo de Manila University - Quezon City',
            'University of the Philippines Manila - Manila City',
            'Surigao del Sur State University - Tandag City'
        ],
        'careers': [
            'Computer Systems Analyst',
            'Database support personnel',
            'Information Architect',
            'Information Security Analyst',
            'Network Administrator'
        ]
    },
    'Data_Science': {
        'description': 'In data science, you analyze different types of data to find patterns and insights. For example, you might study sales figures or customer reviews.',
        'schools': [
            'De La Salle University - Manila City',
            'University of the Philippines Diliman - Quezon City',
            'Technological Institute of the Philippines - Manila City',
            'University of Santo Tomas - Manila City',
            'Mapua University - Manila City'
        ],
        'careers': [
            'Business Intelligence Engineer',
            'Data Analyst',
            'Database Developer',
            'Planning and Decision Analyst',
            'Statistician'
        ]
    },
    'Entertainment_and_Media_Computing': {
        'description': 'It teaches you to create fun digital experiences like games and apps. You\'ll master media technology and explore innovative ways to engage audiences.',
        'schools': [
            'Technological Institute of the Philippines - Manila City',
            'Mapua University - Manila City',
            'Jose Rizal University - Manila City',
            'Our Lady of Fatima University - Quezon City',
            'Mapua Malayan Colleges - Davao City'
        ],
        'careers': [
            'Creative/Graphics Programmer',
            'Digital 2D/3D Animation Content Producer',
            'Game Sound Engineer',
            'Game Quality Assurance Specialist',
            'Technical Director/Game Designer'
        ]
    },
    'Esports': {
        'description': 'Esports is a course focused on competitive video gaming. You\'ll dive into various games, strategies, and teamwork dynamics while sharpening your skills to compete against other players.',
        'schools': [
            'Lyceum of the Philippines University - Manila City'
        ],
        'careers': [
            'Animation Engineer',
            'ESports Agent',
            'Game Tester',
            'Graphics Programmer',
            'Team Manager/Owner'
        ]
    }
};

        function loadCourseInfo() {
            let selectedCourse = document.getElementById('courseSelect').value;
            let info = courses[selectedCourse];
            let displayArea = document.getElementById('courseInfo');

            if (info) {
                displayArea.innerHTML = `<h3>${selectedCourse.replace(/_/g, ' ')}</h3>
                                         <p>${info.description}</p>
                                         <h4>Top Universities for ${selectedCourse.replace(/_/g, ' ')} in the Philippines</h4>
                                         <ol>${info.schools.map(school => `<li>${school}</li>`).join('')}</ol>
                                         <h4>What careers are available for graduates?</h4>
                                         <ul>${info.careers.map(career => `<li>${career}</li>`).join('')}</ul>`;
            } else {
                displayArea.innerHTML = 'Please select a course to see more information.';
            }
        }

        document.getElementById('courseSelect').addEventListener('change', loadCourseInfo);
        loadCourseInfo();
    });