import { CROPRECOMMENDTIONPHOTOURL, FINSENTIMENTALPHOTOURL, GEOENCRYPTIONPHOTOURL, MEDICALINSURANCEPHOTOURL, NEBEATSPHOTOURL, PRODUCTDISCOVERYPHOTOURL, VEDIOENCRYPTIONPHOTOURL, VERBASYNCPHOTOURL } from "./ProfileUtils";

 

export const projectsData = [
  {
    id: 6,
    title: "VerbaSync",
    category: "Web-based Application",
    img: {VERBASYNCPHOTOURL},
    description: "VerbaSync is a web-based transcription and translation application built with React.js, Tailwind CSS, and Huggingface.js. It leverages web workers to run machine learning models directly in the browser, enabling fast and efficient transcription and translation without needing a server-side backend."
  },
  {
    id: 7,
    title: "Medical Insurance Cost Prediction System",
    category: "Machine Learning Model",
    img: {MEDICALINSURANCEPHOTOURL},
    description: "A machine learning model designed to predict the cost of medical insurance based on factors such as age, gender, BMI, smoking status, and region. This system utilizes regression techniques to accurately forecast insurance premiums."
  },
  {
    id: 8,
    title: "Crop Recommendation System",
    category: "Machine Learning Model",
    img: {CROPRECOMMENDTIONPHOTOURL},
    description: "A machine learning model developed to recommend the most suitable crops to plant based on various parameters like soil type, weather conditions, and historical yield data. It uses classification algorithms to optimize crop yield and support agricultural decision-making."
  },
  {
    id: 9,
    title: "NBeats and RevIN Algorithm for Time Series Forecasting",
    category: "Time Series Forecasting",
    img: {NEBEATSPHOTOURL},
    description: "An implementation of the NBeats and RevIN algorithms for accurate time series forecasting. These advanced machine learning models are designed to handle a wide range of forecasting tasks, including trends, seasonality, and irregular data patterns."
  },
  {
    id: 10,
    title: "Product-Discovery-App",
    category: "Web Application",
    img: {PRODUCTDISCOVERYPHOTOURL},
    description: "A Python-based product discovery app that utilizes web scraping to collect data from e-commerce websites. The app is supported by a database and provides analytics on pricing, product trends, and customer reviews to help users make informed purchasing decisions."
  },
  {
    id: 11,
    title: "Financial Sentiment Analysis using NLP",
    category: "Natural Language Processing",
    img: {FINSENTIMENTALPHOTOURL},
    description: "A Natural Language Processing (NLP) model designed to analyze financial news and market sentiment. It categorizes financial statements as positive, negative, or neutral, with a model accuracy of 0.6383."
  },
  {
    id: 12,
    title: "Geo-spatial Image Encryption with Cryptography",
    category: "Cryptography",
    img: {GEOENCRYPTIONPHOTOURL},
    description: "A cryptographic system that encrypts geo-spatial images using advanced cryptographic algorithms and image segmentation techniques. The system ensures secure transmission and access to sensitive geographical data."
  },
  {
    id: 13,
    title: "Video Encryption using RGB Vectors",
    category: "Cryptography",
    img: {VEDIOENCRYPTIONPHOTOURL},
    description: "A video encryption system that employs advanced mathematical algorithms based on the combination of RGB vectors to ensure secure transmission and storage of video data. The model focuses on preserving video quality while ensuring high-level encryption."
  }
  
];

