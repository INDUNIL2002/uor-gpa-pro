// --- 1. DATA (From your handbook) ---

const gradePoints = {
    "A+": 4.0, "A": 4.0, "A-": 3.7,
    "B+": 3.3, "B": 3.0, "B-": 2.7,
    "C+": 2.3, "C": 2.0, "C-": 1.7,
    "D+": 1.3, "D": 1.0, "E": 0.0,
    "N/A": 0.0 // For unselected
};
const gradesList = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "E"];
const repeatGradesList = ["C", "C-", "D+", "D", "E"]; // Max grade is 'C'

// All curriculum data for the faculty
const curriculum = {
    "ARMT": {
        "totalCredits": 126,
        "1-1": {
            "AS11201": {"name": "Anatomy and Physiology of Farm Animals", "credits": 2, "is_gpa": true},
            "BL11301": {"name": "Plant Physiology and Systematics", "credits": 3, "is_gpa": true},
            "CC11201": {"name": "Information and Communication Technology in Agriculture", "credits": 2, "is_gpa": true},
            "CS11201": {"name": "Principles of Agronomy", "credits": 2, "is_gpa": true},
            "EC11201": {"name": "Micro Economics", "credits": 2, "is_gpa": true},
            "EN11201": {"name": "Hydrology and Climatology", "credits": 2, "is_gpa": true},
            "FS11201": {"name": "Biochemistry", "credits": 2, "is_gpa": true},
            "CC11202": {"name": "English I", "credits": 2, "is_gpa": false}
        },
        "1-2": {
            "AS12301": {"name": "Animal Nutrition, Forage & Feed Technology", "credits": 3, "is_gpa": true},
            "BL12201": {"name": "Entomology", "credits": 2, "is_gpa": true},
            "CS12201": {"name": "Agroforestry and Silviculture", "credits": 2, "is_gpa": true},
            "EC12201": {"name": "Macro Economics", "credits": 2, "is_gpa": true},
            "EN12201": {"name": "Agricultural Machinery Engineering", "credits": 2, "is_gpa": true},
            "FS12201": {"name": "Food Chemistry", "credits": 2, "is_gpa": true},
            "SS12301": {"name": "Fundamentals of Soil Science", "credits": 3, "is_gpa": true},
            "CC12101": {"name": "Basic Technical Writing", "credits": 1, "is_gpa": false},
            "CC12202": {"name": "English II", "credits": 2, "is_gpa": false}
        },
        "2-1": {
            "AS21101": {"name": "Animal Genetics and Breeding", "credits": 1, "is_gpa": true},
            "AS21102": {"name": "Animal Products Technology", "credits": 1, "is_gpa": true},
            "BL21201": {"name": "Genetics and Plant Breeding", "credits": 2, "is_gpa": true},
            "CS21201": {"name": "Agroecology", "credits": 2, "is_gpa": true},
            "EC21201": {"name": "Agricultural Marketing", "credits": 2, "is_gpa": true},
            "EN21201": {"name": "Bioprocessing and Post-harvest Engineering", "credits": 2, "is_gpa": true},
            "FS21201": {"name": "Food and Nutrition", "credits": 2, "is_gpa": true},
            "SS21201": {"name": "Soil, Plant and Environment", "credits": 2, "is_gpa": true}
        },
        "2-2": {
            "AS22201": {"name": "Aquaculture and Non-ruminant Management", "credits": 2, "is_gpa": true},
            "AS22102": {"name": "Animal Health and Hygiene", "credits": 1, "is_gpa": true},
            "BL22201": {"name": "Molecular Biology, Biotechnology and Bioinformatics", "credits": 2, "is_gpa": true},
            "BL22202": {"name": "Plant Pathology", "credits": 2, "is_gpa": true},
            "CS22201": {"name": "Management of Spices and Beverage Crops", "credits": 2, "is_gpa": true},
            "CS22202": {"name": "Fruit Crop Management", "credits": 2, "is_gpa": true},
            "EC22201": {"name": "Farm Business Management", "credits": 2, "is_gpa": true},
            "EN22201": {"name": "GIS and Remote sensing", "credits": 2, "is_gpa": true}
        },
        "3-1": {
            "AS31201": {"name": "Ruminant Management", "credits": 2, "is_gpa": true},
            "CS31201": {"name": "Plantation Crop Management and Training", "credits": 2, "is_gpa": true},
            "EC31201": {"name": "Social Science Research Methods", "credits": 2, "is_gpa": true},
            "EN31201": {"name": "Irrigation and Water Resources Engineering", "credits": 2, "is_gpa": true},
            "FS31201": {"name": "Food Preservation and Processing", "credits": 2, "is_gpa": true},
            "SS31201": {"name": "Land Resource Management", "credits": 2, "is_gpa": true}
        },
        "3-2": {
            "AS32201": {"name": "Applied Livestock Production", "credits": 2, "is_gpa": true},
            "BL32201": {"name": "Field Biology in Agriculture", "credits": 2, "is_gpa": true},
            "CC32201": {"name": "Applied Statistics I", "credits": 2, "is_gpa": true},
            "CS32301": {"name": "Production Technology of Field Crops and Vegetables", "credits": 3, "is_gpa": true},
            "CS32102": {"name": "Protected Agriculture", "credits": 1, "is_gpa": true},
            "EC32201": {"name": "Extension Education", "credits": 2, "is_gpa": true},
            "EN32201": {"name": "Applied Agricultural Engineering and Environmental Technology", "credits": 2, "is_gpa": true},
            "SS32101": {"name": "Field Practices in Soil Science", "credits": 1, "is_gpa": true}
        },
        "4-1": {
            "CC41201": {"name": "Technical Writing and Communication Skills", "credits": 2, "is_gpa": true},
            "CC41202": {"name": "Applied Statistics II", "credits": 2, "is_gpa": true},
            "CC41203": {"name": "Professional Development", "credits": 2, "is_gpa": true}
            // Note: Specialization courses are added as electives by the user
        },
        "4-2": {
            "**42601": {"name": "Research project (Add Dept. Code)", "credits": 6, "is_gpa": true},
            "CC42302": {"name": "Internship", "credits": 3, "is_gpa": true}
        }
    },
    "ABM": {
        "totalCredits": 125,
        "1-1": {
            "AS11201": {"name": "Anatomy and Physiology of Farm Animals", "credits": 2, "is_gpa": true},
            "BL11301": {"name": "Plant Physiology and Systematics", "credits": 3, "is_gpa": true},
            "CC11201": {"name": "ICT in Agriculture", "credits": 2, "is_gpa": true},
            "CS11201": {"name": "Principles of Agronomy", "credits": 2, "is_gpa": true},
            "EC11201": {"name": "Micro Economics", "credits": 2, "is_gpa": true},
            "EC11202": {"name": "Economic Statistics", "credits": 2, "is_gpa": true},
            "FS11201": {"name": "Biochemistry", "credits": 2, "is_gpa": true},
            "CC11202": {"name": "English I", "credits": 2, "is_gpa": false}
        },
        "1-2": {
            "AS12301": {"name": "Animal Nutrition, Forage & Feed Technology", "credits": 3, "is_gpa": true},
            "CS12201": {"name": "Agroforestry and Silviculture", "credits": 2, "is_gpa": true},
            "EC12201": {"name": "Macro Economics", "credits": 2, "is_gpa": true},
            "EC12202": {"name": "Principles of Business Management", "credits": 2, "is_gpa": true},
            "EC12203": {"name": "Marketing Management", "credits": 2, "is_gpa": true},
            "EN12201": {"name": "Agricultural Machinery Engineering", "credits": 2, "is_gpa": true},
            "FS12201": {"name": "Food Chemistry", "credits": 2, "is_gpa": true},
            "SS12301": {"name": "Fundamentals of Soil Science", "credits": 3, "is_gpa": true},
            "CC12101": {"name": "Basic Technical Writing", "credits": 1, "is_gpa": false},
            "CC12202": {"name": "English II", "credits": 2, "is_gpa": false}
        },
        "2-1": {
            "AS21102": {"name": "Animal Products Technology", "credits": 1, "is_gpa": true},
            "CS21201": {"name": "Agroecology", "credits": 2, "is_gpa": true},
            "EC21201": {"name": "Agricultural Marketing", "credits": 2, "is_gpa": true},
            "EC21202": {"name": "Book Keeping & Accountancy", "credits": 2, "is_gpa": true},
            "EC21204": {"name": "Natural Resource Economics", "credits": 2, "is_gpa": true},
            "EC21205": {"name": "Consumer Behavior", "credits": 2, "is_gpa": true},
            "EN21201": {"name": "Bioprocessing and Post-harvest Engineering", "credits": 2, "is_gpa": true},
            "FS21201": {"name": "Food and Nutrition", "credits": 2, "is_gpa": true}
        },
        "2-2": {
            "AS22201": {"name": "Aquaculture and Non-ruminant Management", "credits": 2, "is_gpa": true},
            "CS22201": {"name": "Management of Spices and Beverage Crops", "credits": 2, "is_gpa": true},
            "CS22202": {"name": "Fruit Crop Management", "credits": 2, "is_gpa": true},
            "EC22201": {"name": "Farm Business Management", "credits": 2, "is_gpa": true},
            "EC22202": {"name": "Communication and diffusion of Innovation", "credits": 2, "is_gpa": true},
            "EC22203": {"name": "Human Resource Management", "credits": 2, "is_gpa": true},
            "EC22204": {"name": "Managerial Economics & Customer Relationship Mgt", "credits": 2, "is_gpa": true},
            "EC22205": {"name": "Strategic Management", "credits": 2, "is_gpa": true}
        },
        "3-1": {
            "CS31201": {"name": "Plantation Crop Management and Training", "credits": 2, "is_gpa": true},
            "EC31201": {"name": "Social Science Research Methods", "credits": 2, "is_gpa": true},
            "EC31203": {"name": "International Trade & Marketing", "credits": 2, "is_gpa": true},
            "EC31204": {"name": "Innovation and Knowledge Management", "credits": 2, "is_gpa": true},
            "EC31206": {"name": "Organizational Behavior", "credits": 2, "is_gpa": true},
            "FS31201": {"name": "Food Preservation and Processing", "credits": 2, "is_gpa": true}
        },
        "3-2": {
            "CC32201": {"name": "Applied Statistics I", "credits": 2, "is_gpa": true},
            "EC32201": {"name": "Extension Education", "credits": 2, "is_gpa": true},
            "EC32202": {"name": "Project Management", "credits": 2, "is_gpa": true},
            "EC32204": {"name": "Entrepreneurship", "credits": 2, "is_gpa": true},
            "EC32206": {"name": "Business Start-ups", "credits": 2, "is_gpa": true},
            "EC32207": {"name": "Financial Management", "credits": 2, "is_gpa": true}
        },
        "4-1": {
            "CC41201": {"name": "Technical Writing and Communication Skills", "credits": 2, "is_gpa": true},
            "CC41202": {"name": "Applied Statistics II", "credits": 2, "is_gpa": true},
            "CC41203": {"name": "Professional Development", "credits": 2, "is_gpa": true},
            "EC41201": {"name": "Natural Resource Management", "credits": 2, "is_gpa": true},
            "EC41202": {"name": "Agricultural Policy Analysis", "credits": 2, "is_gpa": true},
            "EC41203": {"name": "Econometrics", "credits": 2, "is_gpa": true}
        },
        "4-2": {
            "EC42601": {"name": "Research project", "credits": 6, "is_gpa": true},
            "CC42301": {"name": "Internship", "credits": 3, "is_gpa": true}
        }
    },
    "GT": {
        "totalCredits": 125,
        "1-1": {
            "CC11203": {"name": "Information and Communication Technology", "credits": 2, "is_gpa": true},
            "CS11201": {"name": "Principles of Agronomy", "credits": 2, "is_gpa": true},
            "EC11203": {"name": "Economic Principles", "credits": 2, "is_gpa": true},
            "EN11201": {"name": "Hydrology and Climatology", "credits": 2, "is_gpa": true},
            "EN11302": {"name": "Environmental Pollution, Toxicology and Remediation", "credits": 3, "is_gpa": true},
            "EN11203": {"name": "Natural and Cultural Heritage Conservation", "credits": 2, "is_gpa": true},
            "EN11204": {"name": "Environmental Law & Policy", "credits": 2, "is_gpa": true},
            "CC11202": {"name": "English I", "credits": 2, "is_gpa": false}
        },
        "1-2": {
            "BL12202": {"name": "Biodiversity Conservation", "credits": 2, "is_gpa": true},
            "BL12203": {"name": "Environmental Biotechnology", "credits": 2, "is_gpa": true},
            "EN12202": {"name": "Environmental Footprints", "credits": 2, "is_gpa": true},
            "EN12203": {"name": "Renewable Energy Systems I", "credits": 2, "is_gpa": true},
            "EN12204": {"name": "Climate Change Adaptation and Mitigation", "credits": 2, "is_gpa": true},
            "EN12205": {"name": "Green Chemistry", "credits": 2, "is_gpa": true},
            "SS12301": {"name": "Fundamentals of Soil Science", "credits": 3, "is_gpa": true},
            "CC12101": {"name": "Basic Technical Writing", "credits": 1, "is_gpa": false},
            "CC12202": {"name": "English II", "credits": 2, "is_gpa": false}
        },
        "2-1": {
            "CS21201": {"name": "Agroecology", "credits": 2, "is_gpa": true},
            "EC21206": {"name": "Environmental Economics", "credits": 2, "is_gpa": true},
            "EN21202": {"name": "Ergonomics", "credits": 2, "is_gpa": true},
            "EN21205": {"name": "Machinery Principles and Power Units", "credits": 2, "is_gpa": true},
            "EN21206": {"name": "Life Cycle Assessment", "credits": 2, "is_gpa": true},
            "EN21207": {"name": "Renewable Energy Systems II", "credits": 2, "is_gpa": true},
            "EN21208": {"name": "Productivity and Quality Management", "credits": 2, "is_gpa": true},
            "EN21209": {"name": "Energy Audit and Energy Asset Management", "credits": 2, "is_gpa": true}
        },
        "2-2": {
            "AS22204": {"name": "Sustainable Livestock Production Systems", "credits": 2, "is_gpa": true},
            "CS22206": {"name": "Landscaping and Green Interior Design", "credits": 2, "is_gpa": true},
            "EN22201": {"name": "GIS and Remote Sensing", "credits": 2, "is_gpa": true},
            "EN22202": {"name": "Precision Agricultural Technology", "credits": 2, "is_gpa": true},
            "EN22205": {"name": "Waste Water & Water Treatment Technologies", "credits": 2, "is_gpa": true},
            "EN22206": {"name": "Sustainable Solid Waste Management", "credits": 2, "is_gpa": true},
            "EN22207": {"name": "Industrial Resource Management and Cleaner Production", "credits": 2, "is_gpa": true},
            "SS22204": {"name": "Soil Biophysicochemical Dynamics and Contaminants", "credits": 2, "is_gpa": true}
        },
        "3-1": {
            "EC31207": {"name": "Business Management and Entrepreneurship", "credits": 2, "is_gpa": true},
            "EC31208": {"name": "Eco-tourism", "credits": 2, "is_gpa": true},
            "EN31201": {"name": "Irrigation and Water Resources Engineering", "credits": 2, "is_gpa": true},
            "EN31206": {"name": "Sustainable Post Harvest Technology", "credits": 2, "is_gpa": true},
            "EN31207": {"name": "Environmental Monitoring and Modelling", "credits": 2, "is_gpa": true},
            "EN31208": {"name": "Green Infrastructure and Smart Cities", "credits": 2, "is_gpa": true},
            "FS31204": {"name": "Functional Foods and Nutraceuticals", "credits": 2, "is_gpa": true}
        },
        "3-2": {
            "CC32201": {"name": "Applied Statistics I", "credits": 2, "is_gpa": true},
            "EC32202": {"name": "Project Management", "credits": 2, "is_gpa": true},
            "EC32208": {"name": "Environmental Impact Assessment", "credits": 2, "is_gpa": true},
            "EN32206": {"name": "Disaster Management and Resilience", "credits": 2, "is_gpa": true},
            "EN32207": {"name": "Product Design and Development Protocols", "credits": 2, "is_gpa": true},
            "EN32208": {"name": "Analytical Techniques and Green Solutions", "credits": 2, "is_gpa": true},
            "EN32209": {"name": "Coastal and Marine Resource Management", "credits": 2, "is_gpa": true}
        },
        "4-1": {
            "CC41202": {"name": "Applied Statistics II", "credits": 2, "is_gpa": true},
            "CC41203": {"name": "Professional Development", "credits": 2, "is_gpa": true},
            "EN41205": {"name": "Research Methodology and Scientific Writing", "credits": 2, "is_gpa": true},
            "EN41206": {"name": "Process Automation and Smart Control", "credits": 2, "is_gpa": true},
            "EN41207": {"name": "Case Studies in Environmental Technology", "credits": 2, "is_gpa": true},
            "EN41208": {"name": "Green Behavior and Sustainable Consumption Simulation", "credits": 2, "is_gpa": true}
        },
        "4-2": {
            "EN42601": {"name": "Research Study", "credits": 6, "is_gpa": true},
            "CC42301": {"name": "Internship", "credits": 3, "is_gpa": true}
        }
    }
};

