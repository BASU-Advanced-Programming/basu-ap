const documentIcon = "📚";
const videoIcon = "🎥";
const articleIcon = "📄";

const weekData = {
    1: {
        title: "Introduction to OOP",
        description: "Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects containing data and methods. This week covers basic class definitions, object instantiation, and the concept of encapsulation — bundling data with methods that operate on that data.",
        links: [
            { type: "Video", title: "OOP Perspective", url: "https://www.aparat.com/v/g576239?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Separate Implementation From Definition", url: "https://www.aparat.com/v/Z7x8g?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Objects & Constructors", url: "https://www.aparat.com/v/i31sav7?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Operators & Keywords", url: "https://www.aparat.com/v/a5808c9?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Logical Operators", url: "https://www.aparat.com/v/D4xLe?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Random Numbers & Enums", url: "https://www.aparat.com/v/u8628x6?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Storage Classes", url: "https://www.aparat.com/v/c08m5vc?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Scopes & Call by Reference and Value", url: "https://www.aparat.com/v/w254n49?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Default Arguments in Functions", url: "https://www.aparat.com/v/fdF5c?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Function Templates", url: "https://www.aparat.com/v/g787c8x?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Recursion", url: "https://www.aparat.com/v/r992hq6?playlist=354696", icon: videoIcon },
        ]
    },
    2: {
        title: "Class Templates & Pointers",
        description: "Class templates allow you to create generic classes that work with different data types. Pointers store memory addresses and are fundamental for dynamic memory management, passing arguments by reference, and working with arrays and functions.",
        links: [
            { type: "Video", title: "Pointers", url: "https://www.aparat.com/v/b23kr9h?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Array Class", url: "https://www.aparat.com/v/Xvwi6?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Vector Class", url: "https://www.aparat.com/v/l04425p?playlist=354696", icon: videoIcon },
        ]
    },
    3: {
        title: "Classes: A deeper look",
        description: "Dive deeper into class design including constructors (default, parameterized, copy), destructors, the 'this' pointer, static members, const member functions, and friend functions/classes. Understanding these concepts is crucial for writing robust C++ code.",
        links: [
            { type: "Video", title: "Initialization", url: "https://www.aparat.com/v/b23kr9h?playlist=354696", icon: videoIcon },
            { type: "Video", title: "const Member Functions", url: "https://www.aparat.com/v/9xbDW?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Introduction to Exceptions", url: "https://www.aparat.com/v/K7Jx0?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Introduction to Exceptions (Part 2)", url: "https://www.aparat.com/v/w83w4co?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Function Overloading", url: "https://www.aparat.com/v/GTRNg?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Functions & Exceptions (More Detailed)", url: "https://www.aparat.com/v/g70s9e5?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Functions & Constructor Overloading", url: "https://www.aparat.com/v/b31fftr?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Default Argument for Constructors", url: "https://www.aparat.com/v/x5460el?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Destructors", url: "https://www.aparat.com/v/k8727nz?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Setter & Getter Functions", url: "https://www.aparat.com/v/v21sv97?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Default Memberwise Assignment & const Objects", url: "https://www.aparat.com/v/v82atb3?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Constructors & Destructors", url: "https://www.aparat.com/v/x052667?playlist=354696", icon: videoIcon },
            { type: "Video", title: "friend Functions & Classes", url: "https://www.aparat.com/v/r80iwv0?playlist=354696", icon: videoIcon },
            { type: "Video", title: "static Class Members", url: "https://www.aparat.com/v/a97jdh9?playlist=354696", icon: videoIcon },
        ]
    },
    4: {
        title: "Operator Overloading",
        description: "Operator overloading allows you to define how operators (+, -, *, ==, etc.) work with user-defined types. This enables intuitive syntax for classes like complex numbers, vectors, or matrices, making your code more natural and readable.",
        links: [
            { type: "Video", title: "Operator Overloading", url: "https://www.aparat.com/v/UsXxr?playlist=354696", icon:videoIcon },
            { type: "Video", title: "Operator Overloading (Part 2)", url: "https://www.aparat.com/v/z22toay?playlist=354696", icon:videoIcon },
            { type: "Video", title: "Binary Operators", url: "https://www.aparat.com/v/S2qMN?playlist=354696", icon:videoIcon },
            { type: "Video", title: "Operator Overloading (Part 3)", url: "https://www.aparat.com/v/k54g6z7?playlist=354696", icon:videoIcon },
            { type: "Video", title: "Increament & Decreament Operator", url: "https://www.aparat.com/v/P54Rd?playlist=354696", icon:videoIcon },
            { type: "Video", title: "Dynamic Memory Management", url: "https://www.aparat.com/v/h82hh64?playlist=354696", icon:videoIcon },
        ]
    },
    5: {
        title: "Operator Overloading (cont.)",
        description: "Operator overloading allows you to define how operators (+, -, *, ==, etc.) work with user-defined types. This enables intuitive syntax for classes like complex numbers, vectors, or matrices, making your code more natural and readable.",
        links: [
            { type: "Video", title: "Dynamic Memory Management (Part 2)", url: "https://www.aparat.com/v/c57997w?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Copy Constructor", url: "https://www.aparat.com/v/u990n8d?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Conversion Between Types", url: "https://www.aparat.com/v/x009n44?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Conversion Between Types (Part 2)", url: "https://www.aparat.com/v/n16h060?playlist=354696", icon: videoIcon },
        ]
    },
    6: {
        title: "Inheritance",
        description: "Inheritance allows a class to inherit properties and methods from another class, promoting code reuse and establishing hierarchical relationships. Topics include base/derived classes, access specifiers (public, protected, private), and constructor/destructor chaining.",
        links: [
            { type: "Video", title: "Inheritance", url: "https://www.aparat.com/v/CI9t7?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Inheritance (Part 2)", url: "https://www.aparat.com/v/h55q61c?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Inheritance (Part 3)", url: "https://www.aparat.com/v/b52dx73?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Types of Inheritance", url: "https://www.aparat.com/v/a25ta4l?playlist=354696", icon: videoIcon },
        ]
    },
    7: {
        title: "Polymorphism",
        description: "Polymorphism enables objects of different classes to be treated as objects of a common base class. Virtual functions, override specifiers, and dynamic binding allow runtime polymorphic behavior. Learn how to design flexible and extensible systems.",
        links: [
            { type: "Video", title: "Polymorphism", url: "https://www.aparat.com/v/v5493y3?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Polymorphism (Part 2)", url: "https://www.aparat.com/v/J1YPx?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Polymorphism (Part 3)", url: "https://www.aparat.com/v/u623p3v?playlist=354696", icon: videoIcon },
        ]
    },
    8: {
        title: "Polymorphism (cont.)",
        description: "Polymorphism enables objects of different classes to be treated as objects of a common base class. Virtual functions, override specifiers, and dynamic binding allow runtime polymorphic behavior. Learn how to design flexible and extensible systems.",
        links: [
            { type: "Video", title: "Polymorphism (Part 4)", url: "https://www.aparat.com/v/c631j2s?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Polymorphism (Part 5)", url: "https://www.aparat.com/v/SL64u?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Polymorphism (Conclusion)", url: "https://www.aparat.com/v/h674582?playlist=354696", icon: videoIcon },
        ]
    },
    9: {
        title: "Stream I/O",
        description: "C++ stream I/O provides a powerful and flexible way to handle input/output operations. Learn about formatted/unformatted I/O, stream manipulators, and custom stream classes.",
        links: [
            { type: "Video", title: "Stream I/O", url: "https://www.aparat.com/v/h9071s9?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Stream Manipulators", url: "https://www.aparat.com/v/ZV7F5?playlist=354696", icon: videoIcon },
        ]
    },
    10: {
        title: "File Processing",
        description: "File I/O operations using ifstream, ofstream, and fstream classes. Learn to read/write text files, binary files, random access, error handling, and practical applications like data persistence and configuration management.",
        links: [
            { type: "Video", title: "File Processing", url: "https://www.aparat.com/v/r53pb5g?playlist=354696", icon: videoIcon},
            { type: "Video", title: "File Processing (Part 2)", url: "https://www.aparat.com/v/b930del?playlist=354696", icon: videoIcon},
            { type: "Video", title: "Binary Files", url: "https://www.aparat.com/v/SP0q3?playlist=354696", icon: videoIcon},
            { type: "Video", title: "Binary Files (Part 2)", url: "https://www.aparat.com/v/u03f135?playlist=354696", icon: videoIcon},
        ]
    },
    11: {
        title: "STL Containers & Iterators",
        description: "The Standard Template Library (STL) provides powerful container classes (list, map, set, etc.) and iterators for traversing them. Learn to choose the right container, use iterators effectively, and understand complexity guarantees.",
        links: [
            { type: "Video", title: "Standard Template Library", url: "https://www.aparat.com/v/d672i29?playlist=354696", icon: videoIcon },
            { type: "Video", title: "iterators", url: "https://www.aparat.com/v/o915501?playlist=354696", icon: videoIcon },
            { type: "Video", title: "List & Queue", url: "https://www.aparat.com/v/b04933r?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Queue & Stack & Map & Set", url: "https://www.aparat.com/v/c5034w5?playlist=354696", icon: videoIcon },
        ]
    },
    12: {
        title: "Algorithms",
        description: "STL algorithms (sort, find, transform, etc.) provide efficient, reusable operations on containers.",
        links: [
            { type: "Video", title: "Introduction to Algorithm Library", url: "https://www.aparat.com/v/W98eL?playlist=354696", icon: videoIcon },
            { type: "Video", title: "fill, generate, ...", url: "https://www.aparat.com/v/q151250?playlist=354696", icon: videoIcon },
            { type: "Video", title: "remove, replace, ...", url: "https://www.aparat.com/v/a073927?playlist=354696", icon: videoIcon },
            { type: "Video", title: "find, sort, minmax, ...", url: "https://www.aparat.com/v/e2368ds?playlist=354696", icon: videoIcon },
            { type: "Video", title: "copy, merge, swap, ...", url: "https://www.aparat.com/v/x9766m6?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Heap Alogrithms", url: "https://www.aparat.com/v/p545uu3?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Function Object", url: "https://www.aparat.com/v/c38q882?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Lambda Expressions", url: "https://www.aparat.com/v/d96ch?playlist=354696", icon: videoIcon },
        ]
    },
    13: {
        title: "Exception Handling & Templates",
        description: "Exception handling with try/catch/throw blocks allows graceful error handling and resource management in exceptional circumstances. Deep dive into exception safety levels, custom exceptions, and advanced template.",
        links: [
            { type: "Video", title: "Exception Handling", url: "https://www.aparat.com/v/WJV1x?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Exception Handling (Part 2)", url: "https://www.aparat.com/v/d867765?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Class Templates", url: "https://www.aparat.com/v/r77qlss?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Class Templates (More Details)", url: "https://www.aparat.com/v/b6467zp?playlist=354696", icon: videoIcon },
            { type: "Video", title: "Class Templates (More Details) Part 3", url: "https://www.aparat.com/v/d23nhm3?playlist=354696", icon: videoIcon },
        ]
    },
    14: {
        title: "Search, Sort & Strings",
        description: "Implement and analyze searching (linear, binary) and sorting (bubble, merge, quick) algorithms. Work with C++ strings (std::string) including manipulation, searching, conversion, and performance considerations.",
        links: [
            { type: "Video", title: "string & string streams", url: "https://www.aparat.com/v/i48l9d0?playlist=354696", icon:videoIcon },
        ]
    },
    15: {
        title: "Other Advanced Topics",
        description: "Explore additional C++ advanced features including const_cast, namespaces, multiple inheritance and ...",
        links: []
    },
    16: {
        title: "Multithreading & Concurrency",
        description: "Modern C++ threading support including std::thread, std::async, std::future, mutexes, locks, condition variables, and parallel algorithms. Learn to write thread-safe code, avoid race conditions, and leverage multiple cores effectively.",
        links: []
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