export const aboutMeData = {
  id: 1,
  bio: [
    // "Prachalit Parate is a dynamic software developer with a solid foundation in mathematics and computer science,",
    // "recently completing his Master’s in Industrial Mathematics and Computer Applications from Fergusson College, Pune.",
    // "Prachalit has hands-on experience in a wide array of technologies, including React, Java, Spring Boot, PLSQL, and Tailwind CSS.",
    // " He has worked on several innovative projects, notably developing Verbasync, a site for audio transcription and translation,",
    // " as well as creating machine learning models for Medical Insurance Cost Prediction and a Crop Recommendation System.",
    // "Professionally, he has held internships at KernelPI, where he focused on web scraping and analytics, and IE Capital,",
    // " where he developed an algo-trading script with a 73.25% accuracy for stop-loss and entry points. Prachalit continues ",
    // "to enhance his skills through coursework in GoLang, Spring Boot, and Spring Cloud, in addition to certifications in Data ",
    // "Science, Machine Learning, and Data Visualization.",
    // "In his free time, Prachalit enjoys reading manga and exploring the latest trends in technology, applying his ",
    // "knowledge to create secure and optimized applications.",
    // "Prachalit Parate is a proficient Associate IT Developer, currently contributing to the Order Management and Licensing team.He is responsible",
    // " for managing both backend and frontend development for various applications, ensuring seamless and defect-free code deployment.",
    // "Prachalit holds a Master’s in Industrial Mathematics and Computer Applications from Fergusson College, and a Bachelor’s in Mathematics.",
    // "His technical expertise spans a diverse range of technologies, including React, Java, Spring Boot, PLSQL, and Tailwind CSS. ",
    // "He has worked on innovative projects such as *Verbasync*, a platform for audio transcription and translation, and machine learning models",
    // "like the Medical Insurance Cost Prediction system and a Crop Recommendation System. Prachalit has also delved into security-focused projects, ",
    // "including *Geo-spatial Image Encryption* using cryptography and *Video Encryption* through advanced mathematical algorithms.",
    // "Professionally, Prachalit has interned at KernelPI, where he worked on web scraping and analytics, and at IE Capital,",
    // "where he developed a successful algo-trading script. His continuous learning includes courses in GoLang, Spring Boot,",
    // " and Spring Cloud, as well as certifications in Data Science, Machine Learning, and Data Visualization.",
    // "In his free time, Prachalit enjoys reading manga and keeping up with the latest trends in technology,",
    // "always eager to apply his knowledge to create optimized and secure solutions.",
    // `Prachalit Parate is a proficient Associate IT Developer, currently contributing to the Order Management and Licensing team.He is responsible for managing both backend and frontend development for various applications, ensuring seamless and defect-free code deployment.`,
	
	// `Prachalit holds a Master’s in Industrial Mathematics and Computer Applications from Fergusson College, and a Bachelor’s in Mathematics.His technical expertise spans a diverse range of technologies, including React, Java, Spring Boot, PLSQL, and Tailwind CSS. `,
 	
	// `He has worked on innovative projects such as Verbasync, a platform for audio transcription and translation, and machine learning modelslike the Medical Insurance Cost Prediction system and a Crop Recommendation System. Prachalit has also delved into security-focused projects, including Geo-spatial Image Encryption using cryptography and Video Encryption through advanced mathematical algorithms.`,
 	
	// `Professionally, Prachalit has interned at KernelPI, where he worked on web scraping and analytics, and at IE Capital, where he developed a successful algo-trading script. His continuous learning includes courses in GoLang, Spring Boot, and Spring Cloud, as well as certifications in Data Science, Machine Learning, and Data Visualization.`,
	
	// `In his free time, Prachalit enjoys reading manga and keeping up with the latest trends in technology,always eager to apply his knowledge to create optimized and secure solutions.`,

	// {
	// 	text: "**Prachalit Parate** is a proficient **Associate IT Developer**, currently contributing to the **Order Management and Licensing team**. He is responsible for managing both backend and frontend development for various applications, ensuring seamless and defect-free code deployment."
	//   },
	//   {
	// 	text: "Prachalit holds a **Master’s in Industrial Mathematics and Computer Applications** from Fergusson College, and a **Bachelor’s in Mathematics**. His technical expertise spans a diverse range of technologies, including **React**, **Java**, **Spring Boot**, **PLSQL**, and **Tailwind CSS**."
	//   },
	//   {
	// 	text: "He has worked on innovative projects such as **Verbasync**, a platform for audio transcription and translation, and machine learning models like the **Medical Insurance Cost Prediction system** and a **Crop Recommendation System**. Prachalit has also delved into security-focused projects, including **Geo-spatial Image Encryption** using cryptography and **Video Encryption** through advanced mathematical algorithms."
	//   },
	//   {
	// 	text: "Professionally, Prachalit has interned at **KernelPI**, where he worked on web scraping and analytics, and at **IE Capital**, where he developed a successful algo-trading script. His continuous learning includes courses in **GoLang**, **Spring Boot**, and **Spring Cloud**, as well as certifications in **Data Science**, **Machine Learning**, and **Data Visualization**."
	//   },
	//   {
	// 	text: "In his free time, Prachalit enjoys reading **manga** and keeping up with the latest trends in **technology**, always eager to apply his knowledge to create optimized and secure solutions."
	//   }

	{
		text: "<strong >Prachalit Parate</strong> is a proficient <strong>Associate IT Developer</strong>, currently contributing to the <strong>Order Management and Licensing team</strong>. He is responsible for managing both backend and frontend development for various applications, ensuring seamless and defect-free code deployment."
	  },
	  {
		text: "Prachalit holds a <strong>Master’s in Industrial Mathematics and Computer Applications</strong> from Fergusson College, and a <strong>Bachelor’s in Mathematics</strong>. His technical expertise spans a diverse range of technologies, including <strong>React</strong>, <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>PLSQL</strong>, and <strong>Tailwind CSS</strong>."
	  },
	  {
		text: "He has worked on innovative projects such as <strong>Verbasync</strong>, a platform for audio transcription and translation, and machine learning models like the <strong>Medical Insurance Cost Prediction system</strong> and a <strong>Crop Recommendation System</strong>. Prachalit has also delved into security-focused projects, including <strong>Geo-spatial Image Encryption</strong> using cryptography and <strong>Video Encryption</strong> through advanced mathematical algorithms."
	  },
	  {
		text: "Professionally, Prachalit has interned at <strong>KernelPI</strong>, where he worked on web scraping and analytics, and at <strong>IE Capital</strong>, where he developed a successful algo-trading script. His continuous learning includes courses in <strong>GoLang</strong>, <strong>Spring Boot</strong>, and <strong>Spring Cloud</strong>, as well as certifications in <strong>Data Science</strong>, <strong>Machine Learning</strong>, and <strong>Data Visualization</strong>."
	  },
	  {
		text: "In his free time, Prachalit enjoys reading <strong>manga</strong> and keeping up with the latest trends in <strong>technology</strong>, always eager to apply his knowledge to create optimized and secure solutions."
	  }
  ],
  title: "Associate IT Developer | Veritas Technologies LLC",
};

// Here’s the updated bio with all the changes:

// ---

// **Prachalit Parate**
// *Associate IT Developer | Industrial Mathematics & Computer Applications Graduate*

// Does this look good now?