const semesterNames = {
    "1-1": "Year 1, Semester 1", "1-2": "Year 1, Semester 2",
    "2-1": "Year 2, Semester 1", "2-2": "Year 2, Semester 2",
    "3-1": "Year 3, Semester 1", "3-2": "Year 3, Semester 2",
    "4-1": "Year 4, Semester 1", "4-2": "Year 4, Semester 2",
};


// --- 2. GETTING HTML ELEMENTS ---
const programSelect = document.getElementById('program-select');
const semesterSelect = document.getElementById('semester-select');
const coursesCard = document.getElementById('courses-card');
const compulsoryListDiv = document.getElementById('compulsory-list');
const electiveListDiv = document.getElementById('elective-list');
const addElectiveBtn = document.getElementById('add-elective-btn');
const resetAllBtn = document.getElementById('reset-all-btn');

// Result display elements
const resultArea = document.getElementById('result-area');
const sgpaResultEl = document.getElementById('sgpa-result');
const gpaCreditsEl = document.getElementById('gpa-credits');
const gradeCountsEl = document.getElementById('grade-counts');

// CGPA display elements
const cgpaResultEl = document.getElementById('cgpa-result');
const honoursClassEl = document.getElementById('honours-class');
const cgpaDetailsEl = document.getElementById('cgpa-details');
const cgpaChartCanvas = document.getElementById('cgpaChart');

