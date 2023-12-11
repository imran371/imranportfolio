const logotext = "Imran Portal";
const meta = {
    title: "Mohd Imran Mohd Husain Kacchi",
    description: "Im Imran kacchi data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "Mohd Imran Mohd Husain Kacchi",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "Showcase of my BCA journey, highlighting expertise in programming, software development, and problem-solving.",
    your_img_url:"https://images.pexels.com/photos/8206226/pexels-photo-8206226.jpeg?cs=srgb&dl=pexels-mehrax-8206226.jpg&fm=jpg",
};
const dataabout = {
    title: " about my self",
    aboutme: " Hello, I'm Mohd Imran Mohd Husain Kacchi, a passionate and dedicated individual on a journey through the world of technology. Currently pursuing my final year in BCA at SGGK Khadse College, Muktainagar, I thrive on challenges that push my problem-solving skills to new heights. My Approach: I approach each project with a blend of creativity and technical expertise. From coding elegant solutions to collaborating on innovative projects, I am committed to delivering excellence in every endeavor. Get in Touch:Explore my portfolio to see the exciting projects that define my journey. If you're looking for a dynamic and dedicated individual to contribute to your team, I'd love to connect!",
};
const worktimeline = [{
        jobtitle: "FullStack Devloper Intern",
        where: " The Inovative Solution flat no. 1, Urvashi Apartment, Kusumagraj Smarak Path, Bhavik Nagar, Shreerang Nagar, Nashik, Maharashtra 422005",
        date: "2023",
    },
    {
        jobtitle: "TCS iON Career Edge Program Certificate",
        where: "TCS",
        date: "2023",
    },
    {
        jobtitle: "AI Aware & Appreciate",
        where: "INTEL",
        date: "2022",
    },
];

const skills = [{
        name: "HTML, CSS , JAVASCRIPT",
        value: 90,
    },
    {
        name: "C ,C++,C#,JAVA,ASP.NET,",
        value: 50,
    },
    {
        name: "Os.Windows & Linux",
        value: 80,
    },
    {
        name: "FullStack Devloper:FrontEnd,Html,Css,JavaScript Backend,PHP Database,Mysql.",
        value: 70,
    },
    {
        name: "MERNStack Devloper: Frontend ,Reactjs,Backend,Nodejs Database No sql Mangodb",
        value: 50,
    },
];

const services = [{
        title: "FullStack Devloper",
        description: "Passionate Full Stack Developer with a flair for crafting seamless and responsive web applications, proficient in both front-end and back-end technologies..",
    },
    {
        title: "Mobile Apps",
        description: "Elevate your digital presence with our Mobile Apps Services – where innovation meets functionality. We specialize in crafting cutting-edge mobile applications tailored to your unique needs, ensuring a seamless user experience and technological excellence ",
    },
    {
        title: "MernStack",
        description: "Empower your web development journey with our MEAN Stack services. Leveraging MongoDB, Express.js, Angular, and Node.js, we deliver comprehensive solutions that seamlessly integrate databases, server-side scripting, and client-side frameworks. Transform your ideas into dynamic and scalable web applications with our MEAN Stack expertise.",
    },
];

const dataportfolio = [{
        img: "data:image/jpeg;base64,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",
        description: "Revolutionize the real estate market with our House Price Prediction Project, utilizing advanced algorithms and data analysis to forecast property values accurately..",
        //link: "#",
    },
  {
        img: "https://i.ytimg.com/vi/HQCLzqhiT2w/maxresdefault.jpg",
        description: "Experience efficiency at your fingertips with our Calculator Project – a user-friendly and precise tool designed for seamless mathematical operations, simplifying calculations and enhancing convenience in daily task.",
        //link: "#",
   },
  {
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/a07f38177809157.64dcfbbd6ccee.jpg",
        description: "Connect effortlessly with our Contact Us Form, your direct gateway to reach our team. Whether you have questions, feedback, or collaboration inquiries, this user-friendly form ensures a swift and personalized response, making communication a breeze",
        //link: "#",
    },
  {
        img: "https://raw.githubusercontent.com/hamidrezasahraei/MusicAppComposeUI/master/MusicUI.webp",
        description: "Elevate your auditory experience with our Music Player – a sleek and immersive interface that seamlessly blends style and functionality..",
        //link: "#",
    },
    {
        img: "https://dashthis.com/media/4150/data-visualization-dashboard.png",
        description: "Unleash insights at a glance with our Data Visualization Dashboard – a dynamic and interactive interface transforming complex data into clear, actionable visualizations for informed decision-making.",
        //link: "#",
    },
    {
        img: "https://i.ytimg.com/vi/ZwFA3YMfkoc/maxresdefault.jpg",
        description: "Transform communication into an engaging experience with our Chat App – where seamless messaging meets user-friendly design for effortless and enjoyable conversations",
       // link: "#",
    },

    {
        img: "data:image/png;base64,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",
        description: "Experience timeless fun with our Tic Tac Toe Game – a classic and engaging two-player challenge for strategic thinkers of all ages..",
        //link: "#",
    },
    {
        img: "https://github.com/nazaninsbr/React-TodoList/raw/master/result.png",
        description: "https://github.com/nazaninsbr/React-TodoList/raw/master/result.png.",
        //link: "#",
    },
    {
        img: "https://raw.githubusercontent.com/alexkowsik/react-weather-app/master/src/images/screenshot.png",
        description: "Stay one step ahead of the forecast with our Weather App – delivering real-time updates and personalized weather insights for your daily adventures",
        //link: "#",
    },
    {
        img: "https://cdn.hackr.io/uploads/posts/attachments/1678885433dD37pNAolE.webp",
        description: "Precision at your fingertips: our Stopwatch app, a sleek timekeeping companion for accurate measurements and efficient task management",
       // link: "#",
    },
    {
        img: "https://cdn.hackr.io/uploads/posts/attachments/1678885550hyN6Yiwz75.webp",
        description: "TElevate your culinary journey with our Recipe App – a tastefully curated experience bringing delicious recipes and cooking inspiration to your fingertips",
       // link: "#",
    },
    {
        img: "https://cdn.hackr.io/uploads/posts/attachments/16788861465y5O1I98jD.webp",
        description: "Seamless connections, face-to-face: our Video Call App delivers crystal-clear communication for bringing people together, no matter the distance",
       // link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "Imrankacchi89@gmail.com",
    YOUR_FONE: "8806327084",
    description: "Connect effortlessly with our Contact Us platform – your direct line to seamless communication, support, and collaboration ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_3llfph5",
    YOUR_TEMPLATE_ID: "template_2g3amhq",
    YOUR_USER_ID: "axuKQL-wG2JOmk0ql",
}

const socialprofils = {
    github: "https://github.com/imran371",
    //indeed: "https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-app-tracker",
    //linkedin: "www.linkedin.com/in/imran-kacchi-a7023a231",
    //Email: "Imrankacchi89@gmail.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};