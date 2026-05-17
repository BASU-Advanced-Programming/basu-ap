const documentIcon = "📚";
const videoIcon = "🎥";
const articleIcon = "📄";

const weekData = {
    1: {
        title: "Introduction to OOP",
        description: "Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects containing data and methods. This week covers basic class definitions, object instantiation, and the concept of encapsulation — bundling data with methods that operate on that data.",
        links: [
            { type: "Article", title: "What is Object-Oriented Programming?", url: "#", icon: articleIcon },
            { type: "Video", title: "OOP Basics in C++ (YouTube)", url: "#", icon: videoIcon },
            { type: "Documentation", title: "cppreference: Classes", url: "#", icon: documentIcon }
        ]
    },
    2: {
        title: "Class Templates & Pointers",
        description: "Class templates allow you to create generic classes that work with different data types. Pointers store memory addresses and are fundamental for dynamic memory management, passing arguments by reference, and working with arrays and functions.",
        links: [
            { type: "Article", title: "Templates in C++: A Complete Guide", url: "#", icon: "📄" },
            { type: "Video", title: "Pointers Explained (C++ Tutorial)", url: "#", icon: "🎥" },
            { type: "Documentation", title: "cppreference: Templates", url: "#", icon: "📚" }
        ]
    },
    3: {
        title: "Classes: A deeper look",
        description: "Dive deeper into class design including constructors (default, parameterized, copy), destructors, the 'this' pointer, static members, const member functions, and friend functions/classes. Understanding these concepts is crucial for writing robust C++ code.",
        links: [
            { type: "Article", title: "Deep Dive into C++ Classes", url: "#", icon: "📄" },
            { type: "Video", title: "Constructors and Destructors Explained", url: "#", icon: "🎥" },
            { type: "Article", title: "Understanding the 'this' Pointer", url: "#", icon: "📄" }
        ]
    },
    4: {
        title: "Operator Overloading",
        description: "Operator overloading allows you to define how operators (+, -, *, ==, etc.) work with user-defined types. This enables intuitive syntax for classes like complex numbers, vectors, or matrices, making your code more natural and readable.",
        links: [
            { type: "Article", title: "Operator Overloading Basics", url: "#", icon: "📄" },
            { type: "Video", title: "Overloading Operators in C++", url: "#", icon: "🎥" },
            { type: "Documentation", title: "cppreference: Operator Overloading", url: "#", icon: "📚" }
        ]
    },
    5: {
        title: "Operator Overloading (cont.)",
        description: "Advanced operator overloading techniques including overloading increment/decrement (prefix/postfix), function call operator (), subscript operator [], and input/output operators (>>, <<). Learn best practices and common pitfalls.",
        links: [
            { type: "Article", title: "Advanced Operator Overloading", url: "#", icon: "📄" },
            { type: "Video", title: "Stream Operators >> and <<", url: "#", icon: "🎥" },
            { type: "Article", title: "Overloading [] and () Operators", url: "#", icon: "📄" }
        ]
    },
    6: {
        title: "Inheritance",
        description: "Inheritance allows a class to inherit properties and methods from another class, promoting code reuse and establishing hierarchical relationships. Topics include base/derived classes, access specifiers (public, protected, private), and constructor/destructor chaining.",
        links: [
            { type: "Article", title: "Inheritance in C++ Explained", url: "#", icon: "📄" },
            { type: "Video", title: "Base and Derived Classes", url: "#", icon: "🎥" },
            { type: "Documentation", title: "cppreference: Inheritance", url: "#", icon: "📚" }
        ]
    },
    7: {
        title: "Polymorphism",
        description: "Polymorphism enables objects of different classes to be treated as objects of a common base class. Virtual functions, override specifiers, and dynamic binding allow runtime polymorphic behavior. Learn how to design flexible and extensible systems.",
        links: [
            { type: "Article", title: "Understanding Polymorphism", url: "#", icon: "📄" },
            { type: "Video", title: "Virtual Functions and Dynamic Binding", url: "#", icon: "🎥" },
            { type: "Documentation", title: "cppreference: Virtual Functions", url: "#", icon: "📚" }
        ]
    },
    8: {
        title: "Polymorphism (Advanced)",
        description: "Advanced polymorphism concepts including abstract classes, pure virtual functions, virtual destructors, runtime type information (RTTI), dynamic_cast, and multiple inheritance. Learn design patterns that leverage polymorphism effectively.",
        links: [
            { type: "Article", title: "Abstract Classes and Pure Virtual", url: "#", icon: "📄" },
            { type: "Video", title: "RTTI and dynamic_cast", url: "#", icon: "🎥" },
            { type: "Article", title: "Design Patterns with Polymorphism", url: "#", icon: "📄" }
        ]
    },
    9: {
        title: "Stream I/O",
        description: "C++ stream I/O provides a powerful and flexible way to handle input/output operations. Learn about formatted/unformatted I/O, stream manipulators, error handling, string streams (stringstream), and custom stream classes.",
        links: [
            { type: "Article", title: "C++ Stream I/O Tutorial", url: "#", icon: "📄" },
            { type: "Video", title: "Stream Manipulators and Formatting", url: "#", icon: "🎥" },
            { type: "Documentation", title: "cppreference: I/O Streams", url: "#", icon: "📚" }
        ]
    },
    10: {
        title: "File Processing",
        description: "File I/O operations using ifstream, ofstream, and fstream classes. Learn to read/write text files, binary files, random access, error handling, and practical applications like data persistence and configuration management.",
        links: [
            { type: "Article", title: "File I/O in C++", url: "#", icon: "📄" },
            { type: "Video", title: "Reading and Writing Files", url: "#", icon: "🎥" },
            { type: "Article", title: "Binary File Operations", url: "#", icon: "📄" }
        ]
    },
    11: {
        title: "STL Containers & Iterators",
        description: "The Standard Template Library (STL) provides powerful container classes (vector, list, map, set, etc.) and iterators for traversing them. Learn to choose the right container, use iterators effectively, and understand complexity guarantees.",
        links: [
            { type: "Article", title: "STL Containers Overview", url: "#", icon: "📄" },
            { type: "Video", title: "Vector vs List vs Map", url: "#", icon: "🎥" },
            { type: "Documentation", title: "cppreference: Containers", url: "#", icon: "📚" },
            { type: "Video", title: "Iterators in STL", url: "#", icon: "🎥" }
        ]
    },
    12: {
        title: "Algorithms & Exception Handling",
        description: "STL algorithms (sort, find, transform, etc.) provide efficient, reusable operations on containers. Exception handling with try/catch/throw blocks allows graceful error handling and resource management in exceptional circumstances.",
        links: [
            { type: "Article", title: "STL Algorithms Reference", url: "#", icon: "📄" },
            { type: "Video", title: "Exception Handling in C++", url: "#", icon: "🎥" },
            { type: "Documentation", title: "cppreference: Algorithms", url: "#", icon: "📚" }
        ]
    },
    13: {
        title: "Exception Handling & Templates",
        description: "Deep dive into exception safety levels, RAII (Resource Acquisition Is Initialization), custom exceptions, and advanced template topics like template specialization, variadic templates, and SFINAE (Substitution Failure Is Not An Error).",
        links: [
            { type: "Article", title: "Exception Safety Guarantees", url: "#", icon: "📄" },
            { type: "Video", title: "Template Specialization", url: "#", icon: "🎥" },
            { type: "Article", title: "Variadic Templates in C++", url: "#", icon: "📄" }
        ]
    },
    14: {
        title: "Search, Sort & Strings",
        description: "Implement and analyze searching (linear, binary) and sorting (bubble, merge, quick) algorithms. Work with C++ strings (std::string) including manipulation, searching, conversion, and performance considerations.",
        links: [
            { type: "Article", title: "Searching Algorithms Comparison", url: "#", icon: "📄" },
            { type: "Video", title: "Sorting Algorithms Visualized", url: "#", icon: "🎥" },
            { type: "Documentation", title: "cppreference: std::string", url: "#", icon: "📚" }
        ]
    },
    15: {
        title: "Other Advanced Topics",
        description: "Explore additional C++ advanced features including smart pointers (unique_ptr, shared_ptr, weak_ptr), move semantics, rvalue references, lambda expressions, and functional programming patterns in C++.",
        links: [
            { type: "Article", title: "Smart Pointers Guide", url: "#", icon: "📄" },
            { type: "Video", title: "Move Semantics Explained", url: "#", icon: "🎥" },
            { type: "Article", title: "Lambda Expressions in C++", url: "#", icon: "📄" }
        ]
    },
    16: {
        title: "Multithreading & Concurrency",
        description: "Modern C++ threading support including std::thread, std::async, std::future, mutexes, locks, condition variables, and parallel algorithms. Learn to write thread-safe code, avoid race conditions, and leverage multiple cores effectively.",
        links: [
            { type: "Article", title: "Introduction to C++ Threads", url: "#", icon: "📄" },
            { type: "Video", title: "Mutexes and Locks", url: "#", icon: "🎥" },
            { type: "Documentation", title: "cppreference: Concurrency", url: "#", icon: "📚" },
            { type: "Article", title: "Parallel Algorithms in C++17", url: "#", icon: "📄" }
        ]
    }
};