// Goal Seeker elements
const statusTotalCreditsEl = document.getElementById('status-total-credits');
const statusCompletedCreditsEl = document.getElementById('status-completed-credits');
const statusRemainingCreditsEl = document.getElementById('status-remaining-credits');
const statusCurrentClassEl = document.getElementById('status-current-class');
const projMaxEl = document.getElementById('proj-max').querySelector('strong');
const projFirstEl = document.getElementById('proj-first').querySelector('strong');
const projUpperEl = document.getElementById('proj-upper').querySelector('strong');
const projLowerEl = document.getElementById('proj-lower').querySelector('strong');
const scenarioInputsEl = document.getElementById('scenario-inputs');
const calculateScenarioBtn = document.getElementById('calculate-scenario-btn');
const scenarioResultEl = document.getElementById('scenario-result');


// Data Management elements
const exportDataBtn = document.getElementById('export-data-btn');
const importDataBtn = document.getElementById('import-data-btn');
const importFileInput = document.getElementById('import-file-input');


// --- 3. GLOBAL STATE & DATA STORAGE ---
let currentProgram = "";
let currentSemester = "";
let savedData = { "ARMT": {}, "ABM": {}, "GT": {} };
let cgpaChart = null; // To hold the chart instance


// --- 4. EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', onAppLoad);
programSelect.addEventListener('change', handleProgramSelect);
semesterSelect.addEventListener('change', handleSemesterSelect);
addElectiveBtn.addEventListener('click', addElectiveRow);

// ** LIVE UPDATE LISTENERS **
coursesCard.addEventListener('change', handleLiveUpdate); // For dropdowns/inputs/checkboxes
coursesCard.addEventListener('click', handleCourseCardClick); // For remove buttons

// New Feature Listeners
calculateScenarioBtn.addEventListener('click', calculateCustomScenario);
exportDataBtn.addEventListener('click', exportData);
importDataBtn.addEventListener('click', () => importFileInput.click()); // Trigger hidden file input
importFileInput.addEventListener('change', importData);
resetAllBtn.addEventListener('click', resetProgramData);


// --- 5. CORE FUNCTIONS ---

/**
 * Runs when the app is first loaded.
 */
function onAppLoad() {
    loadAllData();
    populateScenarioPlanner(); // Build the custom planner inputs
    registerServiceWorker();
}

/**
 * Loads all data from localStorage.
 */
function loadAllData() {
    savedData.ARMT = JSON.parse(localStorage.getItem('gpaData-ARMT')) || {};
    savedData.ABM = JSON.parse(localStorage.getItem('gpaData-ABM')) || {};
    savedData.GT = JSON.parse(localStorage.getItem('gpaData-GT')) || {};
    
    // Auto-select last used program
    const lastProgram = localStorage.getItem('lastProgram');
    if (lastProgram && curriculum[lastProgram]) {
        programSelect.value = lastProgram;
        handleProgramSelect();
    }
}