const modal = document.getElementById('timelineModal');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalWeekTitle = document.getElementById('modalWeekTitle');
const modalTopicTitle = document.getElementById('modalTopicTitle');
const modalDescription = document.getElementById('modalDescription');
const modalLinks = document.getElementById('modalLinks');
const resourceCount = document.getElementById('resourceCount');

const badgeColors = {
    'Article': 'bg-blue-100 text-blue-700',
    'Video': 'bg-red-100 text-red-700',
    'Documentation': 'bg-green-100 text-green-700'
};

function openModal(weekNumber) {
    const data = weekData[weekNumber];
    if (!data) {
        console.error('No data found for week:', weekNumber);
        return;
    }

    modalWeekTitle.textContent = `Week ${weekNumber}`;
    modalTopicTitle.textContent = data.title;
    modalDescription.textContent = data.description;

    modalLinks.innerHTML = '';
    data.links.forEach(link => {
        const badgeColor = badgeColors[link.type] || 'bg-gray-100 text-gray-700';
        const linkDiv = document.createElement('a');
        linkDiv.href = link.url;
        linkDiv.target = '_blank';
        linkDiv.className = 'flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group';
        linkDiv.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="text-xl">${link.icon}</span>
                <span class="text-gray-700 group-hover:text-gray-900">${link.title}</span>
            </div>
            <span class="text-xs px-2 py-1 rounded-full ${badgeColor} font-medium">${link.type}</span>
        `;
        modalLinks.appendChild(linkDiv);
    });

    resourceCount.textContent = `${data.links.length} resource${data.links.length !== 1 ? 's' : ''}`;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeModal() {
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300);
}

document.querySelectorAll('.more-details-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const week = button.getAttribute('data-week');
        if (week) {
            console.log('Opening week:', week);
            openModal(parseInt(week));
        }
    });
});

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});