/**
 * Saves the *current program's* data to localStorage.
 */
function saveData() {
    if (!currentProgram) return;
    localStorage.setItem('gpaData-' + currentProgram, JSON.stringify(savedData[currentProgram]));
    localStorage.setItem('lastProgram', currentProgram);
}

/**
 * Handles the selection of a new program (ARMT, ABM, GT).
 */
function handleProgramSelect() {
    currentProgram = programSelect.value;
    
    // Reset and populate semester dropdown
    semesterSelect.innerHTML = '<option value="">-- Select a semester --</option>';
    if (currentProgram) {
        Object.keys(semesterNames).forEach(semKey => {
            semesterSelect.innerHTML += `<option value="${semKey}">${semesterNames[semKey]}</option>`;
        });
        semesterSelect.disabled = false;
    } else {
        semesterSelect.disabled = true;
    }

    // Hide cards
    coursesCard.style.display = 'none';
    resultArea.style.display = 'none';
    
    // Update CGPA display for the selected program
    updateCGPAdisplay();
}

/**
 * Handles the selection of a new semester.
 */
function handleSemesterSelect() {
    currentSemester = semesterSelect.value;
    
    if (!currentSemester) {
        coursesCard.style.display = 'none';
        resultArea.style.display = 'none';
        return;
    }

    // Show the cards
    coursesCard.style.display = 'block';
    resultArea.style.display = 'block';

    // Populate the course lists
    populateCourses();
    
    // Calculate and display SGPA for the loaded data
    handleLiveUpdate(); // This now replaces calculateSGPA()
}

/**
 * Populates the course lists with compulsory and saved elective courses.
 */
function populateCourses() {
    compulsoryListDiv.innerHTML = '';
    electiveListDiv.innerHTML = '';

    if (!currentProgram || !currentSemester) return;

    const compulsoryCourses = curriculum[currentProgram][currentSemester];
    const savedSemesterData = savedData[currentProgram][currentSemester] || {};
    const compulsoryGrades = savedSemesterData.compulsoryGrades || {};
    const electives = savedSemesterData.electives || [];

    // 1. Populate Compulsory Courses
    for (const [code, details] of Object.entries(compulsoryCourses)) {
        const grade = compulsoryGrades[code] ? compulsoryGrades[code].grade : "N/A";
        const isRepeat = compulsoryGrades[code] ? compulsoryGrades[code].isRepeat : false;
        compulsoryListDiv.innerHTML += createCompulsoryRowHTML(code, details, grade, isRepeat);
    }
    // After adding all rows, apply the repeat-rule logic to them
    compulsoryListDiv.querySelectorAll('.repeat-box').forEach(box => {
        toggleGradeOptions(box.dataset.code, box.checked, false); // Don't reset grade on load
    });


    // 2. Populate Saved Elective Courses
    electives.forEach((elective) => {
        electiveListDiv.innerHTML += createElectiveRowHTML(elective.id, elective.code, elective.name, elective.credits, elective.grade, elective.isRepeat);
    });
    // Apply repeat-rule logic to electives
    electiveListDiv.querySelectorAll('.repeat-box').forEach(box => {
        toggleGradeOptions(box.dataset.code, box.checked, false); // Don't reset grade on load
    });
}

/**
 * This is the main calculation engine. It runs on *every* change.
 */
function handleLiveUpdate(event) {
    if (!currentProgram || !currentSemester) return;

    // New logic for Repeat checkbox
    if (event && event.target.classList.contains('repeat-box')) {
        const code = event.target.dataset.code;
        const isRepeat = event.target.checked;
        toggleGradeOptions(code, isRepeat, true); // Reset grade if needed
    }

    let totalQualityPoints = 0.0;
    let totalGpaCredits = 0.0;
    let gradeCounts = {}; // For the new grade counter
    gradesList.forEach(g => gradeCounts[g] = 0);
    gradeCounts["REPEAT"] = 0;
    
    let compulsoryGrades = {};
    let electives = [];

    // 1. Read all Compulsory Courses
    const compulsoryRows = compulsoryListDiv.querySelectorAll('.course-item');
    compulsoryRows.forEach(row => {
        const code = row.dataset.code;
        const details = curriculum[currentProgram][currentSemester][code];
        const gradeSelect = row.querySelector('.grade-select');
        const repeatBox = row.querySelector('.repeat-box');
        const grade = gradeSelect.value;
        const isRepeat = repeatBox.checked;
        
        compulsoryGrades[code] = { grade, isRepeat }; // Save for storage
        
        if(grade !== "N/A") gradeCounts[grade]++;
        if(isRepeat) gradeCounts["REPEAT"]++;

        // *** CRITICAL LOGIC: Only count if it's a GPA course ***
        if (details.is_gpa && grade !== "N/A") {
            totalQualityPoints += gradePoints[grade] * details.credits;
            totalGpaCredits += details.credits;
        }
    });

    // 2. Read all Elective Courses
    const electiveRows = electiveListDiv.querySelectorAll('.elective-item');
    electiveRows.forEach(row => {
        const id = row.dataset.code;
        const code = row.querySelector('.elective-code').value || "ELEC";
        const name = row.querySelector('.elective-name').value || "Elective Course";
        const credits = parseFloat(row.querySelector('.elective-credits').value) || 0;
        const gradeSelect = row.querySelector('.grade-select');
        const repeatBox = row.querySelector('.repeat-box');
        const grade = gradeSelect.value;
        const isRepeat = repeatBox.checked;
        
        // Save for storage
        electives.push({ id, code, name, credits, grade, isRepeat });
        
        if(grade !== "N/A") gradeCounts[grade]++;
        if(isRepeat) gradeCounts["REPEAT"]++;

        // *** CRITICAL LOGIC: All electives are GPA courses ***
        if (grade !== "N/A" && credits > 0) {
            totalQualityPoints += gradePoints[grade] * credits;
            totalGpaCredits += credits;
        }
    });

    // 3. Calculate and Display SGPA
    let sgpa = (totalGpaCredits > 0) ? (totalQualityPoints / totalGpaCredits) : 0.0;
    sgpaResultEl.textContent = sgpa.toFixed(2);
    gpaCreditsEl.textContent = totalGpaCredits;
    displayGradeCounts(gradeCounts); // Call the new function
    resultArea.style.display = 'block';

    // 4. Save *everything* to our global state
    savedData[currentProgram][currentSemester] = {
        sgpa: sgpa,
        credits: totalGpaCredits,
        qualityPoints: totalQualityPoints,
        compulsoryGrades: compulsoryGrades,
        electives: electives
    };

    // 5. Save to browser storage
    saveData();
    
    // 6. Update the main CGPA display
    updateCGPAdisplay();
}

/**
 * Handles clicks inside the courses card (for removing electives)
 */
function handleCourseCardClick(event) {
    if (event.target.classList.contains('remove-btn')) {
        // Find the parent .elective-item and remove it
        event.target.closest('.elective-item').remove();
        // After removing, trigger a recalculation
        handleLiveUpdate();
    }
}


/**
 * Calculates and updates the main CGPA card and Goal Seeker
 */
function updateCGPAdisplay() {
    if (!currentProgram) {
        cgpaResultEl.textContent = "0.00";
        honoursClassEl.textContent = "N/A";
        cgpaDetailsEl.textContent = "Select a program to see your CGPA.";
        if (cgpaChart) cgpaChart.destroy(); // Clear chart
        return;
    }

    let totalQualityPoints = 0.0;
    let totalGpaCredits = 0.0;
    const programData = savedData[currentProgram];
    const totalProgramCredits = curriculum[currentProgram].totalCredits;

    let cgpaHistory = [];
    let semesterKeys = Object.keys(semesterNames);

    // Loop through all saved semesters *in order*
    for (const semKey of semesterKeys) {
        if (programData[semKey] && (programData[semKey].credits > 0 || hasNonGpaGrades(programData[semKey]))) {
            totalQualityPoints += programData[semKey].qualityPoints || 0;
            totalGpaCredits += programData[semKey].credits || 0;
            
            let cgpa = (totalGpaCredits > 0) ? (totalQualityPoints / totalGpaCredits) : 0;
            cgpaHistory.push({ semester: semKey, cgpa: cgpa });
        }
    }
    
    // This check is to see if a semester has only Non-GPA grades saved
    function hasNonGpaGrades(semData) {
        if (!semData || !semData.compulsoryGrades) return false;
        for (const grade of Object.values(semData.compulsoryGrades)) {
            if (grade.grade !== "N/A") return true;
        }
        return false;
    }

    let cgpa = (totalGpaCredits > 0) ? (totalQualityPoints / totalGpaCredits) : 0.0;
    
    // Get honours class (based on Section 5.4.11 from your handbook)
    let honoursClass = "Below Pass";
    if (cgpa >= 3.70) {
        honoursClass = "First Class Honours";
    } else if (cgpa >= 3.30) {
        honoursClass = "Second Class (Upper Division) Honours";
    } else if (cgpa >= 3.00) {
        honoursClass = "Second Class (Lower Division) Honours";
    } else if (cgpa >= 2.00) {
        honoursClass = "Pass";
    } else if (totalGpaCredits === 0 && totalQualityPoints === 0) {
        honoursClass = "N/A";
    }

    // Display CGPA results
    cgpaResultEl.textContent = cgpa.toFixed(2);
    honoursClassEl.textContent = honoursClass;
    cgpaDetailsEl.textContent = `Based on ${totalGpaCredits} total credits and ${totalQualityPoints.toFixed(2)} total quality points.`;

    // Update the chart
    drawChart(cgpaHistory);
    
    // Update the "What-If" Goal Seeker
    updateGoalSeeker(totalGpaCredits, totalQualityPoints, honoursClass);
}

/**
 * Resets all saved data *for the current program*.
 */
function resetProgramData() {
    if (!currentProgram) {
        alert("Please select a program first.");
        return;
    }
    if (confirm(`Are you sure you want to reset all data for ${currentProgram}? This cannot be undone.`)) {
        savedData[currentProgram] = {};
        saveData(); // Overwrite the saved data with an empty object
        updateCGPAdisplay();
        handleSemesterSelect(); // Refresh the semester view
    }
}


// --- 6. ROW CREATION & MANAGEMENT ---

/**
 * Adds a new blank row to the electives list.
 */
function addElectiveRow() {
    // Generate a unique ID for the new row
    const newId = `elective-${Date.now()}`;
    electiveListDiv.innerHTML += createElectiveRowHTML(newId, "", "", "", "N/A", false);
}

/**
 * Generates the HTML for a single *compulsory* course row.
 */
function createCompulsoryRowHTML(code, details, selectedGrade, isRepeat) {
    const grades = ["N/A", "A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "E"];
    
    let gradeOptions = grades.map(g => 
        `<option value="${g}" ${g === selectedGrade ? 'selected' : ''}>${g}</option>`
    ).join('');

    return `
        <div class="course-item ${details.is_gpa ? 'compulsory-gpa' : 'compulsory-nongpa'}" data-code="${code}">
            <div class="course-info">
                <strong>${code}</strong>
                <span>${details.name} (${details.credits} Credits)</span>
            </div>
            <label class="repeat-check" title="As per handbook 5.4.5.vii, check this if you are repeating a course after getting an 'E' grade. This will limit your max grade to 'C'.">
                <input type="checkbox" class="repeat-box" data-code="${code}" ${isRepeat ? 'checked' : ''}> Repeat
            </label>
            <select id="grade-${code}" class="grade-select" data-is-gpa="${details.is_gpa}">
                ${gradeOptions}
            </select>
        </div>
    `;
}

/**
 * Generates the HTML for a single *elective* course row.
 */
function createElectiveRowHTML(id, code, name, credits, selectedGrade, isRepeat) {
    const grades = ["N/A", "A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "E"];
    
    let gradeOptions = grades.map(g => 
        `<option value="${g}" ${g === selectedGrade ? 'selected' : ''}>${g}</option>`
    ).join('');

    return `
        <div class="elective-item" data-code="${id}">
            <input type="text" class="elective-code" placeholder="Course Code" value="${code}">
            <input type="text" class="elective-name" placeholder="Course Name" value="${name}">
            <input type="number" class="elective-credits" placeholder="Credits" value="${credits}">
            <label class="repeat-check" title="As per handbook 5.4.5.vii, check this if you are repeating a course after getting an 'E' grade. This will limit your max grade to 'C'.">
                <input type="checkbox" class="repeat-box" data-code="${id}" ${isRepeat ? 'checked' : ''}> Repeat
            </label>
            <select id="grade-${id}" class="grade-select" data-is-gpa="true">
                ${gradeOptions}
            </select>
            <button class="remove-btn" title="Remove Course">&times;</button>
        </div>
    `;
}

/**
 * ADVANCED RULE: Toggles grade options based on the "Repeat" checkbox.
 * (Based on Section 5.4.5.vii)
 */
function toggleGradeOptions(code, isRepeat, resetGrade) {
    const gradeSelect = document.getElementById(`grade-${code}`);
    if (!gradeSelect) return;
    
    // This function does nothing for a non-GPA course
    if(gradeSelect.dataset.isGpa === "false") return;

    // Loop over all options (A+, A, A-, B+, B, B-)
    // These are grades with GPV > 2.0 (i.e., higher than a 'C')
    for (let i = 1; i <= 6; i++) {
        gradeSelect.options[i].disabled = isRepeat;
    }
    
    // If repeat is checked and a high grade was selected, reset it
    if (isRepeat && resetGrade && gradePoints[gradeSelect.value] > 2.0) {
        gradeSelect.value = "N/A";
    }
}

// --- 7. NEW FEATURE FUNCTIONS ---

/**
 * GOAL SEEKER: Updates all fields in the "What-If" card.
 */
function updateGoalSeeker(currentCredits, currentQPs, currentClass) {
    if (!currentProgram) return;

    const totalProgramCredits = curriculum[currentProgram].totalCredits;
    const remainingCredits = totalProgramCredits - currentCredits;

    // Update "Current Status"
    statusTotalCreditsEl.textContent = totalProgramCredits;
    statusCompletedCreditsEl.textContent = currentCredits;
    statusRemainingCreditsEl.textContent = remainingCredits;
    statusCurrentClassEl.textContent = currentClass;

    // --- Update "Projections" ---
    if (remainingCredits <= 0) {
        projMaxEl.textContent = "N/A (All credits done)";
        projFirstEl.textContent = "N/A";
        projUpperEl.textContent = "N/A";
        projLowerEl.textContent = "N/A";
        return;
    }
    
    // Max Potential
    const maxQPs = currentQPs + (remainingCredits * 4.0);
    const maxCGPA = maxQPs / totalProgramCredits;
    projMaxEl.textContent = `${maxCGPA.toFixed(2)} CGPA`;

    // Target Class
    function getRequiredGpa(targetCGPA) {
        const targetQPs = targetCGPA * totalProgramCredits;
        const neededQPs = targetQPs - currentQPs;
        const requiredGPA = neededQPs / remainingCredits;
        
        if (requiredGPA > 4.0) return "Not Possible";
        if (requiredGPA < 0) return "Achieved";
        return `${requiredGPA.toFixed(2)} GPA`;
    }
    
    projFirstEl.textContent = getRequiredGpa(3.70);
    projUpperEl.textContent = getRequiredGpa(3.30);
    projLowerEl.textContent = getRequiredGpa(3.00);
}

/**
 * GOAL SEEKER: Populates the "Custom Scenario" planner with inputs.
 */
function populateScenarioPlanner() {
    let html = "";
    gradesList.forEach(grade => {
        html += `
            <div class="input-group">
                <label for="scenario-${grade}">${grade}</label>
                <input type="number" id="scenario-${grade}" data-grade="${grade}" placeholder="Credits" min="0">
            </div>
        `;
    });
    scenarioInputsEl.innerHTML = html;
}

/**
 * GOAL SEEKER: Calculates the result of the "Custom Scenario" planner.
 */
function calculateCustomScenario() {
    if (!currentProgram) {
        scenarioResultEl.textContent = "Please select your program first.";
        return;
    }
    
    let scenarioQPs = 0;
    let scenarioCredits = 0;

    // Get current totals
    let currentQPs = 0.0;
    let currentCredits = 0.0;
    const programData = savedData[currentProgram];
    for (const sem of Object.keys(programData)) {
        if (programData[sem]) {
            currentQPs += programData[sem].qualityPoints || 0;
            currentCredits += programData[sem].credits || 0;
        }
    }
    
    // Calculate scenario totals
    gradesList.forEach(grade => {
        const input = document.getElementById(`scenario-${grade}`);
        const credits = parseFloat(input.value) || 0;
        if (credits > 0) {
            scenarioCredits += credits;
            scenarioQPs += gradePoints[grade] * credits;
        }
    });

    if (scenarioCredits === 0) {
        scenarioResultEl.textContent = "Please enter some credits to plan a scenario.";
        return;
    }
    
    // Calculate final
    const finalQPs = currentQPs + scenarioQPs;
    const finalCredits = currentCredits + scenarioCredits;
    const finalCGPA = finalQPs / finalCredits;

    scenarioResultEl.textContent = `Your new CGPA would be ${finalCGPA.toFixed(2)} with a total of ${finalCredits} credits.`;
}

/**
 * SEMESTER RESULTS: Displays the count of each grade.
 */
function displayGradeCounts(counts) {
    let html = "";
    for (const grade of gradesList) {
        if (counts[grade] > 0) {
            let gradeClass = "grade-c"; // Default
            if (grade.startsWith("A")) gradeClass = "grade-a";
            else if (grade.startsWith("B")) gradeClass = "grade-b";
            else if (grade.startsWith("D")) gradeClass = "grade-d";
            else if (grade === "E") gradeClass = "grade-e";
            html += `<span class="grade-badge ${gradeClass}">${grade}: ${counts[grade]}</span>`;
        }
    }
    if (counts["REPEAT"] > 0) {
        html += `<span class="grade-badge grade-repeat">Repeats: ${counts["REPEAT"]}</span>`;
    }
    gradeCountsEl.innerHTML = html;
}


/**
 * CHART: Draws the CGPA progress chart.
 */
function drawChart(cgpaHistory) {
    const labels = cgpaHistory.map(item => item.semester);
    const data = cgpaHistory.map(item => item.cgpa);

    // Destroy the old chart before drawing a new one
    if (cgpaChart) {
        cgpaChart.destroy();
    }
    if (labels.length === 0) return; // Don't draw an empty chart

    cgpaChart = new Chart(cgpaChartCanvas, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Your CGPA Over Time',
                data: data,
                fill: true,
                backgroundColor: 'rgba(0, 122, 61, 0.1)',
                borderColor: 'rgba(0, 122, 61, 1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: 4.0
                }
            }
        }
    });
}

/**
 * DATA EXPORT: Saves the entire 'savedData' object to a JSON file.
 */
function exportData() {
    if (Object.keys(savedData.ARMT).length === 0 && Object.keys(savedData.ABM).length === 0 && Object.keys(savedData.GT).length === 0) {
        alert("No data to export.");
        return;
    }
    const dataStr = JSON.stringify(savedData);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'foa_gpa_backup.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * DATA IMPORT: Reads a JSON file and loads it into the app.
 */
function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            
            // Basic validation
            if (importedData.ARMT && importedData.ABM && importedData.GT) {
                savedData = importedData;
                
                // Save all imported data to localStorage
                saveData(); // This will save based on currentProgram, so we save all
                localStorage.setItem('gpaData-ARMT', JSON.stringify(savedData.ARMT));
                localStorage.setItem('gpaData-ABM', JSON.stringify(savedData.ABM));
                localStorage.setItem('gpaData-GT', JSON.stringify(savedData.GT));

                // Refresh the UI
                alert("Data imported successfully!");
                programSelect.value = "";
                handleProgramSelect();
            } else {
                alert("Invalid file format. The file must be a valid backup from this app.");
            }
        } catch (error) {
            alert("Error reading file. It may be corrupted.");
        }
        // Reset the file input so you can import the same file again
        importFileInput.value = "";
    };
    reader.readAsText(file);
}

/**
 * PWA: Registers the Service Worker for offline functionality.
 */
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful');
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
}